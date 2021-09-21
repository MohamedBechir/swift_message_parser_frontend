export interface MessageDetailsState {
  id: string;
  block1: Block1;
  block2: Block2;
  tagBlock: TagBlock[];
  messageId?: string;
  sentJson: boolean;
}

export interface Block1 {
  applicationId: string;
  serviceId: string;
  logicalTerminal: string;
  sessionNumber: string;
  sequenceNumber: string;
}

export interface Block2 {
  messagePriority: string;
  messageType: string;
  messageDirection: string;
}

export interface TagBlock {
  blockNumber: string;
  fields: Field[];
}

export interface Field {
  tagName: string;
  tagValue: string;
}
