"use-client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { useGetLikes } from "@/context/likes";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { Filter, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ProductHeader() {
  const cart = useGetCart();
  const likes = useGetLikes();
  const { push } = useRouter();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif tracking-tight">
          LUXBATH
        </Link>
        <div className="flex">
          {categories.map((item) => {
            return (
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
            );
          })}
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" size="icon" className="hover:bg-neutral-100">
            <Heart className="h-5 w-5" />
            {likes.length > 0 && (
              <div className="top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-xl">
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
            {cart.length > 0 && (
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
