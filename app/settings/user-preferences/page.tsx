"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Check, Upload, Bell, Moon, Sun, Globe } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function UserPreferencesPage() {
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
        <h2 className="text-3xl font-bold">User Preferences</h2>
        <p className="text-muted-foreground mt-1">Customize your CRM experience</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your preferences have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <div>
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <Label>Profile Picture</Label>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Upload New Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 1MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" defaultValue="Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@nubras.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+971 50 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" defaultValue="Marketing Manager" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select defaultValue="marketing">
                  <SelectTrigger id="department">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Departments</SelectLabel>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="customer-service">Customer Service</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                defaultValue="Marketing professional with 5+ years of experience in digital marketing and customer engagement."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Profile Information</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Display Settings</CardTitle>
            <CardDescription>Customize the appearance of your CRM</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Label>Theme Preference</Label>
              <RadioGroup defaultValue="system" className="grid grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="light" id="theme-light" className="sr-only peer" />
                  <Label
                    htmlFor="theme-light"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Sun className="mb-3 h-6 w-6" />
                    Light
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="dark" id="theme-dark" className="sr-only peer" />
                  <Label
                    htmlFor="theme-dark"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Moon className="mb-3 h-6 w-6" />
                    Dark
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="system" id="theme-system" className="sr-only peer" />
                  <Label
                    htmlFor="theme-system"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-3 h-6 w-6 flex items-center justify-center">
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </div>
                    System
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Language Preference</Label>
              <RadioGroup defaultValue="en" className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <RadioGroupItem value="en" id="lang-en" className="sr-only peer" />
                  <Label
                    htmlFor="lang-en"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Globe className="mb-2 h-5 w-5" />
                    English
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="ar" id="lang-ar" className="sr-only peer" />
                  <Label
                    htmlFor="lang-ar"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Globe className="mb-2 h-5 w-5" />
                    العربية
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="fr" id="lang-fr" className="sr-only peer" />
                  <Label
                    htmlFor="lang-fr"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Globe className="mb-2 h-5 w-5" />
                    Français
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="es" id="lang-es" className="sr-only peer" />
                  <Label
                    htmlFor="lang-es"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Globe className="mb-2 h-5 w-5" />
                    Español
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Dashboard Layout</Label>
              <RadioGroup defaultValue="default" className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <RadioGroupItem value="default" id="layout-default" className="sr-only peer" />
                  <Label
                    htmlFor="layout-default"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2 h-20 w-full bg-muted rounded-md flex flex-col p-1">
                      <div className="h-3 w-full bg-muted-foreground/20 rounded-sm mb-1"></div>
                      <div className="flex-1 grid grid-cols-2 gap-1">
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                      </div>
                    </div>
                    Default
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="compact" id="layout-compact" className="sr-only peer" />
                  <Label
                    htmlFor="layout-compact"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2 h-20 w-full bg-muted rounded-md flex flex-col p-1">
                      <div className="h-3 w-full bg-muted-foreground/20 rounded-sm mb-1"></div>
                      <div className="flex-1 grid grid-cols-3 gap-1">
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                      </div>
                    </div>
                    Compact
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="focus" id="layout-focus" className="sr-only peer" />
                  <Label
                    htmlFor="layout-focus"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <div className="mb-2 h-20 w-full bg-muted rounded-md flex flex-col p-1">
                      <div className="h-3 w-full bg-muted-foreground/20 rounded-sm mb-1"></div>
                      <div className="flex-1 grid grid-cols-1 gap-1">
                        <div className="bg-muted-foreground/20 rounded-sm"></div>
                      </div>
                    </div>
                    Focus
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Compact Sidebar</Label>
                <p className="text-sm text-muted-foreground">Use a more compact sidebar layout</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Quick Actions</Label>
                <p className="text-sm text-muted-foreground">Display quick action buttons in the header</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Animations</Label>
                <p className="text-sm text-muted-foreground">Use animations throughout the interface</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Display Settings</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Manage how you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label className="text-base">Browser Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications in your browser</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label className="text-base">Mobile Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications on your mobile device</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Notification Types</Label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-new-customer">New Customer Registration</Label>
                  <Switch id="notify-new-customer" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-campaign">Campaign Status Updates</Label>
                  <Switch id="notify-campaign" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-task">Task Assignments</Label>
                  <Switch id="notify-task" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-message">New Messages</Label>
                  <Switch id="notify-message" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-report">Report Generation</Label>
                  <Switch id="notify-report" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="notify-system">System Updates</Label>
                  <Switch id="notify-system" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notification-frequency">Notification Frequency</Label>
              <Select defaultValue="realtime">
                <SelectTrigger id="notification-frequency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="hourly">Hourly Digest</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Do Not Disturb</Label>
                <p className="text-sm text-muted-foreground">Pause all notifications temporarily</p>
              </div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Notification Preferences</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Manage your account security</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Session Timeout</Label>
                <p className="text-sm text-muted-foreground">Automatically log out after inactivity</p>
              </div>
              <Select defaultValue="30">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Login Notifications</Label>
                <p className="text-sm text-muted-foreground">Get notified of new logins to your account</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Security Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
