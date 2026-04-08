import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar";
import { highlightText } from "../../../utils/highlightText.jsx";
import nukeCTLineups from "../../../data/nuke-ct-lineups";

import tImg from "../../../assets/agents/t.png";
import smokeImg from "../../../assets/nades/smoke.png"; 
import mollyImg from "../../../assets/nades/molly.png"; 
import flashImg from "../../../assets/nades/flash.png"; 
import heGrenadeImg from "../../../assets/nades/HeGrenade.png";

export default function CtNuke() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const counts = useMemo(() => {
    return {
      all: nukeCTLineups.length,
      smoke: nukeCTLineups.filter(item => item.type === "smoke").length,
      molly: nukeCTLineups.filter(item => item.type === "molly").length,
      flash: nukeCTLineups.filter(item => item.type === "flash").length,
    };
  }, []);

  const filterOptions = [
    { id: "all", label: "All", count: counts.all, icon: tImg },
    { id: "smoke", label: "Smokes", count: counts.smoke, icon: smokeImg },
    { id: "molly", label: "Molotovs", count: counts.molly, icon: mollyImg },
    { id: "flash", label: "Flashbangs", count: counts.flash, icon: flashImg },
  ];

  const filtered = useMemo(() => {
    return nukeCTLineups.filter((item) => {
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
        <h1 className="page-title">Nuke – CT Utility</h1>
        
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
            <div key={item.id} className="card">
              <div className="card-title">
                {highlightText(item.name, search)}
              </div>

              <p className="card-text">
                {highlightText(item.description, search)}
              </p>

              <div className="tag-row">
                <span className={`tag tag-${item.type}`}>{item.type}</span>
                <span className="tag tag-site">{item.site} site</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}