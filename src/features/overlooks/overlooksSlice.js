import { createSlice } from "@reduxjs/toolkit";
import { SCENICOVERLOOKS } from "../../app/shared/SCENICOVERLOOKS";

const initialState = {
    overlooksArray: SCENICOVERLOOKS
};

const overlooksSlice = createSlice({
    name: 'overlooks',
    initialState
});

export const overlooksReducer = overlooksSlice.reducer;

export const selectAllOverlooks = (state) => {
    return state.overlooks.overlooksArray;
};

export const selectOverlooksById = (id) => (state) => {
    return state.overlooks.overlooksArray.find(
        (overlook) => overlook.id === parseInt(id)
    );
};

export const featuredOverlook = (state) => {
    return state.overlooks.overlooksArray.find((overlook) => overlook.featured);
};
