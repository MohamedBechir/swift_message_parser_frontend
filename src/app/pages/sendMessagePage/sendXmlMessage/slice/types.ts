export interface XmlMessagesState {
  id?: string;
  XmlMessages: XMLMessage[];
  responseMessage?: String;
}

export interface XMLMessage {
  messages: string;
  messageID: string;
  messageType: string;
}
