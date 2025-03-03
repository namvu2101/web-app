"use client";

import { useEffect } from "react";

import { useGetCart } from "@/context/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Footer } from "../main/components/home-footer";
import { ProductHeader } from "../product/[id]/components/product-header";
import { CheckoutMain } from "./components/checkout-main";

const checkoutSchema = z.object({
  name: z.string().min(5, "Tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().length(10, "SĐT không đúng"),
  address: z.string().min(1, "Trường này không được để trống"),
  cityId: z.string().min(1, "Trường này không được để trống"),
  districtId: z.string().min(1, "Trường này không được để trống"),
  total: z.number().min(0),
  type: z.enum(["card", "banking", "cod"]),
  shipType: z.enum(["standard", "express"]),
  products: z.array(z.any()), // Bạn có thể thay `z.any()` bằng schema cụ thể của sản phẩm nếu có
  quantity: z.record(z.string(), z.number().min(1)), // Đảm bảo số lượng >= 1
});

export type TCheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const cart = useGetCart();

  const methods = useForm<TCheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cityId: "",
      districtId: "",
      total: 0,
      products: cart ?? [],
      quantity: {},
      shipType: "standard",
      type: "banking",
    },
  });

  useEffect(() => {
    cart.forEach((p) => {
      methods.setValue(`quantity.${p.id}`, p.quantity);
    });
  }, [cart]);

  return (
    <div className="bg-white min-h-screen">
      <FormProvider {...methods}>
        <ProductHeader />
        <CheckoutMain />
      </FormProvider>
      <Footer />
    </div>
  );
}
