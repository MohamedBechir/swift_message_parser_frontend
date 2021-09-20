import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
const selectSlice = (state: RootState) => state.upload_file || initialState;

export const selectIsSuccess = createSelector(
  [selectSlice],
  FileState => FileState.isSuccess,
);

export const selectIsError = createSelector(
  [selectSlice],
  FileState => FileState.isError,
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  FileState => FileState.errorMessage,
);
