"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Filter, ShoppingBag, MessageCircle, Eye, Calendar, ArrowRight } from "lucide-react"
import { LineChartComponent } from "../components/charts/line-chart"
import { Progress } from "@/components/ui/progress"

export default function CustomerJourneyPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample engagement data
  const engagementData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 72 },
    { name: "Mar", value: 68 },
    { name: "Apr", value: 85 },
    { name: "May", value: 78 },
    { name: "Jun", value: 90 },
  ]

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Customer Journey</h2>
          <p className="text-muted-foreground mt-1">Track and optimize the customer experience</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customer..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button>Create Journey Map</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="journey-maps">Journey Maps</TabsTrigger>
          <TabsTrigger value="touchpoints">Touchpoints</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          {/* Bento Grid Layout for Overview */}
          <div className="grid grid-cols-12 gap-4">
            {/* Featured Customer Journey - Tall card spanning 2 rows */}
            <Card className="col-span-12 md:col-span-8 row-span-1 md:row-span-2 overflow-hidden">
              <CardHeader className="p-4 md:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Featured Customer Journey</CardTitle>
                    <CardDescription>VIP client journey from discovery to purchase</CardDescription>
                  </div>
                  <Badge className="bg-green-500">VIP Client</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/diverse-group.png" alt="Fatima Mohammed" />
                    <AvatarFallback>FM</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">Fatima Mohammed</h3>
                    <p className="text-sm text-muted-foreground">Dubai Marina, Dubai</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>

                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <Eye className="h-3 w-3" />
                    </div>
                    <div className="font-medium">Initial Website Visit</div>
                    <div className="text-sm text-muted-foreground mt-1">Browsed premium silk fabrics</div>
                    <div className="text-xs text-muted-foreground mt-1">March 15, 2024 • 7:30 PM</div>
                  </div>

                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <MessageCircle className="h-3 w-3" />
                    </div>
                    <div className="font-medium">WhatsApp Inquiry</div>
                    <div className="text-sm text-muted-foreground mt-1">Asked about silk availability and pricing</div>
                    <div className="text-xs text-muted-foreground mt-1">March 16, 2024 • 10:15 AM</div>
                  </div>

                  <div className="relative pl-10 pb-8">
                    <div className="absolute left-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <Calendar className="h-3 w-3" />
                    </div>
                    <div className="font-medium">Showroom Appointment</div>
                    <div className="text-sm text-muted-foreground mt-1">Visited Dubai Marina showroom</div>
                    <div className="text-xs text-muted-foreground mt-1">March 18, 2024 • 4:00 PM</div>
                  </div>

                  <div className="relative pl-10">
                    <div className="absolute left-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <ShoppingBag className="h-3 w-3" />
                    </div>
                    <div className="font-medium">Purchase</div>
                    <div className="text-sm text-muted-foreground mt-1">Purchased 8m premium silk and 5m cashmere</div>
                    <div className="text-xs text-muted-foreground mt-1">March 18, 2024 • 5:30 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Score - Circular chart */}
            <Card className="col-span-12 md:col-span-4 bg-purple-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-sm font-medium text-purple-800 mb-2">Engagement Score</div>
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-purple-200"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-purple-600"
                        strokeWidth="10"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 * (1 - 0.85)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-purple-800">85</span>
                      <span className="text-xs text-purple-600">Excellent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Touchpoint Effectiveness */}
            <Card className="col-span-12 md:col-span-4 bg-green-50">
              <CardContent className="p-4 md:p-6">
                <div className="text-sm font-medium text-green-800 mb-4">Touchpoint Effectiveness</div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-800">In-Store</span>
                      <span className="font-medium text-green-800">92%</span>
                    </div>
                    <Progress value={92} className="h-1.5 bg-green-200" indicatorClassName="bg-green-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-800">WhatsApp</span>
                      <span className="font-medium text-green-800">85%</span>
                    </div>
                    <Progress value={85} className="h-1.5 bg-green-200" indicatorClassName="bg-green-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-800">Email</span>
                      <span className="font-medium text-green-800">68%</span>
                    </div>
                    <Progress value={68} className="h-1.5 bg-green-200" indicatorClassName="bg-green-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-green-800">Website</span>
                      <span className="font-medium text-green-800">62%</span>
                    </div>
                    <Progress value={62} className="h-1.5 bg-green-200" indicatorClassName="bg-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Trend */}
            <Card className="col-span-12 md:col-span-8 bg-blue-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium text-blue-800">Engagement Trend</div>
                  <div className="text-xs text-blue-600">+15% from last month</div>
                </div>
                <LineChartComponent
                  data={engagementData}
                  dataKey="value"
                  strokeColor="#3b82f6"
                  height={120}
                  showGrid={true}
                />
              </CardContent>
            </Card>

            {/* Recent Journey - Small card */}
            <Card className="col-span-12 md:col-span-4 bg-amber-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/diverse-group.png" alt="Ahmed Al Mansouri" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-amber-800">Ahmed Al Mansouri</div>
                    <div className="text-xs text-amber-600 mt-1">WhatsApp → Website → Pending</div>
                    <div className="flex items-center gap-1 mt-2">
                      <Badge className="bg-amber-500 text-white text-xs py-0 px-2">In Progress</Badge>
                      <Badge variant="outline" className="text-amber-800 border-amber-300 text-xs py-0 px-2">
                        2 days
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Journey - Small card */}
            <Card className="col-span-12 md:col-span-4 bg-teal-50">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/diverse-group.png" alt="Sara Al Maktoum" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-teal-800">Sara Al Maktoum</div>
                    <div className="text-xs text-teal-600 mt-1">Email → Store → Purchase</div>
                    <div className="flex items-center gap-1 mt-2">
                      <Badge className="bg-teal-500 text-white text-xs py-0 px-2">Completed</Badge>
                      <Badge variant="outline" className="text-teal-800 border-teal-300 text-xs py-0 px-2">
                        5 days
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Journey Insights */}
            <Card className="col-span-12 md:col-span-4 bg-indigo-50">
              <CardContent className="p-4 md:p-6">
                <div className="text-sm font-medium text-indigo-800 mb-3">Journey Insights</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-indigo-600" />
                    <span className="text-xs text-indigo-800">85% of VIP clients complete purchase within 3 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-indigo-600" />
                    <span className="text-xs text-indigo-800">WhatsApp inquiries have 28% higher conversion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="h-3 w-3 text-indigo-600" />
                    <span className="text-xs text-indigo-800">In-store visits convert at 92% for VIP clients</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full-width card for recent journeys */}
            <Card className="col-span-12">
              <CardHeader className="p-4 md:p-6">
                <CardTitle>Recent Customer Journeys</CardTitle>
                <CardDescription>Latest customer interactions and paths</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Customer
                        </th>
                        <th scope="col" className="px-4 py-3">
                          First Touchpoint
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Last Touchpoint
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Duration
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
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/diverse-group.png" alt="Fatima Mohammed" />
                              <AvatarFallback>FM</AvatarFallback>
                            </Avatar>
                            <span>Fatima Mohammed</span>
                          </div>
                        </th>
                        <td className="px-4 py-3">Website Visit</td>
                        <td className="px-4 py-3">In-Store Purchase</td>
                        <td className="px-4 py-3">3 days</td>
                        <td className="px-4 py-3">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="outline" size="sm">
                            View Journey
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/diverse-group.png" alt="Ahmed Al Mansouri" />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <span>Ahmed Al Mansouri</span>
                          </div>
                        </th>
                        <td className="px-4 py-3">WhatsApp Inquiry</td>
                        <td className="px-4 py-3">Website Browsing</td>
                        <td className="px-4 py-3">2 days</td>
                        <td className="px-4 py-3">
                          <Badge className="bg-amber-500">In Progress</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="outline" size="sm">
                            View Journey
                          </Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/diverse-group.png" alt="Sara Al Maktoum" />
                              <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <span>Sara Al Maktoum</span>
                          </div>
                        </th>
                        <td className="px-4 py-3">Email Campaign</td>
                        <td className="px-4 py-3">In-Store Purchase</td>
                        <td className="px-4 py-3">5 days</td>
                        <td className="px-4 py-3">
                          <Badge className="bg-green-500">Completed</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Button variant="outline" size="sm">
                            View Journey
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

        {/* Other tabs content would be updated similarly */}
        <TabsContent value="journey-maps" className="space-y-6">
          {/* Journey Maps content would be updated with proper bento grid */}
        </TabsContent>

        <TabsContent value="touchpoints" className="space-y-6">
          {/* Touchpoints content would be updated with proper bento grid */}
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Analytics content would be updated with proper bento grid */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
