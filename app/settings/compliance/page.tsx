import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertCircle, CheckCircle2, FileText, Lock, Shield, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Compliance Settings",
  description: "Manage compliance settings and regulations for your business",
}

export default function ComplianceSettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compliance Settings</h1>
        <p className="text-muted-foreground">Manage compliance settings and regulations for your business</p>
      </div>

      <Tabs defaultValue="data-protection">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="data-protection">Data Protection</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="data-protection" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data Protection Settings
              </CardTitle>
              <CardDescription>Configure how customer data is stored, processed, and protected</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">GDPR Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Enable GDPR compliance features for European customers
                    </p>
                  </div>
                  <Switch id="gdpr" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">CCPA Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                      Enable CCPA compliance features for California customers
                    </p>
                  </div>
                  <Switch id="ccpa" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Retention Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically delete customer data after specified period
                    </p>
                  </div>
                  <Switch id="data-retention" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Encryption</h3>
                    <p className="text-sm text-muted-foreground">Enable end-to-end encryption for all customer data</p>
                  </div>
                  <Switch id="encryption" defaultChecked />
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Data Processing Agreement</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your organization's Data Processing Agreement (DPA) outlines how customer data is processed,
                      stored, and protected.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>DPA is active and up to date</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Data Breach Response Plan</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your data breach response plan outlines the steps to take in case of a security incident.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-amber-600">
                      <AlertCircle className="h-4 w-4" />
                      <span>Plan needs review (last updated 11 months ago)</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Consent Management
              </CardTitle>
              <CardDescription>Manage how customer consent is collected, stored, and managed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Consent Tracking</h3>
                  <p className="text-sm text-muted-foreground">Track and record all customer consent actions</p>
                </div>
                <Switch id="consent-tracking" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Double Opt-in</h3>
                  <p className="text-sm text-muted-foreground">
                    Require email confirmation for all marketing subscriptions
                  </p>
                </div>
                <Switch id="double-optin" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Consent Expiration</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically request consent renewal after specified period
                  </p>
                </div>
                <Switch id="consent-expiration" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Privacy Policy Management
              </CardTitle>
              <CardDescription>Manage your privacy policies and customer data access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Privacy Policy Version</h3>
                    <p className="text-sm text-muted-foreground">Current version: v3.2 (Updated 3 months ago)</p>
                  </div>
                  <button className="text-sm font-medium text-primary">Update</button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Cookie Consent Banner</h3>
                    <p className="text-sm text-muted-foreground">Display cookie consent banner to website visitors</p>
                  </div>
                  <Switch id="cookie-banner" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Subject Access Requests</h3>
                    <p className="text-sm text-muted-foreground">Allow customers to request their data</p>
                  </div>
                  <Switch id="dsar" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Right to be Forgotten</h3>
                    <p className="text-sm text-muted-foreground">Allow customers to request data deletion</p>
                  </div>
                  <Switch id="rtbf" defaultChecked />
                </div>
              </div>

              <div className="rounded-md bg-muted p-4">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Privacy Policy Review Required</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your privacy policy should be reviewed to ensure compliance with recent regulatory changes.
                    </p>
                    <button className="mt-2 text-sm font-medium text-primary">Schedule Review</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Legal Documents
              </CardTitle>
              <CardDescription>Manage your terms of service and other legal documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Terms of Service</h3>
                    <p className="text-sm text-muted-foreground">Last updated: January 15, 2023</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-sm font-medium text-primary">View</button>
                    <button className="text-sm font-medium text-primary">Edit</button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Privacy Policy</h3>
                    <p className="text-sm text-muted-foreground">Last updated: February 3, 2023</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-sm font-medium text-primary">View</button>
                    <button className="text-sm font-medium text-primary">Edit</button>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Cookie Policy</h3>
                    <p className="text-sm text-muted-foreground">Last updated: February 3, 2023</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-sm font-medium text-primary">View</button>
                    <button className="text-sm font-medium text-primary">Edit</button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Processing Agreement</h3>
                    <p className="text-sm text-muted-foreground">Last updated: March 20, 2023</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-sm font-medium text-primary">View</button>
                    <button className="text-sm font-medium text-primary">Edit</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Logs</CardTitle>
              <CardDescription>View and export audit logs for compliance reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 p-4 font-medium border-b">
                    <div>Action</div>
                    <div>User</div>
                    <div>Date</div>
                    <div>IP Address</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-4 p-4">
                      <div>Privacy Policy Updated</div>
                      <div>admin@example.com</div>
                      <div>May 2, 2023</div>
                      <div>192.168.1.1</div>
                    </div>
                    <div className="grid grid-cols-4 p-4">
                      <div>GDPR Settings Changed</div>
                      <div>admin@example.com</div>
                      <div>April 28, 2023</div>
                      <div>192.168.1.1</div>
                    </div>
                    <div className="grid grid-cols-4 p-4">
                      <div>Data Export Requested</div>
                      <div>user@example.com</div>
                      <div>April 25, 2023</div>
                      <div>192.168.1.2</div>
                    </div>
                    <div className="grid grid-cols-4 p-4">
                      <div>Terms of Service Updated</div>
                      <div>admin@example.com</div>
                      <div>April 20, 2023</div>
                      <div>192.168.1.1</div>
                    </div>
                    <div className="grid grid-cols-4 p-4">
                      <div>Data Deletion Requested</div>
                      <div>user2@example.com</div>
                      <div>April 15, 2023</div>
                      <div>192.168.1.3</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 text-sm font-medium border rounded-md">Export Logs</button>
                  <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md">
                    View All Logs
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
