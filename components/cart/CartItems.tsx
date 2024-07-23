"use cl"
import CartItem from "@/components/cart/cartItem"
import { useCart } from "@/hooks/useCart"
import CartService from "@/services/CartService"

export default function CartItems({
  cartService,
}: {
  cartService: CartService,
}) {
  const { cartElements, handleIncrement, handleDecrement, handleRemove, loading, error } = useCart(cartService)

  console.log(cartElements);
  
  if (loading) {
    return <p>Loading...</p>
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
