import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessagesRootState } from './saga';
import { MessagesState } from './types';

export const initialState: MessagesState = {
  messageGeneralInfoModels: [],
  page: '',
  size: '',
  totalPages: '',
  messageType: '',
};

const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    requestFetchMessages(
      state,
      action: PayloadAction<{
        page: string;
        size: string;
      }>,
    ) {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    FetchMessagesSuccess(state, action: PayloadAction<any>) {
      state.messageGeneralInfoModels = action.payload.messageGeneralInfoModels;
      state.size = action.payload.pageSize;
      state.page = action.payload.pageNumber;
      state.totalPages = action.payload.totalPages;
      return state;
    },
    requestFetchMessagesPerType(
      state,
      action: PayloadAction<{
        messageType: string;
      }>,
    ) {
      state.messageType = action.payload.messageType;
    },
    FetchMessagesSuccessPerType(state, action: PayloadAction<any>) {
      state.messageGeneralInfoModels = action.payload.messageGeneralInfoModels;
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
