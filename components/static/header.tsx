"use client"

import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cart from "../cart/Cart";
import { Badge } from "../ui/badge";
import { useCartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

export default function Header() {
  const { cartElements } = useCartContext();
  const { isAuthenticated } = useContext(UserContext);
  
  return (
    <header className="flex justify-between items-center mb-8">
      <Link href="/" className="text-4xl font-bold">
        Mile of Threads
      </Link>
      <div className="flex items-center space-x-4">
        <span>rus</span>
        {/* <button aria-label="Search">
          <Search className="w-6 h-6" />
        </button> */}
        <Sheet>
          <SheetTrigger>
            <button aria-label="Shopping Cart">
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartElements.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    {cartElements.length}
                  </Badge>
                )}
              </div>
            </button>
          </SheetTrigger>
          <SheetContent>
            <Cart />
          </SheetContent>
        </Sheet>
        <Link href={isAuthenticated ? "/profile" : "/auth"}>
          <button aria-label="User Profile">
            <User className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </header>
  );
}
