"use client";

import { Product } from "@/app/data";
import { Button } from "@/components/ui/button";
import { addProductIntoCart } from "@/context/cart";
import { updateLikes, useGetLikes } from "@/context/likes";
import { Convert } from "@/lib/utils";
import { motion } from "framer-motion";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
      className="group cursor-pointer flex flex-col justify-between h-full"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-46 bg-white dark:bg-zinc-900 border-2 rounded-md overflow-hidden mt-3">
        <img
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2"
            onClick={() => push(`/product/${product.id}`)}
          >
            <Eye size={16} />
            Xem chi tiết
          </Button>
        </div>
      </div>

      <div className="p-3 bg-white">
        <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1 text-gray-800">
          {product.name}
        </h3>
        <div className="flex flex-wrap justify-between items-center">
          <Button
            size="icon"
            variant="outline"
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
          <p className="text-sm font-bold text-primary">
            {Convert.formatPrice(product.price)}
          </p>
        </div>
      </div>
      <Button
        className="w-full mt-auto"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        disabled={isAdding}
      >
        {isAdding ? (
          "Đang thêm ..."
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
