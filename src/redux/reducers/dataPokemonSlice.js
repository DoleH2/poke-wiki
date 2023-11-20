import { createSlice } from "@reduxjs/toolkit";

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState: {
    filterData: [],
    search: "",
    pageSearch: 0
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    filterNamePokemon: (state, action) => {
      const listData = action.payload.list;

      state.filterData = listData.filter((item) =>
        item.name.includes(state.search.toLowerCase())
      );

    },
    setSearchName: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default pokemonDataSlice.reducer;
export const { filterNamePokemon, setAllData, setSearchName } =
  pokemonDataSlice.actions;
