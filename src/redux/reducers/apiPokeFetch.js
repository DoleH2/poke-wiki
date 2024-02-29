import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiPokeFetch = createApi({
    reducerPath: "apiPokeFetch",
    baseQuery: fetchBaseQuery({
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
        })
    }),
});
export default apiPokeFetch;
export const { useGetListPokemonQuery,
    useGetDetailPokemonQuery,
    useGetListPokemonMainQuery } = apiPokeFetch;
