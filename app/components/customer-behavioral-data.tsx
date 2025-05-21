"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"

const engagementData = [
  { hour: "6AM", engagement: 0 },
  { hour: "8AM", engagement: 2 },
  { hour: "10AM", engagement: 5 },
  { hour: "12PM", engagement: 3 },
  { hour: "2PM", engagement: 2 },
  { hour: "4PM", engagement: 4 },
  { hour: "6PM", engagement: 7 },
  { hour: "8PM", engagement: 10 },
  { hour: "10PM", engagement: 8 },
  { hour: "12AM", engagement: 3 },
]

export function CustomerBehavioralData() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Peak Activity Hours</CardTitle>
          <CardDescription>Most active between 8-10 PM GST</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              engagement: {
                label: "Engagement",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <XAxis dataKey="hour" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="var(--color-engagement)"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Communication Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-xs text-muted-foreground">WhatsApp Open Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">62%</div>
                <div className="text-xs text-muted-foreground">Email Open Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">12min</div>
                <div className="text-xs text-muted-foreground">WhatsApp Response Time</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">4hrs</div>
                <div className="text-xs text-muted-foreground">Email Response Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Website Behavior</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Most Viewed Categories</span>
                <div className="flex space-x-2">
                  <Badge variant="outline">Abayas</Badge>
                  <Badge variant="outline">Silk</Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Abandoned Cart Items</span>
                <Badge>2 items</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Visit</span>
                <span className="text-sm">2 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
