"use-client";

import { CheckoutInfo } from "./checkout-info";
import { CheckoutOrder } from "./checkout-order";

export function CheckoutMain() {
  return (
    <main className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-10">Thanh toán</h1>
      <div className="grid lg:grid-cols-5 gap-10">
        <CheckoutInfo />
        <CheckoutOrder />
      </div>
    </main>
  );
}
