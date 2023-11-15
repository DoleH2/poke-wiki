import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { getRequest } from "../../axios/httpRequest";

export const fetchDataPokemon = createAsyncThunk('pokemonData/fetchListPokemon', async ({ limit, offset }) => {
    const result = await getRequest('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset);
    return result.data;
})


const pokemonDataSlice = createSlice({
    name: "pokemonData",
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataPokemon.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchDataPokemon.fulfilled, (state, action) => {
                state.status = "succeeded";
                const newData = action.payload && action.payload.results ? action.payload.results : [];
                state.items = [...state.items, ...newData];
                console.log(state.items);
            })
            .addCase(fetchDataPokemon.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default pokemonDataSlice.reducer;