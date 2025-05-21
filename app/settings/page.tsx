"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, User, Building, Share2, Key, Bell, Shield, Globe, ChevronRight } from "lucide-react"
import { Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false)

  const settingsCategories = [
    {
      title: "Business Details",
      description: "Manage your company information and branding",
      icon: <Building className="h-6 w-6" />,
      href: "/settings/business-details",
    },
    {
      title: "Social Handles",
      description: "Manage your social media accounts and integration settings",
      icon: <Share2 className="h-6 w-6" />,
      href: "/settings/social-handles",
    },
    {
      title: "User Preferences",
      description: "Customize your CRM experience",
      icon: <User className="h-6 w-6" />,
      href: "/settings/user-preferences",
    },
    {
      title: "API & Integrations",
      description: "Manage API keys and third-party integrations",
      icon: <Key className="h-6 w-6" />,
      href: "/settings/api-integrations",
    },
    {
      title: "Notification Settings",
      description: "Configure how and when you receive notifications",
      icon: <Bell className="h-6 w-6" />,
      href: "/settings",
    },
    {
      title: "Compliance Settings",
      description: "Manage data privacy and compliance settings",
      icon: <Shield className="h-6 w-6" />,
      href: "/settings",
    },
    {
      title: "Language & Region",
      description: "Set your preferred language and regional settings",
      icon: <Globe className="h-6 w-6" />,
      href: "/settings",
    },
    {
      title: "General Settings",
      description: "Manage your CRM general settings",
      icon: <Settings className="h-6 w-6" />,
      href: "/settings",
    },
  ]

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
        <h2 className="text-3xl font-bold">Settings</h2>
        <p className="text-muted-foreground mt-1">Manage your CRM settings and preferences</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your settings have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsCategories.map((category, index) => (
          <Link href={category.href} key={index} className="block">
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="p-2 bg-primary/10 rounded-full">{category.icon}</div>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Recent Settings Activity</h3>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">Business details updated</p>
                  <p className="text-sm text-muted-foreground">Company address was updated</p>
                </div>
                <p className="text-sm text-muted-foreground">2 days ago</p>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">New API key generated</p>
                  <p className="text-sm text-muted-foreground">Development API key was created</p>
                </div>
                <p className="text-sm text-muted-foreground">5 days ago</p>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Social media accounts connected</p>
                  <p className="text-sm text-muted-foreground">Instagram and Facebook were linked</p>
                </div>
                <p className="text-sm text-muted-foreground">1 week ago</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
