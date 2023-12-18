import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

function CardList({ filteredRestaurants }) {
  return (
    <div className="outline">
      <div data-testid="res-list" className="cardlist">
        {filteredRestaurants?.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
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
      </div>
    </div>
  );
}

export default CardList;
