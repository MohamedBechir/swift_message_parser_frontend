import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.json_messages || initialState;

export const selectState = createSelector(
  [selectSlice],
  JsonMessagesState => JsonMessagesState,
);

export const selectIsSuccess = createSelector(
  [selectSlice],
  JsonMessagesState => JsonMessagesState.isSuccess,
);

export const selectIsError = createSelector(
  [selectSlice],
  JsonMessagesState => JsonMessagesState.isError,
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  JsonMessagesState => JsonMessagesState.errorMessage,
);
