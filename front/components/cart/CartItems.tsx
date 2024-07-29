"use cl"
import CartItem from "@/components/cart/CartItem"
import CartService from "@/services/CartService"
import { useCartContext } from '@/contexts/CartContext';
import { toast } from "../ui/use-toast";
import Link from "next/link";

export default function CartItems({
  cartService,
}: {
  cartService: CartService,
}) {
  const { cartElements, setCartElements } = useCartContext();
  
  // if (loading) {
  //   return <p>Loading...</p>
  // }

  const handleIncrement = async (id: string) => {
    try {
      const item = cartElements.find(item => item.id === id);
      if (item) {
        const updatedItem = await cartService.updateQuantity(id, item.amount + 1);
        setCartElements(cartElements.map(item => item.id === id ? updatedItem : item));
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.',
      });
    }
  };

  const handleDecrement = async (id: string) => {
    try {
      const item = cartElements.find(item => item.id === id);
      if (item && item.amount > 1) {
        const updatedItem = await cartService.updateQuantity(id, item.amount - 1);
        setCartElements(cartElements.map(item => item.id === id ? updatedItem : item));
      }
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.',
      });
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await cartService.removeFromCart(id);
      setCartElements(cartElements.filter(item => item.id !== id));
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: 'There was a problem with your request.',
      });
    }
  }

  return (
    <div className="grid gap-4">
      {cartElements.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}
          />
      ))}
    </div>
  )
}
