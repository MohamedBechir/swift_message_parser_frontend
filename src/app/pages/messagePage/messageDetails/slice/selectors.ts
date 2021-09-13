import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.message_details || initialState;

export const selectState = createSelector(
  [selectSlice],
  MessageDetailsState => MessageDetailsState,
);

export const selectBlock1 = createSelector(
  [selectSlice],
  MessageDetailsState => MessageDetailsState.block1,
);

export const selectBlock2 = createSelector(
  [selectSlice],
  MessageDetailsState => MessageDetailsState.block2,
);

export const selectTagBlock = createSelector(
  [selectSlice],
  MessageDetailsState => MessageDetailsState.tagBlock,
);
