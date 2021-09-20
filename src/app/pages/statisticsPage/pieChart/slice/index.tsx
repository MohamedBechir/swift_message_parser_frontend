import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchStatisticsSaga } from './saga';
import { StatisticsState } from './Types';

export const initialState: StatisticsState[] = [
  {
    name: '',
    value: 0,
  },
];

const slice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    requestFetchStatistics(state) {},
    FetchStatisticsSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const { actions: FetchStatisticsActions } = slice;

export const useFetchStatisticsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchStatisticsSaga });
  return { actions: slice.actions };
};
