import React from "react";
import { Header } from "./components/home-header";
import Link from "next/link"
import { ArrowRight, ShoppingCart, Star, Heart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    // <div>
    //   <Header />
    // </div>
    // <div className="flex flex-col min-h-screen">
    //   <header className="border-b">
    //     <div className="container flex items-center justify-between py-4">
    //       <Link href="/" className="text-2xl font-serif tracking-tight">
    //         LUXBATH
    //       </Link>
    //       <nav className="hidden md:flex items-center gap-6">
    //         <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
    //           Collections
    //         </Link>
    //         <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
    //           New Arrivals
    //         </Link>
    //         <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
    //           Bestsellers
    //         </Link>
    //         <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
    //           Inspiration
    //         </Link>
    //       </nav>
    //       <div className="flex items-center gap-4">
    //         <Button variant="ghost" size="icon" className="hidden md:flex">
    //           <Search className="h-5 w-5" />
    //           <span className="sr-only">Search</span>
    //         </Button>
    //         <Button variant="ghost" size="icon" className="hidden md:flex">
    //           <Heart className="h-5 w-5" />
    //           <span className="sr-only">Wishlist</span>
    //         </Button>
    //         <Button variant="ghost" size="icon">
    //           <ShoppingCart className="h-5 w-5" />
    //           <span className="sr-only">Cart</span>
    //         </Button>
    //       </div>
    //     </div>
    //   </header>
    //   <main className="flex-1">
    //     <section className="relative">
    //       <div className="absolute inset-0 bg-black/40 z-10" />
    //       <div
    //         className="h-[70vh] bg-cover bg-center"
    //         style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    //       />
    //       <div className="absolute inset-0 z-20 flex items-center justify-center">
    //         <div className="container text-center text-white">
    //           <h1 className="text-4xl md:text-6xl font-serif mb-4">Elevate Your Bathroom Experience</h1>
    //           <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
    //             Discover our curated collection of luxury bathroom utensils designed for the modern connoisseur
    //           </p>
    //           <Button className="bg-white text-black hover:bg-white/90">
    //             Shop Collection
    //             <ArrowRight className="ml-2 h-4 w-4" />
    //           </Button>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-16 bg-neutral-50">
    //       <div className="container">
    //         <h2 className="text-3xl font-serif text-center mb-12">Featured Collections</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //           {featuredCollections.map((collection) => (
    //             <div key={collection.id} className="group cursor-pointer">
    //               <div className="relative overflow-hidden mb-4">
    //                 <img
    //                   src={collection.image || "/placeholder.svg"}
    //                   alt={collection.name}
    //                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
    //                 />
    //               </div>
    //               <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
    //               <p className="text-muted-foreground mb-4">{collection.description}</p>
    //               <Link href="#" className="text-sm font-medium flex items-center">
    //                 Explore Collection
    //                 <ArrowRight className="ml-2 h-4 w-4" />
    //               </Link>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-16">
    //       <div className="container">
    //         <h2 className="text-3xl font-serif text-center mb-6">Our Collection</h2>
    //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
    //           Discover our handcrafted luxury bathroom utensils, designed to elevate your daily rituals.
    //         </p>

    //         <Tabs defaultValue="bestsellers" className="w-full">
    //           <div className="flex justify-center mb-8">
    //             <TabsList>
    //               <TabsTrigger value="bestsellers">Bestsellers</TabsTrigger>
    //               <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
    //               <TabsTrigger value="on-sale">On Sale</TabsTrigger>
    //             </TabsList>
    //           </div>

    //           <TabsContent value="bestsellers" className="space-y-8">
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //               {bestsellingProducts.map((product) => (
    //                 <Card key={product.id} className="border-0 shadow-sm overflow-hidden">
    //                   <div className="relative aspect-square overflow-hidden">
    //                     <img
    //                       src={product.image || "/placeholder.svg"}
    //                       alt={product.name}
    //                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    //                     />
    //                     <Button
    //                       variant="secondary"
    //                       size="icon"
    //                       className="absolute top-2 right-2 bg-white/80 hover:bg-white"
    //                     >
    //                       <Heart className="h-4 w-4" />
    //                       <span className="sr-only">Add to wishlist</span>
    //                     </Button>
    //                   </div>
    //                   <CardHeader className="px-4 pt-4 pb-0">
    //                     <CardTitle className="text-lg font-medium">{product.name}</CardTitle>
    //                     <div className="flex items-center mt-1">
    //                       <div className="flex">
    //                         {Array(5)
    //                           .fill(0)
    //                           .map((_, i) => (
    //                             <Star
    //                               key={i}
    //                               className={`h-4 w-4 ${i < product.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted-foreground"}`}
    //                             />
    //                           ))}
    //                       </div>
    //                       <span className="text-xs text-muted-foreground ml-2">({product.reviewCount})</span>
    //                     </div>
    //                   </CardHeader>
    //                   <CardContent className="px-4 py-2">
    //                     <p className="text-muted-foreground text-sm line-clamp-2">
    //                       {product.description ||
    //                         "Handcrafted with premium materials for a touch of elegance in your bathroom."}
    //                     </p>
    //                   </CardContent>
    //                   <CardFooter className="px-4 pt-0 pb-4 flex items-center justify-between">
    //                     <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
    //                     <Button size="sm">Add to Cart</Button>
    //                   </CardFooter>
    //                 </Card>
    //               ))}
    //             </div>
    //           </TabsContent>

    //           <TabsContent value="new-arrivals">
    //             <div className="text-center py-12">
    //               <p className="text-muted-foreground">New arrivals coming soon. Check back later.</p>
    //             </div>
    //           </TabsContent>

    //           <TabsContent value="on-sale">
    //             <div className="text-center py-12">
    //               <p className="text-muted-foreground">No items currently on sale.</p>
    //             </div>
    //           </TabsContent>
    //         </Tabs>
    //       </div>
    //     </section>

    //     <section className="py-16 bg-neutral-50">
    //       <div className="container">
    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    //           <div>
    //             <img
    //               src="/placeholder.svg?height=600&width=800"
    //               alt="Luxury bathroom setting"
    //               className="rounded-lg shadow-md"
    //             />
    //           </div>
    //           <div>
    //             <h2 className="text-3xl font-serif mb-6">Craftsmanship That Speaks Volumes</h2>
    //             <Separator className="my-4" />
    //             <p className="text-muted-foreground mb-6">
    //               Each piece in our collection is meticulously crafted by skilled artisans who have perfected their
    //               craft over generations. We source only the finest materials from around the world, ensuring that every
    //               product meets our exacting standards.
    //             </p>
    //             <p className="text-muted-foreground mb-6">
    //               From the weight of a soap dispenser in your hand to the perfect balance of a towel holder, every
    //               detail is considered to create bathroom utensils that are as functional as they are beautiful.
    //             </p>
    //             <Button variant="outline" className="mt-2">
    //               Discover Our Process
    //               <ArrowRight className="ml-2 h-4 w-4" />
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className="py-16">
    //       <div className="container">
    //         <h2 className="text-3xl font-serif text-center mb-12">Why Choose Us</h2>
    //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //           {features.map((feature) => (
    //             <div key={feature.id} className="text-center">
    //               <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
    //                 <feature.icon className="h-8 w-8 text-neutral-900" />
    //               </div>
    //               <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
    //               <p className="text-muted-foreground">{feature.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   <footer className="bg-neutral-900 text-white py-12">
    //     <div className="container">
    //       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //         <div>
    //           <h3 className="text-xl font-serif mb-4">LUXBATH</h3>
    //           <p className="text-neutral-400">
    //             Elevating everyday bathroom experiences with luxury utensils and accessories since 2010.
    //           </p>
    //         </div>
    //         <div>
    //           <h4 className="font-medium mb-4">Shop</h4>
    //           <ul className="space-y-2">
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Collections
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 New Arrivals
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Bestsellers
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Gift Cards
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="font-medium mb-4">About</h4>
    //           <ul className="space-y-2">
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Our Story
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Craftsmanship
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Sustainability
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Press
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //         <div>
    //           <h4 className="font-medium mb-4">Customer Care</h4>
    //           <ul className="space-y-2">
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Contact Us
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Shipping & Returns
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 Care Instructions
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="#" className="text-neutral-400 hover:text-white">
    //                 FAQ
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
    //         <p className="text-neutral-400 text-sm">© 2025 LUXBATH. All rights reserved.</p>
    //         <div className="flex gap-4 mt-4 md:mt-0">
    //           <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="h-5 w-5"
    //             >
    //               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    //             </svg>
    //             <span className="sr-only">Facebook</span>
    //           </Button>
    //           <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="h-5 w-5"
    //             >
    //               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    //               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    //               <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    //             </svg>
    //             <span className="sr-only">Instagram</span>
    //           </Button>
    //           <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="h-5 w-5"
    //             >
    //               <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    //             </svg>
    //             <span className="sr-only">Twitter</span>
    //           </Button>
    //           <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               className="h-5 w-5"
    //             >
    //               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    //               <rect x="2" y="9" width="4" height="12"></rect>
    //               <circle cx="4" cy="4" r="2"></circle>
    //             </svg>
    //             <span className="sr-only">LinkedIn</span>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RmxqOHwFyklXgtbNjEpNw66kZI7MpS.png')",
              filter: "brightness(0.7)",
            }}
          />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Elevate Your Bathroom Experience</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
              Discover our curated collection of luxury bathroom utensils designed for the modern connoisseur
            </p>
            <Button className="bg-white text-black hover:bg-white/90 transition-colors" size="lg">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif text-center mb-16">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCollections.map((collection) => (
                <div key={collection.id} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{collection.name}</h3>
                  <p className="text-neutral-600">{collection.description}</p>
                  <Link href="#" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Sample data
const featuredCollections = [
  {
    id: 1,
    name: "Marble Collection",
    description: "Timeless elegance crafted from premium Italian marble",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    name: "Brass Essentials",
    description: "Hand-polished brass accessories with a modern twist",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    name: "Scandinavian Minimalism",
    description: "Clean lines and functional design for the contemporary bathroom",
    image: "/placeholder.svg?height=600&width=800",
  },
]

const bestsellingProducts = [
  {
    id: 1,
    name: "Marble Soap Dispenser",
    price: 89.99,
    rating: 5,
    reviewCount: 124,
    image: "/placeholder.svg?height=500&width=500",
    description: "A luxurious soap dispenser crafted from premium Italian marble.",
  },
  {
    id: 2,
    name: "Brass Towel Holder",
    price: 129.99,
    rating: 4,
    reviewCount: 86,
    image: "/placeholder.svg?height=500&width=500",
    description: "A stylish towel holder made from hand-polished brass.",
  },
  {
    id: 3,
    name: "Handcrafted Ceramic Toothbrush Holder",
    price: 69.99,
    rating: 5,
    reviewCount: 92,
    image: "/placeholder.svg?height=500&width=500",
    description: "A unique toothbrush holder handcrafted from high-quality ceramic.",
  },
  {
    id: 4,
    name: "Walnut Wood Bath Tray",
    price: 149.99,
    rating: 4,
    reviewCount: 57,
    image: "/placeholder.svg?height=500&width=500",
    description: "A beautiful bath tray made from rich walnut wood.",
  },
]

import { ShieldCheck, Truck, Award } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Premium Materials",
    description: "We source only the finest materials from around the world to create our luxury bathroom utensils.",
    icon: Award,
  },
  {
    id: 2,
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders over $150, carefully packaged to ensure safe delivery.",
    icon: Truck,
  },
  {
    id: 3,
    title: "5-Year Warranty",
    description:
      "Our confidence in our craftsmanship is backed by an industry-leading 5-year warranty on all products.",
    icon: ShieldCheck,
  },
]


