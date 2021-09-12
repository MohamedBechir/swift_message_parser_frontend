/**
 * Whole Message Component
 */

import { memo } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchMessageSlice } from './slice';
import { selectState } from './slice/selectors';

interface props {
  id: string;
}

export const Message = memo(({ id }: props) => {
  const { actions } = useFetchMessageSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessage({ id: id }));
  const message = useSelector(selectState);
  console.log(message);
  return (
    <>
      <Form.Group
        className=" mt-3 mr-5"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          placeholder={message.message}
          className="mr-5"
          readOnly
        />
      </Form.Group>
    </>
  );
});
