import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchStatisticsRootState } from './saga';
import { SentReceivedState } from './types';

export const initialState: SentReceivedState[] = [
  {
    name: '',
    value: 0,
  },
];

const slice = createSlice({
  name: 'sent_received',
  initialState,
  reducers: {
    requestFetchSentReceived(state) {},
    FetchMessagesSentReceivedSuccess(state, action: PayloadAction<any>) {
      state = action.payload;
      return state;
    },
  },
});

export const { actions: FetchSentReceivedActions } = slice;

export const useFetchSentReceivedSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchStatisticsRootState });
  return { sentreceivedactions: slice.actions };
};
