"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  CreditCard,
  MinusIcon,
  PlusIcon,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Footer } from "../main/components/home-footer";
import { ProductHeader } from "../product/[id]/components/product-header";
import { FormProvider, useForm } from "react-hook-form";
import { TAddCart, TCart, useGetCart } from "@/context/cart";
import { CheckoutMain } from "./components/checkout-main";
import { useGetLocation } from "./modules/useGetLocation";

export type TCheckoutForm = {
  info: {};
  total: number;
  type: "card" | "banking" | "cod";
  shipType: "standard" | "express";
  products: TAddCart[];
  quantity: Record<string, number>;
};

export default function CheckoutPage() {
  const cart = useGetCart();
  const {data} = useGetLocation();
  console.log(data);
  
  const methods = useForm<TCheckoutForm>({
    defaultValues: {
      info: {},
      total: 0,
      products: cart ?? [],
      quantity: {},
      shipType: "standard",
      type: "card",
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
