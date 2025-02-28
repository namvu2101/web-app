"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { ProductsHeader } from "./components/products-header";
import { FormProvider, useForm } from "react-hook-form";
import { ProductGrid } from "./components/products-list";

export default function ProductsPage() {
  const methods = useForm({
    defaultValues: { category: "0", subCategory: "0", search: "" },
  });
  return (
    <SidebarProvider>
      <FormProvider {...methods}>
        <AppSidebar />
        <SidebarInset>
          <div className="p-10">
            <ProductsHeader />
            <ProductGrid />
          </div>
        </SidebarInset>
      </FormProvider>
    </SidebarProvider>
  );
}
