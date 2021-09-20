/**
 * Pie Chart Of the received types of messages
 */
import { memo } from 'react';
import { Card } from 'react-bootstrap';

export const MyRecentlyReceived = memo(() => {
  return (
    <>
      <h3 className="ml-3 mt-2">Recently Received Messages: </h3>
      <Card
        bg="Light"
        className="mb-2 w-25 mt-5 ml-3 mr-3"
        style={{ float: 'left' }}
      >
        <Card.Header>MT101</Card.Header>
      </Card>
      <Card
        bg="Light"
        className="mb-2 w-25 mt-5 ml-3 mr-3"
        style={{ float: 'left' }}
      >
        <Card.Header>MT202</Card.Header>
      </Card>
      <Card
        bg="Light"
        className="mb-2 w-25 mt-5 ml-3 mr-3"
        style={{ float: 'left' }}
      >
        <Card.Header>MT103</Card.Header>
      </Card>
      <Card
        bg="Light"
        className="mb-2 w-25 mt-5 ml-3 mr-3"
        style={{ float: 'left' }}
      >
        <Card.Header>MT105</Card.Header>
      </Card>
      <Card
        bg="Light"
        className="mb-2 w-25 mt-5 ml-3 mr-3"
        style={{ float: 'left' }}
      >
        <Card.Header>MT106</Card.Header>
      </Card>
    </>
  );
});
