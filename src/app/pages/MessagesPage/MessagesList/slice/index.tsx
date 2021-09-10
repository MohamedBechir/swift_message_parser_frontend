import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessagesRootState } from './saga';
import { MessagesState } from './types';

export const initialState: MessagesState = {
  messages: [],
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    requestFetchMessages(state) {},
    FetchMessagesSuccess(state, action: PayloadAction<any>) {
      state.messages = action.payload;
    },
  },
});

export const { actions: fetchMessagesActions } = slice;

export const useFetchMessagesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessagesRootState });
  return { actions: slice.actions };
};
