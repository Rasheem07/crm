"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Calendar,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Users,
  Mail,
  PieChart,
  SearchIcon,
  Bell,
  Shield,
  UserCheck,
  Map,
  FileBarChart,
  Lightbulb,
  TrendingUp,
  Brain,
  Target,
  Smartphone,
  Globe,
  Palette,
  Megaphone,
  Briefcase,
} from "lucide-react"

// Define the navigation items and their search terms
const navigationItems = [
  {
    category: "Pages",
    items: [
      {
        name: "Dashboard",
        path: "/crm",
        icon: LayoutDashboard,
        keywords: ["home", "main", "overview", "analytics", "stats", "summary"],
      },
      {
        name: "Customers",
        path: "/customers",
        icon: Users,
        keywords: ["clients", "users", "contacts", "people", "profiles"],
      },
      {
        name: "Campaigns",
        path: "/campaigns",
        icon: Calendar,
        keywords: ["marketing", "ads", "promotions", "events", "schedule"],
      },
      {
        name: "Email Marketing",
        path: "/email-marketing",
        icon: Mail,
        keywords: ["newsletter", "emails", "broadcasts", "autoresponders"],
      },
      {
        name: "Social Media",
        path: "/social-media",
        icon: MessageSquare,
        keywords: ["facebook", "twitter", "instagram", "linkedin", "posts", "social"],
      },
      {
        name: "Content Manager",
        path: "/content-manager",
        icon: FileText,
        keywords: ["blog", "articles", "media", "resources", "documents"],
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: PieChart,
        keywords: ["reports", "statistics", "data", "metrics", "performance"],
      },
      {
        name: "Notifications",
        path: "/notifications",
        icon: Bell,
        keywords: ["alerts", "messages", "updates", "inbox", "activity"],
      },
      {
        name: "Settings",
        path: "/settings",
        icon: Settings,
        keywords: ["preferences", "configuration", "options", "account"],
      },
      {
        name: "Compliance",
        path: "/settings/compliance",
        icon: Shield,
        keywords: ["gdpr", "ccpa", "privacy", "legal", "data protection", "regulations"],
      },
      {
        name: "WhatsApp",
        path: "/whatsapp",
        icon: Smartphone,
        keywords: ["messaging", "chat", "communication", "whatsapp business"],
      },
      {
        name: "ROI Tracking",
        path: "/roi-tracking",
        icon: TrendingUp,
        keywords: ["return on investment", "performance", "metrics", "profitability"],
      },
      {
        name: "Customer Journey",
        path: "/customer-journey",
        icon: Target,
        keywords: ["customer experience", "touchpoints", "journey mapping", "user flow"],
      },
      {
        name: "Segments",
        path: "/segments",
        icon: Users,
        keywords: ["customer segments", "groups", "targeting", "audience"],
      },
      {
        name: "VIP Clients",
        path: "/vip-clients",
        icon: UserCheck,
        keywords: ["important customers", "high value", "premium", "priority"],
      },
      {
        name: "Behavioral Analysis",
        path: "/behavioral-analysis",
        icon: Brain,
        keywords: ["customer behavior", "patterns", "insights", "actions"],
      },
      {
        name: "Geolocation",
        path: "/geolocation",
        icon: Map,
        keywords: ["maps", "location", "geographic", "regional"],
      },
      {
        name: "Reports",
        path: "/reports",
        icon: FileBarChart,
        keywords: ["reporting", "documents", "analysis", "summaries"],
      },
      {
        name: "Predictive Insights",
        path: "/predictive-insights",
        icon: Lightbulb,
        keywords: ["forecasting", "predictions", "trends", "future"],
      },
      {
        name: "Marketing",
        path: "/marketing",
        icon: Megaphone,
        keywords: ["promotion", "advertising", "campaigns", "outreach"],
      },
      {
        name: "Templates",
        path: "/templates",
        icon: Palette,
        keywords: ["message templates", "email templates", "designs", "layouts"],
      },
    ],
  },
  {
    category: "Actions",
    items: [
      {
        name: "Create Campaign",
        path: "/campaigns/create",
        icon: Calendar,
        keywords: ["new campaign", "start campaign", "marketing", "promotion"],
      },
      {
        name: "Add Customer",
        path: "/customers/create",
        icon: Users,
        keywords: ["new customer", "add client", "create contact"],
      },
      {
        name: "Create Email",
        path: "/email-marketing/create",
        icon: Mail,
        keywords: ["new email", "compose", "newsletter", "broadcast"],
      },
      {
        name: "Create Social Post",
        path: "/social-media/create",
        icon: MessageSquare,
        keywords: ["new post", "social media", "facebook", "twitter", "instagram"],
      },
      {
        name: "Create Content",
        path: "/content-manager/create",
        icon: FileText,
        keywords: ["new content", "article", "blog post", "media"],
      },
      {
        name: "Create Segment",
        path: "/segments/create",
        icon: Users,
        keywords: ["new segment", "customer group", "audience", "targeting"],
      },
      {
        name: "Create Report",
        path: "/reports/create",
        icon: FileBarChart,
        keywords: ["new report", "generate report", "analysis", "data"],
      },
      {
        name: "Create Template",
        path: "/templates/create",
        icon: Palette,
        keywords: ["new template", "design template", "message format"],
      },
      {
        name: "Create Email Subscriber",
        path: "/email-marketing/subscribers/create",
        icon: Mail,
        keywords: ["add subscriber", "new contact", "mailing list"],
      },
    ],
  },
  {
    category: "Settings",
    items: [
      {
        name: "Business Details",
        path: "/settings/business-details",
        icon: Briefcase,
        keywords: ["company", "organization", "profile", "business information"],
      },
      {
        name: "Social Handles",
        path: "/settings/social-handles",
        icon: Globe,
        keywords: ["social media accounts", "facebook", "twitter", "instagram", "linkedin"],
      },
      {
        name: "User Preferences",
        path: "/settings/user-preferences",
        icon: Users,
        keywords: ["account", "profile", "preferences", "personal settings"],
      },
      {
        name: "API Integrations",
        path: "/settings/api-integrations",
        icon: Settings,
        keywords: ["connections", "apis", "third-party", "integrations"],
      },
      {
        name: "Compliance Settings",
        path: "/settings/compliance",
        icon: Shield,
        keywords: ["gdpr", "ccpa", "privacy", "legal", "data protection"],
      },
    ],
  },
]

// NLP processing function to match user input to navigation items
function processNaturalLanguage(input: string) {
  // Convert input to lowercase for case-insensitive matching
  const query = input.toLowerCase()

  // Define common action phrases and their mappings
  const actionPhrases = [
    { phrases: ["create", "add", "new", "make"], action: "create" },
    { phrases: ["view", "see", "show", "display", "open"], action: "view" },
    { phrases: ["edit", "update", "change", "modify"], action: "edit" },
    { phrases: ["delete", "remove", "eliminate"], action: "delete" },
    { phrases: ["go to", "navigate to", "take me to"], action: "navigate" },
  ]

  // Define common entities and their mappings
  const entityMappings = [
    { terms: ["post", "social post", "social media post"], entity: "social post" },
    { terms: ["campaign", "marketing campaign", "ad campaign"], entity: "campaign" },
    { terms: ["customer", "client", "user", "contact"], entity: "customer" },
    { terms: ["email", "newsletter", "broadcast"], entity: "email" },
    { terms: ["content", "article", "blog", "media"], entity: "content" },
    { terms: ["setting", "configuration", "preference"], entity: "settings" },
    { terms: ["notification", "alert", "message", "update"], entity: "notification" },
    { terms: ["compliance", "gdpr", "privacy", "legal"], entity: "compliance" },
    { terms: ["whatsapp", "messaging", "chat"], entity: "whatsapp" },
    { terms: ["segment", "group", "audience"], entity: "segment" },
    { terms: ["report", "analysis", "summary"], entity: "report" },
    { terms: ["template", "design", "layout"], entity: "template" },
    { terms: ["vip", "important client", "high value"], entity: "vip" },
    { terms: ["analytics", "statistics", "metrics"], entity: "analytics" },
    { terms: ["journey", "experience", "touchpoint"], entity: "journey" },
    { terms: ["behavior", "pattern", "insight"], entity: "behavior" },
    { terms: ["location", "map", "geographic"], entity: "location" },
    { terms: ["prediction", "forecast", "trend"], entity: "prediction" },
  ]

  // Extract potential action and entity from the query
  let detectedAction = ""
  let detectedEntity = ""

  // Try to identify the action
  for (const actionGroup of actionPhrases) {
    if (actionGroup.phrases.some((phrase) => query.includes(phrase))) {
      detectedAction = actionGroup.action
      break
    }
  }

  // Try to identify the entity
  for (const entityGroup of entityMappings) {
    if (entityGroup.terms.some((term) => query.includes(term))) {
      detectedEntity = entityGroup.entity
      break
    }
  }

  // Score all navigation items based on the query, detected action, and entity
  return navigationItems
    .flatMap((category) =>
      category.items.map((item) => {
        // Start with a base score
        let score = 0

        // Direct match with name (highest priority)
        if (item.name.toLowerCase().includes(query)) {
          score += 100
        }

        // Match with keywords
        const keywordMatches = item.keywords.filter(
          (keyword) => keyword.includes(query) || query.includes(keyword),
        ).length
        score += keywordMatches * 10

        // Match with detected action and entity
        if (detectedAction === "create" && item.path.includes("create")) {
          score += 50
        } else if ((detectedAction === "view" || detectedAction === "navigate") && !item.path.includes("create")) {
          score += 30
        }

        if (detectedEntity) {
          const entityScore = item.keywords.some(
            (keyword) => keyword.includes(detectedEntity) || item.name.toLowerCase().includes(detectedEntity),
          )
            ? 30
            : 0
          score += entityScore
        }

        return {
          ...item,
          category: category.category,
          score,
        }
      }),
    )
    .sort((a, b) => b.score - a.score) // Sort by score in descending order
}

export function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()

  // Handle keyboard shortcut to open search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // Process the search query
  useEffect(() => {
    if (query.length > 0) {
      const processedResults = processNaturalLanguage(query)
      setResults(processedResults.slice(0, 10)) // Limit to top 10 results
    } else {
      // When no query, show some default suggestions
      setResults([])
    }
  }, [query])

  // Handle selection
  const handleSelect = (path: string) => {
    setOpen(false)
    router.push(path)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md border bg-background w-full"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="flex-1 text-left text-muted-foreground">Search anything...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type what you're looking for or try 'create a new campaign'..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found. Try a different search term.</CommandEmpty>

          {query.length > 0 ? (
            // Group results by category
            Object.entries(
              results.reduce((acc: Record<string, any[]>, item) => {
                if (!acc[item.category]) {
                  acc[item.category] = []
                }
                acc[item.category].push(item)
                return acc
              }, {}),
            ).map(([category, items]) => (
              <CommandGroup key={category} heading={category}>
                {items.map((item) => (
                  <CommandItem key={item.path} value={item.path} onSelect={() => handleSelect(item.path)}>
                    {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                    <span>{item.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))
          ) : (
            // Default suggestions when no query
            <>
              <CommandGroup heading="Suggested">
                <CommandItem onSelect={() => handleSelect("/crm")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/customers")}>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Customers</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/campaigns")}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Campaigns</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/notifications")}>
                  <Bell className="mr-2 h-4 w-4" />
                  <span>Notifications</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/whatsapp")}>
                  <Smartphone className="mr-2 h-4 w-4" />
                  <span>WhatsApp</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Quick Actions">
                <CommandItem onSelect={() => handleSelect("/campaigns/create")}>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Create Campaign</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/social-media/create")}>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Create Social Post</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/settings/compliance")}>
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Compliance Settings</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
