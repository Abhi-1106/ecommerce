import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf } from "lucide-react"
 

export default function Home() {
 
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
                src="/placeholder.svg?height=400&width=600"
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
            {["Fruits & Vegetables", "Dairy & Eggs", "Grains & Cereals", "Snacks & Treats"].map((category) => (
              <Link href={`/products?category=${category.toLowerCase().replace(/ & /g, "-")}`} key={category}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <Image src="/placeholder.svg?height=300&width=300" alt={category} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-center">{category}</h3>
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
            {[
              { id: 1, name: "Organic Avocados", price: 5.99, category: "Fruits & Vegetables" },
              { id: 2, name: "Free-Range Eggs", price: 4.49, category: "Dairy & Eggs" },
              { id: 3, name: "Organic Quinoa", price: 6.99, category: "Grains & Cereals" },
              { id: 4, name: "Organic Trail Mix", price: 7.99, category: "Snacks & Treats" },
            ].map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src="/placeholder.svg?height=300&width=300" alt={product.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="font-bold">${product.price}</p>
                  </div>
                  <Button className="w-full mt-4 bg-green-700 hover:bg-green-800">Add to Cart</Button>
                </CardContent>
              </Card>
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
              },
              {
                title: "Better for Planet",
                description: "Organic farming practices promote biodiversity and soil health.",
              },
              {
                title: "Better for Farmers",
                description: "Fair trade practices ensure farmers receive fair compensation.",
              },
            ].map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-green-700" />
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

