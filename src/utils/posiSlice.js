import { createSlice } from "@reduxjs/toolkit";

const posiSlice = createSlice({
  name: "posi",
  initialState: {
    location: {
      latitude: "28.5355161",
      longitude: "77.3910265",
    },
  },
  reducers: {
    updatePosi: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { updatePosi } = posiSlice.actions;
export default posiSlice.reducer;
