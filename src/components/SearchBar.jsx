import React from "react";

const SearchBar = ({
  searchText,
  onSearchChange,
  onSearchClick,
  filteredRestaurants,
}) => {
  return filteredRestaurants?.length > 0 ? (
    <section id="contact" className="flex  justify-center mb-8 mt-[-2rem]">
      <div class="flex flex-col gap-5 md:items-center md:flex-row">
        <div class="max-w-[25rem] flex flex-col gap-3 md:flex-row md:flex-1 justify-center mt-3">
          {/* <input type="email" placeholder="Email address" class="p-2 text-blackColor rounded-lg outline-none md:w-full"> */}
          <input
            data-testid="search-input"
            type="text"
            className="p-2 text-blackColor rounded-lg outline-none max-w-[25rem]"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              onSearchChange(e.target.value);
            }}
          />
          <button
            data-testid="search"
            //type="submit"
            className="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75"
            onClick={onSearchClick}>
            <i className="fa fa-search"></i>
            Search
          </button>
          {/* <a
            href=""
            class="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-75">
            <i class="fa-solid fa-paper-plane"></i>
            Subscribe
          </a> */}
        </div>
      </div>
    </section>
  ) : null;
};

export default SearchBar;
