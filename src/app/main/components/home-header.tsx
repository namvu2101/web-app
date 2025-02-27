"use client";

import { Button } from "@/components/ui/button";
import { Heart, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
     <div className="container mx-auto px-4 flex items-center justify-between h-16">
       <Link href="/" className="text-2xl font-serif tracking-tight">
         LUXBATH
       </Link>

       {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-8">
         {["Collections", "New Arrivals", "Bestsellers", "Inspiration"].map((item) => (
           <Link
             key={item}
             href="#"
             className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
           >
             {item}
           </Link>
         ))}
       </nav>

       {/* Action Icons */}
       <div className="flex items-center space-x-4">
         <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
           <Search className="h-5 w-5" />
           <span className="sr-only">Search</span>
         </Button>
         <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
           <Heart className="h-5 w-5" />
           <span className="sr-only">Wishlist</span>
         </Button>
         <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
           <ShoppingCart className="h-5 w-5" />
           <span className="sr-only">Cart</span>
         </Button>
       </div>
     </div>
   </header>
  );
}
