import "./SearchBar.css";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
