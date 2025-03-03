"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { ProductsHeader } from "./components/products-header";
import { FormProvider, useForm } from "react-hook-form";
import { ProductGrid } from "./components/products-list";
import { useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const methods = useForm({
    defaultValues: {
      category: categoryId ?? "0",
      subCategory: "0",
      search: "",
    },
  });
  return (
    <SidebarProvider>
      <FormProvider {...methods}>
        <div className="flex flex-col md:flex-row">
          <AppSidebar />
          <div className="flex-grow">
            <SidebarInset>
              <div className="p-4 md:p-6 lg:p-8">
                <ProductsHeader />
                <ProductGrid />
              </div>
            </SidebarInset>
          </div>
        </div>
      </FormProvider>
    </SidebarProvider>
  );
}
