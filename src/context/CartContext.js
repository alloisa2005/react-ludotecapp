import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function cantidadItems() {
    return cartList.length;
  }

  function addCart(item, quantity) {
    let existe = isInCart(item.id);
  }

  function removeItem(id) {}

  function clearCart(){
    setCartList([]);
  }

  function isInCart(id){
    let existe = cartList.find(item => item.id === id);
    if(existe){
      return true;
    }else {
      return false;
    }
  }
  return (
    <CartContext.Provider value={[ cartList, setCartList, cantidadItems, clearCart, addCart, removeItem ]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;


