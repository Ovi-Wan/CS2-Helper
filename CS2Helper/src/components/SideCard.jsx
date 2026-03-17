import { Link } from "react-router-dom";
import "./SideCard.css";

export default function SideCard({ title, image, link }) {
  return (
    
    <Link to={link} className="side-card-container">
      
      {/* Acest div va fi stilizat ca un cerc perfect */}
      <div className="circular-wrapper">
        <img src={image} alt={title} className="side-card-img" />
      </div>
      
      {/* Titlul este scos din zona cercului, așezat dedesubt */}
      <div className="side-card-title">{title}</div>
      
    </Link>
  );
}