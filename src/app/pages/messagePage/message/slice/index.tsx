import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessageRootState } from './saga';
import { MessageState } from './types';

export const initialState: MessageState = {
  id: '',
  message: '',
};

const slice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    requestFetchMessage(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    FetchMessageSuccess(state, action: PayloadAction<any>) {
      state.message = action.payload;
    },
  },
});

export const { actions: fetchMessageActions } = slice;

export const useFetchMessageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessageRootState });
  return { actions: slice.actions };
};
