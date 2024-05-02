import React from "react";
import Paper from "@mui/material/Paper";
import useOnline from "../utils/useOnline";
import CategoryCard from "./CategoryCard";
import useInstaMart from "../utils/useInstaMart";
import HomeShimmer from "../components/Shimmer";
import { Link } from "react-router-dom";

function InstaMart() {
  const { categoryList } = useInstaMart();
  const isOnline = useOnline();
  if (!isOnline) return <h1>Please check your internet connection!!!</h1>;
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "5rem",
        }}>
        <h2
          className="section__title"
          style={{
            display: "flex",
            justifyContent: "center",
          }}>
          OUR Categories
        </h2>
        <div className="separator mx-auto"></div>

        <div className="menu__items">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {categoryList?.length > 0 ? (
              categoryList.map((category) => (
                <Link to={"https://www.bigbasket.com/" + category?.url}>
                  <CategoryCard key={category?.id} {...category} />
                </Link>
              ))
            ) : (
              <p>No Item found</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InstaMart;
