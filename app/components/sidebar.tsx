"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Route,
  PieChart,
  UserCog,
  BarChart,
  Zap,
  LineChart,
  Globe,
  FileBarChart,
  Mail,
  FileText,
  MessageSquare,
  DollarSign,
  Shield,
  ChevronLeft,
  Megaphone,
  Share2,
  Settings,
} from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const navItems = [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          href: "/crm",
          icon: <LayoutDashboard className="h-4 w-4" />,
          active: pathname === "/crm",
        },
      ],
    },
    {
      title: "Customers",
      items: [
        {
          title: "Customers",
          href: "/customers",
          icon: <Users className="h-4 w-4" />,
          active: pathname === "/customers",
        },
        {
          title: "Customer Journey",
          href: "/customer-journey",
          icon: <Route className="h-4 w-4" />,
          active: pathname === "/customer-journey",
        },
      ],
    },
    {
      title: "Segmentation",
      items: [
        {
          title: "Segments",
          href: "/segments",
          icon: <PieChart className="h-4 w-4" />,
          active: pathname.startsWith("/segments"),
        },
        {
          title: "VIP Clients",
          href: "/vip-clients",
          icon: <UserCog className="h-4 w-4" />,
          active: pathname === "/vip-clients",
        },
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "Analytics Dashboard",
          href: "/analytics",
          icon: <BarChart className="h-4 w-4" />,
          active: pathname === "/analytics",
        },
        {
          title: "Predictive Insights",
          href: "/predictive-insights",
          icon: <Zap className="h-4 w-4" />,
          active: pathname === "/predictive-insights",
        },
        {
          title: "Behavioral Analysis",
          href: "/behavioral-analysis",
          icon: <LineChart className="h-4 w-4" />,
          active: pathname === "/behavioral-analysis",
        },
        {
          title: "Geolocation",
          href: "/geolocation",
          icon: <Globe className="h-4 w-4" />,
          active: pathname === "/geolocation",
        },
        {
          title: "Reports",
          href: "/reports",
          icon: <FileBarChart className="h-4 w-4" />,
          active: pathname === "/reports",
        },
      ],
    },
    {
      title: "Marketing",
      items: [
        {
          title: "Campaigns",
          href: "/campaigns",
          icon: <Mail className="h-4 w-4" />,
          active: pathname === "/campaigns",
        },
        {
          title: "Content Manager",
          href: "/content-manager",
          icon: <FileText className="h-4 w-4" />,
          active: pathname === "/content-manager",
        },
        {
          title: "WhatsApp Business",
          href: "/whatsapp",
          icon: <MessageSquare className="h-4 w-4" />,
          active: pathname === "/whatsapp",
        },
        {
          title: "ROI Tracking",
          href: "/roi-tracking",
          icon: <DollarSign className="h-4 w-4" />,
          active: pathname === "/roi-tracking",
        },
        {
          title: "Marketing",
          href: "/marketing",
          icon: <Megaphone className="h-4 w-4" />,
          active: pathname === "/marketing",
        },
        {
          title: "Email Marketing",
          href: "/email-marketing",
          icon: <Mail className="h-4 w-4" />,
          active: pathname === "/email-marketing",
        },
        {
          title: "Social Media",
          href: "/social-media",
          icon: <Share2 className="h-4 w-4" />,
          active: pathname === "/social-media",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Compliance",
          href: "/settings/compliance",
          icon: <Shield className="h-4 w-4" />,
          active: pathname === "/settings/compliance",
        },
        {
          title: "Settings",
          href: "/settings",
          icon: <Settings className="h-4 w-4" />,
          active: pathname === "/settings",
        },
      ],
    },
  ]

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-white text-gray-800 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          {!collapsed && <h1 className="text-xl font-semibold text-gray-900">Nubras CRM</h1>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((section, i) => (
            <div key={i} className="mb-4">
              {!collapsed && (
                <h3 className="mb-1 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {section.title}
                </h3>
              )}
              <div className="grid gap-1">
                {section.items.map((item, j) => (
                  <Link
                    key={j}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      item.active ? "bg-gray-100 text-gray-900" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      collapsed && "justify-center px-0",
                    )}
                  >
                    <span className={cn(item.active ? "text-gray-900" : "text-gray-600")}>{item.icon}</span>
                    {!collapsed && <span>{item.title}</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
