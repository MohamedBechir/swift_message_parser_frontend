export interface MessageDetailsState {
  id: string;
  block1: Block1;
  block2: Block2;
  tagBlock: TagBlock;
}

export interface Block1 {
  applicationId: string;
  logicalTerminal: string;
  sequenceNumber: string;
  serviceID: string;
  sessionNumber: string;
}

export interface Block2 {
  messagePriority: string;
  messageType: string;
  input: string;
  output: string;
}

export interface TagBlock {
  blockNumber: string;
  fields: Field[];
}

export interface Field {
  tagName: string;
  tagValue: string;
}
