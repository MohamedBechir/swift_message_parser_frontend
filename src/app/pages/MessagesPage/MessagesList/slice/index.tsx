import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessagesRootState } from './saga';
import { MessagesState } from './types';

export const initialState: MessagesState = {
  messages: [],
  page: '',
  size: '',
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    requestFetchMessages(
      state,
      action: PayloadAction<{ page: string; size: string }>,
    ) {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    FetchMessagesSuccess(state, action: PayloadAction<any>) {
      state.messages = action.payload;
      return state;
    },
  },
});

export const { actions: fetchMessagesActions } = slice;

export const useFetchMessagesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessagesRootState });
  return { actions: slice.actions };
};
