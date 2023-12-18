import { useState, useEffect } from "react";
import { BB_CATEGORY_LIST } from "../config";

const useInstaMart = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getInstaMart();
  }, []);

  async function getInstaMart() {
    try {
      setCategoryList(BB_CATEGORY_LIST);
    } catch (error) {
      console.log(error);
    }
  }
  return { categoryList };
};

export default useInstaMart;
