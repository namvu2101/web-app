"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Footer } from "../main/components/home-footer";
import { ProductHeader } from "../product/[id]/components/product-header";
import { CheckoutMain } from "./components/checkout-main";
import { CheckoutQR } from "./components/checkout-qrCode";
import { EPaymentType, EShipType } from "./types";

const checkoutSchema = z.object({
  name: z.string().min(5, "Tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().length(10, "SĐT không đúng"),
  address: z.string().min(1, "Trường này không được để trống"),
  cityId: z.string().min(1, "Trường này không được để trống"),
  districtId: z.string().min(1, "Trường này không được để trống"),
  total: z.number().min(0),
  type: z.enum([EPaymentType.banking, EPaymentType.cod]),
  shipType: z.enum([EShipType.standard, EShipType.express]),
  products: z.array(z.any()),
  quantity: z.record(z.string(), z.number().min(1)),
  qrCode: z.string(),
});

export type TCheckoutForm = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const methods = useForm<TCheckoutForm>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cityId: "",
      districtId: "",
      total: 0,
      products: [],
      quantity: {},
      shipType: EShipType.standard,
      type: EPaymentType.banking,
    },
  });

  return (
    <div className="bg-white min-h-screen">
      <FormProvider {...methods}>
        <ProductHeader />
        <CheckoutMain />
        <CheckoutQR />
      </FormProvider>
      <Footer />
    </div>
  );
}
