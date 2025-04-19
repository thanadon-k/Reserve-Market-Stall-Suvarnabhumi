import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 100 },
];

const COLORS = ['#53726E', '#656262', '#D9D9D9'];

const DoughnutChart = () => (
  <ResponsiveContainer width="100%" height={150}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={30}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default DoughnutChart;
