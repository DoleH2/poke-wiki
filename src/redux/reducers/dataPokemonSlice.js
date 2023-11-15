import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getRequest } from "../../axios/httpRequest";
let urlDataPokemon = "https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0";
export const fetchDataPokemon = createAsyncThunk(
  "pokemonData/fetchListPokemon",
  async () => {
    const result = await getRequest(urlDataPokemon);
    console.log(result.data);
    urlDataPokemon = result.data.next;
    return result.data;
  }
);

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newData =
          action.payload && action.payload.results
            ? action.payload.results
            : [];
        state.items.push(...newData);
      })
      .addCase(fetchDataPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonDataSlice.reducer;
