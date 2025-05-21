"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    demand: 30,
    forecast: 35,
  },
  {
    name: "Feb",
    demand: 45,
    forecast: 50,
  },
  {
    name: "Mar",
    demand: 60,
    forecast: 65,
  },
  {
    name: "Apr",
    demand: 90,
    forecast: 95,
  },
  {
    name: "May",
    demand: 75,
    forecast: 80,
  },
  {
    name: "Jun",
    demand: 60,
    forecast: 65,
  },
  {
    name: "Jul",
    demand: 45,
    forecast: 50,
  },
  {
    name: "Aug",
    demand: 30,
    forecast: 35,
  },
  {
    name: "Sep",
    demand: 45,
    forecast: 50,
  },
  {
    name: "Oct",
    demand: 60,
    forecast: 65,
  },
  {
    name: "Nov",
    demand: 75,
    forecast: 80,
  },
  {
    name: "Dec",
    demand: 90,
    forecast: 95,
  },
]

export function PredictiveTrends() {
  return (
    <ChartContainer
      config={{
        demand: {
          label: "Actual Demand",
          color: "hsl(var(--chart-1))",
        },
        forecast: {
          label: "Forecast",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="demand"
            stroke="var(--color-demand)"
            fill="var(--color-demand)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="forecast"
            stroke="var(--color-forecast)"
            fill="var(--color-forecast)"
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
