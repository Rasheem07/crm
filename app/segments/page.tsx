"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, MoreHorizontal, Zap, TrendingUp } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PieChartComponent } from "../components/charts/pie-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { LineChartComponent } from "../components/charts/line-chart"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function SegmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample segments data
  const segments = [
    {
      id: "seg-001",
      name: "Luxury Fabric",
      description: "High-value customers interested in premium fabrics",
      customers: 850,
      avgValue: "AED 2,500",
      status: "Active",
      growth: "+12%",
      retention: "82%",
      conversion: "65%",
    },
    {
      id: "seg-002",
      name: "Eid Shoppers",
      description: "Customers who shop primarily during Eid season",
      customers: 1200,
      avgValue: "AED 1,800",
      status: "Active",
      growth: "+18%",
      retention: "75%",
      conversion: "78%",
    },
    {
      id: "seg-003",
      name: "Dubai Marina",
      description: "Customers located in Dubai Marina area",
      customers: 650,
      avgValue: "AED 1,950",
      status: "Active",
      growth: "+8%",
      retention: "70%",
      conversion: "58%",
    },
    {
      id: "seg-004",
      name: "VIP Clients",
      description: "Top-tier customers with highest lifetime value",
      customers: 320,
      avgValue: "AED 3,200",
      status: "Active",
      growth: "+15%",
      retention: "92%",
      conversion: "85%",
    },
    {
      id: "seg-005",
      name: "Corporate",
      description: "Business and corporate clients",
      customers: 180,
      avgValue: "AED 4,500",
      status: "Active",
      growth: "+5%",
      retention: "88%",
      conversion: "72%",
    },
    {
      id: "seg-006",
      name: "Weekend Shoppers",
      description: "Customers who primarily shop on weekends",
      customers: 750,
      avgValue: "AED 1,200",
      status: "Draft",
      growth: "+10%",
      retention: "65%",
      conversion: "60%",
    },
    {
      id: "seg-007",
      name: "Evening Browsers",
      description: "Customers who browse between 8-10 PM",
      customers: 520,
      avgValue: "AED 950",
      status: "Draft",
      growth: "+7%",
      retention: "58%",
      conversion: "45%",
    },
  ]

  // Filter segments based on search term
  const filteredSegments = segments.filter((segment) => segment.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Segment distribution data for pie chart
  const segmentDistributionData = [
    { name: "Luxury Fabric", value: 850, color: "#0088FE" },
    { name: "Eid Shoppers", value: 1200, color: "#00C49F" },
    { name: "Dubai Marina", value: 650, color: "#FFBB28" },
    { name: "VIP Clients", value: 320, color: "#FF8042" },
    { name: "Corporate", value: 180, color: "#8884D8" },
    { name: "Weekend Shoppers", value: 750, color: "#82ca9d" },
    { name: "Evening Browsers", value: 520, color: "#ffc658" },
  ]

  // Growth data for bar chart
  const growthData = segments
    .sort(
      (a, b) =>
        Number.parseFloat(b.growth.replace("+", "").replace("%", "")) -
        Number.parseFloat(a.growth.replace("+", "").replace("%", "")),
    )
    .slice(0, 5)
    .map((segment) => ({
      name: segment.name,
      growth: Number.parseFloat(segment.growth.replace("+", "").replace("%", "")),
    }))

  // Monthly trend data
  const monthlyTrendData = [
    { name: "Jan", customers: 2100, revenue: 210000 },
    { name: "Feb", customers: 2300, revenue: 240000 },
    { name: "Mar", customers: 2500, revenue: 270000 },
    { name: "Apr", customers: 2800, revenue: 310000 },
    { name: "May", customers: 3100, revenue: 350000 },
    { name: "Jun", customers: 3400, revenue: 390000 },
    { name: "Jul", customers: 3700, revenue: 420000 },
    { name: "Aug", customers: 4000, revenue: 460000 },
    { name: "Sep", customers: 4300, revenue: 490000 },
    { name: "Oct", customers: 4470, revenue: 520000 },
  ]

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Customer Segments</h2>
          <p className="text-muted-foreground mt-1">Create and manage customer segments for targeted marketing</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search segments..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Link href="/segments/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Segment
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="overflow-x-auto">
          <TabsTrigger value="all">All Segments</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="ai-generated">AI Generated</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-4">
            {/* Top row - Key metrics */}
            <Card className="col-span-6 md:col-span-3 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-blue-800 mb-1">Total Segments</div>
                  <div className="text-2xl md:text-3xl font-bold text-blue-900">{segments.length}</div>
                  <div className="flex items-center mt-1 text-xs text-blue-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+2 this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-green-800 mb-1">Active Segments</div>
                  <div className="text-2xl md:text-3xl font-bold text-green-900">
                    {segments.filter((s) => s.status === "Active").length}
                  </div>
                  <div className="flex items-center mt-1 text-xs text-green-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+1 this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-amber-800 mb-1">Avg. Growth</div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-900">+12%</div>
                  <div className="flex items-center mt-1 text-xs text-amber-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+3% from last quarter</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-6 md:col-span-3 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col">
                  <div className="text-xs font-medium text-purple-800 mb-1">Total Customers</div>
                  <div className="text-2xl md:text-3xl font-bold text-purple-900">4,470</div>
                  <div className="flex items-center mt-1 text-xs text-purple-700">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+320 this month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second row - Charts */}
            <Card className="col-span-12 md:col-span-6 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Monthly Trend</CardTitle>
                <CardDescription>Customer growth and revenue trend</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <LineChartComponent
                  data={monthlyTrendData}
                  dataKey={["customers", "revenue"]}
                  height={300}
                  colors={["#8884d8", "#82ca9d"]}
                />
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 row-span-2">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Segment Distribution</CardTitle>
                <CardDescription>Customer distribution by segment</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <PieChartComponent
                  data={segmentDistributionData}
                  height={300}
                  innerRadius={60}
                  outerRadius={120}
                  showLegend={true}
                  legendPosition="right"
                />
              </CardContent>
            </Card>

            {/* Third row - Growth chart and AI recommendation */}
            <Card className="col-span-12 md:col-span-6">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Segment Growth</CardTitle>
                <CardDescription>Growth rate by segment</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <BarChartComponent data={growthData} dataKey="growth" height={300} colors={["#8884d8"]} barSize={30} />
              </CardContent>
            </Card>

            <Card className="col-span-12 md:col-span-6 bg-violet-50">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-violet-900">AI Segment Recommendation</CardTitle>
                <CardDescription className="text-violet-700">Based on customer behavior</CardDescription>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex items-start gap-4">
                  <div className="bg-violet-200 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-violet-900">Weekend Shoppers</h4>
                    <p className="text-sm text-violet-700 mt-1">
                      Customers who primarily engage and purchase on weekends. Create targeted weekend promotions.
                    </p>
                    <div className="mt-2">
                      <Badge className="bg-violet-600">New Segment</Badge>
                      <Badge variant="outline" className="ml-2 text-violet-800 border-violet-300">
                        750 Customers
                      </Badge>
                    </div>
                    <Link href="/segments/create">
                      <Button size="sm" className="mt-3 bg-violet-600 hover:bg-violet-700">
                        Create Segment
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fourth row - Top performing segment */}
            <Card className="col-span-12 bg-teal-50">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-teal-900">Top Performing Segments</CardTitle>
                    <CardDescription className="text-teal-700">
                      Segments with highest growth and retention
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {segments
                    .sort(
                      (a, b) =>
                        Number.parseFloat(b.growth.replace("+", "").replace("%", "")) -
                        Number.parseFloat(a.growth.replace("+", "").replace("%", "")),
                    )
                    .slice(0, 4)
                    .map((segment, index) => (
                      <div key={segment.id} className="p-4 border border-teal-200 rounded-lg bg-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-teal-900">{segment.name}</h4>
                            <p className="text-sm text-teal-700 mt-1">{segment.description}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <Badge className="bg-teal-600">{segment.growth} Growth</Badge>
                              <Badge variant="outline" className="text-teal-800 border-teal-300">
                                {segment.customers} Customers
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-teal-900">Retention</div>
                            <div className="text-lg font-bold text-teal-900">{segment.retention}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-teal-800">Performance</span>
                            <span className="text-teal-800">{segment.conversion} Conversion</span>
                          </div>
                          <Progress
                            value={Number.parseInt(segment.conversion)}
                            className="h-2 bg-teal-200"
                            indicatorClassName="bg-teal-600"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Fifth row - Full-width Table */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>All defined customer segments</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Segment Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Customers
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Avg. Value
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Growth
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Retention
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSegments.map((segment) => (
                        <tr key={segment.id} className="border-b transition-colors hover:bg-muted/20">
                          <td className="p-4 align-middle">
                            <div>
                              <div className="font-medium">{segment.name}</div>
                              <div className="text-xs text-muted-foreground">{segment.description}</div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{segment.customers.toLocaleString()}</td>
                          <td className="p-4 align-middle">{segment.avgValue}</td>
                          <td className="p-4 align-middle text-green-600 font-medium">{segment.growth}</td>
                          <td className="p-4 align-middle">{segment.retention}</td>
                          <td className="p-4 align-middle">
                            <Badge
                              className={
                                segment.status === "Active"
                                  ? "bg-green-500"
                                  : segment.status === "Draft"
                                    ? "bg-amber-500"
                                    : ""
                              }
                            >
                              {segment.status}
                            </Badge>
                          </td>
                          <td className="p-4 align-middle">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Segment</DropdownMenuItem>
                                <DropdownMenuItem>Create Campaign</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Delete Segment</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Other tabs content would be updated similarly */}
        <TabsContent value="active" className="space-y-4">
          {/* Active segments content with proper bento grid */}
        </TabsContent>

        <TabsContent value="draft" className="space-y-4">
          {/* Draft segments content with proper bento grid */}
        </TabsContent>

        <TabsContent value="ai-generated" className="space-y-4">
          {/* AI-generated segments content with proper bento grid */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
