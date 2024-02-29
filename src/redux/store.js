import { configureStore } from "@reduxjs/toolkit";
import dataPokemonSlice from "./reducers/dataPokemonSlice";
import toggleSlice from "./reducers/toggleSlice";
import apiPokeFetch from "./reducers/apiPokeFetch";
import apiUser from "./reducers/apiUser";
import apiMember from "./reducers/apiMember";
import stateDataSlice from "./reducers/stateDataSlice";
export const store = configureStore({
  reducer: {
    [apiUser.reducerPath]: apiUser.reducer,
    [apiMember.reducerPath]: apiMember.reducer,
    [apiPokeFetch.reducerPath]: apiPokeFetch.reducer,
    pokemonData: dataPokemonSlice,
    toggle: toggleSlice,
    stateData: stateDataSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 200 },
      serializableCheck: { warnAfter: 200 }
    }).concat([apiUser.middleware, apiMember.middleware, apiPokeFetch.middleware]),
});
