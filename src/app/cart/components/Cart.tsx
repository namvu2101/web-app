"use client";

import { Button } from "@/components/ui/button";
import { useGetCart } from "@/context/cart";

import Link from "next/link";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { CartItem } from "./CartItem";
import { Convert } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function Cart() {
  const {push} = useRouter();
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
          Giỏ hàng của bàn đang trống
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-4">Tổng đơn hàng</h2>

            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-medium">
                <span>Tổng tiền:</span>
                <span>{Convert.numberWithCommas(totalPrice())} vnđ</span>
              </div>
            </div>
            <Button className="w-full mt-4" onClick={()=>push('/checkout')}>Thanh toán</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
