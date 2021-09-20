/**
 * Pie Chart Of the received types of messages
 */
import { memo } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

interface props {
  data: any;
  COLORS: any;
  diagramName: string;
}

export const MyPieChart = memo(({ data, COLORS, diagramName }: props) => {
  return (
    <>
      <div className="col-md-6 half-quarter">
        <PieChart className="mt-5" width={400} height={290}>
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
      <div className=" ml-3 mb-2 half-quarter">{diagramName}</div>
    </>
  );
});
