"use client";

import { products } from "@/app/data";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import ảnh từ assets
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import { redirect } from "next/navigation";
import { ProductCard } from "@/app/products/components/product-card";
import Link from "next/link";

export function Body() {
  const images = [image1, image2, image3];
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto chuyển slide mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup khi unmount
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Carousel className="w-full h-full">
            <CarouselContent
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: "transform 1s ease-in-out",
              }}
            >
              {images.map((image, index) => (
                <CarouselItem
                  key={image.src}
                  className="relative w-full h-screen"
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 ease-in-out"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + images.length) % images.length
                )
              }
            />
            <CarouselNext
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % images.length)
              }
            />
          </Carousel>
        </div>

        {/* Overlay Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 drop-shadow-lg">
            Elevate Your Bathroom Experience
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Discover our curated collection of luxury bathroom utensils designed
            for the modern connoisseur
          </p>
          <Button
            className="bg-white text-black hover:bg-white/90 transition-colors"
            size="lg"
            onClick={() => redirect("/products")}
          >
            Mua ngay <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-16">
            Sản phẩm nổi bật
          </h2>
          <div className="flex justify-end w-full p-4">
            <Link
              href="/products"
              className="text-lg font-semibold text-white bg-black px-4 py-2 rounded-lg border-2 border-white hover:bg-white hover:border-black hover:text-black transition duration-300 ease-in-out shadow-md"
            >
              Xem thêm
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
