"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomerTable } from "../components/customer-table"
import { PieChartComponent } from "../components/charts/pie-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { LineChartComponent } from "../components/charts/line-chart"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Filter, Plus, Search } from "lucide-react"

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openAddCustomer, setOpenAddCustomer] = useState(false)

  // Customer segments data
  const segmentData = [
    { name: "Luxury Fabric", value: 35, color: "#0088FE" },
    { name: "Eid Shoppers", value: 25, color: "#00C49F" },
    { name: "Dubai Marina", value: 20, color: "#FFBB28" },
    { name: "VIP Clients", value: 15, color: "#FF8042" },
    { name: "Corporate", value: 5, color: "#8884D8" },
  ]

  // Customer acquisition data
  const acquisitionData = [
    { name: "Jan", customers: 45 },
    { name: "Feb", customers: 52 },
    { name: "Mar", customers: 48 },
    { name: "Apr", customers: 61 },
    { name: "May", customers: 55 },
    { name: "Jun", customers: 67 },
  ]

  // Customer lifetime value data
  const lifetimeValueData = [
    { name: "Luxury Fabric", value: 12500 },
    { name: "Eid Shoppers", value: 8500 },
    { name: "Dubai Marina", value: 9800 },
    { name: "VIP Clients", value: 15000 },
    { name: "Corporate", value: 7500 },
  ]

  // Customer retention data
  const retentionData = [
    { name: "Jan", rate: 75 },
    { name: "Feb", rate: 78 },
    { name: "Mar", rate: 76 },
    { name: "Apr", rate: 80 },
    { name: "May", rate: 82 },
    { name: "Jun", rate: 85 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Customers</h2>
          <p className="text-muted-foreground mt-1">Manage and analyze your customer base</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Dialog open={openAddCustomer} onOpenChange={setOpenAddCustomer}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Customer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Customer</DialogTitle>
                <DialogDescription>Enter customer details to create a new customer profile.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email address" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="City, Country" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segment">Customer Segment</Label>
                  <Select>
                    <SelectTrigger id="segment">
                      <SelectValue placeholder="Select segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Segments</SelectLabel>
                        <SelectItem value="luxury">Luxury Fabric</SelectItem>
                        <SelectItem value="eid">Eid Shoppers</SelectItem>
                        <SelectItem value="dubai">Dubai Marina</SelectItem>
                        <SelectItem value="vip">VIP Clients</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="vip" />
                  <Label htmlFor="vip">Mark as VIP customer</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenAddCustomer(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenAddCustomer(false)}>Create Customer</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Customers</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="vip">VIP</TabsTrigger>
          <TabsTrigger value="at-risk">At Risk</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <CustomerTable filter="all" searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <CustomerTable filter="active" searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="vip" className="space-y-4">
          <CustomerTable filter="vip" searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="at-risk" className="space-y-4">
          <CustomerTable filter="at-risk" searchTerm={searchTerm} />
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Segmentation</CardTitle>
                <CardDescription>Distribution of customers by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={segmentData} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
                <CardDescription>New customers over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={acquisitionData}
                  config={{
                    customers: {
                      label: "New Customers",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Lifetime Value</CardTitle>
                <CardDescription>Average lifetime value by segment</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={lifetimeValueData}
                  config={{
                    value: {
                      label: "Lifetime Value (AED)",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customer Retention</CardTitle>
                <CardDescription>Retention rate over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={retentionData}
                  config={{
                    rate: {
                      label: "Retention Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
