import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import './Header.css'; // Re-add the missing CSS import

/**
 * Header component for the main application.
 * Displays the brand logo, a tagline, and a search bar.
 * Handles search input and navigation to the search results page.
 */
export function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  /**
   * Handles the search form submission.
   * Prevents default form submission, navigates to the search page with the search term,
   * and optionally clears the search input.
   * @param {Event} e - The form submission event.
   */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Optional: clear after search
    }
  };

  return (
    <header className="header">
      {/* Left Section: Logo */}
      <div className="headerLeft">
        <Logo />
      </div>

      {/* Centre Section: Tagline and Emoji */}
      <div className="headerCentre">
        <div className="headerTag">
          Just ask your sKooper to Build your own sKoop
        </div>
        <div className="headerEmojiContainer">
          <img className="headerEmojiImg" src="/images/ice cream art.png" alt="Ice Cream Art" />
        </div>
      </div>

      {/* Right Section: Search Bar */}
      <div className="headerRight">
        <form className="searchContainer" onSubmit={handleSearch}>
          <input
            className="searchInput"
            type="text"
            placeholder="Search your sKoop here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="searchButton" type="submit">
            <img className="searchIcon" src="/images/search-button3.png" alt="Search" />
          </button>
        </form>
      </div>
    </header>
  );
}