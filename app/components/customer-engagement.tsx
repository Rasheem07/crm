"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { channel: "Email", engagement: 65 },
  { channel: "WhatsApp", engagement: 85 },
  { channel: "SMS", engagement: 45 },
  { channel: "Social", engagement: 55 },
  { channel: "Website", engagement: 70 },
]

export function CustomerEngagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Engagement</CardTitle>
        <CardDescription>Engagement across different channels</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            engagement: {
              label: "Engagement %",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="channel" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="engagement" radius={[4, 4, 0, 0]} className="fill-primary" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
