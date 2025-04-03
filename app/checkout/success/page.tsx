import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 px-4 md:px-6">
      <div className="mx-auto max-w-md text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-700 mb-6" />
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. We've received your order and will begin processing it right away.
        </p>

        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="font-medium mb-4">What happens next?</h2>
          <ol className="text-left space-y-2 text-sm">
            <li className="flex items-start">
              <span className="bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                1
              </span>
              <span>You'll receive an order confirmation email with details of your purchase.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                2
              </span>
              <span>Our team will prepare your items for shipping.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                3
              </span>
              <span>You'll receive a shipping confirmation email once your order is on its way.</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button className="w-full bg-green-700 hover:bg-green-800">Continue Shopping</Button>
          </Link>
          <Link href="/account/orders">
            <Button variant="outline" className="w-full">
              View My Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

