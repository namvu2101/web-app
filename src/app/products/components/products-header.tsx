"use client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { Menu, Search, ShoppingCart, SortDesc, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import { ESort, TFormProducts } from "../types";
import { useState } from "react";

export function ProductsHeader() {
  const cart = useGetCart();
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { control, setValue } = useFormContext<TFormProducts>();
  const category_id = useWatch({ control, name: "category", exact: true });
  const sort = useWatch({ control, name: "sort", exact: true });

  const getSubCategory = () => {
    const data = categories.find((c) => c.id === category_id)?.subcategories;
    if (!data) {
      return [{ id: "0", name: "Tất cả", href: "#" }];
    }
    return [{ id: "0", name: "Tất cả", href: "#" }, ...data];
  };

  return (
    <div className="mx-auto py-4 flex items-center justify-between">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          {/* Main header row */}
          <div className="flex items-center justify-between h-16">
            {/* Logo - always visible */}
            <Link href="/" className="text-2xl font-serif tracking-tight">
              LUXBATH
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Search bar - hidden on mobile */}
            <div className="hidden md:flex gap-2 items-center py-2">
              <FormInput
                type="text"
                name="search"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-[400px]"
              />
              <Search className="text-gray-500" />
            </div>

            {/* Desktop navigation - hidden on mobile */}
            <div className="hidden md:flex gap-4 items-center">
              <FormSelect
                disabled={category_id === "0"}
                name="subCategory"
                items={getSubCategory()}
              />
              <Button
                variant="outline"
                onClick={() => {
                  if (!sort) {
                    return setValue("sort", ESort.DESC);
                  }
                  setValue("sort", undefined);
                }}
              >
                <SortDesc className="mr-2 h-4 w-4" /> Sắp xếp
              </Button>

              {/* Cart button - always visible */}
              <Button
                variant="ghost"
                onClick={() => push("/cart")}
                className="hover:bg-neutral-100"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline">Giỏ hàng</span>
                {cart.length > 0 && (
                  <div className="top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full ml-1">
                    <span className="text-2">{cart.length}</span>
                  </div>
                )}
              </Button>
            </div>

            {/* Mobile cart button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                onClick={() => push("/cart")}
                className="hover:bg-neutral-100 p-2"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                    <span className="text-2">{cart.length}</span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile menu - only visible when menu is open */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center py-2">
                  <FormInput
                    type="text"
                    name="search"
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full"
                  />
                  <Search className="text-gray-500" />
                </div>
                <FormSelect
                  disabled={category_id === "0"}
                  name="subCategory"
                  items={getSubCategory()}
                />
                <Button
                  variant="outline"
                  onClick={() => {
                    if (!sort) {
                      return setValue("sort", ESort.DESC);
                    }
                    setValue("sort", undefined);
                  }}
                >
                  <SortDesc className="mr-2 h-4 w-4" /> Sắp xếp
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
