import HomeShimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import useRestaurantlist from "../utils/useRestaurantlist";
import useOnline from "../utils/useOnline";
import CORSWarn from "./CORSwarn";
import { useState } from "react";
import Category1 from "../img/burger-1.png";
import Category2 from "../img/snack-1.png";
import Category3 from "../img/beverage-2.png";
import Offer1 from "../img/promo-1.png";
import Offer2 from "../img/promo-2.png";
import Home1 from "../img/home-image.png";



export const Body = () => {
  const {
    allRestaurants,
    filteredRestaurants,
    searchText,
    loading,
    setSearchText,
    handleSearch,
  } = useRestaurantlist();
  const isOnline = useOnline();

  if (!isOnline) return <h1>Please check your internet connection!!!</h1>;
  return (
    <>
      <div className="container">
        <div className="mx-auto text-center">
          <section id="home">
            <div class="container flex flex-col items-center gap-10 md:flex-row">
              <div class="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
                <img
                  src={Home1}
                  alt="home image"
                  class="home__image w-60 md:w-full"
                />
              </div>

              <div class="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
                <h1 class="home__title">HAPPY TUMMY WITH TASTY BURGERS.</h1>
                <div class="separator mx-auto md:mx-0"></div>
                <p class="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum,libero magni? Fugiat perspiciatis eius, sequi
                  aliquid ullam dolorem temporibus voluptate corrupti fugit
                  saepe sunt unde culpa? Tenetur quos quod laudantium.
                </p>
                <div class="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
                  <div class="text-center">
                    <i class="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                    <br />
                    Delicious
                  </div>

                  <div class="text-center">
                    <i class="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                    <br />
                    Fresh
                  </div>

                  <div class="text-center">
                    <i class="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                    <br />
                    Organic
                  </div>
                </div>

                <button class="btn btn-primary">
                  learn more
                </button>
              </div>
            </div>
          </section>
          {/* <!--~~~~~~~~~~~~~~~ Category ~~~~~~~~~~~~~~~--> */}
          <section id="category">
            <div class="container flex flex-col gap-5 md:flex-row">
              {/* <!-- card 1 --> */}
              <div class="category__card bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div class="basis-1/3 relative">
                  <img
                    src={Category1}
                    alt="category image"
                    class="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div class="mb-2">
                    <h4 class="card__title">Food</h4>
                    <p class="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" class="text-blackColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>

              {/* <!-- card 2 --> */}
              <div class="category__card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div class="basis-1/3 relative">
                  <img
                    src={Category2}
                    alt="category image"
                    class="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div class="mb-2">
                    <h4 class="card__title">Food</h4>
                    <p class="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" class="text-secondaryColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>

              {/* <!-- card 3 --> */}
              <div class="category__card bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div class="basis-1/3 relative">
                  <img
                    src={Category3}
                    alt="category image"
                    class="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div class="mb-2">
                    <h4 class="card__title">Food</h4>
                    <p class="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" class="text-secondaryColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!--~~~~~~~~~~~~~~~ Promo ~~~~~~~~~~~~~~~--> */}
          <section id="promo">
            <div class="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
              {/* <!-- card 1 --> */}
              <div class="promo__card-1 bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                <img
                  src={Offer1}
                  alt="promo image"
                  class="w-40 mx-auto hover:animate-movingY md:mx-5"
                />

                <div class="space-y-2 pt-5 md:pt-0">
                  <p class="text-xs text-secondaryColor">Payday promo</p>
                  <h3 class="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" class="text-xs text-secondaryColor">
                    Buy online
                  </a>
                </div>
              </div>

              <div class="promo__card-2 bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                <img
                  src={Offer2}
                  alt="promo image"
                  class="w-40 mx-auto hover:animate-movingY md:mx-5"
                />

                <div class="space-y-2 pt-5 md:pt-0">
                  <p class="text-xs text-secondaryColor">Payday promo</p>
                  <h3 class="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" class="text-xs text-secondaryColor">
                    Buy online
                  </a>
                </div>
              </div>
            </div>
          </section>
          <SearchBar
            searchText={searchText}
            onSearchChange={(value) => setSearchText(value)}
            onSearchClick={handleSearch}
            filteredRestaurants={filteredRestaurants}
          />
          {loading ? (
            <HomeShimmer />
          ) : <CardList filteredRestaurants={filteredRestaurants} />}
        </div>
      </div>
    </>
  );
};

export default Body;
<div class=" mx-auto text-center">
  <h2 class="section__title">OUR BEST MENU</h2>
  <div class="separator mx-auto"></div>
  <p class="paragraph">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa.
  </p>

  <div class="tabs_wrap">
    <ul class="flex flex-wrap justify-center gap-2 py-10">
      <li
        data-tabs="all"
        class="btn bg-primaryColorLight dark:bg-darkColorLight active">
        All
      </li>
      <li
        data-tabs="food"
        class="btn bg-primaryColorLight dark:bg-darkColorLight">
        Food
      </li>
      <li
        data-tabs="snack"
        class="btn bg-primaryColorLight dark:bg-darkColorLight">
        Snack
      </li>
      <li
        data-tabs="beverage"
        class="btn bg-primaryColorLight dark:bg-darkColorLight">
        Beverage
      </li>
    </ul>
  </div>
</div>;
