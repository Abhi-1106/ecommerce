import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProducts } from "@/lib/mongodb"
import FeaturedProductCard from "@/components/featured-product-card"

export default async function Home() {
  // Fetch featured products
  const featuredProducts = await getProducts({ limit: 4 })

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9f4]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-green-800">
                  Pure Nature, Delivered to Your Door
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Discover our range of certified organic products. Healthy for you, better for the planet.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="bg-green-700 hover:bg-green-800">Shop Now</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-green-700 text-green-700">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                alt="Organic products"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                name: "Fruits & Vegetables",
                image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Dairy & Eggs",
                image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=2070&auto=format&fit=crop",
              },
              {
                name: "Grains & Cereals",
                image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop",
              },
              {
                name: "Snacks & Treats",
                image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2069&auto=format&fit=crop",
              },
            ].map((category) => (
              <Link href={`/products?category=${category.name.toLowerCase().replace(/ & /g, "-")}`} key={category.name}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 bg-[#f8f9f4]">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <FeaturedProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button variant="outline" className="border-green-700 text-green-700">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Why Choose Organic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Better for Health",
                description: "Organic products are grown without harmful pesticides and chemicals.",
                image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Better for Planet",
                description: "Organic farming practices promote biodiversity and soil health.",
                image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Better for Farmers",
                description: "Fair trade practices ensure farmers receive fair compensation.",
                image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                  <Image src={benefit.image || "/placeholder.svg"} alt={benefit.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

