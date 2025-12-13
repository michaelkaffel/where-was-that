import { createSlice } from '@reduxjs/toolkit';
import { HIKINGTRAILS } from '../../app/shared/HIKINGTRAILS';

const initialState = {
    hikesArray: HIKINGTRAILS
}

const hikesSlice = createSlice({
    name: 'hikes',
    initialState,
});

export const hikesReducer = hikesSlice.reducer;

export const selectAllHikes = (state) => {
    return state.hikes.hikesArray;
};

export const selectHikeById = (id) => (state) => {
    return state.hikes.hikesArray.find(
        (hike) => hike.id === parseInt(id)
    );
};

export const featuredCampsite = (state) => {
    return state.hikes.hikesArray.find((hike) => hike.featured);
};

export const selectRandomHike = (state) => {
    return state.hikes.hikesArray[
        Math.floor(Math.random() * state.hikes.hikesArray.length)
    ]
}