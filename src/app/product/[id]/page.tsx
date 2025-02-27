import { ProductView } from "@/components/product-view"

// This would typically come from a database or API
const product = {
  id: 1,
  name: "Marble Soap Dispenser",
  price: 89.99,
  description:
    "Elevate your bathroom experience with our premium Marble Soap Dispenser. Crafted from the finest Italian Carrara marble, each piece features unique veining patterns, making it a one-of-a-kind addition to your space.",
  features: [
    "Made from premium Italian Carrara marble",
    "Unique veining patterns in each piece",
    "Brass pump mechanism for smooth dispensing",
    "Non-slip base to prevent movement",
    "Generous 12oz capacity",
    "Refillable design for sustainability",
  ],
  care: [
    "Clean with a soft, damp cloth",
    "Avoid harsh cleaning chemicals that may damage the marble",
    "Periodically clean the pump mechanism with warm water",
    "Apply marble sealant every 6-12 months to maintain finish",
    "Keep away from acidic substances like lemon juice or vinegar",
  ],
  images: [
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
    "/placeholder.svg?height=800&width=800",
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the product data based on the ID
  // const { id } = params;

  return (
    <div>
      <ProductView product={product} />
    </div>
  )
}

