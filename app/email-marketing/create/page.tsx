"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Mail, ImageIcon, Link2, AtSign } from "lucide-react"
import Link from "next/link"

export default function CreateEmailCampaignPage() {
  const [selectedTab, setSelectedTab] = useState("details")

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

  const handleNextTab = () => {
    if (selectedTab === "details") setSelectedTab("content")
    else if (selectedTab === "content") setSelectedTab("recipients")
    else if (selectedTab === "recipients") setSelectedTab("schedule")
  }

  const handlePrevTab = () => {
    if (selectedTab === "content") setSelectedTab("details")
    else if (selectedTab === "recipients") setSelectedTab("content")
    else if (selectedTab === "schedule") setSelectedTab("recipients")
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/email-marketing">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold">Create Email Campaign</h2>
          <p className="text-muted-foreground mt-1">Create and send a new email campaign to your subscribers</p>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Email Campaign Details</CardTitle>
          <CardDescription>Fill out the details for your new email campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="details">Campaign Details</TabsTrigger>
              <TabsTrigger value="content">Email Content</TabsTrigger>
              <TabsTrigger value="recipients">Recipients</TabsTrigger>
              <TabsTrigger value="schedule">Schedule & Send</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="campaign-name">Campaign Name</Label>
                  <Input id="campaign-name" placeholder="Enter campaign name" />
                  <p className="text-sm text-muted-foreground">
                    This name is for your reference only and won't be visible to recipients.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-subject">Email Subject</Label>
                  <Input id="email-subject" placeholder="Enter email subject" />
                  <p className="text-sm text-muted-foreground">
                    Keep your subject line clear, concise, and compelling.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sender-name">Sender Name</Label>
                  <Input id="sender-name" placeholder="Enter sender name" defaultValue="Nubras Fabrics" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sender-email">Sender Email</Label>
                  <Input
                    id="sender-email"
                    placeholder="Enter sender email"
                    defaultValue="marketing@nubrasfabrics.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply-to">Reply-To Email</Label>
                  <Input id="reply-to" placeholder="Enter reply-to email" defaultValue="support@nubrasfabrics.com" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template">Email Template</Label>
                  <Select>
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Templates</SelectLabel>
                        {emailTemplates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground">Choose a template or create your own content below.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-content">Email Content</Label>
                  <Textarea id="email-content" placeholder="Enter email content or use template" rows={10} />
                </div>

                <div className="space-y-2">
                  <Label>Email Design Tools</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      <ImageIcon className="mr-2 h-4 w-4" /> Add Image
                    </Button>
                    <Button variant="outline" size="sm">
                      <Link2 className="mr-2 h-4 w-4" /> Add Link
                    </Button>
                    <Button variant="outline" size="sm">
                      <AtSign className="mr-2 h-4 w-4" /> Add Personalization
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recipients" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subscriber-list">Subscriber List</Label>
                  <Select>
                    <SelectTrigger id="subscriber-list">
                      <SelectValue placeholder="Select subscriber list" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Lists</SelectLabel>
                        {subscriberLists.map((list) => (
                          <SelectItem key={list.id} value={list.id}>
                            {list.name} ({list.subscribers})
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Additional Filters</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-active" />
                      <Label htmlFor="filter-active">Active customers only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-purchased" />
                      <Label htmlFor="filter-purchased">Purchased in the last 3 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="filter-opened" />
                      <Label htmlFor="filter-opened">Opened previous campaigns</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Estimated Recipients</Label>
                  <div className="p-4 bg-muted rounded-md">
                    <p className="text-lg font-medium">1,250 recipients</p>
                    <p className="text-sm text-muted-foreground">Based on your selected list and filters</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Sending Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="send-now" defaultChecked />
                      <Label htmlFor="send-now">Send immediately</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="send-later" />
                      <Label htmlFor="send-later">Schedule for later</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schedule-date">Schedule Date & Time</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="date" id="schedule-date" />
                    <Input type="time" id="schedule-time" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Campaign Summary</Label>
                  <div className="p-4 bg-muted rounded-md space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Campaign Name:</span>
                      <span className="text-sm font-medium">Ramadan Collection Announcement</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Subject Line:</span>
                      <span className="text-sm font-medium">Introducing Our Ramadan Collection</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Recipients:</span>
                      <span className="text-sm font-medium">1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sending Time:</span>
                      <span className="text-sm font-medium">Immediately</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="confirm-send" />
                    <Label htmlFor="confirm-send">
                      I confirm that this campaign complies with email marketing regulations and our company policies.
                    </Label>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          {selectedTab !== "details" ? (
            <Button variant="outline" onClick={handlePrevTab}>
              Previous
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href="/email-marketing">Cancel</Link>
            </Button>
          )}
          {selectedTab !== "schedule" ? (
            <Button onClick={handleNextTab}>Next</Button>
          ) : (
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Send Campaign
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
