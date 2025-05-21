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
import { Download, TrendingUp, DollarSign, BarChart, ArrowUpRight, Zap } from "lucide-react"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"

export default function ROITrackingPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -90),
    to: new Date(),
  })

  // Campaign ROI data
  const campaignROIData = [
    { name: "Ramadan", roi: 320, investment: 15000, revenue: 63000 },
    { name: "Eid", roi: 480, investment: 20000, revenue: 116000 },
    { name: "Summer", roi: 280, investment: 12000, revenue: 45600 },
    { name: "DSF", roi: 390, investment: 18000, revenue: 88200 },
    { name: "National Day", roi: 430, investment: 22000, revenue: 116600 },
  ]

  // Channel ROI data
  const channelROIData = [
    { name: "Email", roi: 280, investment: 8000, revenue: 30400 },
    { name: "WhatsApp", roi: 420, investment: 12000, revenue: 62400 },
    { name: "SMS", roi: 180, investment: 5000, revenue: 14000 },
    { name: "Social Media", roi: 350, investment: 15000, revenue: 67500 },
  ]

  // Segment ROI data
  const segmentROIData = [
    { name: "Luxury Fabric", value: 42, color: "#0088FE" },
    { name: "Eid Shoppers", value: 28, color: "#00C49F" },
    { name: "Dubai Marina", value: 15, color: "#FFBB28" },
    { name: "VIP Clients", value: 10, color: "#FF8042" },
    { name: "Corporate", value: 5, color: "#8884D8" },
  ]

  // Monthly ROI trend
  const monthlyROIData = [
    { name: "Jan", roi: 280 },
    { name: "Feb", roi: 300 },
    { name: "Mar", roi: 320 },
    { name: "Apr", roi: 450 },
    { name: "May", roi: 380 },
    { name: "Jun", roi: 350 },
    { name: "Jul", roi: 330 },
    { name: "Aug", roi: 340 },
    { name: "Sep", roi: 360 },
    { name: "Oct", roi: 380 },
    { name: "Nov", roi: 410 },
    { name: "Dec", roi: 480 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">ROI Tracking</h2>
          <p className="text-muted-foreground mt-1">Track and analyze return on investment for marketing activities</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select campaign" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Campaigns</SelectLabel>
                <SelectItem value="all">All Campaigns</SelectItem>
                <SelectItem value="ramadan">Ramadan Collection</SelectItem>
                <SelectItem value="eid">Eid Special</SelectItem>
                <SelectItem value="summer">Summer Linen</SelectItem>
                <SelectItem value="dsf">Dubai Shopping Festival</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Average ROI</p>
                <h3 className="text-3xl font-bold">385%</h3>
                <p className="text-sm text-green-600 mt-1">+12% from last quarter</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Investment</p>
                <h3 className="text-3xl font-bold">AED 87K</h3>
                <p className="text-sm text-green-600 mt-1">+5% from last quarter</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Revenue</p>
                <h3 className="text-3xl font-bold">AED 335K</h3>
                <p className="text-sm text-green-600 mt-1">+18% from last quarter</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Best Performing</p>
                <h3 className="text-3xl font-bold">Eid</h3>
                <p className="text-sm text-green-600 mt-1">480% ROI</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="segments">Segments</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ROI Trend</CardTitle>
                <CardDescription>Monthly ROI performance</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={monthlyROIData}
                  config={{
                    roi: {
                      label: "ROI %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI</CardTitle>
                <CardDescription>ROI by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignROIData}
                  config={{
                    roi: {
                      label: "ROI %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel ROI</CardTitle>
                <CardDescription>ROI by marketing channel</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={channelROIData}
                  config={{
                    roi: {
                      label: "ROI %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
                <CardDescription>Revenue contribution by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={segmentROIData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Detailed ROI analysis by campaign</CardDescription>
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
                        Investment (AED)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Revenue (AED)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ROI
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {campaignROIData.map((campaign, index) => (
                      <tr key={index} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          {campaign.name} Collection
                        </th>
                        <td className="px-6 py-4">{campaign.investment.toLocaleString()}</td>
                        <td className="px-6 py-4">{campaign.revenue.toLocaleString()}</td>
                        <td className="px-6 py-4 font-medium">{campaign.roi}%</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${campaign.roi > 350 ? "bg-green-100 text-green-800" : campaign.roi > 250 ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"}`}
                          >
                            {campaign.roi > 350 ? "Excellent" : campaign.roi > 250 ? "Good" : "Average"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Investment vs. Revenue</CardTitle>
                <CardDescription>Comparison of investment and generated revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignROIData}
                  config={{
                    investment: {
                      label: "Investment (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                    revenue: {
                      label: "Revenue (AED)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI Comparison</CardTitle>
                <CardDescription>ROI percentage by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignROIData}
                  config={{
                    roi: {
                      label: "ROI %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="channels" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Channel Performance</CardTitle>
              <CardDescription>Detailed ROI analysis by marketing channel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Channel
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Investment (AED)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Revenue (AED)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ROI
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelROIData.map((channel, index) => (
                      <tr key={index} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          {channel.name}
                        </th>
                        <td className="px-6 py-4">{channel.investment.toLocaleString()}</td>
                        <td className="px-6 py-4">{channel.revenue.toLocaleString()}</td>
                        <td className="px-6 py-4 font-medium">{channel.roi}%</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${channel.roi > 350 ? "bg-green-100 text-green-800" : channel.roi > 250 ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"}`}
                          >
                            {channel.roi > 350 ? "Excellent" : channel.roi > 250 ? "Good" : "Average"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Channel Investment vs. Revenue</CardTitle>
                <CardDescription>Comparison of investment and generated revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={channelROIData}
                  config={{
                    investment: {
                      label: "Investment (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                    revenue: {
                      label: "Revenue (AED)",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel ROI Comparison</CardTitle>
                <CardDescription>ROI percentage by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={channelROIData}
                  config={{
                    roi: {
                      label: "ROI %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="segments" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segment Revenue Contribution</CardTitle>
                <CardDescription>Revenue distribution by customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={segmentROIData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Segment ROI Analysis</CardTitle>
                <CardDescription>ROI performance by customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#0088FE]"></div>
                      <span>Luxury Fabric</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">420%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#0088FE] h-2 rounded-full" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#00C49F]"></div>
                      <span>Eid Shoppers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">380%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#00C49F] h-2 rounded-full" style={{ width: "76%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FFBB28]"></div>
                      <span>Dubai Marina</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">350%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#FFBB28] h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF8042]"></div>
                      <span>VIP Clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">480%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#FF8042] h-2 rounded-full" style={{ width: "96%" }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8884D8]"></div>
                      <span>Corporate</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">320%</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#8884D8] h-2 rounded-full" style={{ width: "64%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Segment Performance by Campaign</CardTitle>
              <CardDescription>ROI analysis of segments across different campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Segment
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Ramadan
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Eid
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Summer
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DSF
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Average ROI
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Luxury Fabric
                      </th>
                      <td className="px-6 py-4">380%</td>
                      <td className="px-6 py-4">450%</td>
                      <td className="px-6 py-4">320%</td>
                      <td className="px-6 py-4">410%</td>
                      <td className="px-6 py-4 font-medium">420%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Eid Shoppers
                      </th>
                      <td className="px-6 py-4">420%</td>
                      <td className="px-6 py-4">520%</td>
                      <td className="px-6 py-4">280%</td>
                      <td className="px-6 py-4">300%</td>
                      <td className="px-6 py-4 font-medium">380%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Dubai Marina
                      </th>
                      <td className="px-6 py-4">340%</td>
                      <td className="px-6 py-4">380%</td>
                      <td className="px-6 py-4">320%</td>
                      <td className="px-6 py-4">360%</td>
                      <td className="px-6 py-4 font-medium">350%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        VIP Clients
                      </th>
                      <td className="px-6 py-4">450%</td>
                      <td className="px-6 py-4">580%</td>
                      <td className="px-6 py-4">420%</td>
                      <td className="px-6 py-4">470%</td>
                      <td className="px-6 py-4 font-medium">480%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Corporate
                      </th>
                      <td className="px-6 py-4">280%</td>
                      <td className="px-6 py-4">350%</td>
                      <td className="px-6 py-4">300%</td>
                      <td className="px-6 py-4">350%</td>
                      <td className="px-6 py-4 font-medium">320%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered ROI Insights</CardTitle>
              <CardDescription>Intelligent analysis and recommendations to improve ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border rounded-lg bg-blue-50">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Channel Optimization Opportunity</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        WhatsApp campaigns show 420% ROI, significantly outperforming SMS (180%). Shifting 30% of SMS
                        budget to WhatsApp could increase overall ROI by approximately 18%.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply Recommendation
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
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">VIP Client Targeting</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        VIP Clients segment shows the highest ROI at 480%. Increasing investment in this segment by 15%
                        could yield an additional AED 28,000 in revenue based on current performance patterns.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply Recommendation
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
                      <BarChart className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Campaign Timing Optimization</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Eid campaigns consistently outperform others with 480% ROI. Consider extending the campaign
                        duration by 1 week and increasing budget allocation by 10% for the upcoming Eid campaign.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply Recommendation
                        </Button>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Budget Reallocation Opportunity</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Based on historical performance, reallocating 20% of the Summer campaign budget to Eid and
                        Ramadan campaigns could increase overall ROI by approximately 12%.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          View Detailed Analysis
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Predictive ROI Analysis</CardTitle>
              <CardDescription>AI-powered forecasts for upcoming campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Upcoming Ramadan Campaign</h4>
                      <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 345-380%</p>
                      <p className="text-sm text-muted-foreground">Recommended Budget: AED 18,000</p>
                      <p className="text-sm text-muted-foreground">Projected Revenue: AED 65,700 - 72,200</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Optimize Campaign <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Upcoming Eid Campaign</h4>
                      <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 460-510%</p>
                      <p className="text-sm text-muted-foreground">Recommended Budget: AED 25,000</p>
                      <p className="text-sm text-muted-foreground">Projected Revenue: AED 115,000 - 127,500</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Optimize Campaign <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Upcoming Summer Campaign</h4>
                      <p className="text-sm text-muted-foreground mt-1">Predicted ROI: 290-320%</p>
                      <p className="text-sm text-muted-foreground">Recommended Budget: AED 15,000</p>
                      <p className="text-sm text-muted-foreground">Projected Revenue: AED 43,500 - 48,000</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Optimize Campaign <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
