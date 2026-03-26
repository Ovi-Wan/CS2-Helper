import { useState, useMemo } from "react";
import SearchBar from "../../../components/SearchBar";
import { highlightText } from "../../../utils/highlightText.jsx";
import mirageTLineups from "../../../data/mirage-t-lineups";

export default function TMirage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = useMemo(() => {
    return mirageTLineups.filter((item) => {
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
      {/* TITLU + SEARCH BAR INLINE */}
      <div className="title-search-row">
        <h1 className="page-title">Mirage – T Utility</h1>

        <div className="search-inline">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Caută un lineup..."
          />
        </div>
      </div>

      {/* FILTRE */}
      <div className="filter-row">
        <button
          className={`filter-chip ${typeFilter === "all" ? "active" : ""}`}
          onClick={() => setTypeFilter("all")}
        >
          Toate
        </button>

        <button
          className={`filter-chip ${typeFilter === "smoke" ? "active" : ""}`}
          onClick={() => setTypeFilter("smoke")}
        >
          Smokes
        </button>

        <button
          className={`filter-chip ${typeFilter === "molly" ? "active" : ""}`}
          onClick={() => setTypeFilter("molly")}
        >
          Mollys
        </button>

        <button
          className={`filter-chip ${typeFilter === "flash" ? "active" : ""}`}
          onClick={() => setTypeFilter("flash")}
        >
          Flashes
        </button>
      </div>

      {/* LISTA DE LINEUP-URI */}
      {filtered.length === 0 && (
        <p className="page-subtitle">Niciun lineup găsit pentru căutarea ta.</p>
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
  );
}
