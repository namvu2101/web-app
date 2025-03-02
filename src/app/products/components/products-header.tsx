"use-client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { useGetLikes } from "@/context/likes";
import {
  Filter,
  Heart,
  Search,
  ShoppingCart,
  SortAsc,
  SortDesc,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormContext, useWatch } from "react-hook-form";
import { ESort, TFormProducts } from "../page";

export function ProductsHeader() {
  const cart = useGetCart();
  const likes = useGetLikes();
  const { push } = useRouter();

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
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-serif tracking-tight">
            LUXBATH
          </Link>
          <div className="flex gap-2 items-center py-2">
            <FormInput
              type="text"
              name="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-[400px]"
            />
            <Search className="text-gray-500" />
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" className="hover:bg-neutral-100">
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
      </header>
    </div>
  );
}
