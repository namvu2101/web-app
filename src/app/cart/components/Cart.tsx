"use client";

import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";

import { Convert } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CartItem } from "./CartItem";

export function Cart() {
  const cart = useGetCart();
  const { setValue } = useFormContext();

  useEffect(() => {
    cart.forEach((item) => {
      setValue(`items.${item.id}.quantity`, item.quantity);
    });
  }, [cart]);
  const totalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif mb-4">
          Giỏ hàng của bạn đang trống
        </h1>
        <p className="mb-8">
          Có vẻ như bạn chưa thêm bất kỳ sản phẩm nào vào giỏ hàng.
        </p>
        <Link href="/products">
          <Button>Tiếp tục mua sắm</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif mb-8">Giỏ hàng</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg sticky top-20">
            <h2 className="text-xl font-medium mb-4">Tổng đơn hàng</h2>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-medium">
                <span>Tổng tiền:</span>
                <span>{Convert.formatPrice(totalPrice())}</span>
              </div>
            </div>
            <Link href={"/checkout"}>
              <Button variant="outline" className="w-full mt-4">
                Thanh toán
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
