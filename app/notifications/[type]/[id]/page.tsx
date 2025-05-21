"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { format } from "date-fns"
import { ArrowLeft, Bell, Calendar, CheckCircle, Clock, MessageSquare, Reply, Star, Trash2, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

// Sample notification data - in a real app, this would come from an API
const allNotifications = [
  {
    id: "1",
    type: "message",
    title: "New message from Ahmed",
    description: "I wanted to follow up on our meeting yesterday...",
    fullContent:
      "I wanted to follow up on our meeting yesterday regarding the marketing strategy for Q3. I've prepared some additional materials that I think would be helpful for our discussion. Could we schedule another meeting later this week to go over these? I'm available Thursday afternoon or Friday morning. Let me know what works best for you.",
    time: "2023-05-03T10:23:00",
    read: false,
    priority: "high",
    avatar: "/letter-a-abstract.png",
    sender: {
      name: "Ahmed Al-Farsi",
      email: "ahmed@example.com",
      position: "Marketing Director",
    },
    relatedItems: [
      { type: "campaign", id: "camp123", name: "Q3 Marketing Campaign" },
      { type: "meeting", id: "meet456", name: "Strategy Planning - May 2nd" },
    ],
  },
  {
    id: "2",
    type: "message",
    title: "New message from Sarah",
    description: "Can we discuss the campaign metrics?",
    fullContent:
      "Hi there, I've been reviewing the metrics from our latest campaign and noticed some interesting trends in customer engagement. The click-through rates are higher than expected, but the conversion rate is slightly below our target. I think we should discuss some adjustments to optimize our approach. Are you available for a quick call tomorrow?",
    time: "2023-05-03T09:15:00",
    read: true,
    priority: "medium",
    avatar: "/abstract-letter-s.png",
    sender: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      position: "Data Analyst",
    },
    relatedItems: [
      { type: "campaign", id: "camp789", name: "Spring Promotion" },
      { type: "report", id: "rep123", name: "Campaign Analytics - April" },
    ],
  },
  {
    id: "3",
    type: "system",
    title: "System maintenance scheduled",
    description: "The system will be down for maintenance on May 10th from 2-4 AM.",
    fullContent:
      "Dear user, we will be performing scheduled system maintenance on May 10th from 2:00 AM to 4:00 AM (UTC). During this time, the CRM system will be unavailable. We apologize for any inconvenience this may cause and appreciate your understanding. This maintenance is necessary to implement important security updates and performance improvements. Please plan your work accordingly.",
    time: "2023-05-02T16:45:00",
    read: false,
    priority: "low",
    relatedItems: [{ type: "documentation", id: "doc123", name: "System Maintenance FAQ" }],
  },
  {
    id: "4",
    type: "campaign",
    title: "Campaign 'Summer Sale' is live",
    description: "Your campaign has been approved and is now running.",
    fullContent:
      "Good news! Your 'Summer Sale' campaign has been approved and is now live. The campaign is scheduled to run from May 5th to May 20th. You can monitor the performance in real-time through the campaign dashboard. Initial metrics show strong engagement with a 3.2% click-through rate. We'll send you daily performance updates.",
    time: "2023-05-02T14:30:00",
    read: true,
    priority: "medium",
    relatedItems: [
      { type: "campaign", id: "camp456", name: "Summer Sale Campaign" },
      { type: "analytics", id: "ana789", name: "Campaign Performance Dashboard" },
    ],
  },
  {
    id: "5",
    type: "task",
    title: "Task assigned: Review customer feedback",
    description: "Mohammed has assigned you to review recent customer feedback.",
    fullContent:
      "Mohammed has assigned you a new task: Review and categorize customer feedback from the past month. This task is due by May 15th. The feedback includes survey responses, direct messages, and social media comments. Please identify common themes and prepare a summary report highlighting key insights and recommendations for service improvements.",
    time: "2023-05-02T11:20:00",
    read: false,
    priority: "high",
    assignedBy: {
      name: "Mohammed Al-Qasimi",
      email: "mohammed@example.com",
      position: "Customer Experience Manager",
    },
    relatedItems: [
      { type: "task", id: "task123", name: "Customer Feedback Review" },
      { type: "document", id: "doc456", name: "Customer Survey Results - April" },
    ],
  },
]

export default function NotificationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { type, id } = params

  // Find the notification by type and id
  const notification = allNotifications.find((n) => n.id === id && n.type === type)

  if (!notification) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Notification not found</h1>
        <p className="mb-6">The notification you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/crm/notifications">Back to notifications</Link>
        </Button>
      </div>
    )
  }

  // Get icon based on notification type
  const getIcon = () => {
    switch (notification.type) {
      case "message":
        return <MessageSquare className="h-6 w-6" />
      case "system":
        return <Bell className="h-6 w-6" />
      case "campaign":
        return <Calendar className="h-6 w-6" />
      case "task":
        return <CheckCircle className="h-6 w-6" />
      default:
        return <Bell className="h-6 w-6" />
    }
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to notifications
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  notification.type === "message"
                    ? "bg-muted"
                    : notification.type === "system"
                      ? "bg-blue-100"
                      : notification.type === "campaign"
                        ? "bg-green-100"
                        : "bg-amber-100"
                }`}
              >
                {notification.type === "message" && notification.avatar ? (
                  <img
                    src={notification.avatar || "/placeholder.svg"}
                    alt="Avatar"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <div
                    className={`${
                      notification.type === "system"
                        ? "text-blue-600"
                        : notification.type === "campaign"
                          ? "text-green-600"
                          : "text-amber-600"
                    }`}
                  >
                    {getIcon()}
                  </div>
                )}
              </div>
              <div>
                <CardTitle className="text-xl">{notification.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Clock className="h-3 w-3" />
                  <span>{format(new Date(notification.time), "MMMM d, yyyy 'at' h:mm a")}</span>
                  {notification.priority === "high" && (
                    <Badge variant="destructive" className="ml-2">
                      High Priority
                    </Badge>
                  )}
                  {notification.priority === "medium" && (
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100 ml-2">
                      Medium Priority
                    </Badge>
                  )}
                </CardDescription>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Message content */}
          <div className="prose max-w-none">
            <p>{notification.fullContent}</p>
          </div>

          {/* Sender info for messages */}
          {notification.type === "message" && notification.sender && (
            <>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">From</h3>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    {notification.avatar ? (
                      <img
                        src={notification.avatar || "/placeholder.svg"}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Users className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{notification.sender.name}</p>
                    <p className="text-sm text-muted-foreground">{notification.sender.position}</p>
                    <p className="text-sm text-muted-foreground">{notification.sender.email}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Assigned by info for tasks */}
          {notification.type === "task" && notification.assignedBy && (
            <>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">Assigned by</h3>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{notification.assignedBy.name}</p>
                    <p className="text-sm text-muted-foreground">{notification.assignedBy.position}</p>
                    <p className="text-sm text-muted-foreground">{notification.assignedBy.email}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Related items */}
          {notification.relatedItems && notification.relatedItems.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">Related Items</h3>
                <div className="grid gap-2">
                  {notification.relatedItems.map((item, index) => (
                    <Link
                      key={index}
                      href={`/crm/${item.type}s/${item.id}`}
                      className="flex items-center p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                          item.type === "campaign"
                            ? "bg-green-100"
                            : item.type === "report" || item.type === "analytics"
                              ? "bg-blue-100"
                              : item.type === "task"
                                ? "bg-amber-100"
                                : "bg-muted"
                        }`}
                      >
                        {item.type === "campaign" && <Calendar className="h-4 w-4 text-green-600" />}
                        {(item.type === "report" || item.type === "analytics") && (
                          <Bell className="h-4 w-4 text-blue-600" />
                        )}
                        {item.type === "task" && <CheckCircle className="h-4 w-4 text-amber-600" />}
                        {(item.type === "document" || item.type === "documentation") && (
                          <MessageSquare className="h-4 w-4" />
                        )}
                        {item.type === "meeting" && <Users className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Reply section for messages */}
          {notification.type === "message" && (
            <>
              <Separator />
              <div>
                <h3 className="font-medium mb-2">Reply</h3>
                <Textarea placeholder="Type your reply here..." className="min-h-[100px]" />
                <div className="flex justify-end mt-4">
                  <Button className="flex items-center gap-2">
                    <Reply className="h-4 w-4" />
                    Send Reply
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Button variant="outline">Mark as {notification.read ? "unread" : "read"}</Button>
          <Button variant="default">
            {notification.type === "task"
              ? "Complete Task"
              : notification.type === "campaign"
                ? "View Campaign"
                : notification.type === "system"
                  ? "Acknowledge"
                  : "Reply"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
