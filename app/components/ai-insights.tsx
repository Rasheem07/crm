"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp, Users, AlertTriangle } from "lucide-react"

export function AIInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">AI-Powered Insights</h2>
          <p className="text-muted-foreground">Intelligent recommendations based on your customer data</p>
        </div>
        <Button>
          <Zap className="mr-2 h-4 w-4" /> Generate New Insights
        </Button>
      </div>

      <Tabs defaultValue="recommendations">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="anomalies">Anomalies</TabsTrigger>
          <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Customer Engagement</CardTitle>
                  <Badge className="bg-blue-500">High Impact</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Increase WhatsApp Engagement</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your WhatsApp messages have 85% open rate. Consider shifting more campaigns to this channel for
                        better engagement.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">VIP Client Strategy</CardTitle>
                  <Badge className="bg-green-500">Medium Impact</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Personalized Outreach</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        VIP clients who receive personalized messages spend 35% more. Create targeted campaigns for your
                        187 VIP clients.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Campaign Timing</CardTitle>
                  <Badge className="bg-blue-500">High Impact</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Optimal Send Times</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Customer engagement peaks between 7-9 PM. Schedule your upcoming Eid campaign during this window
                        for 28% higher open rates.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-medium">Content Strategy</CardTitle>
                  <Badge className="bg-green-500">Medium Impact</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Visual Content</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Messages with images have 2.3x higher engagement. Include more visual content in your campaigns
                        to increase conversion rates by up to 40%.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                        <Button variant="ghost" size="sm">
                          Dismiss
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Customer Churn Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-5xl font-bold text-amber-500">4.2%</div>
                  <p className="text-sm text-muted-foreground mt-2">Predicted churn rate next month</p>
                  <p className="text-xs text-green-600 mt-1">-0.8% from current month</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    View At-Risk Customers
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Revenue Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-5xl font-bold text-green-500">AED 285K</div>
                  <p className="text-sm text-muted-foreground mt-2">Projected revenue next month</p>
                  <p className="text-xs text-green-600 mt-1">+12% from current month</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    View Forecast Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Customer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="text-5xl font-bold text-blue-500">+125</div>
                  <p className="text-sm text-muted-foreground mt-2">New customers next month</p>
                  <p className="text-xs text-green-600 mt-1">+15% from current month</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    View Acquisition Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>AI-Powered Customer Predictions</CardTitle>
              <CardDescription>Personalized predictions for high-value customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Fatima Mohammed (VIP Client)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        85% likely to purchase from the new Ramadan collection based on browsing history
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Send Personalized Offer
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Ahmed Al Mansouri (Dubai Marina)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        72% likely to respond to WhatsApp promotions for luxury fabrics
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Create Campaign
                    </Button>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Layla Khan (At Risk)</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        65% chance of churn without intervention in the next 30 days
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Create Retention Plan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anomalies" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Detected Anomalies</CardTitle>
                <CardDescription>AI-detected patterns requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg bg-red-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Unusual Drop in Email Engagement</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Email open rates dropped by 32% in the past week, significantly outside normal patterns.
                          Potential deliverability issues detected.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Investigate
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-amber-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">VIP Client Engagement Decline</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          5 VIP clients haven't engaged with any communications in the last 45 days, unusual based on
                          their historical patterns.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            View Clients
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <AlertTriangle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Unusual Website Traffic Pattern</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Detected 215% increase in traffic to the summer collection pages outside of normal seasonal
                          patterns. Potential opportunity.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button variant="outline" size="sm">
                            Analyze
                          </Button>
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="opportunities" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cross-Selling Opportunities</CardTitle>
                <CardDescription>AI-identified product recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Luxury Fabric Segment</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customers who purchased luxury fabrics are 78% more likely to be interested in custom tailoring
                      services.
                    </p>
                    <div className="mt-2">
                      <Badge className="bg-green-500">High Confidence</Badge>
                      <Badge variant="outline" className="ml-2">
                        352 Customers
                      </Badge>
                    </div>
                    <Button size="sm" className="mt-3">
                      Create Campaign
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Eid Shoppers</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Customers who made Eid-related purchases last year are likely to be interested in the new Ramadan
                      collection.
                    </p>
                    <div className="mt-2">
                      <Badge className="bg-green-500">High Confidence</Badge>
                      <Badge variant="outline" className="ml-2">
                        215 Customers
                      </Badge>
                    </div>
                    <Button size="sm" className="mt-3">
                      Create Campaign
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Segment Opportunities</CardTitle>
                <CardDescription>AI-discovered customer segments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Weekend Shoppers</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Identified 320 customers who primarily engage and purchase on weekends. Create targeted weekend
                      promotions.
                    </p>
                    <div className="mt-2">
                      <Badge className="bg-blue-500">New Segment</Badge>
                      <Badge variant="outline" className="ml-2">
                        320 Customers
                      </Badge>
                    </div>
                    <Button size="sm" className="mt-3">
                      Create Segment
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium">Evening Browsers</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Identified 185 customers who browse between 8-10 PM but rarely complete purchases. Target with
                      evening-specific offers.
                    </p>
                    <div className="mt-2">
                      <Badge className="bg-blue-500">New Segment</Badge>
                      <Badge variant="outline" className="ml-2">
                        185 Customers
                      </Badge>
                    </div>
                    <Button size="sm" className="mt-3">
                      Create Segment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Campaign Optimization Opportunities</CardTitle>
                <CardDescription>AI-recommended campaign improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Ramadan Collection Launch</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          AI analysis suggests segmenting this campaign by customer purchase history could increase
                          conversion by 28%.
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Optimize Campaign
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Summer Linen Promotion</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Adding personalized product recommendations based on past purchases could improve ROI by 35%.
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Optimize Campaign
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
