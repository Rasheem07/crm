"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Upload, Users } from "lucide-react"
import Link from "next/link"

export default function CreateSubscriberListPage() {
  const [selectedTab, setSelectedTab] = useState("details")

  const handleNextTab = () => {
    if (selectedTab === "details") setSelectedTab("subscribers")
    else if (selectedTab === "subscribers") setSelectedTab("settings")
  }

  const handlePrevTab = () => {
    if (selectedTab === "subscribers") setSelectedTab("details")
    else if (selectedTab === "settings") setSelectedTab("subscribers")
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
          <h2 className="text-3xl font-bold">Create Subscriber List</h2>
          <p className="text-muted-foreground mt-1">Create a new list of email subscribers</p>
        </div>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Subscriber List Details</CardTitle>
          <CardDescription>Fill out the details for your new subscriber list</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="details">List Details</TabsTrigger>
              <TabsTrigger value="subscribers">Add Subscribers</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="list-name">List Name</Label>
                  <Input id="list-name" placeholder="Enter list name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="list-description">Description</Label>
                  <Textarea id="list-description" placeholder="Enter list description" rows={3} />
                </div>

                <div className="space-y-2">
                  <Label>List Type</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-standard" defaultChecked />
                      <Label htmlFor="type-standard">Standard List</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="type-dynamic" />
                      <Label htmlFor="type-dynamic">Dynamic List (based on customer segments)</Label>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subscribers" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Add Subscribers</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="method-import" defaultChecked />
                      <Label htmlFor="method-import">Import from CSV/Excel</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="method-manual" />
                      <Label htmlFor="method-manual">Add manually</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="method-segment" />
                      <Label htmlFor="method-segment">Use customer segment</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Import File</Label>
                  <div className="border-2 border-dashed rounded-md p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Drag and drop CSV or Excel file here or click to browse
                    </p>
                    <Button variant="outline" className="mt-2">
                      Upload File
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      File should contain at minimum: email, first_name, last_name
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Manual Entry</Label>
                  <Textarea placeholder="Enter email addresses, one per line" rows={6} className="font-mono text-sm" />
                  <p className="text-xs text-muted-foreground">
                    You can add more details later or import a file with complete information.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>List Settings</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-double-optin" defaultChecked />
                      <Label htmlFor="setting-double-optin">Enable double opt-in for new subscribers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-welcome" defaultChecked />
                      <Label htmlFor="setting-welcome">Send welcome email to new subscribers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="setting-unsubscribe" defaultChecked />
                      <Label htmlFor="setting-unsubscribe">Include unsubscribe link in all emails</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>List Access</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-all" defaultChecked />
                      <Label htmlFor="access-all">All team members</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-marketing" />
                      <Label htmlFor="access-marketing">Marketing team only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="access-admin" />
                      <Label htmlFor="access-admin">Administrators only</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>List Summary</Label>
                  <div className="p-4 bg-muted rounded-md space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">List Name:</span>
                      <span className="text-sm font-medium">VIP Clients</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Estimated Subscribers:</span>
                      <span className="text-sm font-medium">120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Type:</span>
                      <span className="text-sm font-medium">Standard List</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Double Opt-in:</span>
                      <span className="text-sm font-medium">Enabled</span>
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
              <Link href="/email-marketing">Cancel</Link>
            </Button>
          )}
          {selectedTab !== "settings" ? (
            <Button onClick={handleNextTab}>Next</Button>
          ) : (
            <Button>
              <Users className="mr-2 h-4 w-4" /> Create List
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
