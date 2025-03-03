"use-client";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TFormProduct } from "../page";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProductImage() {
  const { setValue, control, getValues } = useFormContext<TFormProduct>()
  const productData = getValues("product")
  const selectedImage = useWatch({ control, name: "indexImage", exact: true })
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, []) // Removed unnecessary dependencies

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -80 : 80
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setTimeout(checkScroll, 300)
    }
  }
  return (
    // <div className="space-y-4">
    //   <div className="max-w-md mx-auto overflow-hidden rounded-lg border border-border bg-white">
    //     <img
    //       src={productData.images[selectedImage ?? 0] || "/placeholder.svg"}
    //       alt={productData.name}
    //       className="w-full h-auto object-contain aspect-square p-2"
    //     />
    //   </div>
    //   <div className="flex flex-wrap justify-center gap-2">
    //     {(productData.images || []).map((image, index) => (
    //       <div
    //         key={index}
    //         className={`w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:shadow-md ${
    //           selectedImage === index ? "border-blue-700 shadow-lg" : "border-border hover:border-blue-300"
    //         }`}
    //         onClick={() => setValue("indexImage", index)}
    //       >
    //         <img
    //           src={image || "/placeholder.svg"}
    //           alt={`${productData.name} view ${index + 1}`}
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="space-y-4">
      <div className="max-w-md mx-auto overflow-hidden rounded-lg border border-border bg-white">
        <img
          src={productData.images[selectedImage ?? 0] || "/placeholder.svg"}
          alt={productData.name}
          className="w-full h-auto object-contain aspect-square p-2"
        />
      </div>
      <div className="relative max-w-md mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={checkScroll}
        >
          {productData.images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 hover:shadow-md ${
                selectedImage === index ? "border-blue-700 shadow-lg" : "border-border hover:border-blue-300"
              }`}
              onClick={() => setValue("indexImage", index)}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${productData.name} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {canScrollLeft && (
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
        {canScrollRight && (
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
