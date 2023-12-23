import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookie from 'js-cookie';
const urlRoot = 'http://localhost:8080';
const apiFetch = createApi({
  reducerPath: "apiFetch",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Poke', ('Poke=' + cookie.get("Poke")) || null)
      return headers;
    }
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
    }),
    logout: build.mutation({
      query: () => ({
        url: `${urlRoot}/signout`,
        method: 'GET'
      })
    }),
    signup: build.mutation({
      query: (userData) => ({
        url: `${urlRoot}/register`,
        method: 'POST',
        body: userData
      })
    }),
    resetpass: build.mutation({
      query: (userData) => ({
        url: `${urlRoot}/confirm-reset-pass`,
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
  useLoginMutation, useLogoutMutation,
  useSignupMutation, useResetpassMutation } = apiFetch;
