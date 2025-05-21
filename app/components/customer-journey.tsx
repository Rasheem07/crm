import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ShoppingBag, MessageSquare, Store, Scissors, Heart } from "lucide-react"

export function CustomerJourney() {
  const journeyEvents = [
    {
      date: "April 18, 2024",
      time: "2:30 PM",
      type: "Tailoring",
      description: "Ordered custom Eid dress",
      icon: <Scissors className="h-4 w-4" />,
      status: "In Progress",
    },
    {
      date: "March 10, 2024",
      time: "11:15 AM",
      type: "Purchase",
      description: "Bought 3 silk scarves",
      icon: <ShoppingBag className="h-4 w-4" />,
      status: "Completed",
    },
    {
      date: "March 5, 2024",
      time: "7:45 PM",
      type: "Website",
      description: "Viewed silk collection",
      icon: <Heart className="h-4 w-4" />,
      status: "Completed",
    },
    {
      date: "February 20, 2024",
      time: "4:00 PM",
      type: "WhatsApp",
      description: "Inquired about new arrivals",
      icon: <MessageSquare className="h-4 w-4" />,
      status: "Completed",
    },
    {
      date: "February 5, 2024",
      time: "3:30 PM",
      type: "Service",
      description: "Abaya length adjustment",
      icon: <Scissors className="h-4 w-4" />,
      status: "Completed",
    },
    {
      date: "January 20, 2024",
      time: "1:00 PM",
      type: "Tailoring",
      description: "Custom Kandura fitting",
      icon: <Scissors className="h-4 w-4" />,
      status: "Completed",
    },
    {
      date: "January 15, 2024",
      time: "11:30 AM",
      type: "Store Visit",
      description: "Browsed fabrics in Dubai Mall store",
      icon: <Store className="h-4 w-4" />,
      status: "Completed",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-muted"></div>
      <div className="space-y-8 relative">
        {journeyEvents.map((event, index) => (
          <div key={index} className="flex gap-4 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-muted"></div>
            <div className="absolute left-[14px] top-1 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2"></div>
            <div className="rounded-full bg-primary/10 p-2 ml-2">{event.icon}</div>
            <div className="grid gap-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{event.type}</h4>
                <Badge
                  className={
                    event.status === "Completed"
                      ? "bg-green-500"
                      : event.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-yellow-500"
                  }
                >
                  {event.status}
                </Badge>
              </div>
              <p className="text-sm">{event.description}</p>
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                {event.date} at {event.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
