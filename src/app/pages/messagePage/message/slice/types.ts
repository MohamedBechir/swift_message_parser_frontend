export interface MessageInfoState {
  length: number | undefined;
  id: string;
  senderBIC: string;
  receiverBIC: string;
  messageType: string;
  createdAt: string;
  totalPages: string;
  pageSize: string;
  pageNumber: string;
}

export interface MessageState {
  id: string;
  message: string;
}
