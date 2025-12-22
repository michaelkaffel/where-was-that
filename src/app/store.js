import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { hikesReducer } from '../features/hikes/hikesSlice';
import { overlooksReducer } from '../features/overlooks/overlooksSlice';
import { campsitesCommentsReducer } from '../features/campsites/campsitesCommentsSlice';


export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      hikes: hikesReducer,
      overlooks: overlooksReducer,
      campsitescomments: campsitesCommentsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
