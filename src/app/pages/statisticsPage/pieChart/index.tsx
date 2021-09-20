/**
 * Pie Chart Of the received types of messages
 */
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import { useFetchMessagesPerTypeSlice } from './slice';
import { selectState } from './slice/selectors';

export const MyPieChart = memo(() => {
  const { actions } = useFetchMessagesPerTypeSlice();
  const dispatch = useDispatch();
  dispatch(actions.requestFetchMessagesPerType());
  let messagesPerType = useSelector(selectState);
  const COLORS = ['#0088FE', '#00C49F', '#F49D37', '#FF8042', '#fb8585'];

  return (
    <>
      <div className="col-md-6 half-quarter">
        <PieChart className="mt-5" width={300} height={290}>
          <Legend
            className="ml-5"
            layout="vertical"
            verticalAlign="top"
            align="left"
          />
          <Pie
            legendType="circle"
            data={messagesPerType}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={110}
            dataKey="value"
          >
            {messagesPerType.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className=" ml-3 half-quarter">
        Diagram: Based On the Most Received Types of Messages
      </div>
    </>
  );
});
