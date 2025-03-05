"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Cart } from "./components/Cart";
import { CartHeader } from "./components/cart-header";
import { Footer } from "../main/components/home-footer";

export default function Page() {
  const methods = useForm({ defaultValues: { items: {} } });
  return (
    <div className="min-h-screen flex flex-col">
      <FormProvider {...methods}>
        <CartHeader />
        <main className="flex-grow">
          <Cart />
        </main>
        <Footer />
      </FormProvider>
    </div>
  );
}
