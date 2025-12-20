import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { hikesReducer } from '../features/hikes/hikesSlice';
import { overlooksReducer } from '../features/overlooks/overlooksSlice';


export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      hikes: hikesReducer,
      overlooks: overlooksReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
