"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Plus, Calendar, Mail, ArrowUpRight, Eye, Edit, Trash } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function EmailMarketingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openCreateCampaign, setOpenCreateCampaign] = useState(false)

  // Email performance data
  const performanceData = [
    { name: "Jan", openRate: 22, clickRate: 3.2, bounceRate: 1.2 },
    { name: "Feb", openRate: 24, clickRate: 3.5, bounceRate: 1.1 },
    { name: "Mar", openRate: 26, clickRate: 3.8, bounceRate: 1.0 },
    { name: "Apr", openRate: 28, clickRate: 4.0, bounceRate: 0.9 },
    { name: "May", openRate: 30, clickRate: 4.2, bounceRate: 0.8 },
    { name: "Jun", openRate: 32, clickRate: 4.5, bounceRate: 0.7 },
  ]

  // Email campaign data
  const campaignData = [
    { name: "Ramadan", openRate: 28, clickRate: 4.2 },
    { name: "Eid", openRate: 32, clickRate: 5.1 },
    { name: "Summer", openRate: 26, clickRate: 3.8 },
    { name: "DSF", openRate: 30, clickRate: 4.5 },
    { name: "National Day", openRate: 34, clickRate: 5.5 },
  ]

  // Device distribution data
  const deviceData = [
    { name: "Mobile", value: 55, color: "#0088FE" },
    { name: "Desktop", value: 35, color: "#00C49F" },
    { name: "Tablet", value: 10, color: "#FFBB28" },
  ]

  // Email campaigns
  const emailCampaigns = [
    {
      id: "email-001",
      name: "Ramadan Collection Announcement",
      status: "Sent",
      sentDate: "Mar 10, 2024",
      openRate: 28,
      clickRate: 4.2,
      recipients: 2350,
    },
    {
      id: "email-002",
      name: "Eid Special Offers",
      status: "Draft",
      sentDate: "-",
      openRate: 0,
      clickRate: 0,
      recipients: 2350,
    },
    {
      id: "email-003",
      name: "VIP Private Viewing Invitation",
      status: "Sent",
      sentDate: "Mar 25, 2024",
      openRate: 32,
      clickRate: 5.1,
      recipients: 120,
    },
    {
      id: "email-004",
      name: "Summer Collection Pre-Launch",
      status: "Scheduled",
      sentDate: "Apr 15, 2024",
      openRate: 0,
      clickRate: 0,
      recipients: 2350,
    },
  ]

  // Email templates
  const emailTemplates = [
    {
      id: "template-001",
      name: "Promotional Announcement",
      category: "Promotional",
      lastModified: "Mar 15, 2024",
    },
    {
      id: "template-002",
      name: "Product Launch",
      category: "Promotional",
      lastModified: "Mar 20, 2024",
    },
    {
      id: "template-003",
      name: "Newsletter",
      category: "Informational",
      lastModified: "Mar 25, 2024",
    },
    {
      id: "template-004",
      name: "Event Invitation",
      category: "Event",
      lastModified: "Apr 1, 2024",
    },
    {
      id: "template-005",
      name: "Welcome Email",
      category: "Onboarding",
      lastModified: "Apr 5, 2024",
    },
  ]

  // Subscriber lists
  const subscriberLists = [
    {
      id: "list-001",
      name: "All Customers",
      subscribers: 2350,
      lastUpdated: "Apr 5, 2024",
    },
    {
      id: "list-002",
      name: "VIP Clients",
      subscribers: 120,
      lastUpdated: "Apr 3, 2024",
    },
    {
      id: "list-003",
      name: "Dubai Marina Residents",
      subscribers: 450,
      lastUpdated: "Mar 28, 2024",
    },
    {
      id: "list-004",
      name: "Luxury Fabric Buyers",
      subscribers: 780,
      lastUpdated: "Apr 1, 2024",
    },
    {
      id: "list-005",
      name: "Inactive Customers",
      subscribers: 320,
      lastUpdated: "Mar 25, 2024",
    },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Email Marketing</h2>
          <p className="text-muted-foreground mt-1">Manage your email campaigns and newsletters</p>
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
          <Button asChild>
            <Link href="/crm/email-marketing/create">
              <Plus className="mr-2 h-4 w-4" /> Create Campaign
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Subscribers</p>
                <h3 className="text-3xl font-bold">2,350</h3>
                <p className="text-sm text-green-600 mt-1">+150 this month</p>
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
                <h3 className="text-3xl font-bold">28%</h3>
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
                <p className="text-sm font-medium mb-1">Avg. Click Rate</p>
                <h3 className="text-3xl font-bold">4.2%</h3>
                <p className="text-sm text-green-600 mt-1">+0.3% from last month</p>
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
                <p className="text-sm font-medium mb-1">Campaigns Sent</p>
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-sm text-green-600 mt-1">+2 this month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-4">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="subscribers">Subscribers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sent Date</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Open Rate</TableHead>
                <TableHead>Click Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emailCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.name}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        campaign.status === "Sent"
                          ? "bg-green-500"
                          : campaign.status === "Draft"
                            ? "bg-amber-500"
                            : "bg-blue-500"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.sentDate}</TableCell>
                  <TableCell>{campaign.recipients}</TableCell>
                  <TableCell>{campaign.status === "Sent" ? `${campaign.openRate}%` : "-"}</TableCell>
                  <TableCell>{campaign.status === "Sent" ? `${campaign.clickRate}%` : "-"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emailTemplates.map((template) => (
              <Card key={template.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">Category: {template.category}</p>
                    </div>
                    <Badge variant="outline">Template</Badge>
                  </div>
                  <div className="bg-muted h-40 rounded-md mb-4 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Last modified: {template.lastModified}</span>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Duplicate
                    </Button>
                    <Button size="sm">Use</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button asChild>
              <Link href="/crm/templates/create">
                <Plus className="mr-2 h-4 w-4" /> Create Template
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscriberLists.map((list) => (
              <Card key={list.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{list.name}</h3>
                      <p className="text-sm text-muted-foreground">{list.subscribers} subscribers</p>
                    </div>
                    <Badge variant="outline">List</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Last updated: {list.lastUpdated}</span>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">Send Email</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <Button asChild>
              <Link href="/crm/email-marketing/subscribers/create">
                <Plus className="mr-2 h-4 w-4" /> Create List
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Performance</CardTitle>
                <CardDescription>Open, click, and bounce rates over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={performanceData}
                  config={{
                    openRate: {
                      label: "Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    clickRate: {
                      label: "Click Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                    bounceRate: {
                      label: "Bounce Rate %",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Open and click rates by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignData}
                  config={{
                    openRate: {
                      label: "Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    clickRate: {
                      label: "Click Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Distribution</CardTitle>
                <CardDescription>Email opens by device type</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={deviceData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Performing Campaigns</CardTitle>
                <CardDescription>Campaigns with highest open rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emailCampaigns
                    .filter((campaign) => campaign.status === "Sent")
                    .sort((a, b) => b.openRate - a.openRate)
                    .map((campaign) => (
                      <div key={campaign.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium">{campaign.name}</h4>
                          <span className="text-xs text-muted-foreground">{campaign.sentDate}</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span>Open Rate</span>
                            <span>{campaign.openRate}%</span>
                          </div>
                          <Progress value={campaign.openRate} className="h-2" />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
