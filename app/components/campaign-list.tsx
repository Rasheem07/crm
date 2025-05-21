import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CalendarIcon, Users } from "lucide-react"

interface CampaignListProps {
  status: "active" | "scheduled" | "completed"
}

export function CampaignList({ status }: CampaignListProps) {
  const campaigns = {
    active: [
      {
        id: "camp-001",
        name: "Ramadan Collection Launch",
        description: "Introducing our new Ramadan collection with special discounts",
        channels: ["WhatsApp", "Email"],
        audience: "All Customers",
        progress: 45,
        startDate: "Mar 10, 2024",
        endDate: "Apr 9, 2024",
        audienceCount: 2350,
      },
      {
        id: "camp-002",
        name: "Dubai Marina VIP Event",
        description: "Exclusive preview event for VIP customers in Dubai Marina",
        channels: ["SMS", "Personal Invitation"],
        audience: "VIP Clients",
        progress: 80,
        startDate: "Mar 25, 2024",
        endDate: "Mar 25, 2024",
        audienceCount: 120,
      },
    ],
    scheduled: [
      {
        id: "camp-003",
        name: "Eid Special Offers",
        description: "Special Eid discounts and promotions",
        channels: ["SMS", "Email", "Social Media"],
        audience: "All Customers",
        progress: 0,
        startDate: "Apr 5, 2024",
        endDate: "Apr 15, 2024",
        audienceCount: 2350,
      },
      {
        id: "camp-004",
        name: "Summer Linen Promotion",
        description: "Introducing our new summer linen collection",
        channels: ["Email", "WhatsApp"],
        audience: "Previous Buyers",
        progress: 0,
        startDate: "May 15, 2024",
        endDate: "Jun 15, 2024",
        audienceCount: 1450,
      },
    ],
    completed: [
      {
        id: "camp-005",
        name: "Winter Collection Launch",
        description: "Winter collection with special discounts",
        channels: ["Email", "SMS"],
        audience: "All Customers",
        progress: 100,
        startDate: "Dec 1, 2023",
        endDate: "Jan 15, 2024",
        audienceCount: 2200,
      },
      {
        id: "camp-006",
        name: "New Year Sale",
        description: "Special discounts for the new year",
        channels: ["Email", "WhatsApp", "Social Media"],
        audience: "All Customers",
        progress: 100,
        startDate: "Dec 26, 2023",
        endDate: "Jan 10, 2024",
        audienceCount: 2200,
      },
    ],
  }

  const currentCampaigns = campaigns[status]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {currentCampaigns.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader>
            <CardTitle>{campaign.name}</CardTitle>
            <CardDescription>{campaign.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {campaign.channels.map((channel, index) => (
                  <Badge key={index} variant="secondary">
                    {channel}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                <span>
                  {campaign.startDate} - {campaign.endDate}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>
                  {campaign.audience} ({campaign.audienceCount})
                </span>
              </div>
              {status !== "scheduled" && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>
                  <Progress value={campaign.progress} />
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              {status === "active" ? "View Details" : status === "scheduled" ? "Edit Campaign" : "View Results"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
