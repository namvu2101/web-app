import { useEffect, useState } from "react";
import { Product } from "@/app/data";

export type TAddCart = Product & { quantity: number };
export type TCart = Record<string, TAddCart>;

const CART_STORAGE_KEY = "cart";

// Function to get cart from localStorage
const getCartFromLocalStorage = (): TCart => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : {};
  }
  return {};
};

// Initialize cart with data from localStorage
let cart: TCart = getCartFromLocalStorage();

const listeners = new Set<(cart: TCart) => void>();

// Function to save cart to localStorage and notify listeners
const saveCartToLocalStorage = (updatedCart: TCart) => {
  cart = { ...updatedCart };
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }
  listeners.forEach((listener) => listener({ ...cart }));
};

export const addProductIntoCart = (product: Product, quantity?: number) => {
  const updatedCart = { ...cart };
  if (updatedCart[product.id]) {
    updatedCart[product.id].quantity += quantity ?? 1;
  } else {
    updatedCart[product.id] = { ...product, quantity: quantity ?? 1 };
  }
  saveCartToLocalStorage(updatedCart);
};

export const removeProductFromCart = (productId: string) => {
  const updatedCart = { ...cart };
  if (updatedCart[productId]) {
    delete updatedCart[productId];
    saveCartToLocalStorage(updatedCart);
  }
};

export const decreaseProductQuantity = (productId: string) => {
  const updatedCart = { ...cart };
  if (updatedCart[productId] && updatedCart[productId].quantity > 1) {
    updatedCart[productId].quantity -= 1;
    saveCartToLocalStorage(updatedCart);
  } else if (updatedCart[productId] && updatedCart[productId].quantity === 1) {
    removeProductFromCart(productId);
  }
};

export const increaseProductQuantity = (productId: string) => {
  const updatedCart = { ...cart };
  if (updatedCart[productId]) {
    updatedCart[productId].quantity += 1;
    saveCartToLocalStorage(updatedCart);
  }
};

export const useGetCart = () => {
  const [state, setState] = useState<TCart>(getCartFromLocalStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      setState(getCartFromLocalStorage());
    };

    listeners.add(setState);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      listeners.delete(setState);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return Object.values(state);
};
