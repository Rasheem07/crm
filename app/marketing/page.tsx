"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { AreaChartComponent } from "../components/charts/area-chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, Filter, Plus, Search, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function MarketingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Marketing performance data
  const performanceData = [
    { name: "Jan", emailOpen: 65, whatsappOpen: 75, smsOpen: 55 },
    { name: "Feb", emailOpen: 68, whatsappOpen: 78, smsOpen: 58 },
    { name: "Mar", emailOpen: 72, whatsappOpen: 82, smsOpen: 62 },
    { name: "Apr", emailOpen: 75, whatsappOpen: 85, smsOpen: 65 },
    { name: "May", emailOpen: 80, whatsappOpen: 88, smsOpen: 70 },
    { name: "Jun", emailOpen: 85, whatsappOpen: 92, smsOpen: 75 },
  ]

  // Channel ROI data
  const channelRoiData = [
    { name: "Email", roi: 320 },
    { name: "WhatsApp", roi: 480 },
    { name: "SMS", roi: 280 },
    { name: "Social Media", roi: 390 },
    { name: "Events", roi: 430 },
  ]

  // Conversion funnel data
  const conversionData = [
    { name: "Awareness", value: 100 },
    { name: "Interest", value: 75 },
    { name: "Consideration", value: 50 },
    { name: "Purchase", value: 30 },
    { name: "Loyalty", value: 20 },
  ]

  // Customer acquisition data
  const acquisitionData = [
    { name: "Jan", organic: 45, paid: 65, referral: 30 },
    { name: "Feb", organic: 50, paid: 70, referral: 35 },
    { name: "Mar", organic: 55, paid: 75, referral: 40 },
    { name: "Apr", organic: 60, paid: 80, referral: 45 },
    { name: "May", organic: 65, paid: 85, referral: 50 },
    { name: "Jun", organic: 70, paid: 90, referral: 55 },
  ]

  // Channel distribution data
  const channelData = [
    { name: "Email", value: 35, color: "#0088FE" },
    { name: "WhatsApp", value: 30, color: "#00C49F" },
    { name: "SMS", value: 15, color: "#FFBB28" },
    { name: "Social Media", value: 20, color: "#FF8042" },
  ]

  // Recent campaigns
  const recentCampaigns = [
    {
      id: "camp-001",
      name: "Ramadan Collection Launch",
      status: "Active",
      progress: 45,
      startDate: "Mar 10, 2024",
      endDate: "Apr 9, 2024",
      channels: ["WhatsApp", "Email"],
      performance: "+15% engagement",
    },
    {
      id: "camp-002",
      name: "Dubai Marina VIP Event",
      status: "Active",
      progress: 80,
      startDate: "Mar 25, 2024",
      endDate: "Mar 25, 2024",
      channels: ["SMS", "Email"],
      performance: "+22% RSVPs",
    },
    {
      id: "camp-003",
      name: "Eid Special Offers",
      status: "Scheduled",
      progress: 0,
      startDate: "Apr 5, 2024",
      endDate: "Apr 15, 2024",
      channels: ["SMS", "Email", "Social Media"],
      performance: "Pending",
    },
  ]

  // Marketing activities
  const marketingActivities = [
    {
      id: "act-001",
      name: "Social Media Campaign",
      status: "In Progress",
      dueDate: "Apr 15, 2024",
      assignedTo: "Sarah Ahmed",
      priority: "High",
    },
    {
      id: "act-002",
      name: "Email Newsletter",
      status: "Completed",
      dueDate: "Apr 5, 2024",
      assignedTo: "Mohammed Ali",
      priority: "Medium",
    },
    {
      id: "act-003",
      name: "Content Creation",
      status: "In Progress",
      dueDate: "Apr 20, 2024",
      assignedTo: "Layla Khan",
      priority: "Medium",
    },
    {
      id: "act-004",
      name: "Influencer Outreach",
      status: "Not Started",
      dueDate: "Apr 25, 2024",
      assignedTo: "Ahmed Hassan",
      priority: "Low",
    },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Marketing Dashboard</h2>
          <p className="text-muted-foreground mt-1">Overview of your marketing performance and campaigns</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search campaigns..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Link href="/crm/campaigns/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Campaign
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Campaigns</p>
                <h3 className="text-3xl font-bold">24</h3>
                <p className="text-sm text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Avg. Open Rate</p>
                <h3 className="text-3xl font-bold">68%</h3>
                <p className="text-sm text-green-600 mt-1">+5% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Conversion Rate</p>
                <h3 className="text-3xl font-bold">12%</h3>
                <p className="text-sm text-green-600 mt-1">+2% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Marketing ROI</p>
                <h3 className="text-3xl font-bold">320%</h3>
                <p className="text-sm text-green-600 mt-1">+15% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Open rates by communication channel</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={performanceData}
                  config={{
                    emailOpen: {
                      label: "Email Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    whatsappOpen: {
                      label: "WhatsApp Open Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                    smsOpen: {
                      label: "SMS Open Rate %",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel ROI</CardTitle>
                <CardDescription>Return on investment by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={channelRoiData}
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
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customers by acquisition channel</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChartComponent
                  data={acquisitionData}
                  config={{
                    organic: {
                      label: "Organic",
                      color: "hsl(var(--chart-1))",
                    },
                    paid: {
                      label: "Paid",
                      color: "hsl(var(--chart-2))",
                    },
                    referral: {
                      label: "Referral",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel Distribution</CardTitle>
                <CardDescription>Marketing budget allocation by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={channelData} />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Campaigns</CardTitle>
                <CardDescription>Status of your latest marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCampaigns.map((campaign) => (
                    <div key={campaign.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{campaign.name}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <CalendarIcon className="h-3 w-3 mr-1" />
                            <span>
                              {campaign.startDate} - {campaign.endDate}
                            </span>
                          </div>
                        </div>
                        <Badge
                          className={
                            campaign.status === "Active"
                              ? "bg-green-500"
                              : campaign.status === "Scheduled"
                                ? "bg-blue-500"
                                : "bg-amber-500"
                          }
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {campaign.channels.map((channel, index) => (
                          <Badge key={index} variant="secondary">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{campaign.progress}%</span>
                      </div>
                      <Progress value={campaign.progress} />
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-sm font-medium">{campaign.performance}</span>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Customer journey conversion rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {conversionData.map((stage, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span>{stage.name}</span>
                        <span>{stage.value}%</span>
                      </div>
                      <Progress value={stage.value} className="h-2" />
                      {index < conversionData.length - 1 && (
                        <div className="flex justify-center my-1">
                          <ArrowUpRight className="h-4 w-4 rotate-90 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentCampaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge
                      className={
                        campaign.status === "Active"
                          ? "bg-green-500"
                          : campaign.status === "Scheduled"
                            ? "bg-blue-500"
                            : "bg-amber-500"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {campaign.channels.map((channel, index) => (
                        <Badge key={index} variant="secondary">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <Progress value={campaign.progress} />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium">{campaign.performance}</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Link href="/crm/campaigns">
              <Button variant="outline">View All Campaigns</Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Activity</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Due Date</th>
                  <th className="text-left py-3 px-4">Assigned To</th>
                  <th className="text-left py-3 px-4">Priority</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {marketingActivities.map((activity) => (
                  <tr key={activity.id} className="border-b">
                    <td className="py-3 px-4">{activity.name}</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          activity.status === "Completed"
                            ? "bg-green-500"
                            : activity.status === "In Progress"
                              ? "bg-blue-500"
                              : "bg-amber-500"
                        }
                      >
                        {activity.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{activity.dueDate}</td>
                    <td className="py-3 px-4">{activity.assignedTo}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant="outline"
                        className={
                          activity.priority === "High"
                            ? "border-red-500 text-red-500"
                            : activity.priority === "Medium"
                              ? "border-amber-500 text-amber-500"
                              : "border-green-500 text-green-500"
                        }
                      >
                        {activity.priority}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Activity
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Open rates by communication channel</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={performanceData}
                  config={{
                    emailOpen: {
                      label: "Email Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    whatsappOpen: {
                      label: "WhatsApp Open Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                    smsOpen: {
                      label: "SMS Open Rate %",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel ROI</CardTitle>
                <CardDescription>Return on investment by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={channelRoiData}
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
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customers by acquisition channel</CardDescription>
              </CardHeader>
              <CardContent>
                <AreaChartComponent
                  data={acquisitionData}
                  config={{
                    organic: {
                      label: "Organic",
                      color: "hsl(var(--chart-1))",
                    },
                    paid: {
                      label: "Paid",
                      color: "hsl(var(--chart-2))",
                    },
                    referral: {
                      label: "Referral",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel Distribution</CardTitle>
                <CardDescription>Marketing budget allocation by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={channelData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
