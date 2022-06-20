import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="search" placeholder="Search" />
      <p> Show 5 entries ↓</p>
    </div>
  );
};

export default SearchBar;
