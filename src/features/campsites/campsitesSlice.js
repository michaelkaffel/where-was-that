import { createSlice } from '@reduxjs/toolkit'
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = { 
    campsitesArray: CAMPSITES
}

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState,
    reducers: {
        addCampsite: (state, action) => {
            const newCampsite = {
                id: state.campsitesArray.length,
                ...action.payload
            };
            state.campsitesArray.push(newCampsite)
        },
        removeCampsite: (state, action) => {
            state.campsitesArray = state.campsitesArray.filter(
                (campsite) => campsite.id !== action.payload.id
            )
        }
    }
});

export const campsitesReducer = campsitesSlice.reducer;

export const { addCampsite, removeCampsite } = campsitesSlice.actions;

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