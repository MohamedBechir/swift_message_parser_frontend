import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { MessagesPerTypeState } from '../../pieChart/slice/Types';
import { fetchStatisticsRootState } from './saga';

export const initialState: MessagesPerTypeState[] = [
  {
    name: '',
    value: 0,
  },
];

const slice = createSlice({
  name: 'messages_per_type',
  initialState,
  reducers: {
    requestFetchSentReceived(state) {},
    FetchMessagesSentReceivedSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
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
