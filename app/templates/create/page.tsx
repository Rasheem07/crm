"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Upload, Copy } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TemplateCreatePage() {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [templateType, setTemplateType] = useState("email");

  // Dummy variables for template content
  const customer = {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
  };
  const company = {
    name: "Nubras Fashion",
    phone: "+15551234567",
    address: "123 Fashion Ave, Dubai",
  };
  const main_content = "Check out our new summer collection!";
  const post_title = "Summer Collection Launch";

  const handleSaveTemplate = () => {
    // Simulate saving template
    setSaveSuccess(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Create Template</h2>
        <p className="text-muted-foreground mt-1">
          Design reusable templates for your marketing communications
        </p>
      </div>

      {saveSuccess && (
        <Alert className="mb-6 bg-green-50 border-green-500">
          <Check className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-500">Success</AlertTitle>
          <AlertDescription>
            Your template has been created successfully.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Information</CardTitle>
              <CardDescription>
                Basic information about your template
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="template-name">Template Name*</Label>
                <Input id="template-name" placeholder="Enter template name" />
                <p className="text-xs text-muted-foreground">
                  Choose a descriptive name for your template
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-description">
                  Template Description
                </Label>
                <Textarea
                  id="template-description"
                  placeholder="Describe the purpose and use case of this template"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-type">Template Type*</Label>
                <Select defaultValue="email" onValueChange={setTemplateType}>
                  <SelectTrigger id="template-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Template Types</SelectLabel>
                      <SelectItem value="email">Email Template</SelectItem>
                      <SelectItem value="sms">SMS Template</SelectItem>
                      <SelectItem value="whatsapp">
                        WhatsApp Template
                      </SelectItem>
                      <SelectItem value="social">
                        Social Media Template
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-category">Category</Label>
                <Select>
                  <SelectTrigger id="template-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="transactional">
                        Transactional
                      </SelectItem>
                      <SelectItem value="newsletter">Newsletter</SelectItem>
                      <SelectItem value="announcement">Announcement</SelectItem>
                      <SelectItem value="welcome">Welcome</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                      <SelectItem value="reminder">Reminder</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="template-default" />
                <Label htmlFor="template-default">
                  Set as default template for this type
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Content</CardTitle>
              <CardDescription>Design your template content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {templateType === "email" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email-subject">Email Subject Line*</Label>
                    <Input
                      id="email-subject"
                      placeholder="Enter subject line"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-preheader">Preheader Text</Label>
                    <Input
                      id="email-preheader"
                      placeholder="Enter preheader text (appears after subject in inbox)"
                    />
                    <p className="text-xs text-muted-foreground">
                      Brief summary that follows the subject line when email is
                      viewed in inbox
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email-content">Email Body*</Label>
                    <Textarea
                      id="email-content"
                      placeholder="Enter your email content here..."
                      rows={10}
                      defaultValue={`Dear ${customer.first_name},

Thank you for your interest in Nubras Fashion. We're excited to share our latest collection with you.

${main_content}

Best regards,
The Nubras Fashion Team
${company.address}
${company.phone}

Unsubscribe: {{unsubscribe_link}}`}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Email Media</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="font-medium">Upload Header Image</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended size: 600x200px
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select File
                        </Button>
                      </div>
                      <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="font-medium">Upload Logo</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Recommended size: 200x200px
                        </p>
                        <Button variant="outline" size="sm" className="mt-4">
                          Select File
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {templateType === "sms" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="sms-content">SMS Content*</Label>
                    <Textarea
                      id="sms-content"
                      placeholder="Enter your SMS content here..."
                      rows={5}
                      defaultValue={`Nubras Fashion: Hi ${customer.first_name}, ${main_content} Reply STOP to unsubscribe.`}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Use variables like
                        &#123;&#123;customer.first_name&#125;&#125; for
                        personalization
                      </span>
                      <span>0/160 characters (1 SMS)</span>
                    </div>
                  </div>
                </div>
              )}

              {templateType === "whatsapp" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-content">WhatsApp Message*</Label>
                    <Textarea
                      id="whatsapp-content"
                      placeholder="Enter your WhatsApp message here..."
                      rows={5}
                      defaultValue={`Hello {{1}},

{{2}}

Thank you for choosing Nubras Fashion.
For any questions, please reply to this message.`}
                    />
                    <p className="text-xs text-muted-foreground">
                      Use numbered variables like &#123;&#123;1&#125;&#125; for
                      WhatsApp template parameters
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Message Type</Label>
                    <Select defaultValue="marketing">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="utility">Utility</SelectItem>
                        <SelectItem value="authentication">
                          Authentication
                        </SelectItem>
                        <SelectItem value="service">Service Update</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground">
                      WhatsApp requires templates to be categorized by type
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label>WhatsApp Media (Optional)</Label>
                    <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="font-medium">Upload Media</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Image, Video or Document
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {templateType === "social" && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="social-content">Social Media Post*</Label>
                    <Textarea
                      id="social-content"
                      placeholder="Enter your social media post content here..."
                      rows={4}
                      defaultValue={`✨ ${post_title} ✨

${main_content}

#NubrasFashion #LuxuryFabrics #DubaiFashion {{custom_hashtags}}`}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>
                        Use variables like {post_title} for dynamic content
                      </span>
                      <span>0/280 characters</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Social Media Image Template</Label>
                    <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="font-medium">Upload Template Image</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recommended size: 1080x1080px for Instagram
                      </p>
                      <Button variant="outline" size="sm" className="mt-4">
                        Select File
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="social-platforms">
                      Suitable For Platforms
                    </Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="social-platforms">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <div className="space-y-4 border-t pt-4">
                <Label>Available Variables</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{customer.first_name}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1\" /> {customer.first_name}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{customer.last_name}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1" /> {customer.last_name}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{customer.email}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1" /> {customer.email}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{company.name}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1" /> {company.name}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{company.phone}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1" /> {company.phone}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="justify-start cursor-pointer hover:bg-muted"
                    onClick={() =>
                      navigator.clipboard.writeText("{{main_content}}")
                    }
                  >
                    <Copy className="h-3 w-3 mr-1" /> {main_content}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Settings</CardTitle>
              <CardDescription>
                Additional configuration options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Share with Team</Label>
                  <p className="text-sm text-muted-foreground">
                    Make this template available to all team members
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Track Performance</Label>
                  <p className="text-sm text-muted-foreground">
                    Collect analytics when this template is used
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-language">Template Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="template-language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="ur">Urdu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="template-tags">Template Tags</Label>
                <Input
                  id="template-tags"
                  placeholder="Enter tags separated by commas (e.g., promotional, summer, sale)"
                />
                <p className="text-xs text-muted-foreground">
                  Tags help organize and filter templates
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Template Preview</CardTitle>
              <CardDescription>
                See how your template will appear
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="desktop" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="desktop">Desktop</TabsTrigger>
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="text">Plain Text</TabsTrigger>
                </TabsList>
                <TabsContent value="desktop" className="pt-4">
                  <div className="border rounded-lg p-4 bg-white">
                    <div className="space-y-4">
                      <div className="h-10 bg-gray-100 rounded-md"></div>
                      <div className="h-40 bg-gray-100 rounded-md"></div>
                      <div className="h-20 bg-gray-100 rounded-md"></div>
                      <div className="h-10 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mobile" className="pt-4">
                  <div className="border rounded-lg p-4 bg-white max-w-[320px] mx-auto">
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-100 rounded-md"></div>
                      <div className="h-32 bg-gray-100 rounded-md"></div>
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                      <div className="h-8 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="text" className="pt-4">
                  <div className="border rounded-lg p-4 bg-white font-mono text-sm">
                    <p>Dear [Customer Name],</p>
                    <p className="mt-4">
                      Thank you for your interest in Nubras Fashion. We're
                      excited to share our latest collection with you.
                    </p>
                    <p className="mt-4">[Main Content]</p>
                    <p className="mt-4">
                      Best regards,
                      <br />
                      The Nubras Fashion Team
                      <br />
                      [Company Address]
                      <br />
                      [Company Phone]
                    </p>
                    <p className="mt-4">Unsubscribe: [Unsubscribe Link]</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Template Summary</CardTitle>
              <CardDescription>Review your template details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Type:</span>
                  <Badge variant="outline" className="capitalize">
                    {templateType}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Category:</span>
                  <span className="text-sm">Not selected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Language:</span>
                  <span className="text-sm">English</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Variables:</span>
                  <span className="text-sm">6 available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Media:</span>
                  <span className="text-sm">None</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSaveTemplate}>Create Template</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
