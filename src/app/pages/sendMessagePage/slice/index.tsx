import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchJsonMessagesRootState } from './saga';
import { JsonMessagesState } from './types';

export const initialState: JsonMessagesState = {
  jsonMessages: [],
};

const slice = createSlice({
  name: 'json_messages',
  initialState,
  reducers: {
    requestFetchJsonMessages() {},
    fetchJsonMessageSuccess(state, action: PayloadAction<any>) {
      state.jsonMessages = action.payload;
    },
  },
});

export const { actions: fetchJsonMessagesAction } = slice;
export const useFetchJsonMessages = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchJsonMessagesRootState });
  return { actions: slice.actions };
};
