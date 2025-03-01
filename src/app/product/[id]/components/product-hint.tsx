'use-client'

import React from "react";

export function ProductHint() {
  return (
    <div>
      <h2 className="text-center font-semibold">Sản phẩm liên quan</h2>
      <div className="w-3/4 max-w-full mx-auto flex gap-4 overflow-x-auto scrollbar-hide">
        {Array(4)
          .fill("/placeholder.svg?height=150&width=150")
          .map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-md overflow-hidden border border-border"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
