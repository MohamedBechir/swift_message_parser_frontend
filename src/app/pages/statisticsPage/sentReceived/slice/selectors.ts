import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) =>
  state.messages_per_type || initialState;

export const selectSentReceivedState = createSelector(
  [selectSlice],
  SentReceivedState => SentReceivedState,
);
