"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

// NLP entities and keywords for better search understanding
const searchEntities = {
  customers: ["customer", "client", "lead", "prospect", "contact"],
  campaigns: ["campaign", "marketing", "promotion", "ad", "advertisement"],
  analytics: ["analytics", "report", "insight", "data", "statistics", "metrics"],
  settings: ["setting", "configuration", "preference", "setup"],
  compliance: ["compliance", "regulation", "legal", "policy", "gdpr", "ccpa"],
  notifications: ["notification", "alert", "message", "update"],
  whatsapp: ["whatsapp", "message", "chat", "conversation"],
  templates: ["template", "format", "layout", "design"],
}

// Search suggestions with categories
const suggestions = [
  {
    category: "Customers",
    items: [
      { name: "All Customers", href: "/customers" },
      { name: "VIP Clients", href: "/vip-clients" },
      { name: "Customer Journey", href: "/customer-journey" },
      { name: "Behavioral Analysis", href: "/behavioral-analysis" },
    ],
  },
  {
    category: "Marketing",
    items: [
      { name: "Campaigns", href: "/campaigns" },
      { name: "Email Marketing", href: "/email-marketing" },
      { name: "Social Media", href: "/social-media" },
      { name: "WhatsApp", href: "/whatsapp" },
      { name: "Templates", href: "/templates" },
    ],
  },
  {
    category: "Analytics",
    items: [
      { name: "Dashboard", href: "/crm" },
      { name: "Reports", href: "/reports" },
      { name: "ROI Tracking", href: "/roi-tracking" },
      { name: "Predictive Insights", href: "/predictive-insights" },
    ],
  },
  {
    category: "Settings",
    items: [
      { name: "User Preferences", href: "/settings/user-preferences" },
      { name: "Business Details", href: "/settings/business-details" },
      { name: "API Integrations", href: "/settings/api-integrations" },
      { name: "Social Handles", href: "/settings/social-handles" },
      { name: "Compliance", href: "/settings/compliance" },
    ],
  },
]

export function Search() {
  const [open, setOpen] = React.useState(false)
  const [showSearchDialog, setShowSearchDialog] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const router = useRouter()

  // Process natural language query to understand intent
  const processQuery = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim()

    // Check for direct matches first
    for (const category of suggestions) {
      for (const item of category.items) {
        if (item.name.toLowerCase().includes(normalizedQuery)) {
          return item.href
        }
      }
    }

    // Check for entity matches
    for (const [entity, keywords] of Object.entries(searchEntities)) {
      for (const keyword of keywords) {
        if (normalizedQuery.includes(keyword)) {
          // Map entity to appropriate route
          switch (entity) {
            case "customers":
              return "/customers"
            case "campaigns":
              return "/campaigns"
            case "analytics":
              return "/reports"
            case "settings":
              return "/settings"
            case "compliance":
              return "/settings/compliance"
            case "notifications":
              return "/notifications"
            case "whatsapp":
              return "/whatsapp"
            case "templates":
              return "/templates"
            default:
              return "/crm"
          }
        }
      }
    }

    // Default to search results page if no matches
    return `/search?q=${encodeURIComponent(query)}`
  }

  const handleSelect = (href: string) => {
    setOpen(false)
    setShowSearchDialog(false)
    router.push(href)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const destination = processQuery(searchQuery)
      router.push(destination)
      setOpen(false)
      setShowSearchDialog(false)
      setSearchQuery("")
    }
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setShowSearchDialog((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-muted-foreground"
            onClick={() => setOpen(true)}
          >
            <div className="flex items-center gap-2">
              <SearchIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Search anything...</span>
            </div>
            <div className="hidden md:flex items-center text-xs text-muted-foreground">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0" align="start">
          <Command>
            <form onSubmit={handleSearch}>
              <CommandInput
                placeholder="Search..."
                value={searchQuery}
                onValueChange={setSearchQuery}
                className="h-9"
              />
            </form>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {suggestions.map((group) => (
                <CommandGroup key={group.category} heading={group.category}>
                  {group.items.map((item) => (
                    <CommandItem key={item.href} value={item.name} onSelect={() => handleSelect(item.href)}>
                      {item.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <CommandDialog open={showSearchDialog} onOpenChange={setShowSearchDialog}>
        <CommandInput
          placeholder="Search across all of Nubras CRM..."
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {suggestions.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <CommandItem key={item.href} value={item.name} onSelect={() => handleSelect(item.href)}>
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
