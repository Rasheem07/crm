"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, FileText, ImageIcon, MessageSquare, Calendar, Filter, MoreHorizontal, Eye } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function ContentManagerPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Sample content data
  const emailTemplates = [
    {
      id: "email-001",
      title: "Ramadan Collection Announcement",
      type: "Email",
      status: "Active",
      lastModified: "Apr 2, 2024",
      campaign: "Ramadan Collection",
    },
    {
      id: "email-002",
      title: "Eid Special Offers",
      type: "Email",
      status: "Draft",
      lastModified: "Apr 5, 2024",
      campaign: "Eid Special",
    },
    {
      id: "email-003",
      title: "VIP Client Exclusive Preview",
      type: "Email",
      status: "Active",
      lastModified: "Mar 28, 2024",
      campaign: "VIP Events",
    },
    {
      id: "email-004",
      title: "Summer Collection Pre-Launch",
      type: "Email",
      status: "Scheduled",
      lastModified: "Apr 8, 2024",
      campaign: "Summer Collection",
    },
  ]

  const whatsappTemplates = [
    {
      id: "wa-001",
      title: "Welcome Message",
      type: "WhatsApp",
      status: "Active",
      lastModified: "Mar 15, 2024",
      campaign: "Customer Onboarding",
    },
    {
      id: "wa-002",
      title: "Order Confirmation",
      type: "WhatsApp",
      status: "Active",
      lastModified: "Mar 20, 2024",
      campaign: "Order Processing",
    },
    {
      id: "wa-003",
      title: "Appointment Reminder",
      type: "WhatsApp",
      status: "Active",
      lastModified: "Apr 1, 2024",
      campaign: "Appointments",
    },
    {
      id: "wa-004",
      title: "Eid Promotion",
      type: "WhatsApp",
      status: "Draft",
      lastModified: "Apr 7, 2024",
      campaign: "Eid Special",
    },
  ]

  const imageAssets = [
    {
      id: "img-001",
      title: "Ramadan Collection Hero",
      type: "Image",
      status: "Active",
      lastModified: "Mar 25, 2024",
      campaign: "Ramadan Collection",
    },
    {
      id: "img-002",
      title: "Eid Special Banner",
      type: "Image",
      status: "Active",
      lastModified: "Apr 3, 2024",
      campaign: "Eid Special",
    },
    {
      id: "img-003",
      title: "Summer Collection Teaser",
      type: "Image",
      status: "Draft",
      lastModified: "Apr 10, 2024",
      campaign: "Summer Collection",
    },
  ]

  const calendarContent = [
    {
      id: "cal-001",
      title: "Ramadan Campaign Schedule",
      type: "Calendar",
      status: "Active",
      lastModified: "Mar 22, 2024",
      campaign: "Ramadan Collection",
    },
    {
      id: "cal-002",
      title: "Eid Campaign Timeline",
      type: "Calendar",
      status: "Draft",
      lastModified: "Apr 4, 2024",
      campaign: "Eid Special",
    },
  ]

  // Filter content based on search term
  const filteredEmailTemplates = emailTemplates.filter((template) =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const filteredWhatsappTemplates = whatsappTemplates.filter((template) =>
    template.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const filteredImageAssets = imageAssets.filter((asset) =>
    asset.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const filteredCalendarContent = calendarContent.filter((content) =>
    content.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Content Manager</h2>
          <p className="text-muted-foreground mt-1">Create and manage marketing content and templates</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search content..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button asChild>
            <Link href="/content-manager/create">
              <Plus className="mr-2 h-4 w-4" /> Create Content
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
          <TabsTrigger value="whatsapp">WhatsApp Templates</TabsTrigger>
          <TabsTrigger value="images">Image Assets</TabsTrigger>
          <TabsTrigger value="calendar">Calendar Content</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Email Templates */}
            {filteredEmailTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <CardDescription>{template.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          template.status === "Active"
                            ? "bg-green-500"
                            : template.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {template.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>{template.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {template.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* WhatsApp Templates */}
            {filteredWhatsappTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <CardDescription>{template.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          template.status === "Active"
                            ? "bg-green-500"
                            : template.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {template.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span>{template.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {template.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Image Assets */}
            {filteredImageAssets.map((asset) => (
              <Card key={asset.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{asset.title}</CardTitle>
                      <CardDescription>{asset.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          asset.status === "Active"
                            ? "bg-green-500"
                            : asset.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {asset.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ImageIcon className="mr-1 h-4 w-4" />
                    <span>{asset.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {asset.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Calendar Content */}
            {filteredCalendarContent.map((content) => (
              <Card key={content.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{content.title}</CardTitle>
                      <CardDescription>{content.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          content.status === "Active"
                            ? "bg-green-500"
                            : content.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {content.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{content.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {content.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredEmailTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <CardDescription>{template.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          template.status === "Active"
                            ? "bg-green-500"
                            : template.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {template.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <FileText className="mr-1 h-4 w-4" />
                    <span>{template.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {template.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="whatsapp" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWhatsappTemplates.map((template) => (
              <Card key={template.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{template.title}</CardTitle>
                      <CardDescription>{template.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          template.status === "Active"
                            ? "bg-green-500"
                            : template.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {template.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    <span>{template.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {template.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImageAssets.map((asset) => (
              <Card key={asset.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{asset.title}</CardTitle>
                      <CardDescription>{asset.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          asset.status === "Active"
                            ? "bg-green-500"
                            : asset.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {asset.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ImageIcon className="mr-1 h-4 w-4" />
                    <span>{asset.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {asset.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCalendarContent.map((content) => (
              <Card key={content.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-base">{content.title}</CardTitle>
                      <CardDescription>{content.campaign}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Badge
                        className={
                          content.status === "Active"
                            ? "bg-green-500"
                            : content.status === "Draft"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {content.status}
                      </Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="ml-1 h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>{content.type}</span>
                    <span className="mx-2">•</span>
                    <span>Modified {content.lastModified}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" /> Preview
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
