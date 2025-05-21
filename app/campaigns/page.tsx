"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { CalendarIcon, Users, Filter, Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import type { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import Link from "next/link"

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openCreateCampaign, setOpenCreateCampaign] = useState(false)
  const [campaignDate, setCampaignDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), 1),
    to: addDays(new Date(), 14),
  })
  const [currentStep, setCurrentStep] = useState(1)

  // Campaign performance data
  const campaignData = [
    { name: "Ramadan", openRate: 65, conversionRate: 12, revenue: 25000 },
    { name: "Eid", openRate: 78, conversionRate: 18, revenue: 42000 },
    { name: "Summer", openRate: 62, conversionRate: 10, revenue: 18000 },
    { name: "DSF", openRate: 72, conversionRate: 15, revenue: 35000 },
    { name: "National Day", openRate: 80, conversionRate: 20, revenue: 48000 },
  ]

  // Campaign ROI data
  const roiData = [
    { name: "Ramadan", roi: 320 },
    { name: "Eid", roi: 480 },
    { name: "Summer", roi: 280 },
    { name: "DSF", roi: 390 },
    { name: "National Day", roi: 430 },
  ]

  // Campaign channel distribution
  const channelData = [
    { name: "Email", value: 45, color: "#0088FE" },
    { name: "WhatsApp", value: 30, color: "#00C49F" },
    { name: "SMS", value: 15, color: "#FFBB28" },
    { name: "Social Media", value: 10, color: "#FF8042" },
  ]

  const campaigns = {
    active: [
      {
        id: "camp-001",
        name: "Ramadan Collection Launch",
        description: "Introducing our new Ramadan collection with special discounts",
        channels: ["WhatsApp", "Email"],
        audience: "All Customers",
        progress: 45,
        startDate: "Mar 10, 2024",
        endDate: "Apr 9, 2024",
        audienceCount: 2350,
      },
      {
        id: "camp-002",
        name: "Dubai Marina VIP Event",
        description: "Exclusive preview event for VIP customers in Dubai Marina",
        channels: ["SMS", "Personal Invitation"],
        audience: "VIP Clients",
        progress: 80,
        startDate: "Mar 25, 2024",
        endDate: "Mar 25, 2024",
        audienceCount: 120,
      },
    ],
    scheduled: [
      {
        id: "camp-003",
        name: "Eid Special Offers",
        description: "Special Eid discounts and promotions",
        channels: ["SMS", "Email", "Social Media"],
        audience: "All Customers",
        progress: 0,
        startDate: "Apr 5, 2024",
        endDate: "Apr 15, 2024",
        audienceCount: 2350,
      },
      {
        id: "camp-004",
        name: "Summer Linen Promotion",
        description: "Introducing our new summer linen collection",
        channels: ["Email", "WhatsApp"],
        audience: "Previous Buyers",
        progress: 0,
        startDate: "May 15, 2024",
        endDate: "Jun 15, 2024",
        audienceCount: 1450,
      },
    ],
    completed: [
      {
        id: "camp-005",
        name: "Winter Collection Launch",
        description: "Winter collection with special discounts",
        channels: ["Email", "SMS"],
        audience: "All Customers",
        progress: 100,
        startDate: "Dec 1, 2023",
        endDate: "Jan 15, 2024",
        audienceCount: 2200,
      },
      {
        id: "camp-006",
        name: "New Year Sale",
        description: "Special discounts for the new year",
        channels: ["Email", "WhatsApp", "Social Media"],
        audience: "All Customers",
        progress: 100,
        startDate: "Dec 26, 2023",
        endDate: "Jan 10, 2024",
        audienceCount: 2200,
      },
    ],
  }

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleCreateCampaign = () => {
    // Handle campaign creation
    setOpenCreateCampaign(false)
    setCurrentStep(1)
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Marketing Campaigns</h2>
          <p className="text-muted-foreground mt-1">Create and manage your marketing campaigns</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Input
              placeholder="Search campaigns..."
              className="w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button asChild>
            <Link href="/crm/campaigns/create">
              <Plus className="mr-2 h-4 w-4" /> Create Campaign
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.active.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge className="bg-green-500">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.audience} ({campaign.audienceCount})
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
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="scheduled" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.scheduled.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge variant="outline">Scheduled</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.audience} ({campaign.audienceCount})
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
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Edit Campaign
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.completed.map((campaign) => (
              <Card key={campaign.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{campaign.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {campaign.audience} ({campaign.audienceCount})
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
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      View Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Open rates and conversion metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={campaignData}
                  config={{
                    openRate: {
                      label: "Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    conversionRate: {
                      label: "Conversion %",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Campaign ROI</CardTitle>
                <CardDescription>Return on investment by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={roiData}
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
                <CardTitle>Revenue by Campaign</CardTitle>
                <CardDescription>Revenue generated by each campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={campaignData}
                  config={{
                    revenue: {
                      label: "Revenue (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Channel Distribution</CardTitle>
                <CardDescription>Engagement by communication channel</CardDescription>
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
