import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IMAGE_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  locality,
  avgRating,
  cloudinaryImageId,
  costForTwo,
}) => {
  return (
    <li className="item_wrap food">
      <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
        <img
          src={
            cloudinaryImageId
              ? IMAGE_CDN_URL + cloudinaryImageId
              : "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
          }
          alt="food image"
          className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
        />
      </div>

      <div className="pt-5">
        <div className="container__text__star mb-5">
          {avgRating &&
            Array.from({ length: Math.ceil(avgRating) }).map((_, index) => (
              <span key={index} className="fa fa-star checked"></span>
            ))}
        </div>
        <div className="mb-2">
          <h4 className="card__title">{name}</h4>
          <div className="max-w-xs overflow-hidden">
            <p className="truncate paragraph hover:line-clamp-none">
              {cuisines?.join(", ")}
            </p>
          </div>
          <p className="paragraph">{locality}</p>
          <p className="paragraph">{`Rating:  ${avgRating}`}</p>
        </div>

        <p className="text-secondaryColor">{costForTwo}</p>
      </div>
    </li>
  );
};

export default RestaurantCard;