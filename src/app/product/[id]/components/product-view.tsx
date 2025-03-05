"use client";

import { products } from "@/app/data";
import { useParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { TFormProduct } from "../page";
import { ProductDetail } from "./product-detail";
import { ProductHeader } from "./product-header";
import { ProductImage } from "./product-images";
import { ProductHint } from "./product-hint";

export function ProductView() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const methods = useForm<TFormProduct>({
    mode: "all",
    defaultValues: { quantity: 1, indexImage: 0, product: product },
  });

  return (
    <div className="container mx-auto px-4">
      <FormProvider {...methods}>
        <ProductHeader />
        <div className="flex flex-col md:flex-row gap-8 mt-20 md:mt-24">
          <div className="w-full md:w-1/2">
            <ProductImage />
          </div>
          <div className="w-full md:w-1/2">
            <ProductDetail />
          </div>
        </div>
        <div className="w-full">
          <ProductHint />
        </div>
      </FormProvider>
    </div>
  );
}

export default ProductView;
