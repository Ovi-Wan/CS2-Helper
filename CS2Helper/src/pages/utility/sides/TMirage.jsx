import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar";
import { highlightText } from "../../../utils/highlightText.jsx";
import mirageTLineups from "../../../data/mirage-t-lineups";

import tImg from "../../../assets/agents/t.png";
import smokeImg from "../../../assets/nades/smoke.png"; 
import mollyImg from "../../../assets/nades/molly.png"; 
import flashImg from "../../../assets/nades/flash.png"; 
import heGrenadeImg from "../../../assets/nades/HeGrenade.png";

import "./Utility.css";
import leftClickImg from "../../../assets/emoji/left-click.png";

export default function TMirage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const counts = useMemo(() => {
    return {
      all: mirageTLineups.length,
      smoke: mirageTLineups.filter(item => item.type === "smoke").length,
      molly: mirageTLineups.filter(item => item.type === "molly").length,
      flash: mirageTLineups.filter(item => item.type === "flash").length,
      heGrenade: mirageTLineups.filter(item => item.type === "heGrenade").length,
    };
  }, []);

  const filterOptions = [
    { id: "all", label: "All", count: counts.all, icon: tImg },
    { id: "smoke", label: "Smokes", count: counts.smoke, icon: smokeImg },
    { id: "molly", label: "Molotovs", count: counts.molly, icon: mollyImg },
    { id: "flash", label: "Flashbangs", count: counts.flash, icon: flashImg },
    { id: "heGrenade", label: "HE Grenades", count: counts.heGrenade, icon: heGrenadeImg },
  ];

  const filtered = useMemo(() => {
    return mirageTLineups.filter((item) => {
      const safeName = item.name || "";

      const matchesText =
        safeName.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "all" ? true : item.type === typeFilter;

      return matchesText && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <div>
      <div className="title-search-row">
        <h1 className="page-title">Mirage – T Utility</h1>
        
        <div className="search-inline">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="layout-container">
        
        <div className="vertical-filter-list">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              className={`filter-list-item ${typeFilter === option.id ? "active" : ""}`}
              onClick={() => setTypeFilter(option.id)}
            >
            
              <img src={option.icon} alt={option.label} className="filter-icon" />
              
              <span className="filter-label">{option.label}</span>
              <span className="filter-count">{option.count}</span>
            </button>
          ))}
        </div>

        <div className="lineups-content">
          {filtered.length === 0 && (
            <p className="page-subtitle">No lineups found for your search.</p>
          )}

          {filtered.map((item) => (
            <div key={item.id} className="lineup-card">
              
              <div className="lineup-card-header">
                <h1 className="lineup-card-title">
                  {highlightText(item.name, search)}
                </h1>
                <div className="tag-row">
                  <span className={`tag tag-${item.type}`}>{item.type}</span>
                  <span className="tag tag-site">{item.site} </span>
                </div>
              </div>

              <div className="lineup-card-body">
                 
                <div className="lineup-video-wrapper">
                  <iframe
                    className="lineup-video-player"
                    src={item.videoUrl}
                    title={`Tutorial video pentru ${item.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="lineup-description-wrapper">

                  {item.action && (
                    <div className="action-row">
                      <img src={leftClickImg} alt="Left Click" className="action-icon" />
                      <span className="action-text">{item.action}</span>
                    </div>
                  )}

                  <p className="lineup-description-text">
                    {item.description 
                      ? highlightText(item.description, search) 
                      : "No description for this lineup."}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}