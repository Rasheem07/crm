"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Send, Plus, Search, Filter, ImageIcon, Paperclip, Smile } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Label } from "@/components/ui/label"
import { LineChartComponent } from "../components/charts/line-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function WhatsAppBusinessPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [messageText, setMessageText] = useState("")
  const [openNewTemplate, setOpenNewTemplate] = useState(false)
  const [openNewBroadcast, setOpenNewBroadcast] = useState(false)
  const [selectedConversation, setSelectedConversation] = useState("cust-001")

  // WhatsApp analytics data
  const messageData = [
    { name: "Jan", sent: 1250, delivered: 1230, read: 980 },
    { name: "Feb", sent: 1450, delivered: 1420, read: 1150 },
    { name: "Mar", sent: 1650, delivered: 1620, read: 1320 },
    { name: "Apr", sent: 1850, delivered: 1820, read: 1480 },
    { name: "May", sent: 2050, delivered: 2020, read: 1680 },
    { name: "Jun", sent: 2250, delivered: 2220, read: 1850 },
  ]

  // Response time data
  const responseTimeData = [
    { name: "Jan", time: 15 },
    { name: "Feb", time: 12 },
    { name: "Mar", time: 10 },
    { name: "Apr", time: 8 },
    { name: "May", time: 7 },
    { name: "Jun", time: 5 },
  ]

  // Message type distribution
  const messageTypeData = [
    { name: "Text", value: 65, color: "#0088FE" },
    { name: "Image", value: 20, color: "#00C49F" },
    { name: "Document", value: 10, color: "#FFBB28" },
    { name: "Voice", value: 5, color: "#FF8042" },
  ]

  // Campaign performance data
  const campaignData = [
    { name: "Ramadan", openRate: 85, responseRate: 42 },
    { name: "Eid", openRate: 92, responseRate: 58 },
    { name: "Summer", openRate: 78, responseRate: 35 },
    { name: "DSF", openRate: 82, responseRate: 45 },
    { name: "National Day", openRate: 90, responseRate: 60 },
  ]

  // Message templates
  const templates = [
    {
      id: "temp-001",
      name: "Welcome Message",
      content:
        "Hello {{1}}! Welcome to Nubras. We're excited to help you find the perfect designs for your style. How can we assist you today?",
      status: "active",
      type: "greeting",
    },
    {
      id: "temp-002",
      name: "Order Confirmation",
      content:
        "Thank you for your order, {{1}}! Your order #{{2}} has been confirmed and is being processed. Expected completion: {{3}}.",
      status: "active",
      type: "order",
    },
    {
      id: "temp-003",
      name: "Appointment Reminder",
      content:
        "Hello {{1}}, this is a reminder about your appointment tomorrow at {{2}}. Please reply to confirm or reschedule.",
      status: "active",
      type: "appointment",
    },
    {
      id: "temp-004",
      name: "Follow-up Message",
      content:
        "Hello {{1}}, we hope you're enjoying your recent purchase from Nubras. We'd love to hear your feedback! How was your experience?",
      status: "active",
      type: "follow-up",
    },
  ]

  // Conversations
  const conversations = [
    {
      id: "cust-001",
      name: "Fatima Mohammed",
      lastMessage: "Thank you for the information about the new collection...",
      time: "10:23 AM",
      status: "active",
      unread: 0,
    },
    {
      id: "cust-002",
      name: "Ahmed Al Mansouri",
      lastMessage: "When will my order be ready for pickup?",
      time: "Yesterday",
      status: "active",
      unread: 1,
    },
    {
      id: "cust-003",
      name: "Layla Khan",
      lastMessage: "I'm interested in the Eid collection. Do you have...",
      time: "Yesterday",
      status: "active",
      unread: 0,
    },
    {
      id: "cust-004",
      name: "Hassan Al Farsi",
      lastMessage: "Thank you for your assistance with my order.",
      time: "2 days ago",
      status: "active",
      unread: 0,
    },
    {
      id: "cust-005",
      name: "Noura Al Qasimi",
      lastMessage: "I'll visit the store tomorrow to check the new arrivals.",
      time: "3 days ago",
      status: "active",
      unread: 0,
    },
  ]

  // Filter conversations based on search term
  const filteredConversations = conversations.filter((conversation) => {
    if (searchTerm) {
      return conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
    return true
  })

  // Messages for the selected conversation
  const messages = [
    {
      id: "msg-001",
      sender: "customer",
      content: "Hello! I'm interested in your new Ramadan collection. Can you tell me more about it?",
      time: "10:15 AM",
      status: "read",
    },
    {
      id: "msg-002",
      sender: "business",
      content:
        "Hi Fatima! Our Ramadan collection features luxury abayas with Dubai-inspired embroidery. Would you like to see some images?",
      time: "10:18 AM",
      status: "delivered",
    },
    {
      id: "msg-003",
      sender: "customer",
      content: "Yes, please! I'm particularly interested in pastel colors.",
      time: "10:20 AM",
      status: "read",
    },
    {
      id: "msg-004",
      sender: "business",
      content:
        "Perfect! Here are some of our pastel designs from the new collection. They're all made with premium silk fabrics.",
      time: "10:22 AM",
      status: "delivered",
      attachment: {
        type: "image",
        name: "Ramadan_Collection_Pastels.jpg",
      },
    },
    {
      id: "msg-005",
      sender: "customer",
      content: "Thank you for the information about the new collection. These look beautiful! What's the price range?",
      time: "10:23 AM",
      status: "read",
    },
  ]

  // Broadcasts
  const broadcasts = [
    {
      id: "broad-001",
      name: "Ramadan Collection Announcement",
      status: "sent",
      sentDate: "Mar 10, 2024",
      audience: "All Customers",
      audienceCount: 2350,
      openRate: 85,
      responseRate: 42,
    },
    {
      id: "broad-002",
      name: "Eid Special Offers",
      status: "scheduled",
      sentDate: "Apr 5, 2024",
      audience: "All Customers",
      audienceCount: 2350,
      openRate: 0,
      responseRate: 0,
    },
    {
      id: "broad-003",
      name: "VIP Private Viewing Invitation",
      status: "sent",
      sentDate: "Mar 25, 2024",
      audience: "VIP Clients",
      audienceCount: 120,
      openRate: 92,
      responseRate: 58,
    },
  ]

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, this would send the message
      console.log("Sending message:", messageText)
      setMessageText("")
    }
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">WhatsApp Business</h2>
          <p className="text-muted-foreground mt-1">Manage WhatsApp communications with customers</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Dialog open={openNewBroadcast} onOpenChange={setOpenNewBroadcast}>
            <DialogTrigger asChild>
              <Button>New Broadcast</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Broadcast</DialogTitle>
                <DialogDescription>Send a message to multiple customers at once.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="broadcast-name">Broadcast Name</Label>
                  <Input id="broadcast-name" placeholder="Enter a name for this broadcast" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select>
                    <SelectTrigger id="audience">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Audiences</SelectLabel>
                        <SelectItem value="all">All Customers</SelectItem>
                        <SelectItem value="vip">VIP Clients</SelectItem>
                        <SelectItem value="luxury">Luxury Fabric Buyers</SelectItem>
                        <SelectItem value="dubai">Dubai Marina Residents</SelectItem>
                        <SelectItem value="inactive">Inactive Customers</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="template">Message Template</Label>
                  <Select>
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Templates</SelectLabel>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" rows={4} />
                </div>
                <div className="space-y-2">
                  <Label>Schedule</Label>
                  <Select defaultValue="now">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="now">Send Now</SelectItem>
                      <SelectItem value="later">Schedule for Later</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenNewBroadcast(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setOpenNewBroadcast(false)}>Send Broadcast</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="conversations" className="space-y-4">
        <TabsList>
          <TabsTrigger value="conversations">Conversations</TabsTrigger>
          <TabsTrigger value="templates">Message Templates</TabsTrigger>
          <TabsTrigger value="broadcasts">Broadcasts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2 max-h-[600px] overflow-y-auto">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                    <Card
                      key={conversation.id}
                      className={`cursor-pointer ${selectedConversation === conversation.id ? "bg-muted/50" : ""}`}
                      onClick={() => setSelectedConversation(conversation.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/diverse-group.png" alt={conversation.name} />
                            <AvatarFallback>
                              {conversation.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="font-medium">{conversation.name}</h4>
                              <span className="text-xs text-muted-foreground">{conversation.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                          </div>
                          {conversation.unread > 0 && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                              {conversation.unread}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">No conversations found</div>
                )}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <Card className="h-[600px] flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/diverse-group.png" alt="Fatima Mohammed" />
                        <AvatarFallback>FM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Fatima Mohammed</h4>
                        <p className="text-xs text-muted-foreground">Last active: 5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-4 overflow-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "customer" ? "justify-start" : "justify-end"}`}
                      >
                        <div
                          className={`rounded-lg p-3 max-w-[80%] ${
                            message.sender === "customer" ? "bg-muted" : "bg-primary text-primary-foreground"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          {message.attachment && (
                            <div
                              className={`mt-2 ${
                                message.sender === "customer" ? "bg-background/50" : "bg-primary-foreground/20"
                              } rounded p-2 flex items-center justify-center`}
                            >
                              <p className="text-xs">[Image: {message.attachment.name}]</p>
                            </div>
                          )}
                          <p
                            className={`text-xs mt-1 ${
                              message.sender === "customer" ? "text-muted-foreground" : "text-primary-foreground/70"
                            }`}
                          >
                            {message.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      className="flex-1"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <Button variant="ghost" size="icon">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button size="icon" onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Message Templates</h3>
            <Dialog open={openNewTemplate} onOpenChange={setOpenNewTemplate}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> New Template
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create Message Template</DialogTitle>
                  <DialogDescription>Create a reusable message template with variables.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-name">Template Name</Label>
                    <Input id="template-name" placeholder="Enter template name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-type">Template Type</Label>
                    <Select>
                      <SelectTrigger id="template-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Types</SelectLabel>
                          <SelectItem value="greeting">Greeting</SelectItem>
                          <SelectItem value="order">Order</SelectItem>
                          <SelectItem value="appointment">Appointment</SelectItem>
                          <SelectItem value="follow-up">Follow-up</SelectItem>
                          <SelectItem value="promotion">Promotion</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="template-content">Template Content</Label>
                    <Textarea
                      id="template-content"
                      placeholder="Enter template content. Use {{1}}, {{2}}, etc. for variables."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Variables</Label>
                    <div className="text-sm text-muted-foreground">
                      <p>Use the following format for variables:</p>
                      <ul className="list-disc list-inside mt-2">
                        <li>&#123;&#123;1&#125;&#125;: Customer name</li>
                        <li>&#123;&#123;2&#125;&#125;: Order number</li>
                        <li>&#123;&#123;3&#125;&#125;: Date/Time</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpenNewTemplate(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setOpenNewTemplate(false)}>Create Template</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{template.name}</h3>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="p-3 bg-muted rounded-lg mb-4">
                    <p className="text-sm">{template.content}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{template.type}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Use
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="broadcasts" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Broadcast Messages</h3>
            <Button onClick={() => setOpenNewBroadcast(true)}>
              <Plus className="mr-2 h-4 w-4" /> New Broadcast
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {broadcasts.map((broadcast) => (
              <Card key={broadcast.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold">{broadcast.name}</h3>
                    <Badge className={broadcast.status === "sent" ? "bg-green-500" : "bg-blue-500"}>
                      {broadcast.status === "sent" ? "Sent" : "Scheduled"}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {broadcast.audience} ({broadcast.audienceCount})
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-muted-foreground">Date: </span>
                      <span className="ml-2">{broadcast.sentDate}</span>
                    </div>
                    {broadcast.status === "sent" && (
                      <>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Open Rate</span>
                            <span>{broadcast.openRate}%</span>
                          </div>
                          <Progress value={broadcast.openRate} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Response Rate</span>
                            <span>{broadcast.responseRate}%</span>
                          </div>
                          <Progress value={broadcast.responseRate} />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      {broadcast.status === "sent" ? "View Results" : "Edit"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Total Messages</p>
                    <h3 className="text-3xl font-bold">12,450</h3>
                    <p className="text-sm text-green-600 mt-1">+15% from last month</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Open Rate</p>
                    <h3 className="text-3xl font-bold">85%</h3>
                    <p className="text-sm text-green-600 mt-1">+3% from last month</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Response Rate</p>
                    <h3 className="text-3xl font-bold">42%</h3>
                    <p className="text-sm text-green-600 mt-1">+5% from last month</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium mb-1">Avg. Response Time</p>
                    <h3 className="text-3xl font-bold">5 min</h3>
                    <p className="text-sm text-green-600 mt-1">-2 min from last month</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Message Delivery</CardTitle>
                <CardDescription>Sent, delivered, and read messages over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={messageData}
                  config={{
                    sent: {
                      label: "Sent",
                      color: "hsl(var(--chart-1))",
                    },
                    delivered: {
                      label: "Delivered",
                      color: "hsl(var(--chart-2))",
                    },
                    read: {
                      label: "Read",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Average response time in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={responseTimeData}
                  config={{
                    time: {
                      label: "Minutes",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Message Types</CardTitle>
                <CardDescription>Distribution of message types</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={messageTypeData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Open and response rates by campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={campaignData}
                  config={{
                    openRate: {
                      label: "Open Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                    responseRate: {
                      label: "Response Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
