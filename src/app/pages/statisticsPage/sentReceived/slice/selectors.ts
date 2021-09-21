import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.sent_received || initialState;

export const selectSentReceivedState = createSelector(
  [selectSlice],
  SentReceivedState => SentReceivedState,
);
