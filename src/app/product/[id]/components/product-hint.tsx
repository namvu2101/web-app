"use client";

import { useGetProducts } from "@/app/products/modules/useGetProducts";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TFormProduct } from "../page";
import { motion } from "framer-motion";
import { Convert } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

export function ProductHint() {
  const { control } = useFormContext<TFormProduct>();
  const { data } = useGetProducts();
  const product = useWatch({ control, name: "product", exact: true });
  const hints = data.filter(
    (i) => i.category_id === product.category_id && i.id !== product.id
  );

  return (
    <div className="mt-8">
      <div className="flex items-center justify-center mb-6">
        <div className="h-px bg-gray-300 w-16"></div>
        <h2 className="text-center text-lg font-semibold mx-4 text-gray-800">
          Sản phẩm liên quan
        </h2>
        <div className="h-px bg-gray-300 w-16"></div>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {hints.slice(0, 6).map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-40 sm:w-48 rounded-lg overflow-hidden border border-gray-200 shadow-sm snap-center bg-white"
            >
              <Link href={`/product/${product.id}`}>
                <div className="relative h-40 sm:h-48 overflow-hidden group">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="gap-2">
                      <Eye size={16} />
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="p-3 bg-white">
                <h3 className="text-sm font-medium line-clamp-2 h-10 mb-1 text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-primary">
                    {Convert.formatPrice(product.price)}
                  </p>
                  <Link href={`/product/${product.id}`}>
                    <button className="text-gray-500 hover:text-primary transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link href={"/products"}>
          <Button variant="outline" className="px-6 group">
            Xem thêm sản phẩm
            <ArrowRight
              size={16}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Button>
        </Link>
      </div>
    </div>
  );
}
