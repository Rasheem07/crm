"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { ArrowLeft, ArrowRight, Check, Mail, MessageSquare, Globe, Send } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePickerWithRange } from "../../components/date-range-picker"
import type { DateRange } from "react-day-picker"
import { addDays } from "date-fns"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateCampaignPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [campaignName, setCampaignName] = useState("")
  const [campaignDescription, setCampaignDescription] = useState("")
  const [campaignType, setCampaignType] = useState("")
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), 7),
    to: addDays(new Date(), 21),
  })
  const [audience, setAudience] = useState("")
  const [channels, setChannels] = useState<string[]>([])

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleChannelToggle = (channel: string) => {
    setChannels((prev) => (prev.includes(channel) ? prev.filter((c) => c !== channel) : [...prev, channel]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ campaignName, campaignDescription, campaignType, date, audience, channels })
    // Redirect to campaigns page
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/crm/campaigns">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold">Create Campaign</h2>
          <p className="text-muted-foreground mt-1">Set up a new marketing campaign in a few steps</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium">{progress}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                  <CardDescription>Basic information about your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="campaign-name">Campaign Name</Label>
                    <Input
                      id="campaign-name"
                      placeholder="Enter campaign name"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="campaign-description">Description</Label>
                    <Textarea
                      id="campaign-description"
                      placeholder="Enter campaign description"
                      value={campaignDescription}
                      onChange={(e) => setCampaignDescription(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="campaign-type">Campaign Type</Label>
                      <Select value={campaignType} onValueChange={setCampaignType}>
                        <SelectTrigger id="campaign-type">
                          <SelectValue placeholder="Select campaign type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Campaign Types</SelectLabel>
                            <SelectItem value="promotional">Promotional</SelectItem>
                            <SelectItem value="seasonal">Seasonal</SelectItem>
                            <SelectItem value="product_launch">Product Launch</SelectItem>
                            <SelectItem value="event">Event</SelectItem>
                            <SelectItem value="loyalty">Loyalty</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Campaign Date Range</Label>
                      <DatePickerWithRange date={date} setDate={setDate} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button type="button" onClick={handleNextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Target Audience</CardTitle>
                  <CardDescription>Define who will receive your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="audience">Target Audience</Label>
                    <Select value={audience} onValueChange={setAudience}>
                      <SelectTrigger id="audience">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Audiences</SelectLabel>
                          <SelectItem value="all">All Customers</SelectItem>
                          <SelectItem value="vip">VIP Clients</SelectItem>
                          <SelectItem value="luxury">Luxury Fabric Buyers</SelectItem>
                          <SelectItem value="dubai">Dubai Marina Residents</SelectItem>
                          <SelectItem value="inactive">Inactive Customers</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Filters</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-md">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location" />
                        <Label htmlFor="location">Location</Label>
                        <Input placeholder="e.g., Dubai Marina" className="ml-auto w-2/3" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="purchase-value" />
                        <Label htmlFor="purchase-value">Purchase Value</Label>
                        <Input placeholder="e.g., > AED 1,000" className="ml-auto w-2/3" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="purchase-frequency" />
                        <Label htmlFor="purchase-frequency">Purchase Frequency</Label>
                        <Input placeholder="e.g., > 3 times in 6 months" className="ml-auto w-2/3" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="product-category" />
                        <Label htmlFor="product-category">Product Category</Label>
                        <Input placeholder="e.g., Luxury Fabric" className="ml-auto w-2/3" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Estimated Audience Size</Label>
                    <div className="p-4 border rounded-md">
                      <div className="text-3xl font-bold mb-2">2,350</div>
                      <div className="text-sm text-muted-foreground">Customers matching your criteria</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" onClick={handleNextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Communication Channels</CardTitle>
                  <CardDescription>Select channels for your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Communication Channels</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-md">
                        <Checkbox
                          id="email"
                          checked={channels.includes("email")}
                          onCheckedChange={() => handleChannelToggle("email")}
                        />
                        <Label htmlFor="email" className="flex items-center">
                          <Mail className="mr-2 h-4 w-4" /> Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-md">
                        <Checkbox
                          id="whatsapp"
                          checked={channels.includes("whatsapp")}
                          onCheckedChange={() => handleChannelToggle("whatsapp")}
                        />
                        <Label htmlFor="whatsapp" className="flex items-center">
                          <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-md">
                        <Checkbox
                          id="sms"
                          checked={channels.includes("sms")}
                          onCheckedChange={() => handleChannelToggle("sms")}
                        />
                        <Label htmlFor="sms" className="flex items-center">
                          <Send className="mr-2 h-4 w-4" /> SMS
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-md">
                        <Checkbox
                          id="social"
                          checked={channels.includes("social")}
                          onCheckedChange={() => handleChannelToggle("social")}
                        />
                        <Label htmlFor="social" className="flex items-center">
                          <Globe className="mr-2 h-4 w-4" /> Social Media
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Channel Content</Label>
                    <Tabs defaultValue="email" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="email" disabled={!channels.includes("email")}>
                          Email
                        </TabsTrigger>
                        <TabsTrigger value="whatsapp" disabled={!channels.includes("whatsapp")}>
                          WhatsApp
                        </TabsTrigger>
                        <TabsTrigger value="sms" disabled={!channels.includes("sms")}>
                          SMS
                        </TabsTrigger>
                        <TabsTrigger value="social" disabled={!channels.includes("social")}>
                          Social Media
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="email">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email-subject">Email Subject</Label>
                            <Input id="email-subject" placeholder="Enter email subject" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-template">Email Template</Label>
                            <Select>
                              <SelectTrigger id="email-template">
                                <SelectValue placeholder="Select template" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Templates</SelectLabel>
                                  <SelectItem value="promotional">Promotional Template</SelectItem>
                                  <SelectItem value="announcement">Announcement Template</SelectItem>
                                  <SelectItem value="newsletter">Newsletter Template</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email-content">Email Content</Label>
                            <Textarea id="email-content" placeholder="Enter email content" rows={6} />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="whatsapp">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="whatsapp-template">WhatsApp Template</Label>
                            <Select>
                              <SelectTrigger id="whatsapp-template">
                                <SelectValue placeholder="Select template" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Templates</SelectLabel>
                                  <SelectItem value="promotional">Promotional Template</SelectItem>
                                  <SelectItem value="announcement">Announcement Template</SelectItem>
                                  <SelectItem value="reminder">Reminder Template</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="whatsapp-message">WhatsApp Message</Label>
                            <Textarea id="whatsapp-message" placeholder="Enter WhatsApp message" rows={6} />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="sms">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="sms-message">SMS Message</Label>
                            <Textarea id="sms-message" placeholder="Enter SMS message" rows={4} />
                          </div>
                          <div className="text-sm text-muted-foreground">Character count: 0/160</div>
                        </div>
                      </TabsContent>
                      <TabsContent value="social">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="social-platforms">Social Platforms</Label>
                            <div className="flex flex-wrap gap-2">
                              <Checkbox id="facebook" />
                              <Label htmlFor="facebook">Facebook</Label>
                              <Checkbox id="instagram" />
                              <Label htmlFor="instagram">Instagram</Label>
                              <Checkbox id="twitter" />
                              <Label htmlFor="twitter">Twitter</Label>
                              <Checkbox id="linkedin" />
                              <Label htmlFor="linkedin">LinkedIn</Label>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="social-message">Social Media Message</Label>
                            <Textarea id="social-message" placeholder="Enter social media message" rows={4} />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <Button type="button" onClick={handleNextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle>Schedule & Launch</CardTitle>
                  <CardDescription>Configure when to send your campaign</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Delivery Schedule</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Send Immediately</SelectItem>
                        <SelectItem value="scheduled">Schedule for Later</SelectItem>
                        <SelectItem value="recurring">Recurring Campaign</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Delivery Options</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="optimize-time" />
                        <Label htmlFor="optimize-time">Optimize delivery time for each recipient</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="test" />
                        <Label htmlFor="test">Send test campaign before launch</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="analytics" />
                        <Label htmlFor="analytics">Enable detailed analytics tracking</Label>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Campaign Summary</Label>
                    <div className="p-4 border rounded-md space-y-4">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-sm text-muted-foreground">Campaign Name</div>
                          <div className="font-medium">{campaignName || "Untitled Campaign"}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Campaign Type</div>
                          <div className="font-medium">{campaignType || "Not specified"}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Target Audience</div>
                          <div className="font-medium">{audience || "Not specified"}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Estimated Reach</div>
                          <div className="font-medium">2,350 customers</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Channels</div>
                          <div className="font-medium">
                            {channels.length > 0
                              ? channels.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")
                              : "None selected"}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Campaign Dates</div>
                          <div className="font-medium">
                            {date?.from ? new Date(date.from).toLocaleDateString() : "Start date"} -
                            {date?.to ? new Date(date.to).toLocaleDateString() : "End date"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Button type="submit">Launch Campaign</Button>
                  </div>
                </CardFooter>
              </Card>
            )}
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Campaign Progress</CardTitle>
              <CardDescription>Track your campaign setup progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      currentStep >= 1 ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 1 ? <Check className="h-4 w-4" /> : "1"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Campaign Details</div>
                    <div className="text-xs text-muted-foreground">Basic information</div>
                  </div>
                </div>
                <div className="ml-4 h-6 border-l border-muted"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      currentStep >= 2 ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 2 ? <Check className="h-4 w-4" /> : "2"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Target Audience</div>
                    <div className="text-xs text-muted-foreground">Define recipients</div>
                  </div>
                </div>
                <div className="ml-4 h-6 border-l border-muted"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      currentStep >= 3 ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 3 ? <Check className="h-4 w-4" /> : "3"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Communication Channels</div>
                    <div className="text-xs text-muted-foreground">Select channels</div>
                  </div>
                </div>
                <div className="ml-4 h-6 border-l border-muted"></div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      currentStep >= 4 ? "bg-green-100 text-green-600" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > 4 ? <Check className="h-4 w-4" /> : "4"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Schedule & Launch</div>
                    <div className="text-xs text-muted-foreground">Set timing</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Campaign Tips</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Personalized campaigns have 26% higher open rates</p>
                  <p>• Multi-channel campaigns increase conversion by 35%</p>
                  <p>• Optimal send times are between 10 AM and 2 PM</p>
                  <p>• Clear CTAs can improve click-through rates by 28%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
