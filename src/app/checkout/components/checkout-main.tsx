"use-client";

import { CheckoutInfo } from "./checkout-info";
import { CheckoutOrder } from "./checkout-order";
import { Button } from "@/components/ui/button";

export function CheckoutMain() {
  return (
    <main className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
        Thanh toán
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full lg:w-3/5">
          <CheckoutInfo />
        </div>
        <div className="w-full lg:w-2/5">
          <CheckoutOrder />
        </div>
      </div>
    </main>
  );
}
