import { useParams } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import HomeShimmer from "./Shimmer";
import ItemCard from "./MenuCard";
import useRestaurant from "../utils/useRestaurant";

function RestaurantMenu() {
  const { resId } = useParams();
  const [restaurantInfo, menuList] = useRestaurant(resId);
 // console.log(menuList);

  return !restaurantInfo ? (
    <HomeShimmer />
  ) : (
    <>
      <div className="menu-list">
        <RestaurantInfo info={restaurantInfo} />
      </div>
      <div className="container">
        <div className="mx-auto text-center">
          <div data-testid="menu" className="menu__items">
            <ul
              data-testid="res-list"
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {menuList.map((item) => (
                <li className="item_wrap food">
                  <ItemCard
                    key={item?.card?.info?.id}
                    item={item?.card?.info}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
