import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchLastFiveMessagesSaga } from './saga';
import { LastFiveMessagesState } from './types';

export const initialState: LastFiveMessagesState[] = [];

const slice = createSlice({
  name: 'last_five_messages',
  initialState,
  reducers: {
    requestFetchLastFiveMessages(state) {},
    FetchLastFiveMessagesSuccess(state, action: PayloadAction<any>) {
      state = action.payload;
      return state;
    },
  },
});

export const { actions: FetchLastFiveMessagesActions } = slice;

export const useFetchLastFiveMessagesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchLastFiveMessagesSaga });
  return { actions: slice.actions };
};
