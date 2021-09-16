import { MessageDetailsState } from 'app/pages/messagePage/messageDetails/slice/types';

export interface XmlMessagesState {
  id?: string;
  XmlMessages: MessageDetailsState[];
  responseMessage?: String;
}
