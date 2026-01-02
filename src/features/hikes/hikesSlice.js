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
            const identifier = Math.floor(Math.random() * 10000 );
            
            const newHike = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'hike',
                ...action.payload
            };
            state.hikesArray.push(newHike);
        },
        removeHike: (state, action) => {
            state.hikesArray = state.hikesArray.filter(
                (hike) => hike.id !== action.payload.id
            )
        },
        toggleFavoriteHike: (state, action) => {
            const hike = state.hikesArray.find(
                (hike) => hike.id === action.payload.id
            );
            if (hike) {
                hike.favorite = !hike.favorite
            }
        }
    }
});

export const hikesReducer = hikesSlice.reducer;

export const { addHike, removeHike, toggleFavoriteHike } = hikesSlice.actions;

export const selectAllHikes = (state) => {
    return state.hikes.hikesArray.toReversed();
};

export const selectHikeById = (id) => (state) => {
    return state.hikes.hikesArray.find(
        (hike) => hike.id === parseInt(id)
    );
};

export const featuredHike = (state) => {
    return state.hikes.hikesArray.find((hike) => hike.featured);
};

export const selectFavoriteHikes = (state) => {
    return state.hikes.hikesArray.filter((hike) => hike.favorite)
}

export const selectRandomHike = (state) => {
    return state.hikes.hikesArray[
        Math.floor(Math.random() * state.hikes.hikesArray.length)
    ]
}