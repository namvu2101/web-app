"use-client";
import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ProductHeader() {
  const cart = useGetCart();
  const { push } = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif tracking-tight">
          LUXBATH
        </Link>
        <nav className="hidden md:flex">
          {categories.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="justify-start hover:bg-green-100"
              onClick={() => push(`/products?category=${item.id}`)}
            >
              {item.name}
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link href={"/cart"}>
            <Button
              variant="outline"
              onClick={() => push("/cart")}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cart?.length > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                  {cart.length}
                </span>
              )}
              <span className=" hidden sm:inline">Giỏ hàng</span>
            </Button>
          </Link>

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
        </div>
      </div>
    </header>
  );
}
