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
    <div className="flex flex-col sm:flex-row items-start border-b py-4">
      <div className="flex items-start mb-4 sm:mb-0 flex-grow w-full sm:w-auto">
        <img
          src={item.images[0] || "/placeholder.svg"}
          alt={item.name}
          className="w-24 h-24 object-cover mr-4 rounded-md"
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-base sm:text-lg line-clamp-2 max-w-[200px] sm:max-w-[300px] md:max-w-[400px]" title={item.name}>
            {item.name}
          </h3>
          <p className="text-primary font-semibold mt-1">
            {Convert.numberWithCommas(item.price)} vnđ
          </p>
        </div>
      </div>
      
      <div className="flex justify-between items-end w-full sm:w-auto sm:ml-auto mt-4 sm:mt-0">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            disabled={quantity == 1}
            onClick={() => decreaseProductQuantity(item.id)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-2 min-w-[40px] text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => increaseProductQuantity(item.id)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          onClick={() => removeProductFromCart(item.id)}
          variant="ghost"
          size="sm"
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="h-4 w-4 mr-2" />
        </Button>
      </div>
    </div>
  );
}
