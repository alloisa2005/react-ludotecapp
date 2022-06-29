import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
