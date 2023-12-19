import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const urlRoot = 'http://localhost:8080';
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
      keepUnusedDataFor: 2 * 60 * 1000,
    }),
    getDetailPokemon: build.query({
      query: ({ api }) => ({
        url: api,
      }),
      keepUnusedDataFor: 1 * 60 * 1000,
    }),
    getListPokemonMain: build.query({
      query: ({ limit, offset }) => ({
        url: `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
      }),
      keepUnusedDataFor: Infinity
    }),
    login: build.mutation({
      query: (userData) => ({
        url: `${urlRoot}/login`,
        method: 'POST',
        body: userData
      })
    })
  }),
});
export default apiFetch;
export const { useGetListPokemonQuery,
  useGetDetailPokemonQuery,
  useGetListPokemonMainQuery,
  useLoginMutation } = apiFetch;
