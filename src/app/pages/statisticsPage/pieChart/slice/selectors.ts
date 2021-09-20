import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) =>
  state.messages_per_type || initialState;

export const selectState = createSelector(
  [selectSlice],
  MessagesPerTypeState => MessagesPerTypeState,
);
