import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../axios/httpRequest";

const pokemonItemDataSlice = createSlice({
  name: "pokemonItemData",
  initialState: {},
  reducers: {},
});

export default pokemonItemDataSlice.reducer;
