"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Green",
    value: 540,
    description: "Engaged, high spenders",
  },
  {
    name: "Yellow",
    value: 350,
    description: "Needs follow-up",
  },
  {
    name: "Red",
    value: 120,
    description: "Churn risk",
  },
]

export function CustomerHealthScorecard() {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Customers",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} className="fill-primary" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
