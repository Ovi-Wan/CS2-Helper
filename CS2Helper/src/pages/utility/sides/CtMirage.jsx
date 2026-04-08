import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar";
import { highlightText } from "../../../utils/highlightText.jsx";
import mirageCTLineups from "../../../data/mirage-ct-lineups";

import tImg from "../../../assets/agents/t.png";
import smokeImg from "../../../assets/nades/smoke.png"; 
import mollyImg from "../../../assets/nades/molly.png"; 
import flashImg from "../../../assets/nades/flash.png"; 
import heGrenadeImg from "../../../assets/nades/HeGrenade.png";

import "./Utility.css"; 

export default function CTMirage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const counts = useMemo(() => {
    return {
      all: mirageCTLineups.length,
      smoke: mirageCTLineups.filter(item => item.type === "smoke").length,
      molly: mirageCTLineups.filter(item => item.type === "molly").length,
      flash: mirageCTLineups.filter(item => item.type === "flash").length,
      heGrenade: mirageCTLineups.filter(item => item.type === "heGrenade").length,
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
    return mirageCTLineups.filter((item) => {
      const matchesText =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "all" ? true : item.type === typeFilter;

      return matchesText && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <div>
      <div className="title-search-row">
        <h1 className="page-title">Mirage – CT Utility</h1>
        
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

          {/* AICI ESTE MODIFICAREA MAJORĂ */}
          {filtered.map((item) => (
            <div key={item.id} className="lineup-card">
              
              {/* PARTEA SUPERIOARĂ: Titlul și Tag-urile */}
              <div className="lineup-card-header">
                <h3 className="lineup-card-title">
                  {highlightText(item.name, search)}
                </h3>
                <div className="tag-row">
                  <span className={`tag tag-${item.type}`}>{item.type}</span>
                  <span className="tag tag-site">{item.site} site</span>
                </div>
              </div>

              {/* PARTEA INFERIOARĂ: Videoclip stânga, Descriere dreapta */}
              <div className="lineup-card-body">
                
                {/* Containerul video (Folosind YouTube Iframe) */}
                <div className="lineup-video-wrapper">
                  <iframe
                    className="lineup-video-player"
                    src={item.videoUrl}
                    title={`Tutorial video pentru ${item.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Containerul de text */}
                <div className="lineup-description-wrapper">
                  <p className="lineup-description-text">
                    {item.description 
                      ? highlightText(item.description, search) 
                      : "Nicio descriere disponibilă pentru acest lineup."}
                  </p>
                </div>

              </div>
            </div>
          ))}
          {/* SFÂRȘITUL MODIFICĂRII MAJORE */}

        </div>
      </div>
    </div>
  );
}