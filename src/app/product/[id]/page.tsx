"use-client";
import { Product } from "@/app/data";
import ProductView from "./components/product-view";

export type TFormProduct = {
  quantity: number;
  indexImage: number;
  product: Product;
  color: string;
};
export default function ProductPage() {
  return <ProductView />;
}
