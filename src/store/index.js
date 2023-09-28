import { combineReducers } from 'redux';
import language from './slicers/lang.slicer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [language.name]: language.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
