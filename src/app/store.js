import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { hikesReducer } from '../features/hikes/hikesSlice';
import { overlooksReducer } from '../features/overlooks/overlooksSlice';
import { campsitesCommentsReducer } from '../features/campsites/campsitesCommentsSlice';
import { hikesCommentsReducer } from '../features/hikes/hikesCommentsSlice';
import { overlooksCommentsReducer } from '../features/overlooks/overlooksCommentsSlice';

const config = {
  key: 'root',
  storage,
}



export const store = configureStore({
  reducer: persistCombineReducers(config, {
    campsites: campsitesReducer,
    hikes: hikesReducer,
    overlooks: overlooksReducer,
    campsitescomments: campsitesCommentsReducer,
    hikescomments: hikesCommentsReducer,
    overlookscomments: overlooksCommentsReducer
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
            serializableCheck: {
                ignoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        }
    ).concat([logger])
});

export const persistor = persistStore(store)