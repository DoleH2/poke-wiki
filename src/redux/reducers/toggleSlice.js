import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleLoginModal: false
  },
  reducers: {
    openLoginModal: (state) => {
      state.toggleLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.toggleLoginModal = false;
    }
  }
});

export default toggleSlice.reducer;
export const { openLoginModal, closeLoginModal } = toggleSlice.actions;
