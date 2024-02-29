import { createSlice } from "@reduxjs/toolkit";

const stateDataSlice = createSlice({
    name: "stateData",
    initialState: {
        dataDelete: []
    },
    reducers: {
        addDataDelete: (state, action) => {
            if (!state.dataDelete.includes(action.payload)) {
                state.dataDelete = [...state.dataDelete, action.payload]
            }
        },
        removeDataDelete: (state, action) => {
            if (state.dataDelete.includes(action.payload)) {
                state.dataDelete = state.dataDelete.filter((e) => { return e !== action.payload })
            }
        },
        resetDataDelete: (state) => {
            state.dataDelete = []
        }

    }
})

export default stateDataSlice.reducer;
export const { addDataDelete, removeDataDelete, resetDataDelete } = stateDataSlice.actions;