"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";
import { products } from "@/app/data";
import { Convert } from "@/lib/utils";

export function ProductView() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product?.image ?? "/placeholder.svg?height=800&width=800"}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                  selectedImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg?height=200&width=200"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div> */}
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif">{product?.name}</h1>
            <p className="text-2xl font-medium mt-2">
              {Convert.numberWithCommas(product?.price ?? 0)} vnd
            </p>
          </div>

          <Separator />

          <div>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="mr-4">Quantity</span>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={decreaseQuantity}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={increaseQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>

          <Separator />

          <Tabs defaultValue="details">
            <TabsList className="w-full">
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="features" className="flex-1">
                Features
              </TabsTrigger>
              <TabsTrigger value="care" className="flex-1">
                Care
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Dimensions: 4.5" x 3.2" x 8.7"
                    <br />
                    Material: Premium Italian Marble
                    <br />
                    Weight: 1.2 lbs
                    <br />
                    Made in Italy
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {/* {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))} */}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care" className="pt-4">
              <Card>
                <CardContent className="pt-6">
                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {/* {product.care.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))} */}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
