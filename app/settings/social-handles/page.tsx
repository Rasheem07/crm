"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Check, Instagram, Facebook, Twitter, Linkedin, Youtube, Globe } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SocialHandlesPage() {
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleSaveSettings = () => {
    // Simulate saving settings
    setSaveSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Social Media Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your social media accounts and integration settings</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your social media settings have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Social Media Accounts</CardTitle>
            <CardDescription>Connect your brand's social media accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Instagram className="h-6 w-6 text-pink-600" />
                <div className="flex-1">
                  <Label htmlFor="instagram" className="text-base">
                    Instagram
                  </Label>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm text-muted-foreground">instagram.com/</span>
                    <Input id="instagram" placeholder="yourbrand" defaultValue="nubrasfashion" className="max-w-xs" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="instagram-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="instagram-active" defaultChecked />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Facebook className="h-6 w-6 text-blue-600" />
                <div className="flex-1">
                  <Label htmlFor="facebook" className="text-base">
                    Facebook
                  </Label>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm text-muted-foreground">facebook.com/</span>
                    <Input
                      id="facebook"
                      placeholder="yourbrand"
                      defaultValue="NubrasFashionOfficial"
                      className="max-w-xs"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="facebook-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="facebook-active" defaultChecked />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Twitter className="h-6 w-6 text-sky-500" />
                <div className="flex-1">
                  <Label htmlFor="twitter" className="text-base">
                    Twitter
                  </Label>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm text-muted-foreground">twitter.com/</span>
                    <Input id="twitter" placeholder="yourbrand" defaultValue="nubras_fashion" className="max-w-xs" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="twitter-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="twitter-active" defaultChecked />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Linkedin className="h-6 w-6 text-blue-700" />
                <div className="flex-1">
                  <Label htmlFor="linkedin" className="text-base">
                    LinkedIn
                  </Label>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm text-muted-foreground">linkedin.com/company/</span>
                    <Input id="linkedin" placeholder="yourbrand" defaultValue="nubras-fashion" className="max-w-xs" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="linkedin-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="linkedin-active" defaultChecked />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Youtube className="h-6 w-6 text-red-600" />
                <div className="flex-1">
                  <Label htmlFor="youtube" className="text-base">
                    YouTube
                  </Label>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-sm text-muted-foreground">youtube.com/c/</span>
                    <Input id="youtube" placeholder="yourbrand" defaultValue="NubrasFashion" className="max-w-xs" />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="youtube-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="youtube-active" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Globe className="h-6 w-6 text-emerald-600" />
                <div className="flex-1">
                  <Label htmlFor="website" className="text-base">
                    Website
                  </Label>
                  <div className="flex items-center mt-1">
                    <Input
                      id="website"
                      placeholder="https://www.yourbrand.com"
                      defaultValue="https://www.nubras.com"
                      className="max-w-md"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Label htmlFor="website-active" className="text-sm">
                    Active
                  </Label>
                  <Switch id="website-active" defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Social Media Accounts</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Integration Settings</CardTitle>
            <CardDescription>Configure how your CRM interacts with social platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Automatic Post Scheduling</Label>
                  <p className="text-sm text-muted-foreground">Schedule and publish posts directly from CRM</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Social Listening</Label>
                  <p className="text-sm text-muted-foreground">Monitor brand mentions and customer feedback</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Engagement Tracking</Label>
                  <p className="text-sm text-muted-foreground">
                    Track likes, comments, shares and other engagement metrics
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Customer Profile Enrichment</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically update customer profiles with social data
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Social Media Analytics</Label>
                  <p className="text-sm text-muted-foreground">Generate detailed reports on social media performance</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Label htmlFor="default-message" className="text-base">
                Default Social Response Message
              </Label>
              <Textarea
                id="default-message"
                placeholder="Enter your default response message for social media inquiries"
                defaultValue="Thank you for reaching out to Nubras Fashion! We appreciate your interest and will get back to you shortly. For immediate assistance, please contact us at info@nubras.com."
                rows={4}
              />
              <p className="text-xs text-muted-foreground mt-1">
                This message will be used as a template for initial responses to social media inquiries.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Integration Settings</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Automation</CardTitle>
            <CardDescription>Configure automated responses and actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-Reply to Direct Messages</Label>
                  <p className="text-sm text-muted-foreground">Send automatic initial responses to direct messages</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Comment Monitoring</Label>
                  <p className="text-sm text-muted-foreground">Flag important comments for review</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Sentiment Analysis</Label>
                  <p className="text-sm text-muted-foreground">Analyze sentiment of comments and messages</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Lead Generation</Label>
                  <p className="text-sm text-muted-foreground">Automatically create leads from social interactions</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Automation Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
