"use-client";
import { categories } from "@/app/data";
import { FormInput } from "@/components/forms/form-input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, Search } from "lucide-react";
import React from "react";
import { useWatch } from "react-hook-form";

export function ProductsHeader() {
  const category_id = useWatch({ name: "categorySelected", exact: true });
  const subcategories = categories.find((c) => c.id === category_id)
    ?.subcategories ?? [{ id: "0", name: "Tất cả", href: "#" }];
  return (
    <div className="mx-auto py-4 flex items-center justify-between ">
      <div className="flex gap-2 items-center">
        <FormInput
          type="text"
          name="search"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-[400px]"
        />
        <Search className="text-gray-500" />
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tất cả" />
          </SelectTrigger>
          <SelectContent>
            {subcategories.map((subcategory) => (
              <SelectItem
                key={subcategory.id}
                value={subcategory.id.toString()}
              >
                {subcategory.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Lọc
        </Button>
      </div>
    </div>
  );
}
