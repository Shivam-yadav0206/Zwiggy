export function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

export const handleSearch = () => {
  const data = filterData(searchText, allRestaurants);
  setFilteredRestaurants(data);
};