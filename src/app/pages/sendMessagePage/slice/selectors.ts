import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.json_messages || initialState;

export const selectState = createSelector(
  [selectSlice],
  JsonMessagesState => JsonMessagesState,
);
