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
    serviceID: '',
    sessionNumber: '',
  },
  block2: {
    input: '',
    messagePriority: '',
    messageType: '',
    output: '',
  },
  tagBlock: {
    blockNumber: '',
    fields: [],
  },
};

const slice = createSlice({
  name: 'message_details',
  initialState,
  reducers: {
    requestFetchMessageDetails(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    FetchMessageDetailsSuccess(state, action: PayloadAction<any>) {
      console.log(action.payload.tagBlock);
      state.block1 = action.payload.block1;
      state.block2 = action.payload.block2;
      state.tagBlock = action.payload.tagBlock;
    },
  },
});

export const { actions: fetchMessageDetailsActions } = slice;

export const useFetchMessageDetailsSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: fetchMessageDetailsRootState });
  return { actions: slice.actions };
};
