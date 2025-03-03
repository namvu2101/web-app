import { useEffect, useState } from "react";
import { Product } from "@/app/data";

export type TLikes = Record<string, Product>;

const LIKES_STORAGE_KEY = "likes";

// Function to get Likes from localStorage
const getLikesFromLocalStorage = (): TLikes => {
  if (typeof window !== "undefined") {
    const storedLikes = localStorage.getItem(LIKES_STORAGE_KEY);
    return storedLikes ? JSON.parse(storedLikes) : {};
  }
  return {};
};

// Initialize Likes with data from localStorage
let Likes: TLikes = getLikesFromLocalStorage();

const listeners = new Set<(Likes: TLikes) => void>();

// Function to save Likes to localStorage and notify listeners
const saveLikesToLocalStorage = (updatedLikes: TLikes) => {
  Likes = { ...updatedLikes };
  if (typeof window !== "undefined") {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(Likes));
  }
  listeners.forEach((listener) => listener({ ...Likes }));
};

export const addProductIntoLikes = (product: Product) => {
  const updatedLikes = { ...Likes };
  updatedLikes[product.id] = product;
  saveLikesToLocalStorage(updatedLikes);
};

export const removeProductFromLikes = (productId: string) => {
  const updatedLikes = { ...Likes };
  if (updatedLikes[productId]) {
    delete updatedLikes[productId];
    saveLikesToLocalStorage(updatedLikes);
  }
};

export const updateLikes = (product: Product) => {
  const updatedLikes = { ...Likes };
  if (!updatedLikes[product.id]) {
    updatedLikes[product.id] = product;
  } else {
    delete updatedLikes[product.id];
  }
  saveLikesToLocalStorage(updatedLikes);
};

export const useGetLikes = () => {
  const [state, setState] = useState<TLikes>(getLikesFromLocalStorage());

  useEffect(() => {
    const handleStorageChange = () => {
      setState(getLikesFromLocalStorage());
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
