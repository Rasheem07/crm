"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Ramadan",
    openRate: 65,
    conversionRate: 12,
    revenue: 25000,
  },
  {
    name: "Eid",
    openRate: 78,
    conversionRate: 18,
    revenue: 42000,
  },
  {
    name: "Summer",
    openRate: 62,
    conversionRate: 10,
    revenue: 18000,
  },
  {
    name: "DSF",
    openRate: 72,
    conversionRate: 15,
    revenue: 35000,
  },
  {
    name: "National Day",
    openRate: 80,
    conversionRate: 20,
    revenue: 48000,
  },
]

export function CampaignPerformance() {
  return (
    <ChartContainer
      config={{
        openRate: {
          label: "Open Rate %",
          color: "hsl(var(--chart-1))",
        },
        conversionRate: {
          label: "Conversion %",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="openRate"
            stroke="var(--color-openRate)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="conversionRate"
            stroke="var(--color-conversionRate)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
