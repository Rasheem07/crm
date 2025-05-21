"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MoreHorizontal, Star, Calendar, Phone, Mail, MapPin, Clock } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { Progress } from "@/components/ui/progress"

export default function VIPClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample VIP clients data
  const vipClients = [
    {
      id: "vip-001",
      name: "Fatima Mohammed",
      email: "fatima.m@example.com",
      phone: "+971 50 123 4567",
      location: "Dubai Marina, Dubai",
      status: "Active",
      lastPurchase: "Apr 18, 2024",
      totalSpent: "AED 42,950",
      loyaltyPoints: 8500,
      preferredFabrics: ["Silk", "Cashmere", "Premium Cotton"],
      preferredColors: ["Royal Blue", "Emerald Green", "Gold"],
      avatar: "/diverse-group.png",
    },
    {
      id: "vip-002",
      name: "Ahmed Al Mansouri",
      email: "ahmed.m@example.com",
      phone: "+971 50 234 5678",
      location: "Palm Jumeirah, Dubai",
      status: "Active",
      lastPurchase: "Apr 10, 2024",
      totalSpent: "AED 38,200",
      loyaltyPoints: 7600,
      preferredFabrics: ["Wool", "Linen", "Cashmere"],
      preferredColors: ["Navy Blue", "Burgundy", "Charcoal"],
      avatar: "/diverse-group.png",
    },
    {
      id: "vip-003",
      name: "Noura Al Qasimi",
      email: "noura.q@example.com",
      phone: "+971 50 345 6789",
      location: "Jumeirah, Dubai",
      status: "Active",
      lastPurchase: "Apr 5, 2024",
      totalSpent: "AED 51,300",
      loyaltyPoints: 10200,
      preferredFabrics: ["Silk", "Chiffon", "Satin"],
      preferredColors: ["Teal", "Purple", "Rose Gold"],
      avatar: "/diverse-group.png",
    },
    {
      id: "vip-004",
      name: "Mohammed Al Suwaidi",
      email: "mohammed.s@example.com",
      phone: "+971 50 456 7890",
      location: "Al Barsha, Dubai",
      status: "Active",
      lastPurchase: "Mar 28, 2024",
      totalSpent: "AED 35,750",
      loyaltyPoints: 7100,
      preferredFabrics: ["Cotton", "Linen", "Wool"],
      preferredColors: ["Black", "White", "Gray"],
      avatar: "/diverse-group.png",
    },
    {
      id: "vip-005",
      name: "Sara Al Maktoum",
      email: "sara.m@example.com",
      phone: "+971 50 567 8901",
      location: "Palm Jumeirah, Dubai",
      status: "Active",
      lastPurchase: "Apr 15, 2024",
      totalSpent: "AED 65,200",
      loyaltyPoints: 13000,
      preferredFabrics: ["Silk", "Cashmere", "Velvet"],
      preferredColors: ["Gold", "Cream", "Emerald Green"],
      avatar: "/diverse-group.png",
    },
  ]

  // Filter clients based on search term
  const filteredClients = vipClients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Spending history data
  const spendingHistoryData = [
    { name: "Jan", amount: 28000 },
    { name: "Feb", amount: 32000 },
    { name: "Mar", amount: 35000 },
    { name: "Apr", amount: 42000 },
    { name: "May", amount: 38000 },
    { name: "Jun", amount: 45000 },
  ]

  // Product category data
  const productCategoryData = [
    { name: "Silk", value: 42 },
    { name: "Cashmere", value: 28 },
    { name: "Premium Cotton", value: 15 },
    { name: "Linen", value: 10 },
    { name: "Wool", value: 5 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">VIP Clients</h2>
          <p className="text-muted-foreground mt-1">Manage and engage with your highest-value customers</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search VIP clients..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button>Create VIP Event</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All VIP Clients</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="recent">Recent Purchases</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="events">VIP Events</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>VIP Client List</CardTitle>
              <CardDescription>All registered VIP clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Client
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Last Purchase
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Total Spent
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Loyalty Points
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredClients.map((client) => (
                      <tr key={client.id} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-9 w-9">
                              <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                              <AvatarFallback>
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <div className="font-medium">{client.name}</div>
                              <div className="text-xs text-muted-foreground">{client.email}</div>
                            </div>
                          </div>
                        </th>
                        <td className="px-6 py-4">{client.location}</td>
                        <td className="px-6 py-4">{client.lastPurchase}</td>
                        <td className="px-6 py-4 font-medium">{client.totalSpent}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-amber-500" />
                            <span>{client.loyaltyPoints.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>Send Message</DropdownMenuItem>
                              <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Create Special Offer</DropdownMenuItem>
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
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <Card key={client.id} className="w-full">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
                        <AvatarFallback>
                          {client.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <CardDescription>{client.location}</CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-green-500">VIP</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{client.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{client.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{client.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Last Purchase: {client.lastPurchase}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 mr-2 text-amber-500" />
                      <span>{client.loyaltyPoints.toLocaleString()} Loyalty Points</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm font-medium mb-1">Total Spent: {client.totalSpent}</div>
                      <Progress
                        value={Number.parseInt(client.totalSpent.replace(/[^0-9]/g, "")) / 1000}
                        className="h-2"
                      />
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="text-sm font-medium mb-2">Preferred Fabrics</div>
                    <div className="flex flex-wrap gap-1">
                      {client.preferredFabrics.map((fabric, index) => (
                        <Badge key={index} variant="outline">
                          {fabric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t flex justify-between">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm">Contact</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Recent VIP Purchases</CardTitle>
              <CardDescription>Latest purchases by VIP clients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Client
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Purchase Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Items
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/diverse-group.png" alt="Sara Al Maktoum" />
                            <AvatarFallback>SM</AvatarFallback>
                          </Avatar>
                          <span>Sara Al Maktoum</span>
                        </div>
                      </th>
                      <td className="px-6 py-4">Apr 15, 2024</td>
                      <td className="px-6 py-4">Premium Silk (5m), Cashmere (3m)</td>
                      <td className="px-6 py-4 font-medium">AED 8,500</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500">Completed</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/diverse-group.png" alt="Fatima Mohammed" />
                            <AvatarFallback>FM</AvatarFallback>
                          </Avatar>
                          <span>Fatima Mohammed</span>
                        </div>
                      </th>
                      <td className="px-6 py-4">Apr 18, 2024</td>
                      <td className="px-6 py-4">Premium Cotton (8m), Silk (4m)</td>
                      <td className="px-6 py-4 font-medium">AED 7,200</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500">Completed</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/diverse-group.png" alt="Ahmed Al Mansouri" />
                            <AvatarFallback>AM</AvatarFallback>
                          </Avatar>
                          <span>Ahmed Al Mansouri</span>
                        </div>
                      </th>
                      <td className="px-6 py-4">Apr 10, 2024</td>
                      <td className="px-6 py-4">Wool (6m), Cashmere (2m)</td>
                      <td className="px-6 py-4 font-medium">AED 6,800</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500">Completed</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/diverse-group.png" alt="Noura Al Qasimi" />
                            <AvatarFallback>NQ</AvatarFallback>
                          </Avatar>
                          <span>Noura Al Qasimi</span>
                        </div>
                      </th>
                      <td className="px-6 py-4">Apr 5, 2024</td>
                      <td className="px-6 py-4">Silk (10m), Chiffon (5m)</td>
                      <td className="px-6 py-4 font-medium">AED 9,500</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500">Completed</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/diverse-group.png" alt="Mohammed Al Suwaidi" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <span>Mohammed Al Suwaidi</span>
                        </div>
                      </th>
                      <td className="px-6 py-4">Mar 28, 2024</td>
                      <td className="px-6 py-4">Cotton (12m), Linen (8m)</td>
                      <td className="px-6 py-4 font-medium">AED 8,200</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-green-500">Completed</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Total VIP Clients</p>
                    <h3 className="text-3xl font-bold">187</h3>
                    <p className="text-sm text-green-600 mt-1">+12% from last quarter</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Avg. Spend</p>
                    <h3 className="text-3xl font-bold">AED 8,250</h3>
                    <p className="text-sm text-green-600 mt-1">+18% from last quarter</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Retention Rate</p>
                    <h3 className="text-3xl font-bold">92%</h3>
                    <p className="text-sm text-green-600 mt-1">+3% from last quarter</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Avg. Loyalty Points</p>
                    <h3 className="text-3xl font-bold">9,350</h3>
                    <p className="text-sm text-green-600 mt-1">+15% from last quarter</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>VIP Spending History</CardTitle>
                <CardDescription>Monthly spending by VIP clients</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={spendingHistoryData}
                  config={{
                    amount: {
                      label: "Amount (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>Product Category Preferences</CardTitle>
                <CardDescription>Most popular product categories among VIP clients</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={productCategoryData}
                  config={{
                    value: {
                      label: "Percentage (%)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>VIP Client Insights</CardTitle>
              <CardDescription>Key insights and recommendations for VIP client management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">High Spending Patterns</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        VIP clients who purchase premium fabrics tend to spend 35% more on accessories and customization
                        services.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Seasonal Preferences</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        VIP clients show a 42% increase in silk purchases during Ramadan and Eid seasons. Consider
                        personalized promotions.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Star className="h-5 w-5 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">Loyalty Program Impact</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        VIP clients who actively use loyalty points have a 28% higher retention rate and 15% higher
                        average order value.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle>Ramadan Collection Preview</CardTitle>
                  <Badge>Upcoming</Badge>
                </div>
                <CardDescription>Exclusive preview event for VIP clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>April 25, 2024 • 7:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Dubai Marina Showroom</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      An exclusive evening showcasing our premium Ramadan collection with refreshments and personalized
                      styling sessions.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Invitations</div>
                        <div className="text-sm text-muted-foreground">45 Sent / 28 Confirmed</div>
                      </div>
                      <Progress value={62} className="w-16 h-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Manage Event</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle>Summer Collection Launch</CardTitle>
                  <Badge>Upcoming</Badge>
                </div>
                <CardDescription>VIP summer collection preview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>May 15, 2024 • 6:30 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Palm Jumeirah Showroom</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      Exclusive preview of our summer linen collection with special discounts for VIP clients and
                      complimentary refreshments.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Invitations</div>
                        <div className="text-sm text-muted-foreground">60 Sent / 15 Confirmed</div>
                      </div>
                      <Progress value={25} className="w-16 h-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">Manage Event</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle>Luxury Fabric Showcase</CardTitle>
                  <Badge variant="outline">Past</Badge>
                </div>
                <CardDescription>Premium fabric showcase for VIP clients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>March 10, 2024 • 7:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>Dubai Mall Showroom</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground">
                      A showcase of our premium imported fabrics with expert tailors available for consultation and
                      custom orders.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium">Attendance</div>
                        <div className="text-sm text-muted-foreground">42 Invited / 38 Attended</div>
                      </div>
                      <Progress value={90} className="w-16 h-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button size="sm">View Results</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>VIP Event Calendar</CardTitle>
                  <CardDescription>Upcoming and past VIP client events</CardDescription>
                </div>
                <Button>Create New Event</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Event Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Invitations
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Ramadan Collection Preview
                      </th>
                      <td className="px-6 py-4">April 25, 2024</td>
                      <td className="px-6 py-4">Dubai Marina Showroom</td>
                      <td className="px-6 py-4">45 Sent / 28 Confirmed</td>
                      <td className="px-6 py-4">
                        <Badge>Upcoming</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Summer Collection Launch
                      </th>
                      <td className="px-6 py-4">May 15, 2024</td>
                      <td className="px-6 py-4">Palm Jumeirah Showroom</td>
                      <td className="px-6 py-4">60 Sent / 15 Confirmed</td>
                      <td className="px-6 py-4">
                        <Badge>Upcoming</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Luxury Fabric Showcase
                      </th>
                      <td className="px-6 py-4">March 10, 2024</td>
                      <td className="px-6 py-4">Dubai Mall Showroom</td>
                      <td className="px-6 py-4">42 Invited / 38 Attended</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">Past</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        VIP Styling Workshop
                      </th>
                      <td className="px-6 py-4">February 20, 2024</td>
                      <td className="px-6 py-4">Abu Dhabi Showroom</td>
                      <td className="px-6 py-4">35 Invited / 30 Attended</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">Past</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                        Eid Collection Preview
                      </th>
                      <td className="px-6 py-4">January 15, 2024</td>
                      <td className="px-6 py-4">Dubai Marina Showroom</td>
                      <td className="px-6 py-4">50 Invited / 45 Attended</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline">Past</Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Button variant="outline" size="sm">
                          View Results
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
