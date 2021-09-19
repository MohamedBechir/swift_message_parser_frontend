/**
 * Pie Chart Of the received types of messages
 */
import { memo } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export const MyPieChart = memo(() => {
  const data = [
    { name: 'MT101', value: 400 },
    { name: 'MT102', value: 300 },
    { name: 'MT304', value: 300 },
    { name: 'MT350', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#F49D37', '#FF8042'];

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
      <div className=" ml-3 half-quarter">
        Diagram: Based On the Most Received Types of Messages
      </div>
    </>
  );
});
