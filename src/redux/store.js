import { configureStore } from "@reduxjs/toolkit";
import dataPokemonSlice from "./reducers/dataPokemonSlice";
import dataPokemonItemSlice from "./reducers/dataPokemonItemSlice";
export const store = configureStore({
    reducer: {
        pokemonData: dataPokemonSlice,
        pokemonItemData: dataPokemonItemSlice,
    }
})
