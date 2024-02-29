import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const urlRoot = 'http://localhost:8080';
const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    credentials: 'include',
  }),

  endpoints: (build) => ({
    login: build.mutation({
      query: (userData) => ({
        url: `${urlRoot}/login`,
        method: 'POST',
        body: userData,
        credentials: "include",
      }),
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
export default apiUser;
export const {
  useLoginMutation,
  useSignupMutation, useResetpassMutation,
} = apiUser;
