"use client"
import { useEffect, useState } from "react"
import { ICartItem } from "@/lib/interfaces"
import { toast } from "@/components/ui/use-toast"
import CartService from "@/services/CartService"

export function useCart(cartService: CartService) {
  const [cartElements, setCartElements] = useState<ICartItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await cartService.getCartElements()
        
        setCartElements(items)
      } catch (err) {
        console.error(err)
        // setError('There was a problem with your request.')
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: 'There was a problem with your request.'
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [cartService])

  const total = cartElements.reduce((acc, item) => acc + item.price * item.amount, 0)

  const handleIncrement = async (id: string) => {
    try {
      const item = cartElements.find(item => item.id === id)
      if (item) {
        const updatedItem = await cartService.updateQuantity(id, item.amount + 1)
        setCartElements(cartElements.map(item => item.id === id ? updatedItem : item))
      }
    } catch (err) {
      console.error(err)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.'
      })
    }
  }

  const handleDecrement = async (id: string) => {
    try {
      const item = cartElements.find(item => item.id === id)
      if (item && item.amount > 1) {
        const updatedItem = await cartService.updateQuantity(id, item.amount - 1)
        setCartElements(cartElements.map(item => item.id === id ? updatedItem : item))
      }
    } catch (err) {
      console.error(err)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.'
      })
    }
  }

  const handleRemove = async (id: string) => {
    try {
      await cartService.removeFromCart(id)
      setCartElements(cartElements.filter(item => item.id !== id))
    } catch (err) {
      console.error(err)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.'
      })
    }
  }

  return {
    cartElements,
    loading,
    error,
    total,
    handleIncrement,
    handleDecrement,
    handleRemove
  }
}
