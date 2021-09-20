import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessagesPerTypeSaga } from './saga';
import { MessagesPerTypeState } from './Types';

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
    requestFetchMessagesPerType(state) {},
    FetchMessagesPerTypeSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const { actions: FetchMessagesPerTypeActions } = slice;

export const useFetchMessagesPerTypeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessagesPerTypeSaga });
  return { actions: slice.actions };
};
