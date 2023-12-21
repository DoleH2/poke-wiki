import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleLoginModal: false,
    toggleRegisterModal: false,
    toggleStatusLogin: false
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
    userLogin: (state) => {
      state.toggleStatusLogin = true;
    },
    userLogout: (state) => {
      console.log('vao logout');
      state.toggleStatusLogin = false;
    }
  }
});

export default toggleSlice.reducer;
export const { openLoginModal, closeLoginModal,
  openRegisterModal, closeRegisterModal, userLogin, userLogout } = toggleSlice.actions;
