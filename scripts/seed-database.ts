import { MongoClient } from "mongodb"
import * as bcrypt from "bcryptjs";


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

    // Seed products
    const products = [
      {
        name: "Organic Avocados",
        description:
          "Fresh, ripe avocados grown without pesticides. Rich in healthy fats and perfect for salads, sandwiches, or guacamole.",
        price: 5.99,
        category: "fruits-vegetables",
        image: "/images/avocado.jpg",
        stock: 50,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Free-Range Eggs",
        description:
          "Farm-fresh eggs from free-range chickens. These eggs come from hens raised in open pastures with natural diets.",
        price: 4.49,
        category: "dairy-eggs",
        image: "/images/eggs.jpg",
        stock: 100,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Quinoa",
        description:
          "Nutrient-rich quinoa grown using organic farming practices. High in protein and fiber, perfect for salads and sides.",
        price: 6.99,
        category: "grains-cereals",
        image: "/images/quinoa.jpg",
        stock: 75,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Trail Mix",
        description:
          "A delicious blend of organic nuts, seeds, and dried fruits. Perfect for on-the-go snacking or hiking adventures.",
        price: 7.99,
        category: "snacks-treats",
        image: "/images/trail-mix.jpg",
        stock: 60,
        featured: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Spinach",
        description:
          "Fresh, crisp organic spinach leaves. Packed with iron, vitamins, and antioxidants for a nutritious addition to any meal.",
        price: 3.49,
        category: "fruits-vegetables",
        image: "/images/spinach.jpg",
        stock: 40,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Almond Milk",
        description:
          "Creamy, dairy-free almond milk made from organic almonds. Perfect for smoothies, cereal, or drinking straight.",
        price: 4.99,
        category: "dairy-eggs",
        image: "/images/almond-milk.jpg",
        stock: 30,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Brown Rice",
        description:
          "Wholesome, organic brown rice rich in fiber and nutrients. A versatile staple for countless healthy meals.",
        price: 5.49,
        category: "grains-cereals",
        image: "/images/brown-rice.jpg",
        stock: 80,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Dark Chocolate",
        description: "Rich, indulgent dark chocolate made with organic cacao. A guilt-free treat high in antioxidants.",
        price: 4.29,
        category: "snacks-treats",
        image: "/images/dark-chocolate.jpg",
        stock: 45,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Blueberries",
        description:
          "Sweet, juicy organic blueberries bursting with flavor and antioxidants. Perfect for snacking or baking.",
        price: 6.49,
        category: "fruits-vegetables",
        image: "/images/blueberries.jpg",
        stock: 35,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Greek Yogurt",
        description:
          "Creamy, protein-rich Greek yogurt made from organic milk. A versatile ingredient for breakfast, snacks, or cooking.",
        price: 5.29,
        category: "dairy-eggs",
        image: "/images/greek-yogurt.jpg",
        stock: 50,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Oats",
        description: "Hearty, fiber-rich organic oats. Perfect for a nutritious breakfast or baking healthy treats.",
        price: 3.99,
        category: "grains-cereals",
        image: "/images/oats.jpg",
        stock: 90,
        featured: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic Fruit Bars",
        description:
          "Chewy, naturally sweet fruit bars made with 100% organic fruits. A convenient, healthy snack on the go.",
        price: 4.99,
        category: "snacks-treats",
        image: "/images/fruit-bars.jpg",
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

