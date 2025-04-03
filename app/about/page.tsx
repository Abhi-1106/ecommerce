import Image from "next/image"
import { Leaf, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About Organic Market</h1>

        <div className="prose max-w-none">
          <p className="lead text-xl text-center mb-8">
            We're on a mission to make organic food accessible to everyone while supporting sustainable farming
            practices.
          </p>

          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src="app\about\Song Cover.jpg?height=400&width=800"
              alt="Organic farm"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p>
            Organic Market was founded in 2010 by a group of passionate farmers and food enthusiasts who believed in the
            power of organic agriculture to transform our food system. What started as a small local co-op has grown
            into an online marketplace connecting organic farmers directly with consumers across the country.
          </p>
          <p>
            Our journey began with a simple idea: make it easier for people to access fresh, organic produce while
            ensuring farmers receive fair compensation for their work. Today, we partner with over 100 certified organic
            farms and producers to bring you the highest quality organic products.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                We support farming practices that protect our soil, water, and biodiversity for future generations.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-2">Health</h3>
              <p className="text-muted-foreground">
                We believe that organic food, free from synthetic pesticides and GMOs, is better for human health.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community</h3>
              <p className="text-muted-foreground">
                We foster connections between farmers and consumers, creating a more transparent food system.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
          <p>
            Every product on our platform is certified organic, meaning it's grown and processed according to federal
            guidelines addressing soil quality, animal raising practices, pest and weed control, and use of additives.
          </p>
          <p>
            We're committed to transparency in our supply chain, fair pricing for farmers, and reducing our
            environmental footprint through sustainable packaging and carbon-neutral shipping options.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Join Our Community</h2>
          <p>
            When you shop with Organic Market, you're not just buying groceries – you're joining a community of people
            who care about the future of food. Follow us on social media for recipes, farmer stories, and tips for
            living a more sustainable lifestyle.
          </p>
        </div>
      </div>
    </div>
  )
}

