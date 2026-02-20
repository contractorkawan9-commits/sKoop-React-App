import React from "react";
import { Link } from "react-router-dom";

/**
 * Logo component displays the sKoop & wHoop brand logo.
 * It is wrapped in a React Router Link to navigate to the homepage.
 */
export function Logo() {
  return (
    <Link to="/">
      <img className="headerLogo" src="/images/1.png" alt="sKoop Logo" />
    </Link>
  );
}
