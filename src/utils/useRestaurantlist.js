import { useState, useEffect } from "react";
import { REST_LIST_API_URL, RESTAURANT_LIST } from "../config";
import { filterData } from "./helper";
import { useSelector, useDispatch } from "react-redux";
import { updatePosi } from "../utils/posiSlice";

function useRestaurantlist() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useSelector((store) => store.posi.location);
  const [locationLoading, setLocationLoading] = useState(true);

  const dispatch = useDispatch();

  const success = (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    dispatch(updatePosi({ latitude: lat, longitude: long }));
    setLocationLoading(false);
  };

  function error() {
    console.log("Unable to retrieve your location");
    setLocationLoading(false);
  }

  const getLocation = () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
    if (!locationLoading) getRestaurants();
  }, [locationLoading]);

  async function getRestaurants() {
    try {
      const url = REST_LIST_API_URL.replace(
        "latitude",
        location.latitude
      ).replace("longitude", location.longitude);
      const list = await fetch(url);

      const restaurantList = await list.json();
      const restaurantsData =
        restaurantList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        restaurantList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        restaurantList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        RESTAURANT_LIST;
      setFilteredRestaurants(restaurantsData);
      setAllRestaurants(restaurantsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setFilteredRestaurants(RESTAURANT_LIST);
      setAllRestaurants(RESTAURANT_LIST);
      setLoading(false);
    }
  }

  const handleSearch = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  return {
    allRestaurants,
    filteredRestaurants,
    searchText,
    loading,
    setSearchText,
    handleSearch,
  };
}

export default useRestaurantlist;
