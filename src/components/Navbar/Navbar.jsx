import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { mainNavLinks } from "../../data/siteData"; // Import the centralized navigation links

/**
 * Navbar component for main application navigation.
 * It displays a list of navigation links and can accept custom navigation items as props.
 * @param {Object} props - Component props.
 * @param {Array<Object>} [props.navItems=mainNavLinks] - An array of navigation items, each with `to` and `label` properties.
 */
export function Navbar({ navItems = mainNavLinks }) { // Accept navItems as a prop with a default
  return (
    <nav className="navbarContainer">
      <div className="navElements">
        {navItems.map((item) => (
          <Link key={item.label} to={item.to} className="navItem">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="hrBox">
        <hr className="navDivider" />
      </div>
    </nav>
  );
}

