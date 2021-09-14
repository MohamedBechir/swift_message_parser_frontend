import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.message_details || initialState;

export const selectState = createSelector(
  [selectSlice],
  MessageListOfDetailsState => MessageListOfDetailsState,
);
