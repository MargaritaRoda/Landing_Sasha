import { combineReducers } from 'redux';
import language from './slicers/lang.slicer';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slicers/apiSlice';

const rootReducer = combineReducers({
  [language.name]: language.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    middlewares.push(apiSlice.middleware);
    return middlewares;
  },
});
