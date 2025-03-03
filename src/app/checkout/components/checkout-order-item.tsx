"use-client";

import { TCart } from "@/context/cart";
import { useFormContext, useWatch } from "react-hook-form";
import { TCheckoutForm } from "../page";
import { MinusIcon, PlusIcon } from "lucide-react";

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

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex gap-4">
        {/* Image */}
        <div className="relative w-[80px] flex-shrink-0">
          <img
            src={item.images[0] || "/placeholder.svg"}
            alt={item.name}
            className="rounded-md bg-gray-100 object-cover w-20 h-20"
          />
          <div className="absolute -top-2 -right-2 bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
            {quantity}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-base mb-2 line-clamp-2">{item.name}</h3>
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
    </div>
  );
}
