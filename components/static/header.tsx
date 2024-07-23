import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Cart from "../cart/cart"

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8">
      <Link href="/" className="text-4xl font-bold">
        mile of Threads
      </Link>
      <div className="flex items-center space-x-4">
        <span>rus</span>
        <button aria-label="Search">
          <Search className="w-6 h-6" />
        </button>
        <Sheet>
          <SheetTrigger>
            <button aria-label="Shopping Cart">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
          <Cart />
          </SheetContent>
        </Sheet>
        <Link href="/auth">
          <button aria-label="User Profile">
            <User className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </header>
  )
}
