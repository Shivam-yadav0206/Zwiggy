import React from "react";
import { IMAGE_CDN_URL } from "../config";

function m(n, d) {
  const x = (("" + n).length);
  (p = Math.pow);
  (d = p(10, d));
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + " kMGTPE"[x / 3];
}

function RestaurantInfo({ info }) {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    locality,
    areaName,
    costForTwoMessage,
    avgRating,
    totalRatings,
    sla,
  } = info;
  const { deliveryTime } = sla;
  return (
    // <div className="container">
    //   <img src={IMAGE_CDN_URL + cloudinaryImageId} alt={name} />
    //   <div className="container__text">
    //     <h1>{name}</h1>
    //     <div className="container__text__star mb-5">
    //       {avgRating &&
    //         Array.from({ length: Math.ceil(avgRating) }).map((_, index) => (
    //           <span key={index} className="fa fa-star checked"></span>
    //         ))}
    //     </div>
    //     <h2 className="mb-5">{cuisines.join(", ")}</h2>
    //     <div className="container__text__timing">
    //       <div className="container__text__timing_time">
    //         <h2>Delivery Time</h2>
    //         <p>{`${deliveryTime} min`}</p>
    //       </div>
    //       <div className="container__text__timing_time">
    //         <h2>Total Ratings</h2>
    //         <p>{totalRatings}+</p> {/* Adjust as needed */}
    //       </div>
    //       <div className="container__text__timing_time">
    //         <h2>Cost</h2>
    //         <p>{costForTwoMessage}</p>
    //       </div>
    //       <div className="container__text__timing_time">
    //         <h2>Area</h2>
    //         <p>{`${locality}, ${areaName}`}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section id="about">
      <div class="container flex flex-col gap-10 md:flex-row">
        <div class="about__img flex-1">
          <img
            src={IMAGE_CDN_URL + cloudinaryImageId}
            alt={name}
            className="rounded-lg"
          />
        </div>

        <div class="about__content flex-1">
          <h2 class="section__title">{name}</h2>
          <div className="container__text__star mb-5">
            {avgRating &&
              Array.from({ length: Math.ceil(avgRating) }).map((_, index) => (
                <span key={index} className="fa fa-star checked"></span>
              ))}
          </div>
          <div class="separator"></div>
          <p class="paragraph">{cuisines.join(", ")}</p>
          <ul class="grid grid-cols-2 py-5 space-y-1">
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              {`Delievery in ${deliveryTime} min `}
            </li>
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              {m(totalRatings, 2)}+ Ratings
            </li>
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              Best Service
            </li>
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              {`${locality}, ${areaName}`}
            </li>
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              {costForTwoMessage}
            </li>
            <li class="text-xs text-paragraphColor">
              <i class="fa-solid fa-check text-secondaryColor"></i>
              Health Protocol
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RestaurantInfo;
