export interface MessageInfoState {
  id: string;
  senderBIC: string;
  receiverBIC: string;
  messageType: string;
  createdAt: string;
}

export interface MessageState {
  id: string;
  message: string;
}
