"use-client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { addProductIntoCart } from "@/context/cart";
import { Convert } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import {
  Check,
  Minus,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { TFormProduct } from "../page";
import Link from "next/link";

export function ProductDetail() {
  const { setValue, control, getValues } = useFormContext<TFormProduct>();
  const productData = getValues("product");
  const quantity = useWatch({ control, name: "quantity", exact: true });
  const color = useWatch({ control, name: "color", exact: true });
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setValue("quantity", getValues("quantity") - 1);
    }
  };
  const increaseQuantity = () => {
    setValue("quantity", getValues("quantity") + 1);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-medium">{productData.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= productData.star
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(12 đánh giá)</span>
        </div>
        <p className="text-2xl font-medium mt-3">
          {Convert.numberWithCommas(productData.price)} vnd
        </p>
      </div>

      <Separator />

      <div>
        <p className="text-muted-foreground">{productData.description}</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Màu sắc:</span>
            <div className="flex gap-2">
              {(productData?.colors || ["white", "black"]).map(
                (item: string, index: number) => (
                  <Button
                    key={item + `${index}`}
                    variant="ghost"
                    style={{ backgroundColor: item, position: "relative" }}
                    onClick={() => setValue("color", item)}
                    className={`rounded-full cursor-pointer border border-border w-8 h-8 flex items-center justify-center 
        ${color === item ? "border-2 border-yellow-500" : ""}`}
                  >
                    {color === item && (
                      <Check className="w-4 h-4 text-yellow-500" />
                    )}
                  </Button>
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Số lượng:</span>
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                disabled={quantity === 1}
                onClick={decreaseQuantity}
                className="h-10"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={increaseQuantity}
                className="h-10"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Link href={`/checkout?id=${productData.id}&quantity=${quantity}`}>
            <Button size="lg" className="w-full">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Mua ngay
            </Button>
          </Link>

          <Button
            className="w-full"
            size="lg"
            onClick={() =>
              productData &&
              quantity > 0 &&
              addProductIntoCart(productData, quantity, color)
            }
            disabled={!productData || quantity <= 0}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline"> Thêm vào giỏ hàng</span>
            <span className="md:hidden"> Thêm </span>
          </Button>
        </div>
      </div>
      <div className="flex gap-4 text-sm justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
            <path d="M16.5 9.4 7.55 4.24"></path>
            <polyline points="3.29 7 12 12 20.71 7"></polyline>
            <line x1="12" y1="22" x2="12" y2="12"></line>
            <circle cx="18.5" cy="15.5" r="2.5"></circle>
            <path d="M20.27 17.27 22 19"></path>
          </svg>
          <span>Giao hàng miễn phí</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          <span>Bảo hành 12 tháng</span>
        </div>
      </div>
      <Separator />
      <Card>
        <CardTitle className="text-center">Chi tiết</CardTitle>
        <CardContent>
          <p className="text-sm mb-4">{productData.description}</p>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-muted-foreground">Kích thước:</span>
              <span>4.5 x 3.2 x 8.7</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Chất liệu:</span>
              <span>Premium Italian Marble</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Trọng lượng:</span>
              <span>1.2 lbs</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Xuất xứ:</span>
              <span>Made in Italy</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
