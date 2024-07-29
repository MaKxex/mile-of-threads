"use client"

import { Button } from "@/components/ui/button"
import CartService from "@/services/CartService"
import Link from "next/link"
import CartItems from "@/components/cart/CartItems"
import { useCartContext } from "@/contexts/CartContext"
import { useState } from "react"

export default function Cart() {
  const { cartElements, setCartElements } = useCartContext();
  const cartService = CartService.getInstance(process.env.NEXT_PUBLIC_BACKEND_URL!, 'p1s45wz56xpf0bq') // замените 'current_user_id' на ID текущего пользователя
  // if (loading) {
  //   return <p>Loading...</p>
  // }

  // if (error) {
  //   return <p>{error}</p>
  // }

  const total = cartElements.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <CartItems cartService={cartService} />
      <div className="flex items-center justify-between mt-4">
        <div className="font-medium">Total</div>
        <div className="font-medium">${total.toFixed(2)}</div>
      </div>
      <div className="flex items-center justify-end mt-4">
        <Link href='/checkout'>
          <Button className="bg-black text-white">Checkout</Button>
        </Link>
      </div>
    </div>
  )
}
