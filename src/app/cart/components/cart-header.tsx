"use-client";
import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function CartHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif tracking-tight">
          LUXBATH
        </Link>
        <nav className="hidden md:flex">
          {categories.map((item) => (
            <Link key={item.id} href={`/products?category=${item.id}`}>
              <Button
                variant="ghost"
                className="justify-start hover:bg-green-100"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800">
                <Menu size={24} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-2 border border-gray-200 dark:border-gray-700 z-[999] fixed top-12 right-4 motion-safe:animate-fadeIn"
            >
              {categories.map((item) => (
                <DropdownMenuItem
                  key={item.id}
                  className="px-4 z-[999] rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer"
                >
                  <Link href={`/products?category=${item.id}`}>
                    <Button variant="link">{item.name}</Button>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div />
      </div>
    </header>
  );
}
