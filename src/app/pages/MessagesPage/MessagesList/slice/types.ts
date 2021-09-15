import { MessageInfoState } from 'app/pages/messagePage/message/slice/types';

export interface MessagesState {
  messageGeneralInfoModels: MessageInfoState[];
  page: string;
  size: string;
  totalPages: string;
}
