import { products } from "@/app/data";

export function useGetProducts() {
  return { data: products };
}
