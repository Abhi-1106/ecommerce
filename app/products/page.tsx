import { Suspense } from "react"
import ProductList from "@/components/product-list"
import ProductFilters from "@/components/product-filters"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string }
}) {
  return (
    <div className="container px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <ProductFilters />

        <div>
          <Suspense fallback={<ProductsLoadingSkeleton />}>
            <ProductList category={searchParams.category} sort={searchParams.sort} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-full" />
          </div>
        ))}
    </div>
  )
}

