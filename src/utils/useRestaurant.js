import { useState, useEffect } from "react";
import { REST_MENU_API_URL } from "../config";
import { useSelector } from "react-redux";

const useRestaurant = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const location = useSelector((store) => store.posi.location);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const list = await fetch(
        REST_MENU_API_URL.replace("${resId}", resId)
          .replace("latitude", location.latitude)
          .replace("longitude", location.longitude)
      );
      const restaurantDetails = await list.json();
      const info = restaurantDetails?.data?.cards[2]?.card?.card?.info;
      const groupedCard = restaurantDetails?.data?.cards;
      console.log(restaurantDetails?.data?.cards);
      const menu = [
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[2]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[3]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[4]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[5]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[0]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[1]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[2]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[5]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[3]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[2]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[3]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[4]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[5]?.card?.card?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[0]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[1]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[2]?.itemCards || []),
        ...(restaurantDetails?.data?.cards?.[4]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards?.[1]?.card?.card?.categories?.[3]?.itemCards || []),
      ];
      console.log(menu);
      setRestaurantInfo(info);
      setMenuList(menu);
    } catch (error) {
      console.log(error);
    }
  }
  return [restaurantInfo, menuList];
};

export default useRestaurant;

// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[1]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[2]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[3]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[2]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[3]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[4]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[4]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[1]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[2]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.categories[3]?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[1]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[2]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[3]?.card?.card?.itemCards || []),
// ...(restaurantDetails?.data?.cards[5]?.groupedCard?.cardGroupMap
//   ?.REGULAR?.cards[4]?.card?.card?.itemCards || []),
        
  // ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.categories?.[0]?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.categories?.[1]?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.categories?.[2]?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.categories?.[3]?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[5]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]
  //         ?.card?.card?.itemCards || []),
  //       ...(groupedCard?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]
  //         ?.card?.card?.itemCards || []),