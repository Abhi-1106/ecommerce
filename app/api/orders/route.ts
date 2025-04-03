import { NextResponse } from "next/server"
import { createOrder, getOrdersByUserId } from "@/lib/mongodb"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const orders = await getOrdersByUserId(userId)

    return NextResponse.json(orders)
  } catch (error) {
    console.error("Error fetching orders:", error)
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const orderData = await request.json()

    // Validate order data
    if (!orderData.userId || !orderData.items || orderData.items.length === 0) {
      return NextResponse.json({ error: "Invalid order data" }, { status: 400 })
    }

    const orderId = await createOrder(orderData)

    return NextResponse.json({ id: orderId })
  } catch (error) {
    console.error("Error creating order:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

