import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.xml_messages || initialState;

export const selectState = createSelector(
  [selectSlice],
  xmlMessagesState => xmlMessagesState,
);
