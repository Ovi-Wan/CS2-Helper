import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-logo">CS2 HELPER</div>

        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/utility" className="nav-link">
            Utility
          </NavLink>
          <NavLink to="/strats" className="nav-link">
            Strats
          </NavLink>
          <NavLink to="/training-maps" className="nav-link">
            Training-Maps
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
