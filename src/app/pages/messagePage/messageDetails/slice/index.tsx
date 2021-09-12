import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessageDetailsRootState } from './saga';
import { MessageDetailsState } from './types';

export const initialState: MessageDetailsState = {
  id: '',
};

const slice = createSlice({
  name: 'message_details',
  initialState,
  reducers: {
    requestFetchMessageDetails(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    FetchMessageDetailsSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload);
    },
  },
});

export const { actions: fetchMessageDetailsActions } = slice;

export const useFetchMessageDetailsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessageDetailsRootState });
  return { actions: slice.actions };
};
