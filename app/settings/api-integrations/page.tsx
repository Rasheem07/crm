"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Check, Copy, RefreshCw, Plus, Trash2, ExternalLink } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiIntegrationsPage() {
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [apiKeys, setApiKeys] = useState([
    { id: "1", name: "Production API Key", key: "nub_prod_a1b2c3d4e5f6g7h8i9j0", active: true, created: "2023-05-15" },
    { id: "2", name: "Development API Key", key: "nub_dev_z9y8x7w6v5u4t3s2r1q0", active: true, created: "2023-06-20" },
  ])

  const handleSaveSettings = () => {
    // Simulate saving settings
    setSaveSuccess(true)

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false)
    }, 3000)
  }

  const handleCopyApiKey = (key: string) => {
    navigator.clipboard.writeText(key)
    // Could add a toast notification here
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">API & Integrations</h2>
        <p className="text-muted-foreground mt-1">Manage API keys and third-party integrations</p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>Your API settings have been saved successfully.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="api-keys" className="space-y-6">
        <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full">
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="integrations">Third-Party Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="api-keys" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for accessing the CRM API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="border rounded-lg p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{apiKey.name}</h3>
                          <Badge variant={apiKey.active ? "default" : "outline"}>
                            {apiKey.active ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">Created on {apiKey.created}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="relative flex-1">
                          <Input value={apiKey.key} readOnly className="pr-10 font-mono text-sm" type="password" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full"
                            onClick={() => handleCopyApiKey(apiKey.key)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="outline" size="icon">
                          <RefreshCw className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full" variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Generate New API Key
              </Button>

              <div className="space-y-2">
                <Label>API Access Settings</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="read-access">Read Access</Label>
                    <Switch id="read-access" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="write-access">Write Access</Label>
                    <Switch id="write-access" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="delete-access">Delete Access</Label>
                    <Switch id="delete-access" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>API Rate Limits</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rate-limit">Requests per minute</Label>
                    <Input id="rate-limit" type="number" defaultValue="60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="daily-limit">Daily request limit</Label>
                    <Input id="daily-limit" type="number" defaultValue="10000" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save API Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Resources to help you integrate with our API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium">Getting Started Guide</h3>
                  <p className="text-sm text-muted-foreground mt-1">Learn the basics of our API</p>
                  <Button variant="link" className="px-0 mt-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Guide <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium">API Reference</h3>
                  <p className="text-sm text-muted-foreground mt-1">Complete API documentation</p>
                  <Button variant="link" className="px-0 mt-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Reference <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium">Code Examples</h3>
                  <p className="text-sm text-muted-foreground mt-1">Sample code in various languages</p>
                  <Button variant="link" className="px-0 mt-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Examples <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-medium">API Changelog</h3>
                  <p className="text-sm text-muted-foreground mt-1">Recent updates and changes</p>
                  <Button variant="link" className="px-0 mt-2" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Changelog <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>Configure webhooks to receive real-time updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">New Customer Webhook</h3>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Triggers when a new customer is created</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        value="https://api.yourwebsite.com/webhooks/customers"
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">Campaign Status Webhook</h3>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Triggers when a campaign status changes</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        value="https://api.yourwebsite.com/webhooks/campaigns"
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button variant="outline" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add New Webhook
              </Button>

              <div className="space-y-2">
                <Label>Webhook Settings</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-retry">Retry Failed Webhooks</Label>
                    <Switch id="webhook-retry" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-logging">Enable Webhook Logging</Label>
                    <Switch id="webhook-logging" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhook-security">Webhook Signature Verification</Label>
                    <Switch id="webhook-security" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-secret">Webhook Secret</Label>
                <div className="relative">
                  <Input
                    id="webhook-secret"
                    value="whsec_a1b2c3d4e5f6g7h8i9j0"
                    readOnly
                    type="password"
                    className="pr-10 font-mono"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => handleCopyApiKey("whsec_a1b2c3d4e5f6g7h8i9j0")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Use this secret to verify webhook signatures and ensure they came from us
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Webhook Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Integrations</CardTitle>
              <CardDescription>Connect your CRM with other services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
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
                          <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6z" />
                          <path d="M22 6l-10 7L2 6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Email Marketing Platform</h3>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
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
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Analytics Platform</h3>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
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
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">WhatsApp Business API</h3>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 p-2 rounded-full">
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
                          className="text-orange-600"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Payment Gateway</h3>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
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
                          className="text-red-600"
                        >
                          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Social Media Platforms</h3>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-cyan-100 p-2 rounded-full">
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
                          className="text-cyan-600"
                        >
                          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                          <path d="M21.18 8.02A10 10 0 0 0 17.6 4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">ERP System</h3>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add New Integration
              </Button>

              <div className="space-y-2">
                <Label>Data Synchronization</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sync-auto">Automatic Synchronization</Label>
                    <Switch id="sync-auto" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sync-bidirectional">Bidirectional Sync</Label>
                    <Switch id="sync-bidirectional" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sync-conflict">Conflict Resolution</Label>
                    <Switch id="sync-conflict" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>Save Integration Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
