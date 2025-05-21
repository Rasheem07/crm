"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Bell,
  Calendar,
  FileText,
  Home,
  LayoutDashboard,
  Mail,
  MessageSquare,
  PieChart,
  Settings,
  Shield,
  Users,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="group fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 w-[70px] hover:w-64 lg:w-64">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/crm" className="flex items-center gap-2 font-semibold">
          <Home className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Nubras CRM</span>
        </Link>
      </div>
      <nav className="grid gap-1 px-2 pt-2 group-hover:px-2 lg:px-2">
        <Link
          href="/crm"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm") &&
              !isActive("/crm/customers") &&
              !isActive("/crm/campaigns") &&
              !isActive("/crm/notifications") &&
              !isActive("/crm/settings") &&
              "bg-accent text-accent-foreground",
          )}
        >
          <LayoutDashboard className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Dashboard</span>
        </Link>
        <Link
          href="/crm/customers"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/customers") && "bg-accent text-accent-foreground",
          )}
        >
          <Users className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Customers</span>
        </Link>
        <Link
          href="/crm/campaigns"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/campaigns") && "bg-accent text-accent-foreground",
          )}
        >
          <Calendar className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Campaigns</span>
        </Link>
        <Link
          href="/crm/email-marketing"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/email-marketing") && "bg-accent text-accent-foreground",
          )}
        >
          <Mail className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Email Marketing</span>
        </Link>
        <Link
          href="/crm/social-media"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/social-media") && "bg-accent text-accent-foreground",
          )}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Social Media</span>
        </Link>
        <Link
          href="/crm/content-manager"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/content-manager") && "bg-accent text-accent-foreground",
          )}
        >
          <FileText className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Content Manager</span>
        </Link>
        <Link
          href="/crm/analytics"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/analytics") && "bg-accent text-accent-foreground",
          )}
        >
          <PieChart className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Analytics</span>
        </Link>
        <Link
          href="/crm/notifications"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/notifications") && "bg-accent text-accent-foreground",
          )}
        >
          <Bell className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Notifications</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            5
          </span>
        </Link>
        <Link
          href="/crm/settings/compliance"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/settings/compliance") && "bg-accent text-accent-foreground",
          )}
        >
          <Shield className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Compliance</span>
        </Link>
        <Link
          href="/crm/settings"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            isActive("/crm/settings") && !isActive("/crm/settings/compliance") && "bg-accent text-accent-foreground",
          )}
        >
          <Settings className="h-5 w-5" />
          <span className="hidden group-hover:inline-block lg:inline-block">Settings</span>
        </Link>
      </nav>
    </div>
  )
}
