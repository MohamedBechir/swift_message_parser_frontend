import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { uploadFileRootState } from './saga';
import { FileState } from './types';

export const initialState: FileState = {
  files: [],
};

const slice = createSlice({
  name: 'upload_file',
  initialState,
  reducers: {
    requestUploadFile(state, action: PayloadAction<{ files: File }>) {},
    uploadFileSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
    },
  },
});

export const { actions: uploadFileActions } = slice;

export const useFileUploadSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: uploadFileRootState });
  return { actions: slice.actions };
};
