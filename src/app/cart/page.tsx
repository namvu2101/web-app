"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Cart } from "./components/Cart";

export default function Page() {
  const methods = useForm({ defaultValues: { items: {} } });
  return (
    <div>
      <FormProvider {...methods}>
        <Cart />
      </FormProvider>
    </div>
  );
}
