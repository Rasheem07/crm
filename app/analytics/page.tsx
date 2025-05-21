"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { Button } from "@/components/ui/button"
import { Download, ArrowUp, ArrowUpRight, Users, DollarSign, TrendingUp, MapPin } from "lucide-react"
import { LineChartComponent } from "../components/charts/line-chart"
import { AreaChartComponent } from "../components/charts/area-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { Badge } from "@/components/ui/badge"

export default function AnalyticsPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  // Customer acquisition data
  const acquisitionData = [
    { name: "Jan", value: 45 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 55 },
    { name: "Apr", value: 60 },
    { name: "May", value: 65 },
    { name: "Jun", value: 70 },
  ]

  // Revenue data
  const revenueData = [
    { name: "Jan", value: 45000 },
    { name: "Feb", value: 52000 },
    { name: "Mar", value: 48000 },
    { name: "Apr", value: 61000 },
    { name: "May", value: 55000 },
    { name: "Jun", value: 67000 },
  ]

  // Customer segments data
  const segmentData = [
    { name: "Luxury Fabric", value: 35, color: "#0088FE" },
    { name: "Eid Shoppers", value: 25, color: "#00C49F" },
    { name: "Dubai Marina", value: 20, color: "#FFBB28" },
    { name: "VIP Clients", value: 15, color: "#FF8042" },
    { name: "Corporate", value: 5, color: "#8884D8" },
  ]

  // Customer behavior data
  const behaviorData = [
    { name: "6AM", value: 0 },
    { name: "8AM", value: 2 },
    { name: "10AM", value: 5 },
    { name: "12PM", value: 3 },
    { name: "2PM", value: 2 },
    { name: "4PM", value: 4 },
    { name: "6PM", value: 7 },
    { name: "8PM", value: 10 },
    { name: "10PM", value: 8 },
    { name: "12AM", value: 3 },
  ]

  // Campaign performance data
  const campaignData = [
    { name: "Ramadan", value: 65 },
    { name: "Eid", value: 78 },
    { name: "Summer", value: 62 },
    { name: "DSF", value: 72 },
    { name: "National Day", value: 80 },
  ]

  // Customer retention data
  const retentionData = [
    { name: "Jan", value: 92 },
    { name: "Feb", value: 89 },
    { name: "Mar", value: 91 },
    { name: "Apr", value: 87 },
    { name: "May", value: 93 },
    { name: "Jun", value: 95 },
  ]

  // Customer lifetime value data
  const ltvData = [
    { name: "Segment A", value: 12500 },
    { name: "Segment B", value: 8700 },
    { name: "Segment C", value: 5400 },
    { name: "Segment D", value: 3200 },
  ]

  // Customer engagement data
  const engagementData = [
    { name: "Week 1", email: 45, whatsapp: 65, sms: 30 },
    { name: "Week 2", email: 50, whatsapp: 68, sms: 32 },
    { name: "Week 3", email: 47, whatsapp: 72, sms: 35 },
    { name: "Week 4", email: 52, whatsapp: 75, sms: 38 },
  ]

  // Customer acquisition cost data
  const cacData = [
    { name: "Jan", value: 120 },
    { name: "Feb", value: 115 },
    { name: "Mar", value: 118 },
    { name: "Apr", value: 110 },
    { name: "May", value: 105 },
    { name: "Jun", value: 100 },
  ]

  // Revenue by product data
  const productRevenueData = [
    { name: "Product A", value: 35000 },
    { name: "Product B", value: 25000 },
    { name: "Product C", value: 18000 },
    { name: "Product D", value: 12000 },
    { name: "Product E", value: 8000 },
  ]

  // Revenue by channel data
  const channelRevenueData = [
    { name: "Online", value: 45 },
    { name: "Retail", value: 30 },
    { name: "Wholesale", value: 15 },
    { name: "Partners", value: 10 },
  ]

  // Monthly recurring revenue data
  const mrrData = [
    { name: "Jan", value: 25000 },
    { name: "Feb", value: 27000 },
    { name: "Mar", value: 29000 },
    { name: "Apr", value: 32000 },
    { name: "May", value: 35000 },
    { name: "Jun", value: 38000 },
  ]

  // Campaign ROI data
  const campaignRoiData = [
    { name: "Ramadan", value: 320 },
    { name: "Eid", value: 450 },
    { name: "Summer", value: 280 },
    { name: "DSF", value: 350 },
    { name: "National Day", value: 420 },
  ]

  // Campaign conversion data
  const campaignConversionData = [
    { name: "Ramadan", impressions: 12000, clicks: 3600, conversions: 720 },
    { name: "Eid", impressions: 15000, clicks: 4500, conversions: 900 },
    { name: "Summer", impressions: 10000, clicks: 3000, conversions: 600 },
    { name: "DSF", impressions: 13000, clicks: 3900, conversions: 780 },
    { name: "National Day", impressions: 14000, clicks: 4200, conversions: 840 },
  ]

  // Geolocation data
  const cityData = [
    { name: "Dubai", value: 45 },
    { name: "Abu Dhabi", value: 25 },
    { name: "Sharjah", value: 15 },
    { name: "Ajman", value: 8 },
    { name: "RAK", value: 7 },
  ]

  // Customer density by area
  const areaData = [
    { name: "Dubai Marina", value: 250 },
    { name: "Downtown", value: 180 },
    { name: "JBR", value: 150 },
    { name: "Palm Jumeirah", value: 120 },
    { name: "Deira", value: 100 },
  ]

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Analytics</h2>
          <p className="text-muted-foreground mt-1">Analyze customer data and marketing performance</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px]">
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

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="overflow-x-auto">
          <TabsTrigger value="dashboard">Analytics Dashboard</TabsTrigger>
          <TabsTrigger value="customers">Customer Analytics</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Analytics</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Analytics</TabsTrigger>
          <TabsTrigger value="geolocation">Geolocation</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          {/* Bento Grid Layout for Dashboard */}
          <div className="grid grid-cols-12 gap-4">
            {/* Key Metrics - Row 1 */}
            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Total Interactions</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">12,543</div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+8% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Conversion Rate</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">24.8%</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+3.2% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Customer Lifetime Value</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">AED 8,750</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+15% from last quarter</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Active Customers</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">2,853</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+12% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Acquisition - Large chart */}
            <Card className="col-span-12 md:col-span-8 row-span-2 overflow-hidden">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Acquisition</CardTitle>
                    <CardDescription>New customers over time</CardDescription>
                  </div>
                  <Badge variant="outline">+15% growth</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <AreaChartComponent
                  data={acquisitionData}
                  dataKey="value"
                  colors={["#3b82f6"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Customer Segments - Pie chart */}
            <Card className="col-span-12 md:col-span-4 row-span-2 bg-indigo-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-indigo-900">Customer Segments</CardTitle>
                    <CardDescription className="text-indigo-700">Distribution by segment</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <PieChartComponent data={segmentData} height={200} innerRadius={30} outerRadius={70} />
              </CardContent>
            </Card>

            {/* Revenue Analysis - Medium chart */}
            <Card className="col-span-12 md:col-span-6 bg-teal-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-teal-900">Revenue Analysis</CardTitle>
                    <CardDescription className="text-teal-700">Monthly revenue</CardDescription>
                  </div>
                  <Badge className="bg-teal-600">AED 67,000</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent
                  data={revenueData}
                  dataKey="value"
                  colors={["#0d9488"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Campaign Performance - Medium chart */}
            <Card className="col-span-12 md:col-span-6 bg-rose-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-rose-900">Campaign Performance</CardTitle>
                    <CardDescription className="text-rose-700">Open rates by campaign</CardDescription>
                  </div>
                  <Badge className="bg-rose-600">80% max</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={campaignData}
                  dataKey="value"
                  colors={["#e11d48"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Customer Behavior - Small chart */}
            <Card className="col-span-12 md:col-span-4 bg-cyan-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-medium text-cyan-900">Customer Behavior</div>
                  <div className="text-xs text-cyan-700">Peak: 8PM</div>
                </div>
                <LineChartComponent
                  data={behaviorData}
                  dataKey="value"
                  colors={["#0891b2"]}
                  height={150}
                  showLegend={false}
                />
                <div className="mt-3 text-xs text-cyan-700">Peak activity hours between 6PM-10PM</div>
              </CardContent>
            </Card>

            {/* AI Insights - Text card */}
            <Card className="col-span-12 md:col-span-4 bg-violet-50">
              <CardContent className="p-4 md:p-6">
                <div className="text-sm font-medium text-violet-900 mb-3">AI Insights</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-violet-600" />
                    <span className="text-xs text-violet-800">
                      Eid campaign shows 78% open rate, highest of all campaigns
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-violet-600" />
                    <span className="text-xs text-violet-800">Evening shoppers have 28% higher conversion rates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-violet-600" />
                    <span className="text-xs text-violet-800">VIP clients spend 3.2x more than regular customers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations - Text card */}
            <Card className="col-span-12 md:col-span-4 bg-emerald-50">
              <CardContent className="p-4 md:p-6">
                <div className="text-sm font-medium text-emerald-900 mb-3">Recommendations</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs text-emerald-800">
                      Increase WhatsApp engagement during peak hours (6PM-10PM)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs text-emerald-800">Target Luxury Fabric segment with premium offers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-3 w-3 text-emerald-600" />
                    <span className="text-xs text-emerald-800">Optimize Eid campaign for even higher engagement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers">
          {/* Bento Grid Layout for Customer Analytics */}
          <div className="grid grid-cols-12 gap-4">
            {/* Key Metrics - Row 1 */}
            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Total Customers</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">5,842</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+12% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Retention Rate</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">95%</div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+2% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Avg. Order Value</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">AED 850</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+5% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Customer Acquisition Cost</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">AED 100</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <ArrowUp className="h-3 w-3 mr-1" transform="rotate(180)" />
                    <span>-5% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Acquisition & Retention - Large chart */}
            <Card className="col-span-12 md:col-span-8 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Growth & Retention</CardTitle>
                    <CardDescription>Monthly acquisition and retention rates</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent
                  data={[
                    { name: "Jan", acquisition: 45, retention: 92 },
                    { name: "Feb", acquisition: 50, retention: 89 },
                    { name: "Mar", acquisition: 55, retention: 91 },
                    { name: "Apr", acquisition: 60, retention: 87 },
                    { name: "May", acquisition: 65, retention: 93 },
                    { name: "Jun", acquisition: 70, retention: 95 },
                  ]}
                  dataKey={["acquisition", "retention"]}
                  colors={["#3b82f6", "#10b981"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Customer Lifetime Value - Pie chart */}
            <Card className="col-span-12 md:col-span-4 row-span-2 bg-indigo-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-indigo-900">Customer Lifetime Value</CardTitle>
                    <CardDescription className="text-indigo-700">By customer segment</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent data={ltvData} dataKey="value" colors={["#6366f1"]} height={250} showGrid={true} />
              </CardContent>
            </Card>

            {/* Customer Engagement - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Engagement</CardTitle>
                    <CardDescription>By channel</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <AreaChartComponent
                  data={engagementData}
                  dataKey={["email", "whatsapp", "sms"]}
                  colors={["#3b82f6", "#10b981", "#f59e0b"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Customer Acquisition Cost - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Acquisition Cost</CardTitle>
                    <CardDescription>Monthly trend</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent data={cacData} dataKey="value" colors={["#f43f5e"]} height={200} showGrid={true} />
              </CardContent>
            </Card>

            {/* Customer Segments - Detailed breakdown */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Segment Analysis</CardTitle>
                    <CardDescription>Detailed breakdown of customer segments</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <PieChartComponent
                      data={segmentData}
                      height={250}
                      innerRadius={60}
                      outerRadius={100}
                      legendPosition="right"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {segmentData.map((segment, index) => (
                        <Card key={index} className="p-4" style={{ backgroundColor: `${segment.color}15` }}>
                          <div className="text-sm font-medium" style={{ color: segment.color }}>
                            {segment.name}
                          </div>
                          <div className="text-2xl font-bold mt-1">{segment.value}%</div>
                          <div className="text-xs mt-1">
                            {index === 0 && "Highest spending segment"}
                            {index === 1 && "Most active segment"}
                            {index === 2 && "Fastest growing segment"}
                            {index === 3 && "Most loyal segment"}
                            {index === 4 && "Newest segment"}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue">
          {/* Bento Grid Layout for Revenue Analytics */}
          <div className="grid grid-cols-12 gap-4">
            {/* Key Metrics - Row 1 */}
            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Total Revenue</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">AED 328,500</div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+15% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Monthly Recurring Revenue</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">AED 38,000</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+8% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Average Order Value</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">AED 850</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+5% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Revenue Growth</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">15.2%</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+2.3% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Trend - Large chart */}
            <Card className="col-span-12 md:col-span-8 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue Trend</CardTitle>
                    <CardDescription>Monthly revenue analysis</CardDescription>
                  </div>
                  <Badge variant="outline">AED 67,000 in June</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <AreaChartComponent
                  data={revenueData}
                  dataKey="value"
                  colors={["#10b981"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Revenue by Channel - Pie chart */}
            <Card className="col-span-12 md:col-span-4 row-span-2 bg-indigo-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-indigo-900">Revenue by Channel</CardTitle>
                    <CardDescription className="text-indigo-700">Distribution by sales channel</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <PieChartComponent data={channelRevenueData} height={250} innerRadius={50} outerRadius={90} />
              </CardContent>
            </Card>

            {/* Revenue by Product - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue by Product</CardTitle>
                    <CardDescription>Top performing products</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={productRevenueData}
                  dataKey="value"
                  colors={["#6366f1"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Monthly Recurring Revenue - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Monthly Recurring Revenue</CardTitle>
                    <CardDescription>Growth over time</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent data={mrrData} dataKey="value" colors={["#3b82f6"]} height={200} showGrid={true} />
              </CardContent>
            </Card>

            {/* Revenue Forecast - Full width */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue Forecast</CardTitle>
                    <CardDescription>Projected revenue for next 6 months</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <AreaChartComponent
                  data={[
                    { name: "Jul", actual: 67000, forecast: 67000 },
                    { name: "Aug", actual: 0, forecast: 72000 },
                    { name: "Sep", actual: 0, forecast: 78000 },
                    { name: "Oct", actual: 0, forecast: 85000 },
                    { name: "Nov", actual: 0, forecast: 92000 },
                    { name: "Dec", actual: 0, forecast: 100000 },
                  ]}
                  dataKey={["actual", "forecast"]}
                  colors={["#10b981", "#94a3b8"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns">
          {/* Bento Grid Layout for Campaign Analytics */}
          <div className="grid grid-cols-12 gap-4">
            {/* Key Metrics - Row 1 */}
            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Active Campaigns</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">8</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+2 from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Avg. Open Rate</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">72%</div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+5% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Avg. Conversion Rate</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">18.5%</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+2.3% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Avg. Campaign ROI</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">320%</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <ArrowUp className="h-3 w-3 mr-1" />
                    <span>+15% from last month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Performance - Large chart */}
            <Card className="col-span-12 md:col-span-8 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>Open rates by campaign</CardDescription>
                  </div>
                  <Badge variant="outline">National Day: 80%</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={campaignData}
                  dataKey="value"
                  colors={["#f43f5e"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Campaign ROI - Pie chart */}
            <Card className="col-span-12 md:col-span-4 row-span-2 bg-indigo-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-indigo-900">Campaign ROI</CardTitle>
                    <CardDescription className="text-indigo-700">Return on investment by campaign</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={campaignRoiData}
                  dataKey="value"
                  colors={["#6366f1"]}
                  height={250}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Campaign Conversion Funnel - Full width */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Conversion Funnel</CardTitle>
                    <CardDescription>Impressions to conversions by campaign</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={campaignConversionData}
                  dataKey={["impressions", "clicks", "conversions"]}
                  colors={["#94a3b8", "#3b82f6", "#10b981"]}
                  height={300}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Campaign Effectiveness - Medium charts */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Effectiveness</CardTitle>
                    <CardDescription>Conversion rate over time</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent
                  data={[
                    { name: "Jan", rate: 12.5 },
                    { name: "Feb", rate: 13.2 },
                    { name: "Mar", rate: 14.8 },
                    { name: "Apr", rate: 15.3 },
                    { name: "May", rate: 17.1 },
                    { name: "Jun", rate: 18.5 },
                  ]}
                  dataKey="rate"
                  colors={["#10b981"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Campaign Engagement</CardTitle>
                    <CardDescription>Click-through rate by campaign</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={[
                    { name: "Ramadan", rate: 28 },
                    { name: "Eid", rate: 32 },
                    { name: "Summer", rate: 25 },
                    { name: "DSF", rate: 30 },
                    { name: "National Day", rate: 35 },
                  ]}
                  dataKey="rate"
                  colors={["#3b82f6"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="geolocation">
          {/* Bento Grid Layout for Geolocation Analytics */}
          <div className="grid grid-cols-12 gap-4">
            {/* Key Metrics - Row 1 */}
            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Total Locations</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">7</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Emirates covered</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Top Location</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">Dubai</div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <Users className="h-3 w-3 mr-1" />
                    <span>45% of customers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Fastest Growing</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">Abu Dhabi</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+18% growth</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Highest AOV</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">Dubai Marina</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <DollarSign className="h-3 w-3 mr-1" />
                    <span>AED 1,250 avg</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Distribution by City - Large chart */}
            <Card className="col-span-12 md:col-span-8 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Distribution by City</CardTitle>
                    <CardDescription>Percentage of customers by location</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent data={cityData} dataKey="value" colors={["#3b82f6"]} height={250} showGrid={true} />
              </CardContent>
            </Card>

            {/* Customer Density - Pie chart */}
            <Card className="col-span-12 md:col-span-4 row-span-2 bg-indigo-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-indigo-900">Customer Density</CardTitle>
                    <CardDescription className="text-indigo-700">Top areas in Dubai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <PieChartComponent
                  data={areaData.map((item) => ({
                    name: item.name,
                    value: item.value,
                    color: ["#4f46e5", "#7c3aed", "#2563eb", "#0891b2", "#0d9488"][areaData.indexOf(item) % 5],
                  }))}
                  height={250}
                  innerRadius={50}
                  outerRadius={90}
                />
              </CardContent>
            </Card>

            {/* Revenue by Location - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Revenue by Location</CardTitle>
                    <CardDescription>Total revenue by city</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={[
                    { name: "Dubai", value: 150000 },
                    { name: "Abu Dhabi", value: 85000 },
                    { name: "Sharjah", value: 45000 },
                    { name: "Ajman", value: 25000 },
                    { name: "RAK", value: 23500 },
                  ]}
                  dataKey="value"
                  colors={["#10b981"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Growth by Location - Medium chart */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Growth by Location</CardTitle>
                    <CardDescription>Year-over-year growth percentage</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent
                  data={[
                    { name: "Dubai", value: 12 },
                    { name: "Abu Dhabi", value: 18 },
                    { name: "Sharjah", value: 15 },
                    { name: "Ajman", value: 10 },
                    { name: "RAK", value: 8 },
                  ]}
                  dataKey="value"
                  colors={["#f43f5e"]}
                  height={200}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Location Performance - Full width */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Location Performance Comparison</CardTitle>
                    <CardDescription>Key metrics by location</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px]">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Location</th>
                        <th className="text-right py-3 px-4 font-medium">Customers</th>
                        <th className="text-right py-3 px-4 font-medium">Revenue</th>
                        <th className="text-right py-3 px-4 font-medium">Avg. Order</th>
                        <th className="text-right py-3 px-4 font-medium">Growth</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4">Dubai</td>
                        <td className="text-right py-3 px-4">2,630</td>
                        <td className="text-right py-3 px-4">AED 150,000</td>
                        <td className="text-right py-3 px-4">AED 950</td>
                        <td className="text-right py-3 px-4 text-green-600">+12%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Abu Dhabi</td>
                        <td className="text-right py-3 px-4">1,460</td>
                        <td className="text-right py-3 px-4">AED 85,000</td>
                        <td className="text-right py-3 px-4">AED 850</td>
                        <td className="text-right py-3 px-4 text-green-600">+18%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Sharjah</td>
                        <td className="text-right py-3 px-4">875</td>
                        <td className="text-right py-3 px-4">AED 45,000</td>
                        <td className="text-right py-3 px-4">AED 750</td>
                        <td className="text-right py-3 px-4 text-green-600">+15%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4">Ajman</td>
                        <td className="text-right py-3 px-4">465</td>
                        <td className="text-right py-3 px-4">AED 25,000</td>
                        <td className="text-right py-3 px-4">AED 700</td>
                        <td className="text-right py-3 px-4 text-green-600">+10%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">RAK</td>
                        <td className="text-right py-3 px-4">412</td>
                        <td className="text-right py-3 px-4">AED 23,500</td>
                        <td className="text-right py-3 px-4">AED 680</td>
                        <td className="text-right py-3 px-4 text-green-600">+8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
