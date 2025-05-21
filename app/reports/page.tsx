"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import {
  FileBarChart,
  BarChart,
  Calendar,
  Clock,
  Plus,
  Download,
  Share2,
  MoreHorizontal,
  Eye,
  Edit,
  Trash,
  LineChart,
  Users,
  ShoppingBag,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function ReportsPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -30),
    to: new Date(),
  })

  // Sample reports data
  const savedReports = [
    {
      id: "rep-001",
      name: "Monthly Sales Performance",
      description: "Sales performance across all regions and product categories",
      type: "Sales",
      lastRun: "Apr 18, 2024",
      schedule: "Monthly",
      owner: "Admin User",
      shared: 5,
    },
    {
      id: "rep-002",
      name: "Customer Acquisition Report",
      description: "New customer acquisition by channel and campaign",
      type: "Customer",
      lastRun: "Apr 15, 2024",
      schedule: "Weekly",
      owner: "Marketing Manager",
      shared: 3,
    },
    {
      id: "rep-003",
      name: "Product Category Analysis",
      description: "Sales and performance by product category",
      type: "Product",
      lastRun: "Apr 10, 2024",
      schedule: "Monthly",
      owner: "Sales Manager",
      shared: 4,
    },
    {
      id: "rep-004",
      name: "Campaign ROI Analysis",
      description: "Return on investment for all marketing campaigns",
      type: "Marketing",
      lastRun: "Apr 5, 2024",
      schedule: "Bi-weekly",
      owner: "Marketing Manager",
      shared: 6,
    },
  ]

  // Sample report templates
  const reportTemplates = [
    {
      id: "temp-001",
      name: "Sales Overview",
      description: "Comprehensive sales performance report",
      type: "Sales",
      complexity: "Medium",
      charts: 5,
      icon: <BarChart className="h-5 w-5 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      id: "temp-002",
      name: "Customer Insights",
      description: "Detailed customer behavior and demographics",
      type: "Customer",
      complexity: "High",
      charts: 8,
      icon: <Users className="h-5 w-5 text-green-600" />,
      color: "bg-green-100",
    },
    {
      id: "temp-003",
      name: "Marketing Performance",
      description: "Campaign performance and ROI analysis",
      type: "Marketing",
      complexity: "Medium",
      charts: 6,
      icon: <LineChart className="h-5 w-5 text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      id: "temp-004",
      name: "Product Analysis",
      description: "Product performance and inventory insights",
      type: "Product",
      complexity: "Low",
      charts: 4,
      icon: <ShoppingBag className="h-5 w-5 text-amber-600" />,
      color: "bg-amber-100",
    },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Reports</h2>
          <p className="text-muted-foreground mt-1">Create, manage, and schedule custom reports</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <DatePickerWithRange date={date} setDate={setDate} />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Report type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Report Types</SelectLabel>
                <SelectItem value="all">All Reports</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link href="/crm/reports/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Report
            </Button>
          </Link>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
        {/* Key Metrics - Row 1 */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Reports</p>
                <h3 className="text-3xl font-bold">{savedReports.length}</h3>
                <p className="text-sm text-green-600 mt-1">+2 new this month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <FileBarChart className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Scheduled Reports</p>
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-sm text-green-600 mt-1">+3 this month</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Report Templates</p>
                <h3 className="text-3xl font-bold">{reportTemplates.length}</h3>
                <p className="text-sm text-green-600 mt-1">+1 new</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <BarChart className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Last Generated</p>
                <h3 className="text-xl font-bold">Today</h3>
                <p className="text-sm text-muted-foreground mt-1">10:23 AM</p>
              </div>
              <div className="bg-amber-100 p-2 rounded-full">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports - Row 2-3 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-3 row-span-2">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Recently generated and scheduled reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {savedReports.slice(0, 3).map((report, index) => (
              <div key={report.id} className="p-4 border rounded-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{report.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{report.type}</Badge>
                      <Badge variant="outline">{report.schedule}</Badge>
                      <Badge variant="outline">Last run: {report.lastRun}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Report</DropdownMenuItem>
                        <DropdownMenuItem>Edit Report</DropdownMenuItem>
                        <DropdownMenuItem>Schedule</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Reports
            </Button>
          </CardContent>
        </Card>

        {/* Report Templates - Row 2-3 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-3 row-span-2">
          <CardHeader>
            <CardTitle>Report Templates</CardTitle>
            <CardDescription>Pre-configured report templates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {reportTemplates.map((template, index) => (
              <div key={template.id} className="p-4 border rounded-md">
                <div className="flex items-start gap-4">
                  <div className={`${template.color} p-2 rounded-full`}>{template.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{template.type}</Badge>
                      <Badge variant="outline">Complexity: {template.complexity}</Badge>
                      <Badge variant="outline">{template.charts} charts</Badge>
                    </div>
                  </div>
                  <Button size="sm">Use Template</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Report Schedule - Row 4 */}
        <Card className="col-span-1 md:col-span-4 lg:col-span-6">
          <CardHeader>
            <CardTitle>Scheduled Reports</CardTitle>
            <CardDescription>Upcoming and recurring report schedules</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full overflow-auto rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 transition-colors">
                    <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Next Run</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Recipients</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {savedReports.map((report, index) => (
                    <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                      <td className="p-4 align-middle">
                        <div>
                          <div className="font-medium">{report.name}</div>
                          <div className="text-xs text-muted-foreground">{report.description}</div>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <Badge variant="outline">{report.type}</Badge>
                      </td>
                      <td className="p-4 align-middle">{report.schedule}</td>
                      <td className="p-4 align-middle">
                        {report.schedule === "Monthly"
                          ? "May 1, 2024"
                          : report.schedule === "Weekly"
                            ? "Apr 22, 2024"
                            : report.schedule === "Bi-weekly"
                              ? "Apr 19, 2024"
                              : "N/A"}
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-1">
                          <Share2 className="h-4 w-4 text-muted-foreground" />
                          <span>{report.shared} recipients</span>
                        </div>
                      </td>
                      <td className="p-4 align-middle">
                        <div className="flex items-center gap-1">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Reports</TabsTrigger>
          <TabsTrigger value="sales">Sales Reports</TabsTrigger>
          <TabsTrigger value="customer">Customer Reports</TabsTrigger>
          <TabsTrigger value="marketing">Marketing Reports</TabsTrigger>
          <TabsTrigger value="product">Product Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Reports</CardTitle>
              <CardDescription>Complete list of all reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 transition-colors">
                      <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Type</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Run</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Owner</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedReports.map((report, index) => (
                      <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                        <td className="p-4 align-middle">
                          <div>
                            <div className="font-medium">{report.name}</div>
                            <div className="text-xs text-muted-foreground">{report.description}</div>
                          </div>
                        </td>
                        <td className="p-4 align-middle">
                          <Badge variant="outline">{report.type}</Badge>
                        </td>
                        <td className="p-4 align-middle">{report.lastRun}</td>
                        <td className="p-4 align-middle">{report.schedule}</td>
                        <td className="p-4 align-middle">{report.owner}</td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Share2 className="h-4 w-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Report</DropdownMenuItem>
                                <DropdownMenuItem>Edit Report</DropdownMenuItem>
                                <DropdownMenuItem>Schedule</DropdownMenuItem>
                                <DropdownMenuItem>Share</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Reports</CardTitle>
              <CardDescription>Reports focused on sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 transition-colors">
                      <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Run</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Owner</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedReports
                      .filter((report) => report.type === "Sales")
                      .map((report, index) => (
                        <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                          <td className="p-4 align-middle">
                            <div>
                              <div className="font-medium">{report.name}</div>
                              <div className="text-xs text-muted-foreground">{report.description}</div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{report.lastRun}</td>
                          <td className="p-4 align-middle">{report.schedule}</td>
                          <td className="p-4 align-middle">{report.owner}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View Report</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Report</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar structure for other tabs */}
        <TabsContent value="customer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reports</CardTitle>
              <CardDescription>Reports focused on customer insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 transition-colors">
                      <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Run</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Owner</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedReports
                      .filter((report) => report.type === "Customer")
                      .map((report, index) => (
                        <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                          <td className="p-4 align-middle">
                            <div>
                              <div className="font-medium">{report.name}</div>
                              <div className="text-xs text-muted-foreground">{report.description}</div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{report.lastRun}</td>
                          <td className="p-4 align-middle">{report.schedule}</td>
                          <td className="p-4 align-middle">{report.owner}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View Report</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Report</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Reports</CardTitle>
              <CardDescription>Reports focused on marketing performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 transition-colors">
                      <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Run</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Owner</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedReports
                      .filter((report) => report.type === "Marketing")
                      .map((report, index) => (
                        <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                          <td className="p-4 align-middle">
                            <div>
                              <div className="font-medium">{report.name}</div>
                              <div className="text-xs text-muted-foreground">{report.description}</div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{report.lastRun}</td>
                          <td className="p-4 align-middle">{report.schedule}</td>
                          <td className="p-4 align-middle">{report.owner}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View Report</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Report</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Product Reports</CardTitle>
              <CardDescription>Reports focused on product performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-auto rounded-md border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50 transition-colors">
                      <th className="h-12 px-4 text-left align-middle font-medium">Report Name</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Last Run</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Schedule</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Owner</th>
                      <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {savedReports
                      .filter((report) => report.type === "Product")
                      .map((report, index) => (
                        <tr key={report.id} className="border-b transition-colors hover:bg-muted/20">
                          <td className="p-4 align-middle">
                            <div>
                              <div className="font-medium">{report.name}</div>
                              <div className="text-xs text-muted-foreground">{report.description}</div>
                            </div>
                          </td>
                          <td className="p-4 align-middle">{report.lastRun}</td>
                          <td className="p-4 align-middle">{report.schedule}</td>
                          <td className="p-4 align-middle">{report.owner}</td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem>View Report</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Report</DropdownMenuItem>
                                  <DropdownMenuItem>Schedule</DropdownMenuItem>
                                  <DropdownMenuItem>Share</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </td>
                        </tr>
                      ))}
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
