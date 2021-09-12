// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { MessageState } from 'app/pages/messagePage/message/slice/types';
import { MessagesState } from 'app/pages/MessagesPage/MessagesList/slice/types';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
  messages: MessagesState;
  message: MessageState;
}
