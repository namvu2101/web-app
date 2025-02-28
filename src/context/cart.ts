import { useEffect, useState } from "react";
import { Product } from "@/app/data";

// Định nghĩa kiểu dữ liệu mới cho giỏ hàng
export type TAddCart = Product & { quantity: number };
export type TCart = Record<string, TAddCart>;

const CART_STORAGE_KEY = "cart";
let cart: TCart = {};

// Hàm lưu giỏ hàng vào localStorage
const saveCartToLocalStorage = (cart: TCart) => {
  listeners.forEach((listener) => listener({ ...cart }));
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const listeners = new Set<(cart: TCart) => void>();

// Thêm sản phẩm vào giỏ hàng
export const addProductIntoCart = (product: Product) => {
  if (cart[product.id]) {
    cart[product.id].quantity += 1;
  } else {
    cart[product.id] = { ...product, quantity: 1 };
  }
  saveCartToLocalStorage(cart);
};

// Xóa sản phẩm khỏi giỏ hàng
export const removeProductFromCart = (productId: string) => {
  if (cart[productId]) {
    delete cart[productId];
    saveCartToLocalStorage(cart);
  }
};

// Giảm số lượng sản phẩm
export const decreaseProductQuantity = (productId: string) => {
  if (cart[productId]) {
    cart[productId].quantity -= 1;
    saveCartToLocalStorage(cart);
  }
};

// Tăng số lượng sản phẩm
export const increaseProductQuantity = (productId: string) => {
  if (cart[productId]) {
    cart[productId].quantity += 1;
    saveCartToLocalStorage(cart);
  }
};

// Hook lấy dữ liệu giỏ hàng
export const useGetCart = () => {
  const [state, setState] = useState<TCart>({});
  useEffect(() => {
    if (localStorage.getItem(CART_STORAGE_KEY)) {
      const storedCart = JSON.parse(
        localStorage.getItem(CART_STORAGE_KEY) ?? "{}"
      );

      setState(storedCart);
    }

    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return Object.values(state);
};
