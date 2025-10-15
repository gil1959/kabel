// components/charts/kas-line-chart.tsx
"use client"

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const data = [
  { name: "JAN", val: 40 },
  { name: "FEB", val: 85 },
  { name: "MAR", val: 70 },
  { name: "APR", val: 95 },
  { name: "MEI", val: 80 },
  { name: "JUN", val: 120 },
  { name: "JUL", val: 130 },
  { name: "AGT", val: 90 },
  { name: "SEP", val: 160 },
  { name: "OKT", val: 170 },
  { name: "NOV", val: 180 },
  { name: "DES", val: 190 },
]

export function KasLineChart() {
  // WRAP WITH A DIV THAT HAS EXPLICIT HEIGHT!
  return (
    <div className="h-[220px] w-full rounded-md border border-[#E6ECF8] bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 16, right: 24, left: 8, bottom: 8 }}>
          <CartesianGrid stroke="#EEF3FF" />
          <XAxis dataKey="name" tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="val" stroke="#2F80ED" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
