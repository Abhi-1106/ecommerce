import { getProducts } from "@/lib/mongodb"
import ProductCard from "@/components/product-card"

export default async function ProductList({
  category,
  sort,
}: {
  category?: string
  sort?: string
}) {
  // Fetch products from MongoDB
  const products = await getProducts({ category, sort })

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">Try changing your filters or check back later.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  )
}

