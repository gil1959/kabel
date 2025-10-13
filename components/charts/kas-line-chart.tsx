"use client"
import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "JAN", total: 200 },
  { name: "FEB", total: 380 },
  { name: "MAR", total: 340 },
  { name: "APR", total: 420 },
  { name: "MEI", total: 400 },
  { name: "JUN", total: 560 },
  { name: "JUL", total: 620 },
  { name: "AGT", total: 460 },
  { name: "SEP", total: 720 },
  { name: "OKT", total: 780 },
  { name: "NOV", total: 820 },
  { name: "DES", total: 900 },
]

export function KasLineChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="oklch(0.61 0.17 255)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
