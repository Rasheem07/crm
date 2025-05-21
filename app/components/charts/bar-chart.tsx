"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface BarChartProps {
  data: any[]
  dataKey?: string | string[]
  colors?: string[]
  config?: {
    [key: string]: {
      label: string
      color: string
    }
  }
}

export function BarChartComponent({ data, dataKey, colors, config }: BarChartProps) {
  // Handle empty or undefined data
  if (!data || data.length === 0) {
    return (
      <Card className="w-full h-[300px] flex items-center justify-center">
        <p className="text-muted-foreground">No data available</p>
      </Card>
    )
  }

  // Determine which keys to use for the bars
  let keys: string[] = []

  if (dataKey) {
    // If dataKey is provided, use it
    keys = Array.isArray(dataKey) ? dataKey : [dataKey]
  } else if (config) {
    // If config is provided, use its keys
    keys = Object.keys(config)
  } else {
    // Default: use the first non-name property as the key
    const firstItem = data[0]
    keys = Object.keys(firstItem).filter((key) => key !== "name" && typeof firstItem[key] === "number")
  }

  // Ensure we have colors for each key
  const defaultColors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]
  const barColors = colors || defaultColors

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }}
        />
        <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={{ stroke: "#e5e7eb", strokeWidth: 1 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--background))",
            borderColor: "hsl(var(--border))",
            borderRadius: "6px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Legend
          verticalAlign="top"
          height={36}
          iconType="circle"
          iconSize={8}
          formatter={(value) => {
            if (config && config[value]) {
              return <span className="text-xs font-medium">{config[value].label}</span>
            }
            return <span className="text-xs font-medium">{value}</span>
          }}
        />
        {keys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={config && config[key] ? config[key].color : barColors[index % barColors.length]}
            radius={[4, 4, 0, 0]}
            barSize={30}
            name={config && config[key] ? config[key].label : key}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
