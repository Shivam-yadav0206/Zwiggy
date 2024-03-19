import { createSlice } from "@reduxjs/toolkit";

// Function to load cart items from local storage
const loadCartFromLocalStorage = () => {
  const cartItems = localStorage.getItem("cartItems");
  return cartItems ? JSON.parse(cartItems) : [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(), // Load initial state from local storage
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        state.items.push(newItem);
      }

      // Update local storage after modifying the cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeOneQuantity: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists in the cart, decrement its quantity
        if (existingItem.quantity <= 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          existingItem.quantity -= 1;
        }
      }

      // Update local storage after modifying the cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];

      // Update local storage after modifying the cart
      localStorage.removeItem("cartItems");
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      // Update local storage after modifying the cart
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    initializeCartFromLocalStorage: (state) => {
      state.items = loadCartFromLocalStorage();
    },
  },
});

export const { addItem, clearCart, removeItem, removeOneQuantity, initializeCartFromLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
