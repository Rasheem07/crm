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
import { ArrowLeft, ImageIcon, Save } from "lucide-react"
import Link from "next/link"

export default function CreateContentPage() {
  const [selectedTab, setSelectedTab] = useState("details")
  const [contentType, setContentType] = useState("")

  // Sample campaign data
  const campaigns = [
    { id: "ramadan", name: "Ramadan Collection" },
    { id: "eid", name: "Eid Special" },
    { id: "summer", name: "Summer Collection" },
    { id: "vip", name: "VIP Events" },
    { id: "none", name: "None" },
  ]

  const handleNextTab = () => {
    if (selectedTab === "details") setSelectedTab("content")
    else if (selectedTab === "content") setSelectedTab("settings")
  }

  const handlePrevTab = () => {
    if (selectedTab === "content") setSelectedTab("details")
    else if (selectedTab === "settings") setSelectedTab("content")
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/crm/content-manager">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h2 className="text-3xl font-bold">Create Content</h2>
          <p className="text-muted-foreground mt-1">
            Create a new content item or template for your marketing campaigns
          </p>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Content Details</CardTitle>
          <CardDescription>Fill out the details for your new content</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="details">Basic Details</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings & Publish</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content-title">Content Title</Label>
                  <Input id="content-title" placeholder="Enter content title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content-type">Content Type</Label>
                  <Select onValueChange={setContentType}>
                    <SelectTrigger id="content-type">
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Content Types</SelectLabel>
                        <SelectItem value="email">Email Template</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp Template</SelectItem>
                        <SelectItem value="image">Image Asset</SelectItem>
                        <SelectItem value="calendar">Calendar Content</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campaign">Associated Campaign</Label>
                  <Select>
                    <SelectTrigger id="campaign">
                      <SelectValue placeholder="Select campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Campaigns</SelectLabel>
                        {campaigns.map((campaign) => (
                          <SelectItem key={campaign.id} value={campaign.id}>
                            {campaign.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter a brief description of this content" rows={3} />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <div className="space-y-4">
                {contentType === "email" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="email-subject">Email Subject</Label>
                      <Input id="email-subject" placeholder="Enter email subject" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-content">Email Content</Label>
                      <Textarea id="email-content" placeholder="Enter email content" rows={10} />
                    </div>
                  </>
                )}

                {contentType === "whatsapp" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp-template">Template Name</Label>
                      <Input id="whatsapp-template" placeholder="Enter template name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp-content">Message Content</Label>
                      <Textarea id="whatsapp-content" placeholder="Enter message content" rows={6} />
                      <p className="text-sm text-muted-foreground">
                        Use &#123;&#123;1&#125;&#125;, &#123;&#123;2&#125;&#125;, etc. for variables that will be
                        replaced when sending.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Variables</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Variable 1 (e.g., customer name)" />
                        <Input placeholder="Variable 2 (e.g., appointment date)" />
                      </div>
                    </div>
                  </>
                )}

                {contentType === "image" && (
                  <>
                    <div className="space-y-2">
                      <Label>Upload Image</Label>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mt-2">
                          Drag and drop files here or click to browse
                        </p>
                        <Button variant="outline" className="mt-2">
                          Upload Image
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-alt">Alt Text</Label>
                      <Input id="image-alt" placeholder="Enter alt text for accessibility" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image-dimensions">Dimensions</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input id="image-width" placeholder="Width (px)" />
                        <Input id="image-height" placeholder="Height (px)" />
                      </div>
                    </div>
                  </>
                )}

                {contentType === "calendar" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="calendar-title">Calendar Title</Label>
                      <Input id="calendar-title" placeholder="Enter calendar title" />
                    </div>
                    <div className="space-y-2">
                      <Label>Date Range</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Start Date</Label>
                          <Input type="date" id="start-date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-date">End Date</Label>
                          <Input type="date" id="end-date" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="calendar-description">Description</Label>
                      <Textarea id="calendar-description" placeholder="Enter calendar description" rows={4} />
                    </div>
                  </>
                )}

                {!contentType && (
                  <div className="p-6 text-center">
                    <p className="text-muted-foreground">Please select a content type to continue</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select defaultValue="draft">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tags</Label>
                  <Input placeholder="Enter tags separated by commas" />
                </div>

                <div className="space-y-2">
                  <Label>Visibility</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="visibility-public" defaultChecked />
                      <Label htmlFor="visibility-public">Public</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="visibility-private" />
                      <Label htmlFor="visibility-private">Private (only visible to team members)</Label>
                    </div>
                  </div>
                </div>

                {contentType === "email" || contentType === "whatsapp" ? (
                  <div className="space-y-2">
                    <Label>Template Settings</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="template-reusable" defaultChecked />
                        <Label htmlFor="template-reusable">Make this template reusable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="template-personalization" />
                        <Label htmlFor="template-personalization">Enable personalization</Label>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="space-y-2">
                  <Label>Content Summary</Label>
                  <div className="p-4 bg-muted rounded-md space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Title:</span>
                      <span className="text-sm font-medium">Ramadan Collection Announcement</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Type:</span>
                      <span className="text-sm font-medium">{contentType || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Campaign:</span>
                      <span className="text-sm font-medium">Ramadan Collection</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Status:</span>
                      <span className="text-sm font-medium">Draft</span>
                    </div>
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
              <Link href="/crm/content-manager">Cancel</Link>
            </Button>
          )}
          {selectedTab !== "settings" ? (
            <Button onClick={handleNextTab}>Next</Button>
          ) : (
            <Button>
              <Save className="mr-2 h-4 w-4" /> Save Content
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
