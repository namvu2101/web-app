"use-client";
import { categories } from "@/app/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function CartHeader() {
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
