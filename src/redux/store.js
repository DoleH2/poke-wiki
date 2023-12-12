import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataPokemonSlice from "./reducers/dataPokemonSlice";
import apiFetch from "./reducers/apiFetch";
import toggleSlice from "./reducers/toggleSlice";
export const store = configureStore({
  reducer: {
    [apiFetch.reducerPath]: apiFetch.reducer,
    pokemonData: dataPokemonSlice,
    toggle: toggleSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 200 },
      serializableCheck: { warnAfter: 200 }
    }).concat(apiFetch.middleware),
});
