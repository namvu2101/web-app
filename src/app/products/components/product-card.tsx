"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Product } from "@/app/data";
import { Convert } from "@/lib/utils";
import { addProductIntoCart } from "@/context/cart";
import { useRouter } from "next/navigation";
import { updateLikes, useGetLikes } from "@/context/likes";

export function ProductCard({ product }: Readonly<{ product: Product }>) {
  const { push } = useRouter();
  const likes = useGetLikes();

  const [isAdding, setIsAdding] = useState(false);
  const isLiked = likes.find((i) => i.id === product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addProductIntoCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <motion.div
      key={product.id}
      layoutId={`product-${product.id}`}
      onClick={() => {
        push(`/product/${product.id}`);
      }}
      className="group cursor-pointer"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-[4/5] bg-white  dark:bg-zinc-900 border-2 rounded-md overflow-hidden">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            updateLikes(product);
          }}
        >
          <Heart
            className="h-4 w-4"
            fill={isLiked ? "green" : "white"}
            color={isLiked && "green"}
          />
        </Button>
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {Convert.numberWithCommas(product.price)} vnđ
      </p>
      <Button
        className="w-full mt-2"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        disabled={isAdding}
      >
        {isAdding ? (
          'Đang thêm ...'
        ) : (
          <>
            <ShoppingCart className="mr-2 h-4 w-4" />
              Thêm vào giỏ
          </>
        )}
      </Button>
    </motion.div>
  );
}
