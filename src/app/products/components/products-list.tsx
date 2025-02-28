import { products } from "@/app/data";
import { ProductCard } from "@/app/products/components/product-card";
import { useWatch } from "react-hook-form";

export function ProductGrid() {
  const categoryId = useWatch({ name: "category", exact: true });
  const subCategoryId = useWatch({ name: "subCategory", exact: true });
  const search = useWatch({ name: "search", exact: true });
  const filter = products.filter((p) => {
    if (categoryId === "0") {
      return products;
    }
    if (categoryId !== "0" && subCategoryId === "0") {
      return p.category_id === categoryId;
    }
    if (subCategoryId != 0) {
      return p.subcategory_id === subCategoryId && p.category_id === categoryId;
    }
    return [];
  });

  const searchData = () => {
    if (search.length != 0) {
      return filter.filter((p) =>
        p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
    return filter;
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
      {searchData().map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
