import { Injectable, signal } from '@angular/core';
import { Product } from '@features/product/models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartItemsSignal = signal<Product[]>([]);
  public cartItems = this.cartItemsSignal.asReadonly();

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCart = localStorage.getItem('shoppingCart');
      try {
        const parsedCart = storedCart ? JSON.parse(storedCart) : [];
        if (Array.isArray(parsedCart)) {
          this.cartItemsSignal.set(parsedCart);
        } else {
          throw new Error('El carrito no es un arreglo');
        }
      } catch (error) {
        this.cartItemsSignal.set([]);
      }
    } else {
      this.cartItemsSignal.set([]);
    }
  }
  

  getCartItems() {
    return this.cartItems;
  }

  addItem(product: Product) {
    const currentItems = [...this.cartItemsSignal()];

    const existingItemIndex = currentItems.findIndex(item => item.id === product.id);

    if (existingItemIndex > -1) {
      currentItems[existingItemIndex] = {
        ...currentItems[existingItemIndex],
        quantity: (currentItems[existingItemIndex].quantity || 0) + (product.quantity || 1)
      };
      this.cartItemsSignal.set(currentItems);
    } else {
      this.cartItemsSignal.set([...currentItems, { ...product, quantity: product.quantity || 1 }]);
    }

    this.updateLocalStorage();
  }

  removeItem(productId: number) {
    this.cartItemsSignal.update(currentItems => currentItems.filter(item => item.id !== productId));
    this.updateLocalStorage();
  }

  clearCart() {
    this.cartItemsSignal.set([]);
    localStorage.removeItem('shoppingCart');
  }

  getTotal() {
    return this.cartItems().reduce((sum, item) => sum + item.price * (item.quantity ?? 1), 0);
  }

  private updateLocalStorage() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('shoppingCart', JSON.stringify(this.cartItemsSignal()));
    }
  }
  
}