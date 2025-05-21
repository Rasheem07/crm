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
import { Download, Users, Clock, MousePointer, ShoppingCart, Repeat, ArrowUpRight, Filter } from "lucide-react"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { Badge } from "@/components/ui/badge"

export default function BehavioralAnalysisPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -90),
    to: new Date(),
  })

  // Browsing behavior data
  const browsingBehaviorData = [
    { name: "Jan", pageViews: 1250, productViews: 850, cartAdds: 320 },
    { name: "Feb", pageViews: 1380, productViews: 920, cartAdds: 350 },
    { name: "Mar", pageViews: 1520, productViews: 1050, cartAdds: 410 },
    { name: "Apr", pageViews: 1680, productViews: 1180, cartAdds: 460 },
    { name: "May", pageViews: 1850, productViews: 1320, cartAdds: 520 },
    { name: "Jun", pageViews: 2100, productViews: 1480, cartAdds: 580 },
  ]

  // Purchase behavior data
  const purchaseBehaviorData = [
    { name: "Jan", firstTimeBuyers: 180, repeatCustomers: 140 },
    { name: "Feb", firstTimeBuyers: 210, repeatCustomers: 160 },
    { name: "Mar", firstTimeBuyers: 250, repeatCustomers: 190 },
    { name: "Apr", firstTimeBuyers: 280, repeatCustomers: 220 },
    { name: "May", firstTimeBuyers: 320, repeatCustomers: 260 },
    { name: "Jun", firstTimeBuyers: 360, repeatCustomers: 310 },
  ]

  // Time of day activity data
  const timeOfDayData = [
    { name: "6-9 AM", activity: 120 },
    { name: "9-12 PM", activity: 280 },
    { name: "12-3 PM", activity: 420 },
    { name: "3-6 PM", activity: 380 },
    { name: "6-9 PM", activity: 520 },
    { name: "9-12 AM", activity: 220 },
    { name: "12-3 AM", activity: 80 },
    { name: "3-6 AM", activity: 40 },
  ]

  // Device usage data
  const deviceUsageData = [
    { name: "Mobile", value: 58, color: "#0088FE" },
    { name: "Desktop", value: 32, color: "#00C49F" },
    { name: "Tablet", value: 10, color: "#FFBB28" },
  ]

  // Product interaction data
  const productInteractionData = [
    { name: "Silk", views: 580, favorites: 320, purchases: 180 },
    { name: "Cashmere", views: 480, favorites: 260, purchases: 150 },
    { name: "Premium Cotton", views: 420, favorites: 220, purchases: 120 },
    { name: "Linen", views: 320, favorites: 180, purchases: 90 },
    { name: "Wool", views: 220, favorites: 120, purchases: 60 },
  ]

  // Customer journey stages data
  const journeyStagesData = [
    { name: "Awareness", value: 100 },
    { name: "Consideration", value: 75 },
    { name: "Decision", value: 50 },
    { name: "Purchase", value: 35 },
    { name: "Retention", value: 25 },
    { name: "Advocacy", value: 15 },
  ]

  // Engagement metrics data
  const engagementMetricsData = [
    { name: "Jan", websiteTime: 2.5, pageDepth: 3.2, returnRate: 22 },
    { name: "Feb", websiteTime: 2.7, pageDepth: 3.5, returnRate: 24 },
    { name: "Mar", websiteTime: 3.0, pageDepth: 3.8, returnRate: 26 },
    { name: "Apr", websiteTime: 3.2, pageDepth: 4.0, returnRate: 28 },
    { name: "May", websiteTime: 3.5, pageDepth: 4.3, returnRate: 30 },
    { name: "Jun", websiteTime: 3.8, pageDepth: 4.5, returnRate: 32 },
  ]

  // Seasonal behavior data
  const seasonalBehaviorData = [
    { name: "Jan", purchaseVolume: 220, averageOrder: 320 },
    { name: "Feb", purchaseVolume: 240, averageOrder: 340 },
    { name: "Mar", purchaseVolume: 280, averageOrder: 360 },
    { name: "Apr", purchaseVolume: 260, averageOrder: 350 },
    { name: "May", purchaseVolume: 300, averageOrder: 380 },
    { name: "Jun", purchaseVolume: 340, averageOrder: 420 },
    { name: "Jul", purchaseVolume: 380, averageOrder: 450 },
    { name: "Aug", purchaseVolume: 360, averageOrder: 440 },
    { name: "Sep", purchaseVolume: 320, averageOrder: 400 },
    { name: "Oct", purchaseVolume: 290, averageOrder: 380 },
    { name: "Nov", purchaseVolume: 350, averageOrder: 420 },
    { name: "Dec", purchaseVolume: 420, averageOrder: 480 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Behavioral Analysis</h2>
          <p className="text-muted-foreground mt-1">Understand how customers interact with your business</p>
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
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Avg. Time on Site</p>
                <h3 className="text-3xl font-bold">3.8 min</h3>
                <p className="text-sm text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="bg-blue-200 p-2 rounded-full">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Conversion Rate</p>
                <h3 className="text-3xl font-bold">4.2%</h3>
                <p className="text-sm text-green-600 mt-1">+0.8% from last month</p>
              </div>
              <div className="bg-green-200 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Cart Abandonment</p>
                <h3 className="text-3xl font-bold">28%</h3>
                <p className="text-sm text-green-600 mt-1">-3% from last month</p>
              </div>
              <div className="bg-amber-200 p-2 rounded-full">
                <ShoppingCart className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Repeat Purchase</p>
                <h3 className="text-3xl font-bold">46%</h3>
                <p className="text-sm text-green-600 mt-1">+5% from last month</p>
              </div>
              <div className="bg-purple-200 p-2 rounded-full">
                <Repeat className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="browsing" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
          <TabsTrigger value="browsing">Browsing Behavior</TabsTrigger>
          <TabsTrigger value="purchase">Purchase Behavior</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Metrics</TabsTrigger>
          <TabsTrigger value="seasonal">Seasonal Patterns</TabsTrigger>
        </TabsList>

        <TabsContent value="browsing" className="space-y-6">
          {/* Bento Grid Layout for Browsing Behavior */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-6 lg:col-span-8">
              <CardHeader>
                <CardTitle>Browsing Activity Trends</CardTitle>
                <CardDescription>Page views, product views, and cart additions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={browsingBehaviorData}
                  dataKey={["pageViews", "productViews", "cartAdds"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-4">
              <CardHeader>
                <CardTitle>Time of Day Activity</CardTitle>
                <CardDescription>When customers are most active on your site</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent data={timeOfDayData} dataKey={["activity"]} colors={["hsl(var(--chart-1))"]} />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-4">
              <CardHeader>
                <CardTitle>Device Usage</CardTitle>
                <CardDescription>Distribution of browsing by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={deviceUsageData} />
              </CardContent>
            </Card>

            <Card className="md:col-span-3 lg:col-span-8">
              <CardHeader>
                <CardTitle>Product Interaction</CardTitle>
                <CardDescription>How customers interact with different product categories</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={productInteractionData}
                  dataKey={["views", "favorites", "purchases"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Browsing Insights</CardTitle>
                <CardDescription>Key insights from customer browsing behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <MousePointer className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">High Interest Categories</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Silk and Cashmere categories receive 58% of all product views but only 42% of purchases,
                          indicating potential conversion optimization opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Peak Browsing Hours</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Customer activity peaks between 6-9 PM, with 28% of daily traffic occurring during this
                          window. Consider scheduling promotions and new product launches during this time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <ShoppingCart className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Cart Abandonment Points</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          58% of cart abandonments occur at the shipping cost display step. Consider testing free
                          shipping thresholds or bundled shipping options to improve conversion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="purchase" className="space-y-6">
          {/* Bento Grid Layout for Purchase Behavior */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-6 lg:col-span-8">
              <CardHeader>
                <CardTitle>Purchase Trends</CardTitle>
                <CardDescription>First-time vs. repeat customer purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={purchaseBehaviorData}
                  dataKey={["firstTimeBuyers", "repeatCustomers"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-4">
              <CardHeader>
                <CardTitle>Customer Journey Stages</CardTitle>
                <CardDescription>Conversion through the purchase funnel</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent data={journeyStagesData} dataKey={["value"]} colors={["hsl(var(--chart-1))"]} />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Purchase Behavior Analysis</CardTitle>
                <CardDescription>Key insights from customer purchase patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Top Purchasing Segments</h4>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>VIP Clients</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "32%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Luxury Fabric</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Dubai Marina</span>
                          <span className="font-medium">18%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Eid Shoppers</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Corporate</span>
                          <span className="font-medium">7%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "7%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Purchase Frequency Analysis</h4>
                    <div className="mt-4 space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">One-time Buyers</p>
                          <p className="text-xs text-muted-foreground">Purchased once in the last 6 months</p>
                        </div>
                        <Badge>42%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Occasional Buyers</p>
                          <p className="text-xs text-muted-foreground">Purchased 2-3 times in the last 6 months</p>
                        </div>
                        <Badge>35%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Regular Buyers</p>
                          <p className="text-xs text-muted-foreground">Purchased 4-6 times in the last 6 months</p>
                        </div>
                        <Badge>18%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">Frequent Buyers</p>
                          <p className="text-xs text-muted-foreground">Purchased 7+ times in the last 6 months</p>
                        </div>
                        <Badge>5%</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="engagement" className="space-y-6">
          {/* Bento Grid Layout for Engagement Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-6 lg:col-span-8">
              <CardHeader>
                <CardTitle>Engagement Metrics Over Time</CardTitle>
                <CardDescription>Time on site, page depth, and return rate trends</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={engagementMetricsData}
                  dataKey={["websiteTime", "pageDepth", "returnRate"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-4">
              <CardHeader>
                <CardTitle>Content Engagement</CardTitle>
                <CardDescription>Most engaging content by type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Product Videos</p>
                        <p className="text-sm text-muted-foreground">Avg. watch time: 1:45</p>
                      </div>
                      <Badge className="bg-green-500">High</Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Fabric Care Guides</p>
                        <p className="text-sm text-muted-foreground">Avg. read time: 2:20</p>
                      </div>
                      <Badge className="bg-green-500">High</Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Style Lookbooks</p>
                        <p className="text-sm text-muted-foreground">Avg. view time: 1:35</p>
                      </div>
                      <Badge className="bg-blue-500">Medium</Badge>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Customer Reviews</p>
                        <p className="text-sm text-muted-foreground">Avg. read time: 1:10</p>
                      </div>
                      <Badge className="bg-blue-500">Medium</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Engagement Insights</CardTitle>
                <CardDescription>Key insights from customer engagement patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">VIP Client Engagement</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          VIP clients spend 2.4x longer on the site compared to other segments and view 3.2x more
                          products per session. Consider expanding exclusive content for this segment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <Filter className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Filter Usage Impact</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Customers who use product filters have a 68% higher conversion rate than those who don't.
                          Consider making filters more prominent and adding additional filter options.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <Repeat className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Return Visit Behavior</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Return visitors are 3.5x more likely to make a purchase than first-time visitors. Focus on
                          strategies to encourage repeat visits through email marketing and loyalty programs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="seasonal" className="space-y-6">
          {/* Bento Grid Layout for Seasonal Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Seasonal Purchase Patterns</CardTitle>
                <CardDescription>Purchase volume and average order value by month</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={seasonalBehaviorData}
                  dataKey={["purchaseVolume", "averageOrder"]}
                  colors={["hsl(var(--chart-1))", "hsl(var(--chart-2))"]}
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-6">
              <CardHeader>
                <CardTitle>Seasonal Product Interest</CardTitle>
                <CardDescription>Product category interest by season</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Winter (Dec-Feb)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cashmere</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between text-sm">
                        <span>Wool</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between text-sm">
                        <span>Silk</span>
                        <span className="font-medium">18%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "18%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Summer (Jun-Aug)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Linen</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between text-sm">
                        <span>Cotton</span>
                        <span className="font-medium">32%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex justify-between text-sm">
                        <span>Silk</span>
                        <span className="font-medium">15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-6">
              <CardHeader>
                <CardTitle>Holiday Shopping Behavior</CardTitle>
                <CardDescription>Customer behavior during key holiday periods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Ramadan</h4>
                        <p className="text-sm text-muted-foreground mt-1">Apr-May</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">+85% Sales</p>
                        <p className="text-xs text-green-600">+32% AOV</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">
                        Peak shopping 10-15 days before Eid. Gift sets and premium fabrics most popular.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Eid Al-Adha</h4>
                        <p className="text-sm text-muted-foreground mt-1">Jun-Jul</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">+62% Sales</p>
                        <p className="text-xs text-green-600">+18% AOV</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">
                        Family-oriented purchases. Coordinated sets and traditional fabrics most popular.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">National Day</h4>
                        <p className="text-sm text-muted-foreground mt-1">Dec</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">+45% Sales</p>
                        <p className="text-xs text-green-600">+12% AOV</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs text-muted-foreground">
                        Patriotic colors and themes. Special edition products perform exceptionally well.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-6 lg:col-span-12">
              <CardHeader>
                <CardTitle>Seasonal Insights</CardTitle>
                <CardDescription>Key insights from seasonal behavior patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Pre-Ramadan Opportunity</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Customers start browsing 45 days before Ramadan but typically purchase 15-20 days before.
                          Consider early-bird promotions to capture this browsing window.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-green-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <ShoppingCart className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Summer Collection Timing</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          Summer collection purchases peak in May, 30 days before the height of summer. Launch summer
                          collections in early April for optimal sales performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <ArrowUpRight className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Off-Season Opportunity</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          February and September show 28% lower sales volume. Test special promotions, loyalty rewards,
                          or exclusive collections during these periods to boost revenue.
                        </p>
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
