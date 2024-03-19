import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { initializeCartFromLocalStorage } from "./cartSlice";
import posiSlice from "./posiSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        posi: posiSlice,
    },
});


// Dispatch action to initialize cart state from local storage
store.dispatch(initializeCartFromLocalStorage());


export default store;





