"use client"
import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | undefined>()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8">Our Products</h1>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-grow">
          <div className="relative">
            <Input type="search" placeholder="Search products..." className="pl-10 w-full" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-4">
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select onValueChange={setSelectedSubcategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Subcategory" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory &&
                categories
                  .find((c) => c.id.toString() === selectedCategory)
                  ?.subcategories.map((subcategory) => (
                    <SelectItem key={subcategory.id} value={subcategory.id.toString()}>
                      {subcategory.name}
                    </SelectItem>
                  ))}
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
        </div>
      </div>

      {/* Product Listings */}
      <div className="space-y-12">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl font-serif mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) => product.categoryId === category.id)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Separator className="mt-8" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Sample data
const categories = [
  {
    id: 1,
    name: "Bathroom Accessories",
    subcategories: [
      { id: 101, name: "Soap Dispensers" },
      { id: 102, name: "Toothbrush Holders" },
      { id: 103, name: "Towel Racks" },
    ],
  },
  {
    id: 2,
    name: "Bath Linens",
    subcategories: [
      { id: 201, name: "Towels" },
      { id: 202, name: "Bath Mats" },
      { id: 203, name: "Robes" },
    ],
  },
  {
    id: 3,
    name: "Bathroom Furniture",
    subcategories: [
      { id: 301, name: "Vanities" },
      { id: 302, name: "Storage Cabinets" },
      { id: 303, name: "Mirrors" },
    ],
  },
]

const products = [
  { id: 1, name: "Marble Soap Dispenser", price: 89.99, categoryId: 1, subcategoryId: 101, image: "/placeholder.svg" },
  {
    id: 2,
    name: "Brass Toothbrush Holder",
    price: 69.99,
    categoryId: 1,
    subcategoryId: 102,
    image: "/placeholder.svg",
  },
  { id: 3, name: "Luxury Bath Towel Set", price: 129.99, categoryId: 2, subcategoryId: 201, image: "/placeholder.svg" },
  {
    id: 4,
    name: "Modern Bathroom Vanity",
    price: 899.99,
    categoryId: 3,
    subcategoryId: 301,
    image: "/placeholder.svg",
  },
  // Add more products as needed
]

