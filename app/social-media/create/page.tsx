"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Check, Upload, Trash2, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SocialMediaPostCreate() {
  const [date, setDate] = useState<Date>()
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [postPreview, setPostPreview] = useState<string | null>(null)

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) => (prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]))
  }

  const handleSavePost = () => {
    // Simulate saving post
    setSaveSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  const handleGeneratePreview = () => {
    setPostPreview("/placeholder.svg?key=96hcf")
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Create Social Media Post</h2>
        <p className="text-muted-foreground mt-1">Design and schedule posts for your social media channels</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your social media post has been created successfully.</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>Create your social media post content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="post-title">Post Title/Topic</Label>
                <Input id="post-title" placeholder="Enter a title for your post" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-content">Post Content*</Label>
                <Textarea id="post-content" placeholder="Write your post content here..." rows={5} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Use @mentions and #hashtags where appropriate</span>
                  <span>0/280 characters</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Select Platforms</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedPlatforms.includes("instagram") ? "border-pink-500 bg-pink-50" : "hover:border-gray-400"
                    }`}
                    onClick={() => handlePlatformToggle("instagram")}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <Instagram
                        className={`h-8 w-8 mb-2 ${selectedPlatforms.includes("instagram") ? "text-pink-500" : "text-gray-500"}`}
                      />
                      <p className="font-medium">Instagram</p>
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedPlatforms.includes("facebook") ? "border-blue-600 bg-blue-50" : "hover:border-gray-400"
                    }`}
                    onClick={() => handlePlatformToggle("facebook")}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <Facebook
                        className={`h-8 w-8 mb-2 ${selectedPlatforms.includes("facebook") ? "text-blue-600" : "text-gray-500"}`}
                      />
                      <p className="font-medium">Facebook</p>
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedPlatforms.includes("twitter") ? "border-sky-500 bg-sky-50" : "hover:border-gray-400"
                    }`}
                    onClick={() => handlePlatformToggle("twitter")}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <Twitter
                        className={`h-8 w-8 mb-2 ${selectedPlatforms.includes("twitter") ? "text-sky-500" : "text-gray-500"}`}
                      />
                      <p className="font-medium">Twitter</p>
                    </div>
                  </div>

                  <div
                    className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                      selectedPlatforms.includes("linkedin") ? "border-blue-700 bg-blue-50" : "hover:border-gray-400"
                    }`}
                    onClick={() => handlePlatformToggle("linkedin")}
                  >
                    <div className="flex flex-col items-center justify-center text-center">
                      <Linkedin
                        className={`h-8 w-8 mb-2 ${selectedPlatforms.includes("linkedin") ? "text-blue-700" : "text-gray-500"}`}
                      />
                      <p className="font-medium">LinkedIn</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Media</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="font-medium">Upload Image or Video</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF or MP4</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      Select File
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <img src="/diverse-fashion-display.png" alt="Post Image" className="w-full h-40 object-cover" />
                    <div className="p-2 flex justify-between items-center">
                      <span className="text-xs">product-image.jpg</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hashtags">Hashtags</Label>
                <Input id="hashtags" placeholder="Enter hashtags separated by spaces (e.g., #fashion #style)" />
                <p className="text-xs text-muted-foreground">
                  Popular hashtags: #NubrasFashion #DubaiFashion #LuxuryFabrics
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-link">Link URL (Optional)</Label>
                <Input id="post-link" placeholder="https://www.nubras.com/products/new-collection" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="post-location">Location (Optional)</Label>
                <Input id="post-location" placeholder="Dubai Marina Mall, Dubai" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scheduling</CardTitle>
              <CardDescription>Set when your post will be published</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Publishing Options</Label>
                <Tabs defaultValue="schedule">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="now">Publish Now</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="draft">Save as Draft</TabsTrigger>
                  </TabsList>
                  <TabsContent value="now" className="pt-4">
                    <p className="text-sm">Your post will be published immediately after submission.</p>
                  </TabsContent>
                  <TabsContent value="schedule" className="pt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="schedule-date">Schedule Date & Time</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Select date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Morning</SelectLabel>
                              <SelectItem value="08:00">8:00 AM</SelectItem>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Afternoon</SelectLabel>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                              <SelectLabel>Evening</SelectLabel>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="19:00">7:00 PM</SelectItem>
                              <SelectItem value="20:00">8:00 PM</SelectItem>
                              <SelectItem value="21:00">9:00 PM</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="optimal-time" />
                      <Label htmlFor="optimal-time">Use AI to determine optimal posting time</Label>
                    </div>
                  </TabsContent>
                  <TabsContent value="draft" className="pt-4">
                    <p className="text-sm">Your post will be saved as a draft for later editing and publishing.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Advanced Options</CardTitle>
              <CardDescription>Additional post settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Comments</Label>
                  <p className="text-sm text-muted-foreground">Allow users to comment on your post</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Track Engagement</Label>
                  <p className="text-sm text-muted-foreground">Monitor likes, comments, and shares</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Add to Campaign</Label>
                  <p className="text-sm text-muted-foreground">Associate this post with a marketing campaign</p>
                </div>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select campaign" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="summer">Summer Collection 2023</SelectItem>
                    <SelectItem value="eid">Eid Special Promotion</SelectItem>
                    <SelectItem value="ramadan">Ramadan Collection</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Boost Post</Label>
                  <p className="text-sm text-muted-foreground">Promote this post with paid advertising</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Preview</CardTitle>
              <CardDescription>See how your post will appear</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full" onClick={handleGeneratePreview}>
                Generate Preview
              </Button>

              {postPreview && (
                <div className="border rounded-lg overflow-hidden">
                  <img src={postPreview || "/placeholder.svg"} alt="Post Preview" className="w-full object-cover" />
                </div>
              )}

              <div className="text-center text-sm text-muted-foreground">
                {!postPreview && "Preview will appear here after generating"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post Summary</CardTitle>
              <CardDescription>Review your post details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Platforms:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedPlatforms.map((platform) => (
                      <Badge key={platform} variant="outline" className="capitalize">
                        {platform}
                      </Badge>
                    ))}
                    {selectedPlatforms.length === 0 && (
                      <span className="text-sm text-muted-foreground">None selected</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Schedule:</span>
                  <span className="text-sm">{date ? format(date, "PPP") : "Not scheduled"}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Media:</span>
                  <span className="text-sm">1 image</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Campaign:</span>
                  <span className="text-sm">None</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSavePost}>Create Post</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
