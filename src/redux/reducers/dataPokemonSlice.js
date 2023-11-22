import { createSlice } from "@reduxjs/toolkit";

const pokemonDataSlice = createSlice({
  name: "pokemonData",
  initialState: {
    filterData: [],
    search: ""
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    filterNamePokemon: (state, action) => {
      const listData = action.payload.list;
      if (state.search === "") {
        state.filterData = [];
        return
      }
      const listSearch = listData.filter((item) =>
        item.name.includes(state.search.toLowerCase())
      );
      state.filterData = listSearch.slice(0, 5);

    },
    setSearchName: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default pokemonDataSlice.reducer;
export const { filterNamePokemon, setAllData, setSearchName } =
  pokemonDataSlice.actions;
