"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface PieChartProps {
  data: Array<{ name: string; value: number; color?: string }>
  colors?: string[]
  height?: number
  className?: string
  showLegend?: boolean
  innerRadius?: number
  outerRadius?: number
  legendPosition?: "top" | "right" | "bottom" | "left"
}

export function PieChartComponent({
  data,
  colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d", "#ffc658"],
  height = 300,
  className,
  showLegend = true,
  innerRadius = 0,
  outerRadius = 80,
  legendPosition = "right",
}: PieChartProps) {
  // Assign colors to data items if not already assigned
  const dataWithColors = data.map((item, index) => ({
    ...item,
    color: item.color || colors[index % colors.length],
  }))

  // Configure legend position
  const legendProps = {
    layout: legendPosition === "left" || legendPosition === "right" ? "vertical" : "horizontal",
    align: legendPosition === "right" ? "right" : legendPosition === "left" ? "left" : "center",
    verticalAlign: legendPosition === "top" ? "top" : legendPosition === "bottom" ? "bottom" : "middle",
    iconType: "circle",
    iconSize: 8,
    wrapperStyle: {
      fontSize: "12px",
      padding:
        legendPosition === "top"
          ? "10px 0 0 0"
          : legendPosition === "bottom"
            ? "0 0 10px 0"
            : legendPosition === "left"
              ? "0 10px 0 0"
              : "0 0 0 10px",
    },
  }

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithColors}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1000}
            label={({ name, percent }) => (percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : "")}
          >
            {dataWithColors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              fontSize: "12px",
              padding: "8px",
            }}
            formatter={(value, name) => [`${value.toLocaleString()}`, name]}
          />
          {showLegend && <Legend {...legendProps} />}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
