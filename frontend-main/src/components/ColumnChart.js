import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'วันที่ 1', uv: 4000, amt: 2400 },
  { name: 'วันที่ 2', uv: 3000, amt: 2210 },
  { name: 'วันที่ 3', uv: 2000, amt: 2290 },
  { name: 'วันที่ 4', uv: 2780, amt: 2000 },
  { name: 'วันที่ 5', uv: 1890, amt: 2181 },
  { name: 'วันที่ 6', uv: 2390, amt: 2500 },
  { name: 'วันที่ 7', uv: 3490, amt: 2100 },
];

const ColumnGraph = () => (
  <ResponsiveContainer width="90%" height={180}>
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={null} />
      <YAxis tick={null} />
      <Tooltip />
      <Bar dataKey="uv" fill="#53726E" barSize={20}/>
    </BarChart>
  </ResponsiveContainer>
);

export default ColumnGraph;
