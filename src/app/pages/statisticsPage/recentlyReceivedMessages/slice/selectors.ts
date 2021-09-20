import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) =>
  state.last_five_messages || initialState;

export const selectState = createSelector(
  [selectSlice],
  LastFiveMessagesState => LastFiveMessagesState,
);
