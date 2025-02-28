"use-client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { FormSelect } from "@/components/forms/form-select";
import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";
import { Filter, Search, ShoppingCart } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useWatch } from "react-hook-form";

export function ProductsHeader() {
  const category_id = useWatch({ name: "category", exact: true });
  const cart = useGetCart();
  const { push } = useRouter();

  const getSubCategory = () => {
    const data = categories.find((c) => c.id === category_id)?.subcategories;
    if (!data) {
      return [{ id: "0", name: "Tất cả", href: "#" }];
    }
    return [{ id: "0", name: "Tất cả", href: "#" }, ...data];
  };
  return (
    <div className="mx-auto py-4 flex items-center justify-between">
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
        <FormSelect name="subCategory" items={getSubCategory()} />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Lọc
        </Button>
      </div>
    </div>
  );
}
