"use client"
import { ICartItem } from '@/lib/interfaces';
import CartService from '@/services/CartService';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';


interface CartContextType {
  cartElements: ICartItem[];
  setCartElements: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  addToCart: (product: any, size: string, color: string, amount: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, amount: number) => Promise<void>;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const cartService = CartService.getInstance(process.env.NEXT_PUBLIC_BACKEND_URL!, 'p1s45wz56xpf0bq');
  const [cartElements, setCartElements] = useState<ICartItem[]>([]);

  const fetchCartItems = async () => {
    try {
      const cartItems = await cartService.getCartElements();
      setCartElements(cartItems);
    } catch (error) {
      console.error("Failed to fetch cart items", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  
  // Обновление корзины после добавления нового элемента
  const addToCart = async (product: any, size: string, color: string, amount: number) => {
    try {
      await cartService.addToCart(product, size, color, amount);
      fetchCartItems(); // Обновление состояния после добавления
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  // Удаление элемента из корзины и обновление состояния
  const removeFromCart = async (itemId: string) => {
    try {
      await cartService.removeFromCart(itemId);
      fetchCartItems(); // Обновление состояния после удаления
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  // Обновление количества элемента в корзине
  const updateQuantity = async (itemId: string, amount: number) => {
    try {
      await cartService.updateQuantity(itemId, amount);
      fetchCartItems(); // Обновление состояния после изменения количества
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartElements, setCartElements, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
