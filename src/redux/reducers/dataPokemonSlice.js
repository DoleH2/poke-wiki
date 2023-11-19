import { createSlice } from "@reduxjs/toolkit";

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState: {
    allData: {},
    filterData: [],
    search: "",
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    filterNamePokemon: (state) => {
      const listData = state.allData.results;
      console.log(state.allData);
      console.log(listData);
      if (listData.results) {
        state.filterData = listData.results.filter((item) =>
          item.name.includes(state.search.toLowerCase())
        );
      }
    },
    setSearchName: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default pokemonDataSlice.reducer;
export const { filterNamePokemon, setAllData, setSearchName } =
  pokemonDataSlice.actions;
