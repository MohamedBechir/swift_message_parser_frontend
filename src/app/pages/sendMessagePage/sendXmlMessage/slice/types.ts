export interface XmlMessagesState {
  id?: string;
  XmlMessages: XMLMessage[];
  responseMessage?: String;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export interface XMLMessage {
  messages: string;
  messageID: string;
  messageType: string;
  sentXml: boolean;
}
