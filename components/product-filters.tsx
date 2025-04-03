"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedCategories, setSelectedCategories] = useState<string[]>(searchParams.get("category")?.split(",") || [])

  const categories = [
    { id: "fruits-vegetables", label: "Fruits & Vegetables" },
    { id: "dairy-eggs", label: "Dairy & Eggs" },
    { id: "grains-cereals", label: "Grains & Cereals" },
    { id: "snacks-treats", label: "Snacks & Treats" },
  ]

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","))
    } else {
      params.delete("category")
    }

    router.push(`/products?${params.toString()}`)
  }

  const clearFilters = () => {
    setSelectedCategories([])
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Accordion type="multiple" defaultValue={["categories"]}>
          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={category.id} className="text-sm font-normal cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-under-10" />
                  <Label htmlFor="price-under-10" className="text-sm font-normal cursor-pointer">
                    Under $10
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-10-25" />
                  <Label htmlFor="price-10-25" className="text-sm font-normal cursor-pointer">
                    $10 - $25
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-25-50" />
                  <Label htmlFor="price-25-50" className="text-sm font-normal cursor-pointer">
                    $25 - $50
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-over-50" />
                  <Label htmlFor="price-over-50" className="text-sm font-normal cursor-pointer">
                    Over $50
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters} className="bg-green-700 hover:bg-green-800">
          Apply Filters
        </Button>
        <Button onClick={clearFilters} variant="outline">
          Clear Filters
        </Button>
      </div>
    </div>
  )
}

