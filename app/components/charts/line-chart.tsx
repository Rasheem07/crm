"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

interface LineChartProps {
  data: any[]
  dataKey: string | string[]
  colors?: string[]
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  className?: string
  xAxisDataKey?: string
  yAxisWidth?: number
}

export function LineChartComponent({
  data,
  dataKey,
  colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088fe"],
  height = 300,
  showGrid = true,
  showLegend = true,
  className,
  xAxisDataKey = "name",
  yAxisWidth = 50,
}: LineChartProps) {
  // Convert single dataKey to array for consistent processing
  const dataKeys = Array.isArray(dataKey) ? dataKey : [dataKey]

  // Helper function to format the legend name safely
  const formatLegendName = (key: string) => {
    if (!key || typeof key !== "string") return "Value"
    return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")
  }

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f5" />}

          <XAxis
            dataKey={xAxisDataKey}
            axisLine={{ stroke: "#e0e0e0" }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            dy={10}
            padding={{ left: 10, right: 10 }}
          />

          <YAxis
            width={yAxisWidth}
            axisLine={{ stroke: "#e0e0e0" }}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
            tickFormatter={(value) => value.toLocaleString()}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              fontSize: "12px",
              padding: "8px",
            }}
            cursor={{ stroke: "#f0f0f0", strokeWidth: 1 }}
            formatter={(value) => [value.toLocaleString(), ""]}
          />

          {showLegend && (
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
            />
          )}

          {dataKeys.map((key, index) => {
            if (!key) return null // Skip undefined or null keys
            const color = colors[index % colors.length]
            return (
              <Line
                key={String(key)}
                type="monotone"
                dataKey={key}
                name={formatLegendName(String(key))}
                stroke={color}
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 1, fill: "white" }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                animationDuration={1000}
              />
            )
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
