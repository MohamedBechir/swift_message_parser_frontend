/**
 * Pie Chart Of the received types of messages
 */
import { memo } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchLastFiveMessagesSlice } from './slice';
import { selectState } from './slice/selectors';

export const MyRecentlyReceived = memo(() => {
  const { actions } = useFetchLastFiveMessagesSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchLastFiveMessages());
  let lastFiveMessage = useSelector(selectState);
  return (
    <>
      <h3 className="ml-3 mt-2">Recently Received Messages: </h3>
      {lastFiveMessage.map(msg => (
        <Card
          bg="Light"
          className="mb-2 w-25 mt-3 ml-3 mr-3"
          style={{ float: 'left' }}
        >
          <Card.Header>MT{msg}</Card.Header>
        </Card>
      ))}
    </>
  );
});
