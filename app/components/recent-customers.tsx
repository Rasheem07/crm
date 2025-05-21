import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentCustomers() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/diverse-group.png" alt="Avatar" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fatima Mohammed</p>
          <p className="text-sm text-muted-foreground">Dubai Marina</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="bg-green-500">Active</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center">
          <AvatarImage src="/diverse-group.png" alt="Avatar" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Ahmed Al Mansouri</p>
          <p className="text-sm text-muted-foreground">Abu Dhabi</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="bg-yellow-500">Follow-up</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/diverse-group.png" alt="Avatar" />
          <AvatarFallback>LK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Layla Khan</p>
          <p className="text-sm text-muted-foreground">Sharjah</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="bg-green-500">Active</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/diverse-group.png" alt="Avatar" />
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Hassan Al Farsi</p>
          <p className="text-sm text-muted-foreground">Dubai Downtown</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="bg-red-500">At Risk</Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/diverse-group.png" alt="Avatar" />
          <AvatarFallback>NA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Noura Al Qasimi</p>
          <p className="text-sm text-muted-foreground">Ajman</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="bg-green-500">Active</Badge>
        </div>
      </div>
    </div>
  )
}
