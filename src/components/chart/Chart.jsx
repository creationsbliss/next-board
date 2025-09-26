"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Mon", click: 1200, visit: 800 },
  { name: "Tue", click: 2300, visit: 1500 },
  { name: "Wed", click: 3400, visit: 2100 },
  { name: "Thu", click: 2800, visit: 1900 },
  { name: "Fri", click: 4000, visit: 2400 },
  { name: "Sat", click: 3700, visit: 2200 },
  { name: "Sun", click: 3100, visit: 1800 },
];

const Chart = () => (
  <div className="h-[350px] rounded-sm bg-sidebar-accent p-4">
    <h2 className="mb-6 text-xl">Weekly Report</h2>
    <ResponsiveContainer height="90%" width="100%">
      <LineChart
        data={data}
        height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        width={500}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            color: "#fff",
          }}
          labelStyle={{ fontWeight: "bold", color: "#000" }}
        />
        <Legend />
        <Line
          dataKey="click"
          stroke="#009689"
          strokeDasharray="5 5"
          type="monotone"
        />
        <Line
          dataKey="visit"
          stroke="#ffb900"
          strokeDasharray="3 4 5 2"
          type="monotone"
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default Chart;
