"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BusinessDetailsPage() {
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
        <h2 className="text-3xl font-bold">Business Details</h2>
        <p className="text-muted-foreground mt-1">Manage your company information and branding</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your business details have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Basic information about your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-6">
              <div>
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/diverse-group.png" alt="Company Logo" />
                  <AvatarFallback>NF</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Upload New Logo
                  </Button>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">Recommended size: 200x200px. PNG or JPG format.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Nubras Fashion" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="legal-name">Legal Business Name</Label>
                <Input id="legal-name" defaultValue="Nubras Fashion LLC" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tax-id">Tax ID / Business Registration Number</Label>
                <Input id="tax-id" defaultValue="AE123456789" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="founding-date">Founding Date</Label>
                <Input id="founding-date" type="date" defaultValue="2015-06-15" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Select defaultValue="fashion">
                  <SelectTrigger id="industry">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Industries</SelectLabel>
                      <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="luxury">Luxury Goods</SelectItem>
                      <SelectItem value="textiles">Textiles</SelectItem>
                      <SelectItem value="ecommerce">E-Commerce</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company-size">Company Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="company-size">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Company Size</SelectLabel>
                      <SelectItem value="small">Small (1-50 employees)</SelectItem>
                      <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                      <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                      <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="about">About the Company</Label>
              <Textarea
                id="about"
                rows={4}
                defaultValue="Nubras Fashion is a luxury fabric and clothing brand based in Dubai, specializing in high-quality fabrics and custom tailoring services. Founded in 2015, we have established ourselves as a premier destination for fashion-forward individuals seeking exceptional quality and design."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mission">Mission Statement</Label>
              <Textarea
                id="mission"
                rows={3}
                defaultValue="To provide exceptional quality fabrics and clothing that blend traditional craftsmanship with contemporary design, empowering our customers to express their unique style with confidence."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Company Information</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>How customers and partners can reach your business</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary-email">Primary Email</Label>
                <Input id="primary-email" type="email" defaultValue="info@nubras.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@nubras.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="primary-phone">Primary Phone</Label>
                <Input id="primary-phone" defaultValue="+971 4 123 4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-phone">Support Phone</Label>
                <Input id="support-phone" defaultValue="+971 4 123 4568" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Primary Address</Label>
              <Textarea
                id="address"
                rows={3}
                defaultValue="Nubras Fashion LLC
Dubai Marina Mall, Level 2
Dubai Marina, Dubai, UAE"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="Dubai" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Emirates</Label>
                <Input id="state" defaultValue="Dubai" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select defaultValue="uae">
                  <SelectTrigger id="country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      <SelectItem value="uae">United Arab Emirates</SelectItem>
                      <SelectItem value="ksa">Saudi Arabia</SelectItem>
                      <SelectItem value="qatar">Qatar</SelectItem>
                      <SelectItem value="kuwait">Kuwait</SelectItem>
                      <SelectItem value="bahrain">Bahrain</SelectItem>
                      <SelectItem value="oman">Oman</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-hours">Business Hours</Label>
              <Textarea
                id="business-hours"
                rows={3}
                defaultValue="Sunday - Thursday: 10:00 AM - 9:00 PM
Friday: 2:00 PM - 10:00 PM
Saturday: 10:00 AM - 10:00 PM"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Contact Information</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Brand Settings</CardTitle>
            <CardDescription>Customize your brand appearance in the CRM</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Brand Color</Label>
                <div className="flex items-center space-x-2">
                  <Input id="primary-color" type="color" defaultValue="#6366F1" className="w-16 h-10" />
                  <Input defaultValue="#6366F1" className="flex-1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Brand Color</Label>
                <div className="flex items-center space-x-2">
                  <Input id="secondary-color" type="color" defaultValue="#10B981" className="w-16 h-10" />
                  <Input defaultValue="#10B981" className="flex-1" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand-slogan">Brand Slogan/Tagline</Label>
              <Input id="brand-slogan" defaultValue="Elegance in Every Thread" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand-values">Brand Values</Label>
              <Textarea
                id="brand-values"
                rows={3}
                defaultValue="Quality, Craftsmanship, Innovation, Sustainability, Customer Satisfaction"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSaveSettings}>Save Brand Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
