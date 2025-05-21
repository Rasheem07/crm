"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Ramadan",
    roi: 320,
  },
  {
    name: "Eid",
    roi: 480,
  },
  {
    name: "Summer",
    roi: 280,
  },
  {
    name: "DSF",
    roi: 390,
  },
  {
    name: "National Day",
    roi: 430,
  },
]

export function CampaignROI() {
  return (
    <ChartContainer
      config={{
        roi: {
          label: "ROI %",
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
          <Bar dataKey="roi" radius={[4, 4, 0, 0]} className="fill-primary" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
