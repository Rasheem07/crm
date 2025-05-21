"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Users, DollarSign, TrendingUp, ArrowUpRight } from "lucide-react"
import { DatePickerWithRange } from "./components/date-range-picker"
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
import { CustomerSegmentation } from "./components/customer-segmentation"
import { CustomerEngagement } from "./components/customer-engagement"
import { RecentCustomers } from "./components/recent-customers"
import { UpcomingCampaigns } from "./components/upcoming-campaigns"
import { AIInsights } from "./components/ai-insights"

export default function CRMDashboard() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">CRM Dashboard</h2>
          <p className="text-muted-foreground mt-1">Monitor customer relationships and marketing campaigns</p>
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
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Customers</p>
                <h3 className="text-3xl font-bold">2,853</h3>
                <p className="text-sm text-green-600 mt-1">+12% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">VIP Clients</p>
                <h3 className="text-3xl font-bold">187</h3>
                <p className="text-sm text-green-600 mt-1">+5% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Users className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Avg. Order Value</p>
                <h3 className="text-3xl font-bold">AED 1,250</h3>
                <p className="text-sm text-green-600 mt-1">+18% from last month</p>
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
                <p className="text-sm font-medium mb-1">Customer Retention</p>
                <h3 className="text-3xl font-bold">78%</h3>
                <p className="text-sm text-green-600 mt-1">+2% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CustomerEngagement />
            <CustomerSegmentation />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Activities</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {i === 1
                            ? "New customer registered"
                            : i === 2
                              ? "Campaign 'Eid Special' launched"
                              : i === 3
                                ? "Customer feedback received"
                                : i === 4
                                  ? "VIP customer made a purchase"
                                  : "WhatsApp message sent to 120 customers"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {i === 1
                            ? "2 hours ago"
                            : i === 2
                              ? "5 hours ago"
                              : i === 3
                                ? "Yesterday at 4:30 PM"
                                : i === 4
                                  ? "Yesterday at 2:15 PM"
                                  : "2 days ago"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Upcoming Campaigns</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <UpcomingCampaigns />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-4">
          <AIInsights />
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Growth</CardTitle>
                  <CardDescription>New and active customers over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">{/* Customer growth chart will be here */}</CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Customers</CardTitle>
                  <CardDescription>Latest customer activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentCustomers />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Open rates and conversion metrics</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">{/* Campaign performance chart will be here */}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Campaigns</CardTitle>
                <CardDescription>Scheduled marketing campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingCampaigns />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
