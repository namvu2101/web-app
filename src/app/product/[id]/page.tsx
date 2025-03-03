"use-client";
import React from "react";
import { Product } from "@/app/data";
import { FormProvider, useForm } from "react-hook-form";
import ProductView from "./components/product-view";

export type TFormProduct = {
  quantity: number;
  indexImage: number;
  product: Product;
};
export default function ProductPage() {
  return <ProductView />;
}
