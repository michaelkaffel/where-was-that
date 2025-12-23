import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITESCOMMENTS } from '../../app/shared/CAMPSITESCOMMENTS';

const initialState = {
    campsitesCommentsArray: CAMPSITESCOMMENTS
};

const campsitesCommentsSlice = createSlice({
    name: 'campsitescomments',
    initialState,
    reducers: {
        addCampComment: (state, action) => {
            const newCampComment = {
                id: state.campsitesCommentsArray.length + 1,
                ...action.payload
            };
            state.campsitesCommentsArray.push(newCampComment)
        }
    }
});

export const campsitesCommentsReducer = campsitesCommentsSlice.reducer;

export const { addCampComment } = campsitesCommentsSlice.actions;

export const selectCampsitesCommentsbyCampsiteId = (campsiteId) => (state) => {
    return state.campsitescomments.campsitesCommentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    )
};