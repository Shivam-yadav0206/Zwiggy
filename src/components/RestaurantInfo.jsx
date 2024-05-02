import React from "react";
import { IMAGE_CDN_URL } from "../config";

function m(n, d) {
  let x = ("" + n).length; // Calculate the number of digits in n
  const p = Math.pow; // Store Math.pow in a variable p
  d = p(10, d); // Calculate 10 raised to the power of d

  // Reduce x to the nearest multiple of 3
  x -= x % 3;

  // Calculate the rounded value of (n * d) / (10^x) and append the appropriate abbreviation
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
    <section id="about">
      <div className="container flex flex-col gap-10 md:flex-row">
        <div className="about__img flex-1">
          <img
            src={IMAGE_CDN_URL + cloudinaryImageId}
            alt={name}
            className="rounded-lg"
          />
        </div>

        <div className="about__content flex-1">
          <h2 className="section__title">{name}</h2>
          <div className="container__text__star mb-5">
            {avgRating &&
              Array.from({ length: Math.ceil(avgRating) }).map((_, index) => (
                <span key={index} className="fa fa-star checked"></span>
              ))}
          </div>
          <div className="separator"></div>
          <p className="paragraph">{cuisines.join(", ")}</p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              {`Delievery in ${deliveryTime} min `}
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              {m(totalRatings, 2)}+ Ratings
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Best Service
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              {`${locality}, ${areaName}`}
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              {costForTwoMessage}
            </li>
            <li className="text-xs text-paragraphColor">
              <i className="fa-solid fa-check text-secondaryColor"></i>
              Health Protocol
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default RestaurantInfo;
