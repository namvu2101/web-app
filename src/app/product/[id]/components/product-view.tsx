"use client";

import { products } from "@/app/data";
import { useParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { ProductDetail } from "./product-detail";
import { ProductImage } from "./product-images";
import { TFormProduct } from "../page";
import { ProductHeader } from "./product-header";

export function ProductView() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const methods = useForm<TFormProduct>({
    mode: "all",
    defaultValues: { quantity: 1, indexImage: 0, product: product },
  });

  return (
    <div className="container">
      <FormProvider {...methods}>
        <ProductHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 m-16">
          <ProductImage />
          <ProductDetail />
        </div>
      </FormProvider>
    </div>
  );
}

export default ProductView;
