"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface CustomerTableProps {
  filter: "all" | "active" | "vip" | "at-risk"
  searchTerm?: string
}

export function CustomerTable({ filter, searchTerm = "" }: CustomerTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const customers = [
    {
      id: "cust-001",
      name: "Fatima Mohammed",
      email: "fatima.m@example.com",
      location: "Dubai Marina, Dubai",
      status: "active",
      tags: ["VIP Client", "Luxury Fabric"],
      lastPurchase: "Apr 18, 2024",
      totalSpent: "AED 7,950",
    },
    {
      id: "cust-002",
      name: "Ahmed Al Mansouri",
      email: "ahmed.m@example.com",
      location: "Abu Dhabi",
      status: "follow-up",
      tags: ["Eid Shopper"],
      lastPurchase: "Jan 15, 2024",
      totalSpent: "AED 3,200",
    },
    {
      id: "cust-003",
      name: "Layla Khan",
      email: "layla.k@example.com",
      location: "Sharjah",
      status: "active",
      tags: ["Dubai Marina"],
      lastPurchase: "Mar 22, 2024",
      totalSpent: "AED 5,400",
    },
    {
      id: "cust-004",
      name: "Hassan Al Farsi",
      email: "hassan.f@example.com",
      location: "Dubai Downtown",
      status: "at-risk",
      tags: ["Corporate"],
      lastPurchase: "Nov 10, 2023",
      totalSpent: "AED 12,800",
    },
    {
      id: "cust-005",
      name: "Noura Al Qasimi",
      email: "noura.q@example.com",
      location: "Ajman",
      status: "active",
      tags: ["VIP Client"],
      lastPurchase: "Apr 5, 2024",
      totalSpent: "AED 9,300",
    },
    {
      id: "cust-006",
      name: "Mohammed Al Suwaidi",
      email: "mohammed.s@example.com",
      location: "Dubai Marina, Dubai",
      status: "active",
      tags: ["Luxury Fabric"],
      lastPurchase: "Apr 10, 2024",
      totalSpent: "AED 6,750",
    },
    {
      id: "cust-007",
      name: "Sara Al Maktoum",
      email: "sara.m@example.com",
      location: "Palm Jumeirah, Dubai",
      status: "active",
      tags: ["VIP Client", "Dubai Marina"],
      lastPurchase: "Apr 15, 2024",
      totalSpent: "AED 15,200",
    },
    {
      id: "cust-008",
      name: "Khalid Al Nahyan",
      email: "khalid.n@example.com",
      location: "Abu Dhabi",
      status: "follow-up",
      tags: ["Corporate"],
      lastPurchase: "Feb 28, 2024",
      totalSpent: "AED 8,500",
    },
    {
      id: "cust-009",
      name: "Aisha Al Mazrouei",
      email: "aisha.m@example.com",
      location: "Sharjah",
      status: "at-risk",
      tags: ["Eid Shopper"],
      lastPurchase: "Dec 5, 2023",
      totalSpent: "AED 4,200",
    },
    {
      id: "cust-010",
      name: "Omar Al Shamsi",
      email: "omar.s@example.com",
      location: "Ras Al Khaimah",
      status: "active",
      tags: ["Luxury Fabric"],
      lastPurchase: "Mar 30, 2024",
      totalSpent: "AED 5,800",
    },
    {
      id: "cust-011",
      name: "Hind Al Qassimi",
      email: "hind.q@example.com",
      location: "Fujairah",
      status: "active",
      tags: ["Eid Shopper"],
      lastPurchase: "Apr 2, 2024",
      totalSpent: "AED 3,900",
    },
    {
      id: "cust-012",
      name: "Rashid Al Nuaimi",
      email: "rashid.n@example.com",
      location: "Ajman",
      status: "follow-up",
      tags: ["Corporate"],
      lastPurchase: "Feb 15, 2024",
      totalSpent: "AED 7,200",
    },
  ]

  // Filter customers based on filter and search term
  const filteredCustomers = customers.filter((customer) => {
    // Apply filter
    if (filter === "all") {
      // No filter, just apply search
    } else if (filter === "active" && customer.status !== "active") {
      return false
    } else if (filter === "vip" && !customer.tags.includes("VIP Client")) {
      return false
    } else if (filter === "at-risk" && customer.status !== "at-risk") {
      return false
    }

    // Apply search
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      return (
        customer.name.toLowerCase().includes(searchLower) ||
        customer.email.toLowerCase().includes(searchLower) ||
        customer.location.toLowerCase().includes(searchLower) ||
        customer.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      )
    }

    return true
  })

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Total Spent</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedCustomers.length > 0 ? (
              paginatedCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/diverse-group.png" alt={customer.name} />
                        <AvatarFallback>
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <Link href={`/crm/customers/${customer.id}`} className="font-medium hover:underline">
                          {customer.name}
                        </Link>
                        <div className="text-xs text-muted-foreground">{customer.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.location}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        customer.status === "active"
                          ? "bg-green-500"
                          : customer.status === "follow-up"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }
                    >
                      {customer.status === "active"
                        ? "Active"
                        : customer.status === "follow-up"
                          ? "Follow-up"
                          : "At Risk"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {customer.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{customer.lastPurchase}</TableCell>
                  <TableCell>{customer.totalSpent}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                        <DropdownMenuItem>Add to Campaign</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  No customers found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {filteredCustomers.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of{" "}
            {filteredCustomers.length} customers
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
