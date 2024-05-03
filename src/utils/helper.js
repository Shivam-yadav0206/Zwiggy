import ScrollReveal from "scrollreveal";
export const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

export function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}

export const handleSearch = () => {
  const data = filterData(searchText, allRestaurants);
  setFilteredRestaurants(data);
};
