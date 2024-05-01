import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


          // <div class="menu__items">
          //   <ul class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          //     <!-- food  -->
              // <li class="item_wrap food">
              //   <div class="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
              //     <img src="img/burger-1.png" alt="food image" class="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24">
              //   </div>

              //   <div class="pt-5">
              //     <div class="mb-2">
              //       <h4 class="card__title">REGULAR BEEF BURGER</h4>
              //       <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              //     </div>

              //     <p class="text-secondaryColor">$42.00</p>
              //   </div>
              // </li>

function CardList({ filteredRestaurants }) {
  return (

        <div className="menu__items">
          <ul
            data-testid="res-list"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {filteredRestaurants?.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <li class="item_wrap food">
                  <Link
                    key={restaurant?.info?.id}
                    to={"/restaurant/" + restaurant?.info?.id}>
                    <RestaurantCard {...restaurant?.info} />
                  </Link>
                </li>
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
