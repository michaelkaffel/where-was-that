import { createSlice } from '@reduxjs/toolkit';
import { HIKESCOMMENTS } from '../../app/shared/HIKESCOMMENTS';

const initialState = {
    hikesCommentsArray: HIKESCOMMENTS
};

const hikesCommentsSlice = createSlice({
    name: 'hikescomments',
    initialState,
    reducers: {
        addHikeComment: (state, action) => {
            const newHikeComment = {
                id: state.hikesCommentsArray.length + 1,
                ...action.payload
            };
            state.hikesCommentsArray.push(newHikeComment)
        }
    }
});

export const hikesCommentsReducer = hikesCommentsSlice.reducer;

export const { addHikeComment } = hikesCommentsSlice.actions;

export const selectHikesCommentsByHikesId = (hikeId) => (state) => {
    return state.hikescomments.hikesCommentsArray.filter(
        (comment) => comment.hikeId === parseInt(hikeId)
    )
};