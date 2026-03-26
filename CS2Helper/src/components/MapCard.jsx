import { Link } from "react-router-dom";
import "./MapCard.css";

export default function MapCard({ name, image, logo, link }) {
  return (
    <Link to={link} className="map-card">
      <div className="map-card-image">
        <img src={image} alt={name} />
        <img src={logo} alt={`${name} logo`} className="map-card-logo" />
      </div>

      <div className="map-card-title">{name}</div>
    </Link>
  );
}
