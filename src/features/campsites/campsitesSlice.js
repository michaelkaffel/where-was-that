import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {
        addCampsite: (state, action) => {

            const identifier = Math.floor(Math.random() * 10000);

            const newCampsite = {
                id: identifier,
                key: identifier,
                kindOfPlace: 'campsite',
                ...action.payload
            };
            state.campsitesArray.push(newCampsite)
        },
        removeCampsite: (state, action) => {
            state.campsitesArray = state.campsitesArray.filter(
                (campsite) => campsite.id !== action.payload.id
            )
        },
        toggleFavoriteCampsite: (state, action) => {
            const campsite = state.campsitesArray.find(
                (campsite) => campsite.id === action.payload.id
            );
            if (campsite) {
                campsite.favorite = !campsite.favorite
            }

        }
    }
}
);

export const campsitesReducer = campsitesSlice.reducer;

export const { addCampsite, removeCampsite, toggleFavoriteCampsite } = campsitesSlice.actions;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const featuredCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};

export const selectRandomCampsite = (state) => {
    return state.campsites.campsitesArray[
        Math.floor(Math.random() * state.campsites.campsitesArray.length)
    ]
}