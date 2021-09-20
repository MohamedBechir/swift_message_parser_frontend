import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { uploadFileRootState } from './saga';
import { FileState } from './types';

export const initialState: FileState = {
  files: [],
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'upload_file',
  initialState,
  reducers: {
    requestUploadFile(state, action: PayloadAction<{ files: File }>) {
      state.isSuccess = false;
      state.isError = false;
    },
    uploadFileSuccess(state, action: PayloadAction<any>) {
      state.isSuccess = true;
    },
    uploadFileError(state, action: PayloadAction<any>) {
      state.isError = true;
      state.errorMessage = 'An error occured, retry please!';
    },
  },
});

export const { actions: uploadFileActions } = slice;

export const useFileUploadSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: uploadFileRootState });
  return { actions: slice.actions };
};
