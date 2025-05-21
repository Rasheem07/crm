"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Plus, Trash, BarChart, LineChart, PieChart, AreaChart } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePickerWithRange } from "../../components/date-range-picker"
import type { DateRange } from "react-day-picker"
import { addDays } from "date-fns"

export default function CreateReportPage() {
  const [reportName, setReportName] = useState("")
  const [reportDescription, setReportDescription] = useState("")
  const [reportType, setReportType] = useState("")
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })
  const [charts, setCharts] = useState([{ type: "bar", title: "Sales by Region", dataSource: "sales_data" }])

  const addChart = () => {
    setCharts([...charts, { type: "line", title: "New Chart", dataSource: "sales_data" }])
  }

  const removeChart = (index: number) => {
    setCharts(charts.filter((_, i) => i !== index))
  }

  const updateChart = (index: number, field: string, value: string) => {
    const newCharts = [...charts]
    newCharts[index] = { ...newCharts[index], [field]: value }
    setCharts(newCharts)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ reportName, reportDescription, reportType, date, charts })
    // Redirect to reports page
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/reports">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold">Create Report</h2>
          <p className="text-muted-foreground mt-1">Design a custom report with charts and data visualizations</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Report Details</CardTitle>
                <CardDescription>Basic information about your report</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="report-name">Report Name</Label>
                  <Input
                    id="report-name"
                    placeholder="Enter report name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="report-description">Description</Label>
                  <Textarea
                    id="report-description"
                    placeholder="Enter report description"
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger id="report-type">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Report Types</SelectLabel>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="customer">Customer</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="product">Product</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date Range</Label>
                    <DatePickerWithRange date={date} setDate={setDate} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Charts and Visualizations</CardTitle>
                <CardDescription>Add charts and data visualizations to your report</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {charts.map((chart, index) => (
                  <div key={index} className="space-y-4 p-4 border rounded-md">
                    <div className="flex items-center justify-between">
                      <Badge>{`Chart ${index + 1}`}</Badge>
                      {index > 0 && (
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeChart(index)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Chart Title</Label>
                        <Input
                          placeholder="Enter chart title"
                          value={chart.title}
                          onChange={(e) => updateChart(index, "title", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Chart Type</Label>
                        <Select value={chart.type} onValueChange={(value) => updateChart(index, "type", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select chart type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Chart Types</SelectLabel>
                              <SelectItem value="bar">Bar Chart</SelectItem>
                              <SelectItem value="line">Line Chart</SelectItem>
                              <SelectItem value="pie">Pie Chart</SelectItem>
                              <SelectItem value="area">Area Chart</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Data Source</Label>
                      <Select
                        value={chart.dataSource}
                        onValueChange={(value) => updateChart(index, "dataSource", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select data source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Data Sources</SelectLabel>
                            <SelectItem value="sales_data">Sales Data</SelectItem>
                            <SelectItem value="customer_data">Customer Data</SelectItem>
                            <SelectItem value="marketing_data">Marketing Data</SelectItem>
                            <SelectItem value="product_data">Product Data</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-center h-40 bg-muted/20 rounded-md">
                        {chart.type === "bar" && <BarChart className="h-12 w-12 text-muted-foreground" />}
                        {chart.type === "line" && <LineChart className="h-12 w-12 text-muted-foreground" />}
                        {chart.type === "pie" && <PieChart className="h-12 w-12 text-muted-foreground" />}
                        {chart.type === "area" && <AreaChart className="h-12 w-12 text-muted-foreground" />}
                      </div>
                    </div>
                  </div>
                ))}
                <Button type="button" variant="outline" onClick={addChart} className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Add Chart
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Report Settings</CardTitle>
                <CardDescription>Configure report generation and scheduling</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Schedule</Label>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue placeholder="Select schedule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Schedule Options</SelectLabel>
                        <SelectItem value="none">No Schedule (Run Manually)</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="email" />
                  <Label htmlFor="email">Send report via email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="export" />
                  <Label htmlFor="export">Auto-export as PDF</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="share" />
                  <Label htmlFor="share">Share with team members</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/reports">Cancel</Link>
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button type="submit">Create Report</Button>
                </div>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
              <CardDescription>Preview of your report structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">{reportName || "Report Title"}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {reportDescription || "Report description will appear here"}
                </p>
                <div className="flex gap-2 mt-2">
                  {reportType && <Badge variant="outline">{reportType}</Badge>}
                  <Badge variant="outline">
                    {date?.from ? new Date(date.from).toLocaleDateString() : "Start date"} -
                    {date?.to ? new Date(date.to).toLocaleDateString() : "End date"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Charts ({charts.length})</h4>
                <div className="space-y-2">
                  {charts.map((chart, index) => (
                    <div key={index} className="p-2 border rounded-md">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium">{chart.title}</div>
                        <Badge variant="outline">{chart.type}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Template Suggestions</h4>
                <div className="space-y-2">
                  <div className="p-2 border rounded-md">
                    <div className="text-sm font-medium">Sales Overview</div>
                    <div className="text-xs text-muted-foreground">5 charts, Medium complexity</div>
                  </div>
                  <div className="p-2 border rounded-md">
                    <div className="text-sm font-medium">Customer Insights</div>
                    <div className="text-xs text-muted-foreground">8 charts, High complexity</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
