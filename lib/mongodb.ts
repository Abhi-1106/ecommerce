import { MongoClient, ObjectId } from "mongodb"
import type { Product, User, Order } from "@/lib/types"

// Connection URL
const url = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(url)
const dbName = "organic-market"

// Database connection
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongo._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  clientPromise = client.connect()
}

// Helper function to get database connection
export async function getDb() {
  const client = await clientPromise
  return client.db(dbName)
}

// Products
export async function getProducts({
  category,
  sort = "featured",
  limit = 20,
  page = 1,
}: {
  category?: string
  sort?: string
  limit?: number
  page?: number
}) {
  const db = await getDb()
  const skip = (page - 1) * limit

  // Build query
  const query: any = {}
  if (category) {
    query.category = category.includes(",") ? { $in: category.split(",") } : category
  }

  // Build sort
  const sortOptions: any = {}
  switch (sort) {
    case "price-low":
      sortOptions.price = 1
      break
    case "price-high":
      sortOptions.price = -1
      break
    case "newest":
      sortOptions.createdAt = -1
      break
    case "featured":
    default:
      sortOptions.featured = -1
      sortOptions.createdAt = -1
  }

  const products = await db.collection("products").find(query).sort(sortOptions).skip(skip).limit(limit).toArray()

  return products as Product[]
}

export async function getProductById(id: string) {
  const db = await getDb()

  try {
    const product = await db.collection("products").findOne({ _id: new ObjectId(id) })

    return product as Product
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

// Users
export async function createUser(userData: Omit<User, "_id" | "createdAt" | "updatedAt">) {
  const db = await getDb()

  const now = new Date()
  const result = await db.collection("users").insertOne({
    ...userData,
    createdAt: now,
    updatedAt: now,
  })

  return result.insertedId
}

export async function getUserByEmail(email: string) {
  const db = await getDb()

  const user = await db.collection("users").findOne({ email })

  return user as User
}

// Orders
export async function createOrder(orderData: Omit<Order, "_id" | "createdAt" | "updatedAt">) {
  const db = await getDb()

  const now = new Date()
  const result = await db.collection("orders").insertOne({
    ...orderData,
    createdAt: now,
    updatedAt: now,
  })

  return result.insertedId
}

export async function getOrdersByUserId(userId: string) {
  const db = await getDb()

  const orders = await db.collection("orders").find({ userId }).sort({ createdAt: -1 }).toArray()

  return orders as Order[]
}

export async function getOrderById(id: string) {
  const db = await getDb()

  try {
    const order = await db.collection("orders").findOne({ _id: new ObjectId(id) })

    return order as Order
  } catch (error) {
    console.error("Error fetching order:", error)
    return null
  }
}

