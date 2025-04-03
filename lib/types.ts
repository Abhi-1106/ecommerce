export interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  stock: number
  featured?: boolean
  createdAt: Date
  updatedAt: Date
}

export interface User {
  _id: string
  name: string
  email: string
  password: string // Hashed
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  createdAt: Date
  updatedAt: Date
}

export interface Order {
  _id: string
  userId: string
  items: {
    productId: string
    name: string
    price: number
    quantity: number
  }[]
  totalAmount: number
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "pending" | "paid" | "failed"
  paymentMethod: string
  createdAt: Date
  updatedAt: Date
}

