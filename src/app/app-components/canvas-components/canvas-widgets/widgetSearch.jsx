import React from "react";
import "../../../timelines-app.css";
import SearchIcon from "../../../../assets/icons/search.svg";

export const Search = () => {
  return (
    <div className="search-button">
      <div className="search-button-wrapper">
        <input
          type="text"
          className="search-button-input"
          placeholder="Search..."
        />
        <img src={SearchIcon} className="search-icon" alt="Search Icon" />
      </div>
    </div>
  );
};
