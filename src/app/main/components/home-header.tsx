"use client";

import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { useGetLikes } from "@/context/likes";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const cart = useGetCart();
  const likes = useGetLikes();

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

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hover:bg-neutral-100">
            <Heart className="h-5 w-5" />
            {likes?.length > 0 && (
              <div className="top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                <span className="text-2">{likes.length}</span>
              </div>
            )}
          </Button>
          <Button
            variant="ghost"
            onClick={() => push("/cart")}
            className="hover:bg-neutral-100"
          >
            <ShoppingCart className="h-5 w-5" />
            Giỏ hàng
            {cart?.length > 0 && (
              <div className="top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                <span className="text-2">{cart.length}</span>
              </div>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
