import { createSlice } from '@reduxjs/toolkit';
import { OVERLOOKSCOMMENTS } from '../../app/shared/OVERLOOKSCOMMENTS'

const initialState = {
    overlooksCommentsArray: OVERLOOKSCOMMENTS
};

const overlooksCommentsSlice = createSlice({
    name: 'overlookscomments',
    initialState,
    reducers: {
        addOverlookComment: (state, action) => {
            const newOverlookComment = {
                id: state.overlooksCommentsArray.length + 1,
                ...action.payload
            };
            state.overlooksCommentsArray.push(newOverlookComment)
        }
    }
});

export const overlooksCommentsReducer = overlooksCommentsSlice.reducer;

export const { addOverlookComment } = overlooksCommentsSlice.actions;

export const selectOverlooksCommentsByOverlookId = (overlookId) => (state) => {
    return state.overlookscomments.overlooksCommentsArray.filter(
        (comment) => comment.overlookId === parseInt(overlookId)
    )
};