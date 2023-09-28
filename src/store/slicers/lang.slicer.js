import { createSlice } from '@reduxjs/toolkit';
import { initial_state } from '../../lib/constants';

const INITIAL_STATE = {
  textLang: initial_state,
}; /* string*/

const language = createSlice({
  name: 'language',
  initialState: INITIAL_STATE,
  reducers: {
    switchLang: (state, { payload }) => payload,
  },
});

const { actions } = language;
export const { switchLang } = actions;
export default language;
