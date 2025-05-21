"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Upload, Plus, Trash2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function CampaignCreateForm() {
  const [date, setDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [budget, setBudget] = useState(5000)
  const [selectedSegments, setSelectedSegments] = useState<string[]>([])
  const [selectedChannels, setSelectedChannels] = useState<string[]>([])

  const segments = [
    { id: "vip", name: "VIP Customers", count: 124 },
    { id: "repeat", name: "Repeat Customers", count: 567 },
    { id: "new", name: "New Customers (Last 30 Days)", count: 89 },
    { id: "inactive", name: "Inactive Customers", count: 432 },
    { id: "highspend", name: "High Spenders", count: 156 },
    { id: "dubai", name: "Dubai Residents", count: 783 },
    { id: "abudhabi", name: "Abu Dhabi Residents", count: 341 },
    { id: "female", name: "Female Customers", count: 892 },
    { id: "male", name: "Male Customers", count: 567 },
  ]

  const handleSegmentToggle = (segmentId: string) => {
    setSelectedSegments((prev) =>
      prev.includes(segmentId) ? prev.filter((id) => id !== segmentId) : [...prev, segmentId],
    )
  }

  const handleChannelToggle = (channelId: string) => {
    setSelectedChannels((prev) =>
      prev.includes(channelId) ? prev.filter((id) => id !== channelId) : [...prev, channelId],
    )
  }

  const handleSaveCampaign = () => {
    // Simulate saving campaign
    setSaveSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Create Campaign</h2>
        <p className="text-muted-foreground mt-1">Design and launch a new marketing campaign</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your campaign has been created successfully.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="details">Campaign Details</TabsTrigger>
          <TabsTrigger value="audience">Target Audience</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="budget">Budget & Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Information</CardTitle>
              <CardDescription>Basic information about your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="campaign-name">Campaign Name*</Label>
                <Input id="campaign-name" placeholder="Enter campaign name" />
                <p className="text-xs text-muted-foreground">Choose a descriptive name for your campaign</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-type">Campaign Type*</Label>
                <Select>
                  <SelectTrigger id="campaign-type">
                    <SelectValue placeholder="Select campaign type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Campaign Types</SelectLabel>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="seasonal">Seasonal</SelectItem>
                      <SelectItem value="product-launch">Product Launch</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="re-engagement">Re-engagement</SelectItem>
                      <SelectItem value="loyalty">Loyalty Program</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-description">Campaign Description*</Label>
                <Textarea
                  id="campaign-description"
                  placeholder="Describe your campaign objectives and goals"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="campaign-goal">Primary Goal*</Label>
                  <Select>
                    <SelectTrigger id="campaign-goal">
                      <SelectValue placeholder="Select primary goal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Campaign Goals</SelectLabel>
                        <SelectItem value="sales">Increase Sales</SelectItem>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="leads">Generate Leads</SelectItem>
                        <SelectItem value="retention">Customer Retention</SelectItem>
                        <SelectItem value="engagement">Increase Engagement</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="campaign-kpi">Key Performance Indicator*</Label>
                  <Select>
                    <SelectTrigger id="campaign-kpi">
                      <SelectValue placeholder="Select KPI" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>KPIs</SelectLabel>
                        <SelectItem value="conversion">Conversion Rate</SelectItem>
                        <SelectItem value="ctr">Click-Through Rate</SelectItem>
                        <SelectItem value="roi">Return on Investment</SelectItem>
                        <SelectItem value="engagement">Engagement Rate</SelectItem>
                        <SelectItem value="reach">Reach</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-tags">Campaign Tags</Label>
                <Input
                  id="campaign-tags"
                  placeholder="Enter tags separated by commas (e.g., summer, discount, fashion)"
                />
                <p className="text-xs text-muted-foreground">Tags help organize and filter campaigns</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="campaign-priority" />
                <Label htmlFor="campaign-priority">Mark as high priority campaign</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Target Audience</CardTitle>
              <CardDescription>Define who will receive your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Customer Segments</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {segments.map((segment) => (
                    <div
                      key={segment.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedSegments.includes(segment.id) ? "border-primary bg-primary/5" : "hover:border-gray-400"
                      }`}
                      onClick={() => handleSegmentToggle(segment.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{segment.name}</p>
                          <p className="text-sm text-muted-foreground">{segment.count} customers</p>
                        </div>
                        <Checkbox
                          checked={selectedSegments.includes(segment.id)}
                          onCheckedChange={() => handleSegmentToggle(segment.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  <Plus className="h-4 w-4 mr-2" /> Create New Segment
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Additional Filters</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>UAE</SelectLabel>
                          <SelectItem value="all-uae">All UAE</SelectItem>
                          <SelectItem value="dubai">Dubai</SelectItem>
                          <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                          <SelectItem value="sharjah">Sharjah</SelectItem>
                          <SelectItem value="other-uae">Other Emirates</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>GCC</SelectLabel>
                          <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                          <SelectItem value="qatar">Qatar</SelectItem>
                          <SelectItem value="kuwait">Kuwait</SelectItem>
                          <SelectItem value="bahrain">Bahrain</SelectItem>
                          <SelectItem value="oman">Oman</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age-range">Age Range</Label>
                    <Select>
                      <SelectTrigger id="age-range">
                        <SelectValue placeholder="Select age range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ages</SelectItem>
                        <SelectItem value="18-24">18-24</SelectItem>
                        <SelectItem value="25-34">25-34</SelectItem>
                        <SelectItem value="35-44">35-44</SelectItem>
                        <SelectItem value="45-54">45-54</SelectItem>
                        <SelectItem value="55+">55+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Genders</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purchase-history">Purchase History</Label>
                    <Select>
                      <SelectTrigger id="purchase-history">
                        <SelectValue placeholder="Select purchase history" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Customers</SelectItem>
                        <SelectItem value="recent">Recent Purchasers (30 days)</SelectItem>
                        <SelectItem value="repeat">Repeat Customers</SelectItem>
                        <SelectItem value="high-value">High Value Customers</SelectItem>
                        <SelectItem value="inactive">Inactive (90+ days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Estimated Audience Size</Label>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium">1,245 customers</span>
                    <Badge variant="outline">24% of database</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Based on your current selection</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Content</CardTitle>
              <CardDescription>Create the content for your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="campaign-subject">Email Subject Line / SMS Headline*</Label>
                <Input id="campaign-subject" placeholder="Enter subject line" />
                <p className="text-xs text-muted-foreground">Keep it concise and compelling</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-message">Message Body*</Label>
                <Textarea id="campaign-message" placeholder="Enter your campaign message" rows={6} />
              </div>

              <div className="space-y-4">
                <Label>Message Preview</Label>
                <div className="border rounded-lg p-4 bg-muted/30">
                  <div className="space-y-2">
                    <p className="font-medium">Subject: [Your Subject Line]</p>
                    <p className="text-sm">Dear [Customer Name],</p>
                    <p className="text-sm">[Your Message Body]</p>
                    <p className="text-sm mt-4">
                      Best regards,
                      <br />
                      Nubras Fashion Team
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Campaign Media</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="font-medium">Upload Image</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG or GIF, max 5MB</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Select File
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img src="/diverse-fashion-display.png" alt="Campaign Image" className="w-full h-40 object-cover" />
                    <div className="p-2 flex justify-between items-center">
                      <span className="text-xs">product-image.jpg</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img src="/fashion-banner.png" alt="Campaign Banner" className="w-full h-40 object-cover" />
                    <div className="p-2 flex justify-between items-center">
                      <span className="text-xs">banner-image.jpg</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-cta">Call to Action*</Label>
                <Select>
                  <SelectTrigger id="campaign-cta">
                    <SelectValue placeholder="Select call to action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shop-now">Shop Now</SelectItem>
                    <SelectItem value="learn-more">Learn More</SelectItem>
                    <SelectItem value="get-discount">Get Discount</SelectItem>
                    <SelectItem value="book-appointment">Book Appointment</SelectItem>
                    <SelectItem value="contact-us">Contact Us</SelectItem>
                    <SelectItem value="custom">Custom CTA</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="campaign-landing-url">Landing Page URL</Label>
                <Input id="campaign-landing-url" placeholder="https://www.nubras.com/campaign" />
                <p className="text-xs text-muted-foreground">Where customers will go when they click your CTA</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="personalize-content" />
                <Label htmlFor="personalize-content">Personalize content with customer name and preferences</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Distribution Channels</CardTitle>
              <CardDescription>Select how to distribute your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Select Channels</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedChannels.includes("email") ? "border-primary bg-primary/5" : "hover:border-gray-400"
                    }`}
                    onClick={() => handleChannelToggle("email")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-blue-600"
                          >
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">Send to customer email addresses</p>
                        </div>
                      </div>
                      <Checkbox
                        checked={selectedChannels.includes("email")}
                        onCheckedChange={() => handleChannelToggle("email")}
                      />
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedChannels.includes("sms") ? "border-primary bg-primary/5" : "hover:border-gray-400"
                    }`}
                    onClick={() => handleChannelToggle("sms")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-green-600"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">SMS</p>
                          <p className="text-sm text-muted-foreground">Send to customer phone numbers</p>
                        </div>
                      </div>
                      <Checkbox
                        checked={selectedChannels.includes("sms")}
                        onCheckedChange={() => handleChannelToggle("sms")}
                      />
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedChannels.includes("whatsapp") ? "border-primary bg-primary/5" : "hover:border-gray-400"
                    }`}
                    onClick={() => handleChannelToggle("whatsapp")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-emerald-100 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-600"
                          >
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                            <path d="M9 14a5 5 0 0 0 6 0" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-sm text-muted-foreground">Send via WhatsApp Business API</p>
                        </div>
                      </div>
                      <Checkbox
                        checked={selectedChannels.includes("whatsapp")}
                        onCheckedChange={() => handleChannelToggle("whatsapp")}
                      />
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedChannels.includes("social") ? "border-primary bg-primary/5" : "hover:border-gray-400"
                    }`}
                    onClick={() => handleChannelToggle("social")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-purple-600"
                          >
                            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Social Media</p>
                          <p className="text-sm text-muted-foreground">Post to connected social accounts</p>
                        </div>
                      </div>
                      <Checkbox
                        checked={selectedChannels.includes("social")}
                        onCheckedChange={() => handleChannelToggle("social")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {selectedChannels.includes("social") && (
                <div className="space-y-4 border-t pt-4">
                  <Label>Social Media Platforms</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-instagram" />
                      <Label htmlFor="platform-instagram">Instagram</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-facebook" />
                      <Label htmlFor="platform-facebook">Facebook</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-twitter" />
                      <Label htmlFor="platform-twitter">Twitter</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="platform-linkedin" />
                      <Label htmlFor="platform-linkedin">LinkedIn</Label>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label>Delivery Method</Label>
                <RadioGroup defaultValue="immediate">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="immediate" id="delivery-immediate" />
                    <Label htmlFor="delivery-immediate">Send immediately</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="scheduled" id="delivery-scheduled" />
                    <Label htmlFor="delivery-scheduled">Schedule for later</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recurring" id="delivery-recurring" />
                    <Label htmlFor="delivery-recurring">Set up recurring campaign</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Budget & Schedule</CardTitle>
              <CardDescription>Set your campaign budget and timeline</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Campaign Budget (AED)</Label>
                <div className="space-y-4">
                  <Slider defaultValue={[5000]} max={20000} step={500} onValueChange={(value) => setBudget(value[0])} />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">AED 1,000</span>
                    <span className="font-medium">AED {budget.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">AED 20,000</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Select start date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "PPP") : <span>Select end date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Campaign Frequency</Label>
                <Select>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="once">One-time</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Campaign Summary</Label>
                <div className="bg-muted p-4 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Estimated Reach:</span>
                    <span className="font-medium">1,245 customers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Channels:</span>
                    <div className="flex space-x-1">
                      {selectedChannels.includes("email") && <Badge variant="outline">Email</Badge>}
                      {selectedChannels.includes("sms") && <Badge variant="outline">SMS</Badge>}
                      {selectedChannels.includes("whatsapp") && <Badge variant="outline">WhatsApp</Badge>}
                      {selectedChannels.includes("social") && <Badge variant="outline">Social</Badge>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Budget:</span>
                    <span className="font-medium">AED {budget.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Duration:</span>
                    <span className="font-medium">
                      {date && endDate ? `${format(date, "MMM d")} - ${format(endDate, "MMM d, yyyy")}` : "Not set"}
                    </span>
                  </div>
                </div>
              </div>

              <Alert variant="default" className="bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-500" />
                <AlertTitle className="text-amber-800">Campaign Review Required</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Your campaign will be reviewed by a team member before being sent to ensure compliance with marketing
                  regulations.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button onClick={handleSaveCampaign}>Create Campaign</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
