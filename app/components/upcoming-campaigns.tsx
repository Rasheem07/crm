import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"

export function UpcomingCampaigns() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-primary/10 p-2">
            <CalendarIcon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Ramadan Collection Launch</p>
            <p className="text-xs text-muted-foreground">WhatsApp + Email</p>
          </div>
        </div>
        <Badge>Mar 10</Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-primary/10 p-2">
            <CalendarIcon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Eid Special Offers</p>
            <p className="text-xs text-muted-foreground">SMS + Social Media</p>
          </div>
        </div>
        <Badge>Apr 5</Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-primary/10 p-2">
            <CalendarIcon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">Summer Linen Promotion</p>
            <p className="text-xs text-muted-foreground">Email + WhatsApp</p>
          </div>
        </div>
        <Badge>May 15</Badge>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-primary/10 p-2">
            <CalendarIcon className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium">VIP Private Viewing</p>
            <p className="text-xs text-muted-foreground">Personal Invitation</p>
          </div>
        </div>
        <Badge>Jun 20</Badge>
      </div>
    </div>
  )
}
