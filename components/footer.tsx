import Link from "next/link"
import { Leaf, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-700" />
              <span className="font-bold text-xl">Organic Market</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bringing the best organic products directly to your doorstep since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-green-700">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-700">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-700">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=fruits-vegetables"
                  className="text-muted-foreground hover:text-green-700"
                >
                  Fruits & Vegetables
                </Link>
              </li>
              <li>
                <Link href="/products?category=dairy-eggs" className="text-muted-foreground hover:text-green-700">
                  Dairy & Eggs
                </Link>
              </li>
              <li>
                <Link href="/products?category=grains-cereals" className="text-muted-foreground hover:text-green-700">
                  Grains & Cereals
                </Link>
              </li>
              <li>
                <Link href="/products?category=snacks-treats" className="text-muted-foreground hover:text-green-700">
                  Snacks & Treats
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-green-700">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-green-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-green-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-green-700">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-green-700">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-green-700">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-green-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-green-700">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Organic Market. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <Mail className="h-5 w-5 text-muted-foreground mr-2" />
            <span className="text-sm text-muted-foreground">info@organicmarket.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

