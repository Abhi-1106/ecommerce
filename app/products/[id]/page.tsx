import { Suspense } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getProductById } from "@/lib/mongodb"
import AddToCartButton from "@/components/add-to-cart-button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Leaf } from "lucide-react"
import Link from "next/link"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-8">
      <Link href="/products" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-green-700">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-2 mb-4">
            <div className="flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">
              <Leaf className="h-4 w-4 mr-1" />
              Certified Organic
            </div>
            <span className="text-sm text-muted-foreground ml-4">Category: {product.category}</span>
          </div>

          <p className="text-2xl font-bold mt-2 mb-4">${product.price.toFixed(2)}</p>

          <div className="prose max-w-none mb-6">
            <p>{product.description}</p>
          </div>

          <div className="mt-auto">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">Availability:</p>
              <p className={`font-medium ${product.stock > 0 ? "text-green-700" : "text-red-600"}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
              </p>
            </div>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts currentProductId={product._id} category={product.category} />
        </Suspense>
      </div>
    </div>
  )
}

async function RelatedProducts({
  currentProductId,
  category,
}: {
  currentProductId: string
  category: string
}) {
  const products = await getProducts({ category, limit: 4 })
  const relatedProducts = products.filter((product) => product._id !== currentProductId).slice(0, 3)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {relatedProducts.map((product) => (
        <Link href={`/products/${product._id}`} key={product._id}>
          <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square relative">
              <Image
                src={product.image || "/placeholder.svg?height=300&width=300"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.category}</p>
              <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

function RelatedProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg overflow-hidden">
          <Skeleton className="aspect-square w-full" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-5 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}

// Import this at the top of the file
import { getProducts } from "@/lib/mongodb"

