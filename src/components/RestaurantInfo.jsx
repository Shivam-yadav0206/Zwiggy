import React from "react";
import { IMAGE_CDN_URL } from "../config";

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
    <div className="container">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} alt={name} />
      <div className="container__text">
        <h1>{name}</h1>
        <div className="container__text__star mb-5">
          {avgRating &&
            Array.from({ length: Math.ceil(avgRating) }).map((_, index) => (
              <span key={index} className="fa fa-star checked"></span>
            ))}
        </div>
        <h2 className="mb-5">{cuisines.join(", ")}</h2>
        <div className="container__text__timing">
          <div className="container__text__timing_time">
            <h2>Delivery Time</h2>
            <p>{`${deliveryTime} min`}</p>
          </div>
          <div className="container__text__timing_time">
            <h2>Total Ratings</h2>
            <p>{totalRatings}+</p> {/* Adjust as needed */}
          </div>
          <div className="container__text__timing_time">
            <h2>Cost</h2>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="container__text__timing_time">
            <h2>Area</h2>
            <p>{`${locality}, ${areaName}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
