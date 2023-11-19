import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiFetch = createApi({
  reducerPath: "apiFetch",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (build) => ({
    getListPokemon: build.query({
      query: ({ limit, offset }) => ({
        url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      }),
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getDetailPokemon: build.query({
      query: ({ api }) => ({
        url: api,
      }),
      keepUnusedDataFor: 2 * 60 * 100,
    }),
  }),
});
export default apiFetch;
export const { useGetListPokemonQuery, useGetDetailPokemonQuery } = apiFetch;
