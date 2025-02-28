"use client";

import { Button } from "@/components/ui/button";
import {
  TAddCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "@/context/cart";
import { Convert } from "@/lib/utils";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useWatch } from "react-hook-form";

export function CartItem({ item }: Readonly<{ item: TAddCart }>) {
  const name = `items.${item.id}.quantity`;
  const quantity = useWatch({ name, exact: true });
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-500">
            {Convert.numberWithCommas(item.price)} vnđ
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          disabled={quantity == 1}
          onClick={() => decreaseProductQuantity(item.id)}
        >
          <Minus />
        </Button>
        <Button variant="outline" className="m-2">
          {quantity}
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => increaseProductQuantity(item.id)}
        >
          <Plus className="h-4 w-4" />
        </Button>

        <Button
          onClick={() => removeProductFromCart(item.id)}
          variant="ghost"
          size="icon"
          className="ml-4"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
