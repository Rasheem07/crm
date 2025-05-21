"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

interface AreaChartProps {
  data: any[]
  config?: Record<string, { label: string; color: string; strokeDasharray?: string }>
  height?: number
  showGrid?: boolean
  showLegend?: boolean
  className?: string
  xAxisDataKey?: string
  yAxisWidth?: number
}

export function AreaChartComponent({
  data,
  config = {},
  height = 300,
  showGrid = true,
  showLegend = true,
  className,
  xAxisDataKey = "name",
  yAxisWidth = 50,
}: AreaChartProps) {
  // Get dataKeys from config
  const dataKeys = Object.keys(config)

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
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
            const { color, label, strokeDasharray } = config[key] || {}
            return (
              <defs key={`gradient-${key}`}>
                <linearGradient id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
            )
          })}

          {dataKeys.map((key, index) => {
            const { color, label, strokeDasharray } = config[key] || {}
            // Use the provided label or format the key as a fallback
            const displayName =
              label || (key ? key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1") : key)

            return (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                name={displayName}
                stroke={color}
                strokeWidth={2}
                strokeDasharray={strokeDasharray}
                fill={`url(#gradient-${key})`}
                activeDot={{ r: 6, strokeWidth: 0 }}
                animationDuration={1000}
              />
            )
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
