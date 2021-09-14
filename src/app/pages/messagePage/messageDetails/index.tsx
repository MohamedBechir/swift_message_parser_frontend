/**
 * Messages Details
 */
import { memo, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Block1Component } from './Blocks/Block1';
import { Block2Component } from './Blocks/Block2';
import { TagBlocksComponent } from './Blocks/TagBlocks';
import { useFetchMessageDetailsSlice } from './slice';
import { selectState } from './slice/selectors';

interface props {
  id: string;
}

export const MessageDetails = memo(({ id }: props) => {
  const features = ['TAG', 'VALUE'];

  const { actions } = useFetchMessageDetailsSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.requestFetchMessageDetails({ id: id }));
  }, [id, actions, dispatch]);
  const messageBlocks = useSelector(selectState);
  const tagBlocks = messageBlocks.tagBlock.filter(
    tagBlock => tagBlock.fields.length > 0,
  );

  return (
    <>
      <Col>
        <Block1Component block1={messageBlocks.block1} features={features} />
      </Col>
      <Col>
        <Block2Component block2={messageBlocks.block2} features={features} />
      </Col>
      {tagBlocks.map(tagBlock => (
        <Col>
          <TagBlocksComponent
            fields={tagBlock.fields}
            features={features}
          ></TagBlocksComponent>
        </Col>
      ))}
    </>
  );
});
