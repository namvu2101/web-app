"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Cart } from "./components/Cart";
import { CartHeader } from "./components/cart-header";

export default function Page() {
  const methods = useForm({ defaultValues: { items: {} } });
  return (
    <div>
      <FormProvider {...methods}>
        <CartHeader/>
        <Cart />
      </FormProvider>
    </div>
  );
}
