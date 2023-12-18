import HomeShimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import useRestaurantlist from "../utils/useRestaurantlist";
import useOnline from '../utils/useOnline'

export const Body = () => {

  

 
  const {
    allRestaurants,
    filteredRestaurants,
    searchText,
    loading,
    setSearchText,
    handleSearch,
  } = useRestaurantlist();
  const isOnline = useOnline()

  if (!isOnline) return <h1>Please check your internet connection!!!</h1>;
  return loading ? (
    <HomeShimmer />
  ) : (
    <>
      <SearchBar
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
        onSearchClick={handleSearch}
        filteredRestaurants={filteredRestaurants}
      />
      <CardList filteredRestaurants={filteredRestaurants} />
    </>
  );
};

export default Body;
