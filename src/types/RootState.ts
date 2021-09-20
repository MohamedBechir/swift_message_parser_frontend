// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { MessageState } from 'app/pages/messagePage/message/slice/types';
import { MessageDetailsState } from 'app/pages/messagePage/messageDetails/slice/types';
import { MessagesState } from 'app/pages/MessagesPage/MessagesList/slice/types';
import { JsonMessagesState } from 'app/pages/sendMessagePage/sendJsonMessage/slice/types';
import { XmlMessagesState } from 'app/pages/sendMessagePage/sendXmlMessage/slice/types';
import { MessagesPerTypeState } from 'app/pages/statisticsPage/pieChart/slice/Types';
import { LastFiveMessagesState } from 'app/pages/statisticsPage/recentlyReceivedMessages/slice/types';
import { FileState } from 'app/pages/uploadMessagePage/DropArea/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  messages: MessagesState;
  message: MessageState;
  message_details: MessageDetailsState;
  upload_file: FileState;
  json_messages: JsonMessagesState;
  xml_messages: XmlMessagesState;
  messages_per_type: MessagesPerTypeState[];
  last_five_messages: LastFiveMessagesState[];
}
