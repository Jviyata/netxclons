import React, { useState, useRef } from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  const [showSearch, setShowSearch] = useState(false);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(true);
    setTimeout(() => searchInputRef.current?.focus(), 0);
  };

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleBlur = () => {
    if (!searchTerm.trim()) {
      setShowSearch(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSearch(false);
      onSearchChange('');
    }
  };

  return (
    <div className="search-box">
      <svg 
        className="search-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        onClick={handleSearchClick}
        style={{ cursor: 'pointer' }}
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      {showSearch && (
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search titles..." 
          value={searchTerm}
          onChange={handleSearchChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="search-input"
          autoFocus
        />
      )}
    </div>
  );
}

export default SearchBar;
