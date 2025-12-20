import { createSlice } from '@reduxjs/toolkit';
import { HIKINGTRAILS } from '../../app/shared/HIKINGTRAILS';

const initialState = {
    hikesArray: HIKINGTRAILS
}

const hikesSlice = createSlice({
    name: 'hikes',
    initialState,
    reducers: {
        addHike: (state, action) => {
            console.log('addHike action.payload', action.payload);
            console.log('addHike state.hikesArray', state.hikesArray)
            const newHike = {
                id: state.hikesArray.length,
                key: Math.floor(Math.random() * 100000),
                ...action.payload
            };
            state.hikesArray.push(newHike);
        },
        removeHike: (state, action) => {
            state.hikesArray = state.hikesArray.filter(
                (hike) => hike.id !== action.payload.id
            )
        }
    }
});

export const hikesReducer = hikesSlice.reducer;

export const { addHike, removeHike } = hikesSlice.actions;

export const selectAllHikes = (state) => {
    return state.hikes.hikesArray;
};

export const selectHikeById = (id) => (state) => {
    return state.hikes.hikesArray.find(
        (hike) => hike.id === parseInt(id)
    );
};

export const featuredHike = (state) => {
    return state.hikes.hikesArray.find((hike) => hike.featured);
};

export const selectRandomHike = (state) => {
    return state.hikes.hikesArray[
        Math.floor(Math.random() * state.hikes.hikesArray.length)
    ]
}