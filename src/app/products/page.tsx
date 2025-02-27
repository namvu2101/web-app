"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Products } from "./components/products-list";
import { SidebarNav } from "./components/products-side";
import { ProductsHeader } from "./components/products-header";

export default function ProductsPage() {
  const methods = useForm({ defaultValues: { categorySelected: '1' } });

  return (
    <div className="flex h-screen">
      <FormProvider {...methods}>
        <SidebarNav />
        <div className="container mx-auto px-4 ">
          <ProductsHeader />
        </div>
      </FormProvider>
    </div>
  );
}

