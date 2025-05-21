"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "../components/date-range-picker"
import type { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Download, TrendingUp, Users, AlertTriangle, Zap, LineChart, ArrowUp, ArrowDown } from "lucide-react"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { AreaChartComponent } from "../components/charts/area-chart"
import { Badge } from "@/components/ui/badge"

export default function PredictiveInsightsPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -90),
    to: addDays(new Date(), 90),
  })

  // Customer churn prediction data
  const churnPredictionData = [
    { name: "Jan", actual: 5.2, predicted: null },
    { name: "Feb", actual: 5.0, predicted: null },
    { name: "Mar", actual: 4.8, predicted: null },
    { name: "Apr", actual: 4.5, predicted: null },
    { name: "May", actual: 4.2, predicted: 4.2 },
    { name: "Jun", actual: null, predicted: 4.0 },
    { name: "Jul", actual: null, predicted: 3.8 },
    { name: "Aug", actual: null, predicted: 3.5 },
    { name: "Sep", actual: null, predicted: 3.2 },
    { name: "Oct", actual: null, predicted: 3.0 },
  ]

  // Revenue forecast data
  const revenueForecastData = [
    { name: "Jan", actual: 220000, predicted: null },
    { name: "Feb", actual: 235000, predicted: null },
    { name: "Mar", actual: 240000, predicted: null },
    { name: "Apr", actual: 245000, predicted: null },
    { name: "May", actual: 250000, predicted: 255000 },
    { name: "Jun", actual: null, predicted: 270000 },
    { name: "Jul", actual: null, predicted: 285000 },
    { name: "Aug", actual: null, predicted: 300000 },
    { name: "Sep", actual: null, predicted: 315000 },
    { name: "Oct", actual: null, predicted: 330000 },
  ]

  // Customer acquisition forecast
  const acquisitionForecastData = [
    { name: "Jan", actual: 90, predicted: null },
    { name: "Feb", actual: 100, predicted: null },
    { name: "Mar", actual: 110, predicted: null },
    { name: "Apr", actual: 115, predicted: null },
    { name: "May", actual: 120, predicted: 125 },
    { name: "Jun", actual: null, predicted: 140 },
    { name: "Jul", actual: null, predicted: 155 },
    { name: "Aug", actual: null, predicted: 170 },
    { name: "Sep", actual: null, predicted: 185 },
    { name: "Oct", actual: null, predicted: 200 },
  ]

  // Campaign performance prediction
  const campaignPredictionData = [
    { name: "Ramadan", roi: 320, predictedRoi: 345 },
    { name: "Eid", roi: 480, predictedRoi: 510 },
    { name: "Summer", roi: 280, predictedRoi: 305 },
    { name: "DSF", roi: 390, predictedRoi: 420 },
    { name: "National Day", roi: 430, predictedRoi: 460 },
  ]

  // Customer segment growth prediction
  const segmentGrowthData = [
    { name: "Luxury Fabric", current: 35, predicted: 42, color: "#0088FE" },
    { name: "Eid Shoppers", current: 25, predicted: 28, color: "#00C49F" },
    { name: "Dubai Marina", current: 20, predicted: 22, color: "#FFBB28" },
    { name: "VIP Clients", current: 15, predicted: 20, color: "#FF8042" },
    { name: "Corporate", current: 5, predicted: 8, color: "#8884D8" },
  ]

  // Product trend prediction data
  const productTrendData = [
    { name: "Silk", current: 32, predicted: 38 },
    { name: "Cashmere", current: 28, predicted: 35 },
    { name: "Premium Cotton", current: 22, predicted: 25 },
    { name: "Linen", current: 12, predicted: 18 },
    { name: "Wool", current: 6, predicted: 8 },
  ]

  // Seasonal forecast data
  const seasonalForecastData = [
    { name: "Jan", value: 220 },
    { name: "Feb", value: 240 },
    { name: "Mar", value: 280 },
    { name: "Apr", value: 260 },
    { name: "May", value: 300 },
    { name: "Jun", value: 340 },
    { name: "Jul", value: 380 },
    { name: "Aug", value: 360 },
    { name: "Sep", value: 320 },
    { name: "Oct", value: 290 },
    { name: "Nov", value: 350 },
    { name: "Dec", value: 420 },
  ]

  // Channel performance prediction
  const channelPredictionData = [
    { name: "WhatsApp", current: 42, predicted: 52 },
    { name: "Email", current: 28, predicted: 32 },
    { name: "In-Store", current: 18, predicted: 22 },
    { name: "Website", current: 12, predicted: 18 },
  ]

  // Customer behavior prediction data
  const behaviorPredictionData = [
    { name: "Jan", browsing: 65, purchasing: 40, returning: 25 },
    { name: "Feb", browsing: 68, purchasing: 42, returning: 28 },
    { name: "Mar", browsing: 72, purchasing: 45, returning: 30 },
    { name: "Apr", browsing: 75, purchasing: 48, returning: 32 },
    { name: "May", browsing: 80, purchasing: 52, returning: 35 },
    { name: "Jun", browsing: 85, purchasing: 55, returning: 38 },
    { name: "Jul", browsing: 90, purchasing: 58, returning: 42 },
    { name: "Aug", browsing: 88, purchasing: 56, returning: 40 },
    { name: "Sep", browsing: 85, purchasing: 54, returning: 38 },
    { name: "Oct", browsing: 82, purchasing: 52, returning: 36 },
  ]

  // Price sensitivity prediction data
  const priceSensitivityData = [
    { price: 100, demand: 100 },
    { price: 120, demand: 90 },
    { price: 140, demand: 80 },
    { price: 160, demand: 70 },
    { price: 180, demand: 60 },
    { price: 200, demand: 50 },
    { price: 220, demand: 40 },
    { price: 240, demand: 30 },
    { price: 260, demand: 20 },
    { price: 280, demand: 10 },
  ]

  // Geographic expansion prediction data
  const geoExpansionData = [
    { name: "Dubai", current: 45, potential: 60 },
    { name: "Abu Dhabi", current: 30, potential: 50 },
    { name: "Sharjah", current: 15, potential: 35 },
    { name: "Ajman", current: 5, potential: 25 },
    { name: "Ras Al Khaimah", current: 3, potential: 20 },
    { name: "Fujairah", current: 2, potential: 15 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Predictive Insights</h2>
          <p className="text-muted-foreground mt-1">AI-powered predictions and forecasts for your business</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select segment" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Customer Segments</SelectLabel>
                <SelectItem value="all">All Segments</SelectItem>
                <SelectItem value="luxury">Luxury Fabric</SelectItem>
                <SelectItem value="eid">Eid Shoppers</SelectItem>
                <SelectItem value="dubai">Dubai Marina</SelectItem>
                <SelectItem value="vip">VIP Clients</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Bento Grid Layout for Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Predicted Churn Rate</p>
                <h3 className="text-3xl font-bold">3.0%</h3>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  <span>-1.2% from current rate</span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Revenue Forecast</p>
                <h3 className="text-3xl font-bold">AED 330K</h3>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>+32% in 6 months</span>
                </div>
              </div>
              <div className="bg-blue-200 p-2 rounded-full">
                <LineChart className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Customer Growth</p>
                <h3 className="text-3xl font-bold">+200</h3>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>By October</span>
                </div>
              </div>
              <div className="bg-green-200 p-2 rounded-full">
                <Users className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Best Campaign</p>
                <h3 className="text-3xl font-bold">Eid</h3>
                <div className="flex items-center text-sm text-green-600 mt-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>510% Predicted ROI</span>
                </div>
              </div>
              <div className="bg-amber-200 p-2 rounded-full">
                <Zap className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="customers">Customer Predictions</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Forecast</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Predictions</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Bento Grid Layout for Overview */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Customer Churn Prediction</CardTitle>
                <CardDescription>Historical and predicted customer churn rate</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={churnPredictionData}
                  config={{
                    actual: {
                      label: "Actual Churn %",
                      color: "hsl(var(--chart-1))",
                    },
                    predicted: {
                      label: "Predicted Churn %",
                      color: "hsl(var(--chart-2))",
                      strokeDasharray: "5 5",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Revenue Forecast</CardTitle>
                <CardDescription>Historical and predicted monthly revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={revenueForecastData}
                  config={{
                    actual: {
                      label: "Actual Revenue (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                    predicted: {
                      label: "Predicted Revenue (AED)",
                      color: "hsl(var(--chart-2))",
                      strokeDasharray: "5 5",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Customer Acquisition Forecast</CardTitle>
                <CardDescription>Historical and predicted new customers</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={acquisitionForecastData}
                  config={{
                    actual: {
                      label: "Actual New Customers",
                      color: "hsl(var(--chart-1))",
                    },
                    predicted: {
                      label: "Predicted New Customers",
                      color: "hsl(var(--chart-2))",
                      strokeDasharray: "5 5",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Campaign ROI Prediction</CardTitle>
                <CardDescription>Current and predicted campaign ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignPredictionData}
                  dataKey={["roi", "predictedRoi"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-4">
              <CardHeader>
                <CardTitle>Product Trend Prediction</CardTitle>
                <CardDescription>Predicted product category growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {productTrendData.map((product, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-green-600">+{product.predicted - product.current}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${product.current}%` }}></div>
                        </div>
                        <span className="text-xs">{product.current}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: `${product.predicted}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">{product.predicted}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-4 lg:col-span-8">
              <CardHeader>
                <CardTitle>AI-Generated Insights</CardTitle>
                <CardDescription>Key predictions and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Zap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Churn Reduction Opportunity</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Targeting the Dubai Marina segment with personalized offers could reduce churn by 1.5% in the
                          next quarter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Zap className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Revenue Growth Driver</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Expanding the Luxury Fabric segment could drive 18% of predicted revenue growth in the next 6
                          months.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Zap className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Campaign Optimization</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Shifting 15% of budget from email to WhatsApp for the Eid campaign could increase ROI by 8%.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-purple-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Zap className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Emerging Trend</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Silk product interest is predicted to grow 6% faster than other categories in the next
                          quarter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          {/* Bento Grid Layout for Customer Predictions */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Customer Churn Risk Analysis</CardTitle>
                <CardDescription>Customers at risk of churning in the next 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Hassan Al Farsi</h4>
                        <p className="text-sm text-muted-foreground mt-1">Dubai Downtown</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-red-500">85% Risk</Badge>
                          <Badge variant="outline">Last Purchase: 45 days ago</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Layla Khan</h4>
                        <p className="text-sm text-muted-foreground mt-1">Sharjah</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-red-500">72% Risk</Badge>
                          <Badge variant="outline">Last Purchase: 38 days ago</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Mohammed Al Qasimi</h4>
                        <p className="text-sm text-muted-foreground mt-1">Abu Dhabi</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-amber-500">65% Risk</Badge>
                          <Badge variant="outline">Last Purchase: 32 days ago</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Sara Al Maktoum</h4>
                        <p className="text-sm text-muted-foreground mt-1">Dubai Marina</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className="bg-amber-500">58% Risk</Badge>
                          <Badge variant="outline">Last Purchase: 28 days ago</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Customer Segment Growth</CardTitle>
                <CardDescription>Predicted growth by customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <PieChartComponent
                    data={segmentGrowthData.map((segment) => ({
                      name: segment.name,
                      value: segment.predicted,
                      color: segment.color,
                    }))}
                  />
                </div>
                <div className="mt-4 space-y-3">
                  {segmentGrowthData.map((segment, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }}></div>
                        <span className="text-sm">{segment.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{segment.current}%</span>
                        <span className="text-xs">→</span>
                        <span className="text-xs font-medium">{segment.predicted}%</span>
                        <Badge className="bg-green-500 text-xs">+{segment.predicted - segment.current}%</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Customer Acquisition Forecast</CardTitle>
                <CardDescription>Predicted new customer acquisition by month</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={acquisitionForecastData}
                  config={{
                    actual: {
                      label: "Actual New Customers",
                      color: "hsl(var(--chart-1))",
                    },
                    predicted: {
                      label: "Predicted New Customers",
                      color: "hsl(var(--chart-2))",
                      strokeDasharray: "5 5",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Channel Performance Prediction</CardTitle>
                <CardDescription>Predicted performance by communication channel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelPredictionData.map((channel, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{channel.name}</span>
                        <span className="text-green-600">+{channel.predicted - channel.current}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: `${channel.current}%` }}></div>
                        </div>
                        <span className="text-xs">Current: {channel.current}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: `${channel.predicted}%` }}
                          ></div>
                        </div>
                        <span className="text-xs">Predicted: {channel.predicted}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Customer Lifetime Value Prediction</CardTitle>
                <CardDescription>Predicted lifetime value for high-potential customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Customer
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Segment
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Current Value (AED)
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Predicted LTV (AED)
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Growth Potential
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Fatima Mohammed
                        </th>
                        <td className="px-6 py-4">VIP Clients</td>
                        <td className="px-6 py-4">25,000</td>
                        <td className="px-6 py-4 font-medium">42,500</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            Create Plan
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Ahmed Al Mansouri
                        </th>
                        <td className="px-6 py-4">Dubai Marina</td>
                        <td className="px-6 py-4">18,500</td>
                        <td className="px-6 py-4 font-medium">32,000</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            Create Plan
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Noura Al Qasimi
                        </th>
                        <td className="px-6 py-4">Luxury Fabric</td>
                        <td className="px-6 py-4">22,000</td>
                        <td className="px-6 py-4 font-medium">35,000</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-blue-500">Medium</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            Create Plan
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Khalid Al Falasi
                        </th>
                        <td className="px-6 py-4">Eid Shoppers</td>
                        <td className="px-6 py-4">15,000</td>
                        <td className="px-6 py-4 font-medium">24,000</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-blue-500">Medium</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            Create Plan
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Aisha Al Zaabi
                        </th>
                        <td className="px-6 py-4">Corporate</td>
                        <td className="px-6 py-4">30,000</td>
                        <td className="px-6 py-4 font-medium">48,000</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            Create Plan
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          {/* Bento Grid Layout for Revenue Forecast */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Revenue Forecast</CardTitle>
                <CardDescription>6-month revenue projection</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={revenueForecastData}
                  config={{
                    actual: {
                      label: "Actual Revenue (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                    predicted: {
                      label: "Predicted Revenue (AED)",
                      color: "hsl(var(--chart-2))",
                      strokeDasharray: "5 5",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Revenue by Segment</CardTitle>
                <CardDescription>Projected revenue distribution by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent
                  data={[
                    { name: "Luxury Fabric", value: 42, color: "#0088FE" },
                    { name: "Eid Shoppers", value: 28, color: "#00C49F" },
                    { name: "Dubai Marina", value: 15, color: "#FFBB28" },
                    { name: "VIP Clients", value: 10, color: "#FF8042" },
                    { name: "Corporate", value: 5, color: "#8884D8" },
                  ]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Seasonal Revenue Forecast</CardTitle>
                <CardDescription>Projected revenue by month</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChartComponent
                  data={seasonalForecastData}
                  config={{
                    value: {
                      label: "Revenue (AED 1,000s)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Product Category Forecast</CardTitle>
                <CardDescription>Projected revenue by product category</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={productTrendData.map((item) => ({
                    name: item.name,
                    current: item.current,
                    predicted: item.predicted,
                  }))}
                  dataKey={["current", "predicted"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Revenue Growth Factors</CardTitle>
                <CardDescription>Key factors influencing revenue growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">VIP Client Expansion</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Predicted 33% growth in VIP client segment will contribute approximately AED 45,000 in
                          additional revenue over the next 6 months.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-blue-500">High Impact</Badge>
                          <Badge variant="outline" className="ml-2">
                            Confidence: 85%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Eid Campaign Performance</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The upcoming Eid campaign is predicted to generate AED 116,000 in revenue, a 12% increase over
                          the previous year's campaign.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-green-500">High Impact</Badge>
                          <Badge variant="outline" className="ml-2">
                            Confidence: 92%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">WhatsApp Engagement</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Increased WhatsApp engagement is predicted to drive a 15% increase in repeat purchases,
                          contributing approximately AED 28,000 in additional revenue.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-amber-500">Medium Impact</Badge>
                          <Badge variant="outline" className="ml-2">
                            Confidence: 78%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-purple-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <LineChart className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Seasonal Trends</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Historical seasonal patterns indicate a 20% increase in luxury fabric purchases during the
                          summer months, potentially adding AED 35,000 in revenue.
                        </p>
                        <div className="mt-2">
                          <Badge className="bg-purple-500">Medium Impact</Badge>
                          <Badge variant="outline" className="ml-2">
                            Confidence: 82%
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          {/* Bento Grid Layout for Campaign Predictions */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Campaign ROI Prediction</CardTitle>
                <CardDescription>Current and predicted campaign ROI</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignPredictionData}
                  dataKey={["roi", "predictedRoi"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-6">
              <CardHeader>
                <CardTitle>Campaign Optimization</CardTitle>
                <CardDescription>AI-recommended campaign improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h4 className="font-medium">Ramadan Collection Launch</h4>
                    <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 345% (Current: 320%)</p>
                    <div className="mt-2">
                      <Badge className="bg-green-500">+25% Improvement</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Apply Optimization</Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <h4 className="font-medium">Eid Special Offers</h4>
                    <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 510% (Current: 480%)</p>
                    <div className="mt-2">
                      <Badge className="bg-green-500">+30% Improvement</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Apply Optimization</Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <h4 className="font-medium">Summer Linen Promotion</h4>
                    <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 305% (Current: 280%)</p>
                    <div className="mt-2">
                      <Badge className="bg-green-500">+25% Improvement</Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Apply Optimization</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Campaign Performance Factors</CardTitle>
                <CardDescription>Key factors influencing campaign performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Campaign
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Key Success Factor
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Impact
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Recommendation
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Predicted Improvement
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Ramadan Collection
                        </th>
                        <td className="px-6 py-4">Timing</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">Launch 2 weeks earlier</td>
                        <td className="px-6 py-4 font-medium">+15% ROI</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Eid Special
                        </th>
                        <td className="px-6 py-4">Personalization</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">Segment by purchase history</td>
                        <td className="px-6 py-4 font-medium">+20% ROI</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          Summer Linen
                        </th>
                        <td className="px-6 py-4">Channel Mix</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-blue-500">Medium</Badge>
                        </td>
                        <td className="px-6 py-4">Increase WhatsApp allocation by 15%</td>
                        <td className="px-6 py-4 font-medium">+12% ROI</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          DSF
                        </th>
                        <td className="px-6 py-4">Offer Structure</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-blue-500">Medium</Badge>
                        </td>
                        <td className="px-6 py-4">Add tiered discounts</td>
                        <td className="px-6 py-4 font-medium">+10% ROI</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          National Day
                        </th>
                        <td className="px-6 py-4">Creative Assets</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-500">High</Badge>
                        </td>
                        <td className="px-6 py-4">Use more video content</td>
                        <td className="px-6 py-4 font-medium">+18% ROI</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-6">
          {/* Bento Grid Layout for Anomaly Detection */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Anomaly Detection</CardTitle>
                <CardDescription>AI-detected patterns requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg bg-red-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Unusual Drop in Dubai Marina Segment Engagement</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Detected a 32% drop in engagement from the Dubai Marina segment over the past 14 days,
                          significantly outside normal patterns. This could potentially impact revenue by AED 28,000 in
                          the next quarter if not addressed.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Investigate
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Unexpected Increase in Churn Risk</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Detected a 15% increase in churn risk among VIP clients aged 35-45, unusual based on
                          historical patterns. This segment typically has a 92% retention rate, but is now projected at
                          78%.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Investigate
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Unusual Purchasing Pattern</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Detected 215% increase in interest for summer fabrics outside of normal seasonal patterns.
                          This presents a potential opportunity to launch a targeted mini-campaign that could generate
                          an estimated AED 45,000 in additional revenue.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Analyze
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Emerging Customer Segment</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Detected an emerging pattern of new customers from Ajman area with 45% higher average order
                          value than typical new customers. This represents a potential new high-value segment worth
                          targeting.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Create Segment
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
