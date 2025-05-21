import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, MessageSquare, Star, ThumbsUp, Users, XCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Notifications",
  description: "View and manage all your notifications",
}

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">View and manage all your notifications</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
          <Button size="sm">Settings</Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 h-auto p-1 gap-1">
          <TabsTrigger value="all" className="py-2">
            All
            <Badge className="ml-2" variant="secondary">
              24
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="reviews" className="py-2">
            Reviews
            <Badge className="ml-2" variant="secondary">
              5
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="feedback" className="py-2">
            Feedback
            <Badge className="ml-2" variant="secondary">
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="customer-service" className="py-2">
            Customer Service
            <Badge className="ml-2" variant="secondary">
              8
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="complaints" className="py-2">
            Complaints
            <Badge className="ml-2" variant="secondary">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="social-media" className="py-2">
            Social Media
            <Badge className="ml-2" variant="secondary">
              6
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Notifications</CardTitle>
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
              <CardDescription>All notifications from the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Today's notifications */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Today</h3>
                  <div className="space-y-4">
                    <Link href="/crm/notifications/review/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Star className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">New 5-star review</h4>
                            <span className="text-xs text-muted-foreground">2 hours ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            John Smith left a 5-star review: "Great service and amazing product quality!"
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              View
                            </Button>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/crm/notifications/inquiry/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">New customer inquiry</h4>
                            <span className="text-xs text-muted-foreground">3 hours ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Sarah Johnson has a question about your product pricing.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              Respond
                            </Button>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                              Assign
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/crm/notifications/social/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ThumbsUp className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Social media mention</h4>
                            <span className="text-xs text-muted-foreground">5 hours ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your brand was mentioned in a positive post on Twitter by @techinfluencer.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              View Post
                            </Button>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                              Engage
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Yesterday's notifications */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Yesterday</h3>
                  <div className="space-y-4">
                    <Link href="/crm/notifications/complaint/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-muted p-2 rounded-full">
                          <XCircle className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Customer complaint</h4>
                            <span className="text-xs text-muted-foreground">Yesterday</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Michael Brown reported an issue with his recent order #12345.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              View Details
                            </Button>
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-muted-foreground">
                              Resolve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/crm/notifications/subscribers/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-muted p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">New subscribers</h4>
                            <span className="text-xs text-muted-foreground">Yesterday</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            10 new users subscribed to your newsletter.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              View Subscribers
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Earlier notifications */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Earlier This Week</h3>
                  <div className="space-y-4">
                    <Link href="/crm/notifications/campaign/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-muted p-2 rounded-full">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Campaign completed</h4>
                            <span className="text-xs text-muted-foreground">3 days ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            Your "Summer Sale" campaign has ended with 145% ROI.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              View Report
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <Link href="/crm/notifications/maintenance/1" className="block">
                      <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="bg-muted p-2 rounded-full">
                          <Clock className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Scheduled maintenance</h4>
                            <span className="text-xs text-muted-foreground">5 days ago</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            System maintenance is scheduled for May 10th at 2:00 AM UTC.
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other tabs content remains the same */}
        <TabsContent value="reviews" className="space-y-6">
          {/* Reviews content */}
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          {/* Feedback content */}
        </TabsContent>

        <TabsContent value="customer-service" className="space-y-6">
          {/* Customer service content */}
        </TabsContent>

        <TabsContent value="complaints" className="space-y-6">
          {/* Complaints content */}
        </TabsContent>

        <TabsContent value="social-media" className="space-y-6">
          {/* Social media content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
