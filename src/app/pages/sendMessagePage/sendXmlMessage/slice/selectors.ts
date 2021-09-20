import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.xml_messages || initialState;

export const selectState = createSelector(
  [selectSlice],
  xmlMessagesState => xmlMessagesState,
);

export const selectIsSuccess = createSelector(
  [selectSlice],
  XmlMessagesState => XmlMessagesState.isSuccess,
);

export const selectIsError = createSelector(
  [selectSlice],
  XmlMessagesState => XmlMessagesState.isError,
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  XmlMessagesState => XmlMessagesState.errorMessage,
);
