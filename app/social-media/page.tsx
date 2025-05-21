"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LineChartComponent } from "../components/charts/line-chart"
import { BarChartComponent } from "../components/charts/bar-chart"
import { PieChartComponent } from "../components/charts/pie-chart"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Plus, Calendar, MessageSquare, Heart, Share2, Eye, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function SocialMediaPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openCreatePost, setOpenCreatePost] = useState(false)

  // Social media performance data
  const performanceData = [
    { name: "Jan", followers: 1200, engagement: 3.2, reach: 5000 },
    { name: "Feb", followers: 1350, engagement: 3.5, reach: 5500 },
    { name: "Mar", followers: 1500, engagement: 3.8, reach: 6000 },
    { name: "Apr", followers: 1650, engagement: 4.0, reach: 6500 },
    { name: "May", followers: 1800, engagement: 4.2, reach: 7000 },
    { name: "Jun", followers: 2000, engagement: 4.5, reach: 7500 },
  ]

  // Platform distribution data
  const platformData = [
    { name: "Instagram", value: 45, color: "#E1306C" },
    { name: "Facebook", value: 25, color: "#4267B2" },
    { name: "Twitter", value: 15, color: "#1DA1F2" },
    { name: "LinkedIn", value: 15, color: "#0077B5" },
  ]

  // Content performance data
  const contentData = [
    { name: "Photos", engagement: 4.5 },
    { name: "Videos", engagement: 6.2 },
    { name: "Carousels", engagement: 5.8 },
    { name: "Stories", engagement: 3.5 },
    { name: "Reels", engagement: 7.2 },
  ]

  // Scheduled posts
  const scheduledPosts = [
    {
      id: "post-001",
      title: "Ramadan Collection Sneak Peek",
      platform: "Instagram",
      scheduledDate: "Apr 10, 2024",
      scheduledTime: "10:00 AM",
      status: "Scheduled",
      image: true,
    },
    {
      id: "post-002",
      title: "Eid Special Offers Announcement",
      platform: "Facebook",
      scheduledDate: "Apr 12, 2024",
      scheduledTime: "2:00 PM",
      status: "Scheduled",
      image: true,
    },
    {
      id: "post-003",
      title: "Summer Collection Teaser",
      platform: "Instagram",
      scheduledDate: "Apr 15, 2024",
      scheduledTime: "11:30 AM",
      status: "Scheduled",
      image: false,
    },
  ]

  // Recent posts
  const recentPosts = [
    {
      id: "post-004",
      title: "New Fabric Collection Arrival",
      platform: "Instagram",
      date: "Apr 5, 2024",
      engagement: {
        likes: 245,
        comments: 32,
        shares: 18,
      },
      image: true,
    },
    {
      id: "post-005",
      title: "Behind the Scenes: Design Process",
      platform: "Facebook",
      date: "Apr 3, 2024",
      engagement: {
        likes: 178,
        comments: 24,
        shares: 12,
      },
      image: true,
    },
    {
      id: "post-006",
      title: "Customer Spotlight: Fatima's Wedding Collection",
      platform: "Instagram",
      date: "Apr 1, 2024",
      engagement: {
        likes: 320,
        comments: 45,
        shares: 28,
      },
      image: true,
    },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold">Social Media</h2>
          <p className="text-muted-foreground mt-1">Manage your social media presence and content</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              className="pl-8 w-full md:w-[300px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button asChild>
            <Link href="/social-media/create">
              <Plus className="mr-2 h-4 w-4" /> Create Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Total Followers</p>
                <h3 className="text-3xl font-bold">2,000</h3>
                <p className="text-sm text-green-600 mt-1">+200 this month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Engagement Rate</p>
                <h3 className="text-3xl font-bold">4.5%</h3>
                <p className="text-sm text-green-600 mt-1">+0.3% from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Reach</p>
                <h3 className="text-3xl font-bold">7,500</h3>
                <p className="text-sm text-green-600 mt-1">+500 from last month</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium mb-1">Scheduled Posts</p>
                <h3 className="text-3xl font-bold">{scheduledPosts.length}</h3>
                <p className="text-sm text-green-600 mt-1">Next: Apr 10, 2024</p>
              </div>
              <div className="bg-primary/10 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled Posts</TabsTrigger>
          <TabsTrigger value="recent">Recent Posts</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Performance</CardTitle>
                <CardDescription>Followers, engagement, and reach over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={performanceData}
                  config={{
                    followers: {
                      label: "Followers",
                      color: "hsl(var(--chart-1))",
                    },
                    engagement: {
                      label: "Engagement Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                    reach: {
                      label: "Reach",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Followers by social media platform</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={platformData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Engagement rate by content type</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={contentData}
                  config={{
                    engagement: {
                      label: "Engagement Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Posts</CardTitle>
                <CardDescription>Next scheduled social media posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-2 border rounded-md">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted h-10 w-10 rounded-md flex items-center justify-center">
                          {post.platform === "Instagram" ? (
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
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" />
                              <circle cx="12" cy="12" r="4" />
                              <circle cx="18" cy="6" r="1" />
                            </svg>
                          ) : (
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
                            >
                              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{post.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {post.scheduledDate} at {post.scheduledTime}
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">{post.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scheduledPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-muted h-8 w-8 rounded-md flex items-center justify-center">
                        {post.platform === "Instagram" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="18" cy="6" r="1" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-semibold">{post.title}</h3>
                    </div>
                    <Badge variant="outline">{post.status}</Badge>
                  </div>
                  {post.image && (
                    <div className="bg-muted h-40 rounded-md mb-4 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {post.scheduledDate} at {post.scheduledTime}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Badge variant="secondary">{post.platform}</Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-muted h-8 w-8 rounded-md flex items-center justify-center">
                        {post.platform === "Instagram" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="18" cy="6" r="1" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-semibold">{post.title}</h3>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  {post.image && (
                    <div className="bg-muted h-40 rounded-md mb-4 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{post.engagement.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{post.engagement.comments}</span>
                      </div>
                      <div className="flex items-center">
                        <Share2 className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm">{post.engagement.shares}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Performance</CardTitle>
                <CardDescription>Followers, engagement, and reach over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChartComponent
                  data={performanceData}
                  config={{
                    followers: {
                      label: "Followers",
                      color: "hsl(var(--chart-1))",
                    },
                    engagement: {
                      label: "Engagement Rate %",
                      color: "hsl(var(--chart-2))",
                    },
                    reach: {
                      label: "Reach",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Distribution</CardTitle>
                <CardDescription>Followers by social media platform</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChartComponent data={platformData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Engagement rate by content type</CardDescription>
              </CardHeader>
              <CardContent>
                <BarChartComponent
                  data={contentData}
                  config={{
                    engagement: {
                      label: "Engagement Rate %",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Performing Posts</CardTitle>
                <CardDescription>Posts with highest engagement rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPosts
                    .sort((a, b) => b.engagement.likes - a.engagement.likes)
                    .map((post) => (
                      <div key={post.id} className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-3">
                          <div className="bg-muted h-10 w-10 rounded-md flex items-center justify-center">
                            {post.platform === "Instagram" ? (
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
                              >
                                <rect width="20" height="20" x="2" y="2" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="18" cy="6" r="1" />
                              </svg>
                            ) : (
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
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{post.title}</p>
                            <p className="text-xs text-muted-foreground">{post.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1 text-red-500" />
                          <span className="text-sm">{post.engagement.likes}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
