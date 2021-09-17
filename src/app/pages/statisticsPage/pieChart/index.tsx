/**
 * Messages Details
 */
import { memo } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export const MyPieChart = memo(() => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <div className="col-md-6 half-quarter">
        <PieChart className="mt-5" width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            outerRadius={110}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="col-md-6 half-quarter">
        Diagram Based On the Most Received Types of Messages:
        <div className="col-md-6 quarter mt-5">
          <div>hello</div>
        </div>
        <div className="col-md-6 quarter mt-5">
          <div>hello</div>
        </div>
      </div>
    </>
  );
});
