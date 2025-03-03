"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useGetCart } from "@/context/cart";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const cart = useGetCart();

  const { push } = useRouter();

  const titles: { title: string; href: string }[] = [
    { title: "Giới thiệu", href: "#" },
    { title: "Sản phẩm", href: "/products" },
    { title: "Liên hệ", href: "#" },
    { title: "Cửa hàng", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif tracking-tight">
          LUXBATH
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {titles.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {titles.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
