"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import type { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  return (
    <Card className="overflow-hidden">
      <Link href={`/products/${product._id}`} className="block">
        <div className="aspect-square relative">
          <Image
            src={product.image || "/placeholder.svg?height=300&width=300"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <Link href={`/products/${product._id}`} className="block">
              <h3 className="font-medium">{product.name}</h3>
            </Link>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </div>
        <Button className="w-full mt-2 bg-green-700 hover:bg-green-800" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

