import { MessageDetailsState } from 'app/pages/messagePage/messageDetails/slice/types';

export interface JsonMessagesState {
  id?: string;
  jsonMessages: MessageDetailsState[];
  responseMessage?: String;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}
