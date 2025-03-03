"use-client";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { TFormProduct } from "../page";

export function ProductImage() {
  const { setValue, control, getValues } = useFormContext<TFormProduct>();
  const productData = getValues("product");
  const selectedImage = useWatch({ control, name: "indexImage", exact: true });
  return (
    // <div className="space-y-4 ">
    //   <div className="w-3/4 max-w-full mx-auto overflow-hidden rounded-lg border border-border bg-white">
    //     <img
    //       src={productData.images[0] || "/placeholder.svg"}
    //       alt={productData.name}
    //       className="w-full h-auto object-cover p-4"
    //     />
    //   </div>
    //   <div className="w-3/4 max-w-full mx-auto grid grid-cols-4 gap-1 md:gap-2 items-center">
    //     {(productData.images || []).map((image, index) => (
    //       <div
    //         key={index}
    //         className={`w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
    //           selectedImage === index ? "border-primary" : "border-border"
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
    //   <ProductHint />
    // </div>
    <div className="space-y-4">
      <div className="w-full overflow-hidden rounded-lg border border-border bg-white">
        <img
          src={productData.images[selectedImage ?? 0] || "/placeholder.svg"}
          alt={productData.name}
          className="w-full h-auto object-cover p-4"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 items-center">
        {(productData.images || []).map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
              selectedImage === index ? "border-blue-700" : "border-border"
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
    </div>
  );
}
