import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookie from 'js-cookie';
import { UnauthorizedException } from "../../exception/UnauthorizedException";

const urlRoot = 'http://localhost:8080';
const apiMember = createApi({
    reducerPath: "apiMember",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
        credentials: 'include',
        prepareHeaders: (headers) => {
            if (cookie.get("Poke")) {
                headers.set('Poke', 'Poke=' + cookie.get("Poke"))
                return headers;
            } else {
                throw new UnauthorizedException("Unauthorized", 401);
            }
        },


    }),

    endpoints: (build) => ({
        logout: build.mutation({
            query: () => ({
                url: `${urlRoot}/signout`,
                method: 'GET'
            })
        }),
        gachax1: build.mutation({
            query: () => ({
                url: `${urlRoot}/gacha/roll1`,
                method: "POST"
            }),
            invalidatesTags: ['Inventory']

        }),
        gachax10: build.mutation({
            query: () => ({
                url: `${urlRoot}/gacha/roll10`,
                method: "POST"
            }),
            invalidatesTags: ['Inventory']
        }),
        inventory: build.query({
            query: ({ page, sort }) => ({
                url: `${urlRoot}/inventory/${page}`,
                method: "GET",
                params: { sort: sort }
            }),
            keepUnusedDataFor: 50000,
            providesTags: ['Inventory']

        }),
        deletePet: build.mutation({
            query: ({ idPet }) => ({
                url: `${urlRoot}/delete`,
                method: "DELETE",
                params: { idPetUser: idPet }
            }),
            invalidatesTags: ['Inventory']
        }),
        deleteMultiPet: build.mutation({
            query: ({ list }) => ({
                url: `${urlRoot}/delete-multi`,
                method: "DELETE",
                params: { listIdPetUser: list }
            }),
            invalidatesTags: ['Inventory']
        })
    }),

});
export default apiMember;
export const {
    useLogoutMutation,
    useGachax1Mutation, useGachax10Mutation,
    useInventoryQuery, useDeletePetMutation, useDeleteMultiPetMutation } = apiMember;
