import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { JsonMessagesRootState } from './saga';
import { JsonMessagesState } from './types';

export const initialState: JsonMessagesState = {
  jsonMessages: [],
  id: '',
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'json_messages',
  initialState,
  reducers: {
    requestFetchJsonMessages() {},
    fetchJsonMessageSuccess(state, action: PayloadAction<any>) {
      state.jsonMessages = action.payload;
    },
    requestSendMessage(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    sendMessageSuccess(state, action: PayloadAction<any>) {
      state.isSuccess = true;
      state.responseMessage = action.payload.responseMessage;
    },
    sendMessageError(state, action: PayloadAction<any>) {
      state.errorMessage =
        'An error occured, Message not sent, refresh page and retry please';
      state.isError = true;
    },
  },
});

export const { actions: fetchJsonMessagesAction } = slice;
export const useFetchJsonMessages = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: JsonMessagesRootState });
  return { actions: slice.actions };
};
