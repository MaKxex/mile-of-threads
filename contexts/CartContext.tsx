"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ICartItem } from '@/lib/interfaces';
import CartService from '@/services/CartService';
import { toast } from '@/components/ui/use-toast';

// Интерфейс контекста
interface CartContextType {
  cartElements: ICartItem[];
  loading: boolean;
  error: string | null;
  total: number;
  handleIncrement: (id: string) => Promise<void>;
  handleDecrement: (id: string) => Promise<void>;
  handleRemove: (id: string) => Promise<void>;
}

// Контекст
const CartContext = createContext<CartContextType | undefined>(undefined);

// Провайдер контекста
export const CartProvider: React.FC<{ children: ReactNode; cartService: CartService }> = ({ children, cartService }) => {
  const [cartElements, setCartElements] = useState<ICartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await cartService.getCartElements();
        setCartElements(items);
      } catch (err) {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: 'There was a problem with your request.',
        });
        setError('There was a problem with your request.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cartService]);

  const total = cartElements.reduce((acc, item) => acc + item.price * item.amount, 0);

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
  };

  const value = {
    cartElements,
    loading,
    error,
    total,
    handleIncrement,
    handleDecrement,
    handleRemove,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Хук для использования контекста
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
