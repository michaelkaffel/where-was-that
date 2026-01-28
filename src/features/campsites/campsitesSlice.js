import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
    'campsites/fetchCampsites',
    async () => {
        const response = await fetch(baseUrl + 'campsites');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status)
        }
        const data = await response.json()
        return data;
    }
);

export const postCampsite = createAsyncThunk(
    'campsites/postCampsite',
    async ( campsite, { dispatch } ) => {
        const response = await fetch(baseUrl + 'campsites', {
            method: 'POST',
            body: JSON.stringify(campsite),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            return Promise.reject('Unable to post, status: ' + response.status);
        }
        const data = await response.json()
        dispatch(addCampsite(data))
    }
) 

export const deleteCampsite = createAsyncThunk(
    'campsites/deleteCampsite',
    async ( campsite, { dispatch } ) => {
        const response = await fetch(baseUrl + 'campsites/' + campsite.id, {
            method: 'DELETE'
        });
        if (!response.ok) {
            return Promise.reject('Unable to delete, status: ' + response.status)
        }
        const data = await response.json()
        
        dispatch(removeCampsite(campsite.id))
        return data
    }
)

export const patchFavCampsite = createAsyncThunk(
    'campsites/patchFavCampsite',
    async ( campsite, { dispatch } ) => {
        const response = await fetch(baseUrl + 'campsites/' + campsite.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ favorite: !campsite.favorite})
        });
        if (!response.ok) {
            return Promise.reject('Unable to update status, status: ' + response.status)
        }
        const data = await response.json()
        dispatch(toggleFavoriteCampsite(data.id))
        return data
    }
)

const initialState = {
    campsitesArray: [],
    isLoading: true,
    errMsg: ''
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
                (campsite) => campsite.id !== action.payload
            )
        },
        toggleFavoriteCampsite: (state, action) => {
            const campsite = state.campsitesArray.find(
                (campsite) => campsite.id === action.payload
            );
            if (campsite) {
                campsite.favorite = !campsite.favorite
            }

        }
    },
    extraReducers: {
        [fetchCampsites.pending]: (state) => {
            state.isLoading = true;
            state.errMsg = '';
        },
        [fetchCampsites.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.campsitesArray = mapImageURL(action.payload);
        },
        [fetchCampsites.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed'
        },
        [postCampsite.rejected]: (state, action) => {
            alert(
                'Your campsite could not be posted\nError: ' +
                (action.error ? action.error.message : 'POST failed')
            )
        },
        [deleteCampsite.rejected]: (state, action) => {
            alert(
                'Your campsite could not be deleted\nError: ' +
                (action.error ? action.error.message : 'DELETE failed')
            )
        }
    }
}
);

export const campsitesReducer = campsitesSlice.reducer;

export const { addCampsite, removeCampsite, toggleFavoriteCampsite } = campsitesSlice.actions;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray.toReversed();
};

export const selectCampsiteById = (id) => (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.id === parseInt(id)
    );
};

export const featuredCampsite = (state) => {
    return state.campsites.campsitesArray.find(
        (campsite) => campsite.featured
    );
};

export const selectFavoriteCampsites = (state) => {
    return state.campsites.campsitesArray.filter(
        (campsite) => campsite.favorite
    ).toReversed(); 
};

export const selectRandomCampsite = (state) => {
    return state.campsites.campsitesArray[
        Math.floor(Math.random() * state.campsites.campsitesArray.length)
    ]
}