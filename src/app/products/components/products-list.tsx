"use client";

import { categories, products } from "@/app/data";
import { ProductCard } from "@/app/products/components/products-card";
import { useWatch } from "react-hook-form";
import { useMemo } from "react";

export function ProductGrid() {
  const categoryId = useWatch({ name: "category", exact: true });
  const subCategoryId = useWatch({ name: "subCategory", exact: true });
  const search = useWatch({ name: "search", exact: true });
  const sort = useWatch({ name: "sort", exact: true });

  // Lọc theo danh mục
  const filterByCategory = useMemo(() => {
    if (categoryId === "0") return products;
    if (subCategoryId === "0")
      return products.filter((p) => p.category_id === categoryId);
    return products.filter(
      (p) => p.category_id === categoryId && p.subcategory_id === subCategoryId
    );
  }, [categoryId, subCategoryId]);

  // Lọc theo tìm kiếm
  const filterBySearch = useMemo(() => {
    if (!search) return filterByCategory;
    return filterByCategory.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, filterByCategory]);

  // Sắp xếp sản phẩm theo giá
  const sortedProducts = useMemo(() => {
    if (!sort) return filterBySearch;
    return [...filterBySearch].sort((a, b) => a.price - b.price);
  }, [sort, filterBySearch]);
  const categoryName = categories.find((c) => c.id === categoryId)?.name ?? "";
  return (
    <div className="items-center">
      <span>{categoryName}</span>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
