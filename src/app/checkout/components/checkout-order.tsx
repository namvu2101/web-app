"use-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Convert } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TCheckoutForm } from "../page";
import { CheckoutOrderItem } from "./checkout-order-item";

export function CheckoutOrder() {
  const { control, getValues } = useFormContext<TCheckoutForm>();
  const quantity = useWatch({ control, name: "quantity" });
  const shipping = 0;
  const products = getValues("products");
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * (quantity[item.id] ?? item.quantity),
    0
  );
  const total = useMemo(() => {
    return subtotal + shipping;
  }, [products, quantity, subtotal]);

  return (
    <div className="lg:col-span-2">
      <div className="sticky top-24">
        <h2 className="text-xl font-semibold mb-4">Đơn hàng của bạn</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6 mb-6">
              {products.map((item) => (
                <div key={item.id}>
                  <CheckoutOrderItem item={item} />
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính</span>
                <span>{Convert.formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phí vận chuyển</span>
                <span>
                  {shipping === 0 ? "Miễn phí" : Convert.formatPrice(shipping)}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-3">
                <Input placeholder="Mã giảm giá" className="flex-1" />
                <Button variant="outline">Áp dụng</Button>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between text-lg font-medium">
              <span>Tổng tiền</span>
              <span>{Convert.formatPrice(total)}</span>
            </div>

            <div className="mt-6 p-3 bg-green-50 border border-green-100 rounded-lg text-green-700 text-sm">
              <p>Đơn hàng của bạn đủ điều kiện miễn phí vận chuyển</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
