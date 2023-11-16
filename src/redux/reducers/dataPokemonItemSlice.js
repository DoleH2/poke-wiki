import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../axios/httpRequest";

export const fetchDataItemPokemon = createAsyncThunk(
  "pokemonItemData/fetchListItemPokemon",
  async ({ api }) => {
    const result = await getRequest(api);
    return { api: api, data: result.data };
  }
);

const pokemonItemDataSlice = createSlice({
  name: "pokemonItemData",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataItemPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataItemPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newData = action.payload ? action.payload : {};
        state.data[newData.api] = newData.data;
      })
      .addCase(fetchDataItemPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pokemonItemDataSlice.reducer;
