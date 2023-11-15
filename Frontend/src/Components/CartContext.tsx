import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
export const CartContext = createContext([]);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    console.log("Retrieved from storage:", savedCart);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // useEffect(() => {
  //   console.log("Saving to storage:", cart);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
