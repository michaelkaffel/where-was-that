import { createSlice } from "@reduxjs/toolkit";
import { SCENICOVERLOOKS } from "../../app/shared/SCENICOVERLOOKS";

const initialState = {
    overlooksArray: SCENICOVERLOOKS
};

const overlooksSlice = createSlice({
    name: 'overlooks',
    initialState,
    reducers: {
        addOverlook: (state, action) => {

            const identifier = Math.floor(Math.random() * 10000 );

            const newOverlook = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'overlook',
                ...action.payload
            };
            state.overlooksArray.push(newOverlook);
        },
        removeOverlook: (state, action) => {
            state.overlooksArray = state.overlooksArray.filter(
                (overlook) => overlook.id !==action.payload.id
            )
        },
        toggleFavoriteOverlook: (state, action) => {
            const overlook = state.overlooksArray.find(
                (overlook) => overlook.id === action.payload.id
            );
            if (overlook) {
                overlook.favorite = !overlook.favorite
            }
        }
    }
});

export const overlooksReducer = overlooksSlice.reducer;

export const { addOverlook, removeOverlook, toggleFavoriteOverlook } = overlooksSlice.actions;

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

export const selectOverlooksByName = (title) => (state) => {
    return state.overlooks.overlooksArray.find(
        (overlook) => overlook.title === title
    )
};

export const selectFavoriteOverlooks = (state) => {
    return state.overlooks.overlooksArray.filter(
        (overlook) => overlook.favorite
    )
}

export const selectRandomOverlook = (state) => {
    return state.overlooks.overlooksArray[
        Math.floor(Math.random() * state.overlooks.overlooksArray.length)
    ]
};
