import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { CustomerTransactionHistory } from "../../components/customer-transaction-history"
import { CustomerBehavioralData } from "../../components/customer-behavioral-data"
import { CustomerJourney } from "../../components/customer-journey"

export default function CustomerProfile({ params }: { params: { id: string } }) {
  // In a real app, you would fetch customer data based on the ID
  const customer = {
    id: params.id,
    name: "Fatima Mohammed",
    email: "fatima.m@example.com",
    phone: "+971 50 123 4567",
    location: "Dubai Marina, Dubai, UAE",
    status: "Active",
    joinDate: "January 15, 2022",
    measurements: {
      height: "165 cm",
      bust: "92 cm",
      waist: "74 cm",
      hips: "98 cm",
    },
    preferences: ["Dubai-inspired embroidery", "Pastel colors", "Silk fabrics", "Modern abaya designs"],
    tags: ["Dubai Marina", "Luxury Fabric", "VIP Client"],
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <Link href="/crm">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Customer Profile</h2>
          </div>
          <div className="flex items-center space-x-2">
            <Button>Send Message</Button>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-3">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/diverse-group.png" alt={customer.name} />
                  <AvatarFallback>
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{customer.name}</CardTitle>
                  <CardDescription>Customer ID: {customer.id}</CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className="bg-green-500">Active</Badge>
                    {customer.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{customer.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Customer since {customer.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Customer Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="measurements">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="measurements">Measurements</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                <TabsContent value="measurements" className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Height</h4>
                      <p>{customer.measurements.height}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Bust</h4>
                      <p>{customer.measurements.bust}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Waist</h4>
                      <p>{customer.measurements.waist}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Hips</h4>
                      <p>{customer.measurements.hips}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Measurements
                  </Button>
                </TabsContent>
                <TabsContent value="preferences" className="pt-4">
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Style Preferences</h4>
                    <div className="flex flex-wrap gap-2">
                      {customer.preferences.map((pref, index) => (
                        <Badge key={index} variant="secondary">
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="notes" className="pt-4">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Prefers appointments in the evening after 6 PM. Interested in exclusive designs. Has referred 3
                      friends to the store. Speaks Arabic and English.
                    </p>
                    <Button variant="outline" size="sm">
                      Add Note
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="transactions" className="space-y-4">
          <TabsList>
            <TabsTrigger value="transactions">Transaction History</TabsTrigger>
            <TabsTrigger value="behavioral">Behavioral Data</TabsTrigger>
            <TabsTrigger value="journey">Customer Journey</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View all purchases, tailoring projects, and alterations</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerTransactionHistory />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="behavioral" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Behavioral Data</CardTitle>
                <CardDescription>Website engagement, email interactions, and peak activity times</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerBehavioralData />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="journey" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Journey</CardTitle>
                <CardDescription>Track all touchpoints and interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <CustomerJourney />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
