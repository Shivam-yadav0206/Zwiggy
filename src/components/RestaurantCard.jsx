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
    <div className="card">
      <Card
        sx={{
          width: 300,
          height: 400,
          display: "-webkit-box",
          WebkitLineClamp: 1, // Set the maximum number of lines
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
        <CardMedia
          sx={{
            height: 210,
            display: "-webkit-box",
            WebkitLineClamp: 1, // Set the maximum number of lines
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          image={
            cloudinaryImageId
              ? IMAGE_CDN_URL + cloudinaryImageId
              : "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98="
          }
          // title={name}
        />
        <CardContent>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1, // Set the maximum number of lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            gutterBottom
            variant="h5"
            component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {locality}
          </Typography>
          <Typography
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1, // Set the maximum number of lines
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginBottom: "15px",
            }}
            gutterBottom
            variant="body1"
            component="div">
            {cuisines?.join(", ")}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {`Rating:  ${avgRating}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {costForTwo}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default RestaurantCard;
