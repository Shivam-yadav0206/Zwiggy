import React from 'react'
import Paper from "@mui/material/Paper";
import useOnline from '../utils/useOnline';
import CategoryCard from './CategoryCard';
import useInstaMart from '../utils/useInstaMart';
import HomeShimmer from '../components/Shimmer';
import { Link } from 'react-router-dom';

function InstaMart() {

  const { categoryList } = useInstaMart();
  const isOnline = useOnline();
  if (!isOnline) return <h1>Please check your internet connection!!!</h1>;
  return categoryList?.length < 1 ? (
    <HomeShimmer />
  ) : (
    <>
      <Paper elevation={3}>
        <div className="menu-list">
            {categoryList?.length > 0 ? ( 
              
              categoryList.map((category) => (
                <Link to={"https://www.bigbasket.com/" + category?.url}>
                  <CategoryCard
                    key={category?.id}
                    {...category}
                  />
                </Link>
              ))
            ) : (
                <p>No Item found</p>
            )
          }
        </div>
      </Paper>
    </>
  );
}

export default InstaMart;