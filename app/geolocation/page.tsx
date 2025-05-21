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
import { Download, MapPin, Users, Building, TrendingUp, Globe } from "lucide-react"
import { PieChartComponent } from "../components/charts/pie-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function GeolocationPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  // Location data
  const locationData = [
    { name: "Dubai", value: 45, color: "#0088FE" },
    { name: "Abu Dhabi", value: 25, color: "#00C49F" },
    { name: "Sharjah", value: 15, color: "#FFBB28" },
    { name: "Ajman", value: 10, color: "#FF8042" },
    { name: "Other", value: 5, color: "#8884D8" },
  ]

  // Store performance data
  const storePerformanceData = [
    { name: "Dubai Mall", revenue: 450000, customers: 12500 },
    { name: "Mall of Emirates", revenue: 320000, customers: 9800 },
    { name: "Abu Dhabi Mall", revenue: 180000, customers: 5200 },
    { name: "Sharjah City Center", revenue: 120000, customers: 3800 },
    { name: "Ajman City Center", revenue: 85000, customers: 2400 },
  ]

  // Neighborhood data
  const neighborhoodData = [
    { name: "Dubai Marina", customers: 2800, growth: "+15%" },
    { name: "Downtown Dubai", customers: 2200, growth: "+12%" },
    { name: "Palm Jumeirah", customers: 1800, growth: "+18%" },
    { name: "Jumeirah", customers: 1500, growth: "+8%" },
    { name: "Business Bay", customers: 1200, growth: "+10%" },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Geolocation Analytics</h2>
          <p className="text-muted-foreground mt-1">Analyze customer distribution and performance by location</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Regions</SelectLabel>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="dubai">Dubai</SelectItem>
                <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                <SelectItem value="sharjah">Sharjah</SelectItem>
                <SelectItem value="ajman">Ajman</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
        {/* Key Metrics - Row 1 */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Regions</p>
                <h3 className="text-3xl font-bold">7</h3>
                <p className="text-sm text-green-600 mt-1">+1 new region this quarter</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Globe className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Stores</p>
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-sm text-green-600 mt-1">+2 new stores this quarter</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <Building className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Top Region</p>
                <h3 className="text-xl font-bold">Dubai</h3>
                <p className="text-sm text-green-600 mt-1">45% of customers</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Fastest Growing</p>
                <h3 className="text-xl font-bold">Ajman</h3>
                <p className="text-sm text-green-600 mt-1">+22% growth</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Visualization - Row 2-3 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-3 row-span-2">
          <CardHeader>
            <CardTitle>Customer Distribution Map</CardTitle>
            <CardDescription>Geographic distribution of customers across UAE</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] flex items-center justify-center bg-muted/20 rounded-lg">
              <div className="text-muted-foreground flex flex-col items-center">
                <Globe className="h-16 w-16 mb-2" />
                <p>Interactive map would appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Distribution by Region - Row 2 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-3 row-span-2">
          <CardHeader>
            <CardTitle>Customer Distribution by Region</CardTitle>
            <CardDescription>Percentage of customers in each region</CardDescription>
          </CardHeader>
          <CardContent>
            <PieChartComponent data={locationData} />
          </CardContent>
        </Card>

        {/* Store Performance - Row 4 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-6">
          <CardHeader>
            <CardTitle>Store Performance</CardTitle>
            <CardDescription>Revenue and customer visits by store location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-auto rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 transition-colors">
                    <th className="h-12 px-4 text-left align-middle font-medium">Store Location</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Revenue</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Customers</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Avg. Transaction</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {storePerformanceData.map((store, index) => (
                    <tr key={index} className="border-b transition-colors hover:bg-muted/20">
                      <td className="p-4 align-middle font-medium">{store.name}</td>
                      <td className="p-4 align-middle">AED {store.revenue.toLocaleString()}</td>
                      <td className="p-4 align-middle">{store.customers.toLocaleString()}</td>
                      <td className="p-4 align-middle">
                        AED {Math.round(store.revenue / store.customers).toLocaleString()}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-2">
                          <Progress value={Math.round((store.revenue / 450000) * 100)} className="h-2 w-24" />
                          <span className="text-xs">{Math.round((store.revenue / 450000) * 100)}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Neighborhood Analysis - Row 5 */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Top Neighborhoods</CardTitle>
            <CardDescription>Customer distribution by neighborhood</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {neighborhoodData.map((neighborhood, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{neighborhood.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{neighborhood.customers.toLocaleString()}</span>
                    </div>
                    <Badge className="bg-green-500">{neighborhood.growth}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Purchase Behavior by Region - Row 5 */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>Purchase Behavior by Region</CardTitle>
            <CardDescription>Average purchase value by region</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartComponent
              data={[
                { name: "Dubai", value: 2500 },
                { name: "Abu Dhabi", value: 2200 },
                { name: "Sharjah", value: 1800 },
                { name: "Ajman", value: 1500 },
                { name: "Other", value: 1200 },
              ]}
              config={{
                value: {
                  label: "Avg. Purchase Value (AED)",
                  color: "hsl(var(--chart-1))",
                },
              }}
            />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="regions">Regions</TabsTrigger>
          <TabsTrigger value="stores">Stores</TabsTrigger>
          <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Regional Growth</CardTitle>
                <CardDescription>Customer growth by region over time</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={[
                    { name: "Dubai", value: 15 },
                    { name: "Abu Dhabi", value: 12 },
                    { name: "Sharjah", value: 8 },
                    { name: "Ajman", value: 22 },
                    { name: "Other", value: 10 },
                  ]}
                  config={{
                    value: {
                      label: "Growth %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Preferences by Region</CardTitle>
                <CardDescription>Most popular product categories by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Dubai</h4>
                      <Badge variant="outline">45% of customers</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Luxury Silk</span>
                        <span>42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span>Premium Cotton</span>
                        <span>28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span>Cashmere</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Abu Dhabi</h4>
                      <Badge variant="outline">25% of customers</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Premium Cotton</span>
                        <span>38%</span>
                      </div>
                      <Progress value={38} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span>Luxury Silk</span>
                        <span>32%</span>
                      </div>
                      <Progress value={32} className="h-2" />
                      <div className="flex items-center justify-between text-sm">
                        <span>Wool</span>
                        <span>20%</span>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="regions" className="space-y-4">
          {/* Region-specific content */}
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Regional Performance</CardTitle>
                <CardDescription>Detailed metrics by region</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full overflow-auto rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50 transition-colors">
                        <th className="h-12 px-4 text-left align-middle font-medium">Region</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Customers</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Revenue</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Avg. Order Value</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Growth</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Retention</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle font-medium">Dubai</td>
                        <td className="p-4 align-middle">12,500</td>
                        <td className="p-4 align-middle">AED 31,250,000</td>
                        <td className="p-4 align-middle">AED 2,500</td>
                        <td className="p-4 align-middle text-green-600">+15%</td>
                        <td className="p-4 align-middle">82%</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle font-medium">Abu Dhabi</td>
                        <td className="p-4 align-middle">6,950</td>
                        <td className="p-4 align-middle">AED 15,290,000</td>
                        <td className="p-4 align-middle">AED 2,200</td>
                        <td className="p-4 align-middle text-green-600">+12%</td>
                        <td className="p-4 align-middle">78%</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle font-medium">Sharjah</td>
                        <td className="p-4 align-middle">4,170</td>
                        <td className="p-4 align-middle">AED 7,506,000</td>
                        <td className="p-4 align-middle">AED 1,800</td>
                        <td className="p-4 align-middle text-green-600">+8%</td>
                        <td className="p-4 align-middle">75%</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle font-medium">Ajman</td>
                        <td className="p-4 align-middle">2,780</td>
                        <td className="p-4 align-middle">AED 4,170,000</td>
                        <td className="p-4 align-middle">AED 1,500</td>
                        <td className="p-4 align-middle text-green-600">+22%</td>
                        <td className="p-4 align-middle">70%</td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle font-medium">Other</td>
                        <td className="p-4 align-middle">1,390</td>
                        <td className="p-4 align-middle">AED 1,668,000</td>
                        <td className="p-4 align-middle">AED 1,200</td>
                        <td className="p-4 align-middle text-green-600">+10%</td>
                        <td className="p-4 align-middle">68%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stores" className="space-y-4">
          {/* Store-specific content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storePerformanceData.map((store, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                  <CardDescription>Store performance metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                      <p className="text-xl font-bold">AED {store.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Customers</p>
                      <p className="text-xl font-bold">{store.customers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Avg. Order</p>
                      <p className="text-xl font-bold">
                        AED {Math.round(store.revenue / store.customers).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Performance</span>
                      <span className="text-sm">{Math.round((store.revenue / 450000) * 100)}% of top store</span>
                    </div>
                    <Progress value={Math.round((store.revenue / 450000) * 100)} className="h-2" />
                  </div>
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-4">
          {/* Heatmap visualization */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Density Heatmap</CardTitle>
              <CardDescription>Geographic concentration of customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[500px] flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-muted-foreground flex flex-col items-center">
                  <Globe className="h-16 w-16 mb-2" />
                  <p>Interactive heatmap would appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
