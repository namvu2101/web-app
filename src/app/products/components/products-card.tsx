"use client";

import type { Product } from "@/app/data";
import { Button } from "@/components/ui/button";
import { addProductIntoCart } from "@/context/cart";
import { Convert } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ProductCard({ product }: Readonly<{ product: Product }>) {
  const [isAdding, setIsAdding] = useState(false);
  const handleAddToCart = () => {
    setIsAdding(true);
    addProductIntoCart(product);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <motion.div
      key={product.id}
      layoutId={`product-${product.id}`}
      className="group cursor-pointer flex flex-col justify-between h-full w-full"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative h-40 sm:h-44 md:h-46 lg:h-52 bg-white dark:bg-zinc-900 border-2 rounded-md overflow-hidden mt-2 sm:mt-3">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="secondary"
              className="gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <Eye size={16} />
              <span className="xs:inline">Xem chi tiết</span>
            </Button>
          </div>
        </div>

        <div className="p-2 sm:p-3 bg-white dark:bg-zinc-900">
          <h3 className="text-xs sm:text-sm font-medium line-clamp-2 h-8 sm:h-10 mb-1 text-gray-800 dark:text-gray-200">
            {product.name}
          </h3>
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-xs sm:text-sm font-bold text-primary">
              {Convert.formatPrice(product.price)}
            </p>
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
            </motion.div>
          </div>
        </div>
      </Link>
      <Button
        className="w-full mt-1 sm:mt-auto text-xs sm:text-sm py-1 sm:py-2 h-auto"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
        disabled={isAdding}
      >
        <ShoppingCart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
        <span className="ms:hidden">Thêm vào giỏ</span>
      </Button>
    </motion.div>
  );
}
