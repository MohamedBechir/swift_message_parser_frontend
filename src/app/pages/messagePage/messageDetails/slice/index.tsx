import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { fetchMessageDetailsRootState } from './saga';
import { MessageDetailsState } from './types';

export const initialState: MessageDetailsState = {
  id: '',
  block1: {
    applicationId: '',
    logicalTerminal: '',
    sequenceNumber: '',
    serviceId: '',
    sessionNumber: '',
  },
  block2: {
    messageDirection: '',
    messagePriority: '',
    messageType: '',
  },
  tagBlock: [
    {
      blockNumber: '',
      fields: [],
    },
  ],
};

const slice = createSlice({
  name: 'message_details',
  initialState,
  reducers: {
    requestFetchMessageDetails(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    FetchMessageDetailsSuccess(state, action: PayloadAction<any>) {
      state.block1 = action.payload.block1;
      state.block2 = action.payload.block2;
      state.tagBlock = action.payload.tagBlock;
      return state;
    },
  },
});

export const { actions: fetchMessageDetailsActions } = slice;

export const useFetchMessageDetailsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessageDetailsRootState });
  return { actions: slice.actions };
};
