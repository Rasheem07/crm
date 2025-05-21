import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CustomerTransactionHistory() {
  const transactions = [
    {
      id: "INV-001",
      date: "2023-12-15",
      type: "Purchase",
      items: "Luxury Abaya with Gold Embroidery",
      amount: "AED 2,500",
      status: "Completed",
    },
    {
      id: "INV-002",
      date: "2024-01-20",
      type: "Tailoring",
      items: "Custom Kandura - White Linen",
      amount: "AED 1,200",
      status: "Completed",
    },
    {
      id: "INV-003",
      date: "2024-02-05",
      type: "Alteration",
      items: "Abaya Length Adjustment",
      amount: "AED 150",
      status: "Completed",
    },
    {
      id: "INV-004",
      date: "2024-03-10",
      type: "Purchase",
      items: "Silk Scarf Collection (3 items)",
      amount: "AED 900",
      status: "Completed",
    },
    {
      id: "INV-005",
      date: "2024-04-18",
      type: "Tailoring",
      items: "Eid Special Dress",
      amount: "AED 3,200",
      status: "In Progress",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell className="font-medium">{transaction.id}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.items}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <Badge
                className={
                  transaction.status === "Completed"
                    ? "bg-green-500"
                    : transaction.status === "In Progress"
                      ? "bg-blue-500"
                      : "bg-yellow-500"
                }
              >
                {transaction.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
