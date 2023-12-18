import React from "react";

const SearchBar = ({
  searchText,
  onSearchChange,
  onSearchClick,
  filteredRestaurants
}) => {
  return filteredRestaurants?.length > 0 ? (
    <div className="wrap">
      <div className="search">
        <input
          data-testid="search-input"
          type="text"
          className="searchTerm"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            onSearchChange(e.target.value);
          }}
        />
        <button
          data-testid="search"
          type="submit"
          className="searchButton"
          onClick={onSearchClick}>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  ) : null;

};

export default SearchBar;
