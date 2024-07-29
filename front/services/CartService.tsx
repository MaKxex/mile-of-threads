import PocketBase from 'pocketbase';
import { ICartItem, IProduct } from '../lib/interfaces';
import { getImageUrlByFilename } from '@/lib/scripts';

class CartService {
  private static instance: CartService;
  private pb: PocketBase;
  private userId: string;

  // Private constructor to prevent instantiation
  private constructor(baseUrl: string, userId: string) {
    this.pb = new PocketBase(baseUrl);
    this.userId = userId;
  }

  // Method to get the single instance of CartService
  public static getInstance(baseUrl: string, userId: string): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService(baseUrl, userId);
    }
    return CartService.instance;
  }
  // Fetch cart elements for the user
  async getCartElements(): Promise<ICartItem[]> {
    try {
      const records = await this.pb.collection('order').getList(1, 50, {
        expand: 'product',
        filter: `customer="${this.userId}"`,
        requestKey: null
      });

      
      if (records.items.length === 0) {
        return [];
      }
      
      return records.items.map(record => {
        const product = record.expand?.product;
        if (!product) {
          console.warn(`Product not found for order ${record.id}`);
          return null;
        }
        return {
          id: record.id,
          name: product.name,
          price: product.price,
          size: record.size,
          color: record.color,
          amount: record.amount,
          image: getImageUrlByFilename(product, product.images[0]),
          product:record.expand?.product.id
        };
      }).filter(item => item !== null);
    } catch (err) {
      if (err instanceof Error) {
        if ('isAxiosError' in err) {
          console.error('Network error:', err);
          throw new Error('Network error. Please check your internet connection.');
        }
      }
      console.error('Failed to get cart elements:', err);
      throw new Error(`Failed to fetch cart items: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }

  // Add or update cart item
  async addToCart(product: any, size: string, color: string, amount: number): Promise<ICartItem> {
    if (!product || !product.id || !size || !color || amount <= 0) {
      throw new Error('Invalid input for adding to cart');
    }

    try {
      const existingItems = await this.pb.collection('order').getFullList({
        filter: `customer="${this.userId}" && product.id="${product.id}" && size="${size}" && color="${color}"`,
      });

      if (existingItems.length > 0) {
        const existingItem = existingItems[0];
        const updatedAmount = existingItem.amount + amount;
        return this.updateQuantity(existingItem.id, updatedAmount);
      } else {
        const newItem = {
          customer: this.userId,
          product: product.id,
          size,
          color,
          amount,
          status: 'Pending',
        };

        const createdRecord = await this.pb.collection('order').create(newItem);

        return {
          id: createdRecord.id,
          name: product.name,
          price: product.price,
          size: createdRecord.size,
          color: createdRecord.color,
          amount: createdRecord.amount,
          image: product.image,
          product:product.id
        };
      }
    } catch (err) {
      console.error('Failed to add item to cart:', err);
      throw new Error('Failed to add item to cart.');
    }
  }

  // Remove item from cart
  async removeFromCart(itemId: string): Promise<void> {
    try {
      await this.pb.collection('order').delete(itemId);
    } catch (err) {
      console.error('Failed to remove item from cart:', err);
      throw new Error('Failed to remove item from cart.');
    }
  }

  // Update quantity of a cart item
  async updateQuantity(itemId: string, amount: number): Promise<ICartItem> {
    try {
      const updatedRecord = await this.pb.collection('order').update(itemId, { amount }, {
        expand: 'product',
      });

      return {
        id: updatedRecord.id,
        name: updatedRecord.expand?.product.name ?? 'Unknown Product',
        price: updatedRecord.expand?.product.price ?? 0,
        size: updatedRecord.size ?? 'N/A',
        color: updatedRecord.color ?? 'N/A',
        amount: updatedRecord.amount ?? 0,
        image: getImageUrlByFilename(updatedRecord.expand?.product, updatedRecord.expand?.product.images[0]),
        product:updatedRecord.expand?.product.id
      };
      
    } catch (err) {
      console.error('Failed to update quantity:', err);
      throw new Error('Failed to update quantity.');
    }
  }
}

export default CartService;
