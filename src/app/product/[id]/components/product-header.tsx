"use-client";
import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
                {categories.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="justify-start hover:bg-green-100"
                    onClick={() => {
                      push(`/products?category=${item.id}`);
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
