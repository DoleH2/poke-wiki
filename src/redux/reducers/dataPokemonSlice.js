import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getRequest } from "../../axios/httpRequest";


const limit = 18;
export const fetchDataPokemon = createAsyncThunk(
  "pokemonData/fetchListPokemon",
  async (_, thunkAPI) => {
    const currPage = thunkAPI.getState().pokemonData.page;
    let offset = limit * currPage;
    let urlDataPokemon = "https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset;
    const result = await getRequest(urlDataPokemon);
    return result.data;
  }
);

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    page: 0,
    totalPage: 0,
  },
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    }
  },
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
        console.log(action.payload);
        state.items = [...newData];
        state.totalPage = action.payload.count / limit;
      })
      .addCase(fetchDataPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonDataSlice.reducer;
export const { changePage } = pokemonDataSlice.actions;
