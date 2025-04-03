import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"

// This script will seed the database with initial data
async function seedDatabase() {
  // Connection URL
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error("MONGODB_URI environment variable is not set")
    process.exit(1)
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log("Connected to MongoDB")

    const db = client.db("organic-market")

    // Clear existing collections
    await db.collection("products").deleteMany({})
    await db.collection("users").deleteMany({})

    console.log("Cleared existing collections")

    // Seed products with real images and rupee prices (1 USD = 75 INR)
    const products = [
      {
        name: "Organic Avocados",
        description:
          "Fresh, ripe avocados grown without pesticides. Rich in healthy fats and perfect for salads, sandwiches, or guacamole.",
        price: 449, // ₹449 (was $5.99)
        category: "fruits-vegetables",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=2075&auto=format&fit=crop",
        stock: 50,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Free-Range Eggs",
        description:
          "Farm-fresh eggs from free-range chickens. These eggs come from hens raised in open pastures with natural diets.",
        price: 335, // ₹335 (was $4.49)
        category: "dairy-eggs",
        image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=2071&auto=format&fit=crop",
        stock: 100,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Quinoa",
        description:
          "Nutrient-rich quinoa grown using organic farming practices. High in protein and fiber, perfect for salads and sides.",
        price: 525, // ₹525 (was $6.99)
        category: "grains-cereals",
        image: "https://images.unsplash.com/photo-1612549225454-f96211bfb793?q=80&w=2070&auto=format&fit=crop",
        stock: 75,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Trail Mix",
        description:
          "A delicious blend of organic nuts, seeds, and dried fruits. Perfect for on-the-go snacking or hiking adventures.",
        price: 599, // ₹599 (was $7.99)
        category: "snacks-treats",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=2074&auto=format&fit=crop",
        stock: 60,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Spinach",
        description:
          "Fresh, crisp organic spinach leaves. Packed with iron, vitamins, and antioxidants for a nutritious addition to any meal.",
        price: 260, // ₹260 (was $3.49)
        category: "fruits-vegetables",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2080&auto=format&fit=crop",
        stock: 40,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Almond Milk",
        description:
          "Creamy, dairy-free almond milk made from organic almonds. Perfect for smoothies, cereal, or drinking straight.",
        price: 375, // ₹375 (was $4.99)
        category: "dairy-eggs",
        image: "https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=2070&auto=format&fit=crop",
        stock: 30,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Brown Rice",
        description:
          "Wholesome, organic brown rice rich in fiber and nutrients. A versatile staple for countless healthy meals.",
        price: 410, // ₹410 (was $5.49)
        category: "grains-cereals",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=2070&auto=format&fit=crop",
        stock: 80,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Dark Chocolate",
        description: "Rich, indulgent dark chocolate made with organic cacao. A guilt-free treat high in antioxidants.",
        price: 320, // ₹320 (was $4.29)
        category: "snacks-treats",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=2070&auto=format&fit=crop",
        stock: 45,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Blueberries",
        description:
          "Sweet, juicy organic blueberries bursting with flavor and antioxidants. Perfect for snacking or baking.",
        price: 485, // ₹485 (was $6.49)
        category: "fruits-vegetables",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=2069&auto=format&fit=crop",
        stock: 35,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Greek Yogurt",
        description:
          "Creamy, protein-rich Greek yogurt made from organic milk. A versatile ingredient for breakfast, snacks, or cooking.",
        price: 395, // ₹395 (was $5.29)
        category: "dairy-eggs",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=2070&auto=format&fit=crop",
        stock: 50,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Oats",
        description: "Hearty, fiber-rich organic oats. Perfect for a nutritious breakfast or baking healthy treats.",
        price: 299, // ₹299 (was $3.99)
        category: "grains-cereals",
        image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?q=80&w=2070&auto=format&fit=crop",
        stock: 90,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Fruit Bars",
        description:
          "Chewy, naturally sweet fruit bars made with 100% organic fruits. A convenient, healthy snack on the go.",
        price: 375, // ₹375 (was $4.99)
        category: "snacks-treats",
        image: "https://images.unsplash.com/photo-1582461833047-2aeb4f8af173?q=80&w=2069&auto=format&fit=crop",
        stock: 70,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    const result = await db.collection("products").insertMany(products)
    console.log(`${result.insertedCount} products inserted`)

    // Create a demo user
    const hashedPassword = await bcrypt.hash("password123", 10)
    const demoUser = {
      name: "Demo User",
      email: "demo@example.com",
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection("users").insertOne(demoUser)
    console.log("Demo user created")

    console.log("Database seeded successfully")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await client.close()
    console.log("MongoDB connection closed")
  }
}

// Run the seed function
seedDatabase()

