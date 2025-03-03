"use-client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu, ShoppingCart, SortDesc } from "lucide-react";
import Link from "next/link";
import { useFormContext, useWatch } from "react-hook-form";
import { ESort, TFormProducts } from "../types";

export function ProductsHeader() {
  const cart = useGetCart();

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
    <div className="mb-6">
      <div className="flex flex-wrap items-center justify-between gap-3 md:gap-6 mb-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-serif tracking-tight">
          LUXBATH
        </Link>

        {/* Menu cho Mobile */}
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
              {categories.map((c) => (
                <DropdownMenuItem
                  key={c.id}
                  className={`px-4 z-[999] rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer ${
                    category_id === c.id && "border-2 border-primary"
                  }`}
                >
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setValue("category", c.id);
                      setValue("subCategory", "0");
                    }}
                  >
                    {c.name}
                  </Button>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-grow">
          <FormInput
            type="text"
            name="search"
            placeholder="Tìm kiếm sản phẩm..."
            className="max-w-[800px]"
          />
        </div>
        <div className="flex gap-3">
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
            <SortDesc className="mr-2 h-4 w-4" />
            <span className=" hidden sm:inline">Sắp xếp</span>
          </Button>
          <div className="flex flex-wrap gap-2 items-center">
            <Link href={"/cart"}>
              <Button variant="outline" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart?.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
                    {cart.length}
                  </span>
                )}
                <span className=" hidden sm:inline">Giỏ hàng</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
