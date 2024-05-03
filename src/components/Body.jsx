import HomeShimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import useRestaurantlist from "../utils/useRestaurantlist";
import useOnline from "../utils/useOnline";
import CORSWarn from "./CORSwarn";
import { useState, useEffect } from "react";
import Category1 from "../img/burger-1.png";
import Category2 from "../img/snack-1.png";
import Category3 from "../img/beverage-2.png";
import Offer1 from "../img/promo-1.png";
import Offer2 from "../img/promo-2.png";
import Home1 from "../img/home-image.png";
import { sr } from "../utils/helper";

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

  useEffect(() => {
    sr.reveal(".home__image");
    sr.reveal(".home__content", { origin: "bottom" });
    sr.reveal(".category__card", { interval: 300 });
    sr.reveal(".promo__card-1", { origin: "left" });
    sr.reveal(".promo__card-2", { origin: "right" });
    sr.reveal(".menu__items", { origin: "left" });

    // Clean up ScrollReveal instance on component unmount
    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="mx-auto text-center">
          <section id="home">
            <div className="container flex flex-col items-center gap-10 md:flex-row">
              <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
                <img
                  src={Home1}
                  alt="home image"
                  className="home__image w-60 md:w-full"
                />
              </div>

              <div className="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
                <h1 className="home__title">
                  HAPPY TUMMY WITH TASTY FOOD ITEMS.
                </h1>
                <div className="separator mx-auto md:mx-0"></div>
                <p className="paragraph">
                  Welcome to FOODMATA – a culinary journey inspired by the
                  visionary teachings of Akshay Saini, CEO of <a></a>
                  <a href="https://namastedev.com/">namastedev.com</a>, a
                  renowned figure in the realm of web development and an
                  influential YouTube personality.
                </p>
                <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
                  <div className="text-center">
                    <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                    <br />
                    Delicious
                  </div>

                  <div className="text-center">
                    <i className="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                    <br />
                    Fresh
                  </div>

                  <div className="text-center">
                    <i className="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                    <br />
                    Organic
                  </div>
                </div>

                <button className="btn btn-primary">learn more</button>
              </div>
            </div>
          </section>
          {/* <!--~~~~~~~~~~~~~~~ Category ~~~~~~~~~~~~~~~--> */}
          <section id="category">
            <div className="container flex flex-col gap-5 md:flex-row">
              {/* <!-- card 1 --> */}
              <div className="category__card bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div className="basis-1/3 relative">
                  <img
                    src={Category1}
                    alt="category image"
                    className="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <h4 className="card__title">Quick bites</h4>
                    <p className="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" className="text-blackColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>

              {/* <!-- card 2 --> */}
              <div className="category__card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div className="basis-1/3 relative">
                  <img
                    src={Category2}
                    alt="category image"
                    className="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <h4 className="card__title">Snacks</h4>
                    <p className="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" className="text-secondaryColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>

              {/* <!-- card 3 --> */}
              <div className="category__card bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                <div className="basis-1/3 relative">
                  <img
                    src={Category3}
                    alt="category image"
                    className="absolute w-28 -bottom-4 -left-4"
                  />
                </div>

                <div>
                  <div className="mb-2">
                    <h4 className="card__title">Bevereges</h4>
                    <p className="text-xs">Lorem ipsum dolor sit.</p>
                  </div>

                  <a href="#" className="text-secondaryColor cursor-pointer">
                    Buy online
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!--~~~~~~~~~~~~~~~ Promo ~~~~~~~~~~~~~~~--> */}
          <section id="promo">
            <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
              {/* <!-- card 1 --> */}
              <div className="promo__card-1 bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                <img
                  src={Offer1}
                  alt="promo image"
                  className="w-40 mx-auto hover:animate-movingY md:mx-5"
                />

                <div className="space-y-2 pt-5 md:pt-0">
                  <p className="text-xs text-secondaryColor">Payday promo</p>
                  <h3 className="card__title">
                    GET A 10% DISCOUNT ON PAYDAY WEEK
                  </h3>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" className="text-xs text-secondaryColor">
                    Buy online
                  </a>
                </div>
              </div>

              <div className="promo__card-2 bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                <img
                  src={Offer2}
                  alt="promo image"
                  className="w-40 mx-auto hover:animate-movingY md:mx-5"
                />

                <div className="space-y-2 pt-5 md:pt-0">
                  <p className="text-xs text-secondaryColor">Payday promo</p>
                  <h3 className="card__title">
                    GET A 10% DISCOUNT ON PAYDAY WEEK
                  </h3>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a href="#" className="text-xs text-secondaryColor">
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
          ) : (
            <CardList filteredRestaurants={filteredRestaurants} />
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
