import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../utils/cartSlice"
import posiSlice from "./posiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        posi: posiSlice,
    },
});

export default store;