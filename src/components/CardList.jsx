import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


function CardList({ filteredRestaurants }) {
  return (

        <div className="menu__items">
          <ul
            data-testid="res-list"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {filteredRestaurants?.length > 0 ? (
              filteredRestaurants.map((restaurant,index) => (
                  <Link
                    key={index}
                    to={"/restaurant/" + restaurant?.info?.id}>
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100vh", // Ensure the container takes at least the full height of the viewport
                }}>
                <img
                  src="https://elfegnie.adc.com.et/elfegnie_web/assets/img/no_rest_found.png"
                  alt="No restaurant found"
                />
              </div>
            )}
          </ul>
        </div>
  );
}

export default CardList;
