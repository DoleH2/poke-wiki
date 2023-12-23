import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleLoginModal: false,
    toggleRegisterModal: false,
    toggleStatusLogin: false,
    toggleResetPassModal: false
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
    },
    openResetPassModal: (state) => {
      state.toggleResetPassModal = true;
    },
    closeResetPassModal: (state) => {
      state.toggleResetPassModal = false;
    },
    userLogin: (state) => {
      state.toggleStatusLogin = true;
    },
    userLogout: (state) => {
      state.toggleStatusLogin = false;
    }
  }
});

export default toggleSlice.reducer;
export const { openLoginModal, closeLoginModal, openResetPassModal, closeResetPassModal,
  openRegisterModal, closeRegisterModal, userLogin, userLogout } = toggleSlice.actions;
