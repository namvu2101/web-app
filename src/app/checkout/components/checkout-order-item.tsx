"use-client";

import { TCart } from "@/context/cart";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import { TCheckoutForm } from "../page";

export function CheckoutOrderItem({ item }: Readonly<TCart>) {
  const { setValue, control } = useFormContext<TCheckoutForm>();
  const quantity = useWatch({
    control,
    name: `quantity.${item.id}`,
    exact: true,
  });

  const increaseQuantity = () => {
    setValue(`quantity.${item.id}`, quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity == 1) return;
    setValue(`quantity.${item.id}`, quantity - 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="flex gap-4">
      <div className="relative">
        <img
          src={item.images[0] || "/placeholder.svg"}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md bg-gray-100 object-cover"
        />
        <div className="absolute -top-2 -right-2 bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
          {quantity}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <div className="flex items-center gap-2 mt-2">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={decreaseQuantity}
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="text-sm">{quantity}</span>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={increaseQuantity}
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">{formatPrice(item.price)}</p>
        <p className="text-sm text-gray-500 mt-2">
          {formatPrice(item.price * quantity)}
        </p>
      </div>
    </div>
  );
}
