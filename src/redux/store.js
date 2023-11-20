import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dataPokemonSlice from "./reducers/dataPokemonSlice";
import dataPokemonItemSlice from "./reducers/dataPokemonItemSlice";
import apiFetch from "./reducers/apiFetch";
export const store = configureStore({
  reducer: {
    [apiFetch.reducerPath]: apiFetch.reducer,
    pokemonData: dataPokemonSlice,
    pokemonItemData: dataPokemonItemSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 200 },
      serializableCheck: { warnAfter: 200 }
    }).concat(apiFetch.middleware),
});
