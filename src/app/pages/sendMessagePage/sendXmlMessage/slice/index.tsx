import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { XmlMessagesRootState } from './saga';
import { XmlMessagesState } from './types';

export const initialState: XmlMessagesState = {
  XmlMessages: [],
  id: '',
};

const slice = createSlice({
  name: 'xml_messages',
  initialState,
  reducers: {
    requestFetchXmlMessages() {},
    fetchXmlMessageSuccess(state, action: PayloadAction<any>) {
      state.XmlMessages = action.payload;
    },
    requestSendMessage(state, action: PayloadAction<{ id: string }>) {
      state.id = action.payload.id;
    },
    sendMessageSuccess(state, action: PayloadAction<any>) {
      state.responseMessage = action.payload.responseMessage;
    },
  },
});

export const { actions: fetchXmlMessagesAction } = slice;
export const useFetchXmlMessages = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: XmlMessagesRootState });
  return { actions: slice.actions };
};
