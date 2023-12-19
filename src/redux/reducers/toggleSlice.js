import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleLoginModal: false,
    toggleRegisterModal: false
  },
  reducers: {
    openLoginModal: (state) => {
      state.toggleLoginModal = true;
    },
    closeLoginModal: (state) => {
      state.toggleLoginModal = false;
    },
    openRegisterModal: (state) => {
      state.toggleRegisterModal = true;
    },
    closeRegisterModal: (state) => {
      state.toggleRegisterModal = false;
    }
  }
});

export default toggleSlice.reducer;
export const { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } = toggleSlice.actions;
