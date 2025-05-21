"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ArrowLeft, Plus, Trash } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateSegmentPage() {
  const [segmentName, setSegmentName] = useState("")
  const [segmentDescription, setSegmentDescription] = useState("")
  const [criteria, setCriteria] = useState([{ type: "location", value: "", operator: "equals" }])

  const addCriterion = () => {
    setCriteria([...criteria, { type: "purchase_value", value: "", operator: "greater_than" }])
  }

  const removeCriterion = (index: number) => {
    setCriteria(criteria.filter((_, i) => i !== index))
  }

  const updateCriterion = (index: number, field: string, value: string) => {
    const newCriteria = [...criteria]
    newCriteria[index] = { ...newCriteria[index], [field]: value }
    setCriteria(newCriteria)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ segmentName, segmentDescription, criteria })
    // Redirect to segments page
  }

  return (
    <div className="flex-1 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/crm/segments">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-3xl font-bold">Create Customer Segment</h2>
          <p className="text-muted-foreground mt-1">Define a new customer segment based on specific criteria</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Segment Details</CardTitle>
                <CardDescription>Basic information about your segment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="segment-name">Segment Name</Label>
                  <Input
                    id="segment-name"
                    placeholder="Enter segment name"
                    value={segmentName}
                    onChange={(e) => setSegmentName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segment-description">Description</Label>
                  <Textarea
                    id="segment-description"
                    placeholder="Enter segment description"
                    value={segmentDescription}
                    onChange={(e) => setSegmentDescription(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Segment Criteria</CardTitle>
                <CardDescription>Define the rules for customer inclusion in this segment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Tabs defaultValue="builder" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="builder">Visual Builder</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  </TabsList>
                  <TabsContent value="builder">
                    {criteria.map((criterion, index) => (
                      <div key={index} className="space-y-4 p-4 border rounded-md">
                        <div className="flex items-center justify-between">
                          <Badge>{`Rule ${index + 1}`}</Badge>
                          {index > 0 && (
                            <Button type="button" variant="ghost" size="icon" onClick={() => removeCriterion(index)}>
                              <Trash className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>Attribute</Label>
                            <Select
                              value={criterion.type}
                              onValueChange={(value) => updateCriterion(index, "type", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select attribute" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Customer Attributes</SelectLabel>
                                  <SelectItem value="location">Location</SelectItem>
                                  <SelectItem value="purchase_value">Purchase Value</SelectItem>
                                  <SelectItem value="purchase_frequency">Purchase Frequency</SelectItem>
                                  <SelectItem value="product_category">Product Category</SelectItem>
                                  <SelectItem value="engagement">Engagement Level</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Operator</Label>
                            <Select
                              value={criterion.operator}
                              onValueChange={(value) => updateCriterion(index, "operator", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select operator" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Operators</SelectLabel>
                                  <SelectItem value="equals">Equals</SelectItem>
                                  <SelectItem value="not_equals">Not Equals</SelectItem>
                                  <SelectItem value="contains">Contains</SelectItem>
                                  <SelectItem value="greater_than">Greater Than</SelectItem>
                                  <SelectItem value="less_than">Less Than</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Value</Label>
                            <Input
                              placeholder="Enter value"
                              value={criterion.value}
                              onChange={(e) => updateCriterion(index, "value", e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={addCriterion} className="mt-4">
                      <Plus className="mr-2 h-4 w-4" /> Add Criterion
                    </Button>
                  </TabsContent>
                  <TabsContent value="advanced">
                    <div className="space-y-2">
                      <Label htmlFor="advanced-query">Advanced Query</Label>
                      <Textarea
                        id="advanced-query"
                        placeholder="Enter advanced query (e.g., location = 'Dubai Marina' AND purchase_value > 1000)"
                        rows={6}
                      />
                      <p className="text-sm text-muted-foreground">
                        Use AND, OR operators and parentheses to create complex queries
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Segment Settings</CardTitle>
                <CardDescription>Additional configuration for your segment</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="activate" />
                  <Label htmlFor="activate">Activate segment immediately</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dynamic" />
                  <Label htmlFor="dynamic">Dynamic segment (automatically updates based on criteria)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="notification" />
                  <Label htmlFor="notification">Receive notifications about significant changes</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/crm/segments">Cancel</Link>
                </Button>
                <Button type="submit">Create Segment</Button>
              </CardFooter>
            </Card>
          </form>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Segment Preview</CardTitle>
              <CardDescription>Estimated audience based on your criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center justify-center p-6 border rounded-md">
                <div className="text-4xl font-bold">750</div>
                <div className="text-sm text-muted-foreground">Estimated Customers</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Male</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "45%" }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Female</span>
                  <span>55%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "55%" }}></div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Top Locations</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Dubai Marina</span>
                    <span>35%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Palm Jumeirah</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Downtown Dubai</span>
                    <span>20%</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Average Purchase Value</h4>
                <div className="text-2xl font-bold">AED 2,450</div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Similar Segments</CardTitle>
              <CardDescription>Existing segments with similar criteria</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 border rounded-md">
                <div className="font-medium">Luxury Fabric</div>
                <div className="text-sm text-muted-foreground">850 customers</div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">Dubai</Badge>
                  <Badge variant="outline">High Value</Badge>
                </div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="font-medium">Dubai Marina</div>
                <div className="text-sm text-muted-foreground">650 customers</div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">Location</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
