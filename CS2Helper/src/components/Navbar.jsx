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

          <NavLink to="/callouts" className="nav-link">
            Callouts
          </NavLink>
          
        </nav>
      </div>
    </header>
  );
}
