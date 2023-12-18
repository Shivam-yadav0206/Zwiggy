import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import HomeShimmer from "./Shimmer";
import ItemCard from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { resId } = useParams();
  const [restaurantInfo, menuList] = useRestaurant(resId);

  return !restaurantInfo? <HomeShimmer /> : (
      <>
      <div className="menu-list">
        <RestaurantInfo info={restaurantInfo} />
      </div>
      <div data-testid="menu" className="menu-list">
        {menuList.map((item) => (
          <ItemCard key={item?.card?.info?.id} item = {item?.card?.info} />
        ))}
      </div>
    </>
  );
}

export default RestaurantMenu;
