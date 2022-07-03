import { createContext, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function cantidadItems() {
    //return cartList.length;
    return cartList.reduce((total, item) => total + item.quantity, 0);
  }

  function addCart(juego, quantity) {
    if(quantity === 0){
      return;
    }

    let existe = isInCart(juego.id);
        
    if(existe) {
      let itemCart = cartList.find(item => item.id === juego.id);
      itemCart.quantity += quantity;
      setCartList([...cartList]);
    }else {
      setCartList([...cartList, {...juego, quantity}]);
    }
  }

  function removeItem(id) {
    setCartList(cartList.filter(item => item.id !== id));
  }

  function clearCart(){
    setCartList([]);
  }

  function isInCart(id){
    return cartList.some(item => item.id === id);   
  }
  
  function montoTotalCart() {    
    return cartList.reduce((total, item) => total + (item.quantity*item.precio), 0);
  }

  function iva() {    
    return montoTotalCart() * 0.2;
  }

  function envio() {   
    if( montoTotalCart() === 0 ) {
      return 0;
    }
    
    return montoTotalCart() + iva() > 10000 ? 0 : 300;
  }

  function total() {    
    return montoTotalCart() + iva() + envio();
  }

  return (
    <CartContext.Provider value={[ cartList, setCartList, cantidadItems, clearCart, addCart, removeItem, montoTotalCart, iva, envio, total ]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;


