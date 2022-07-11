import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error from "./Pages/Error/Error";
import CartContextProvider from "./context/CartContext";
import Cart from "./Pages/Cart/Cart";
import Compras from "./Pages/Compras/Compras";


function App() {  

  return (
    <Router>      

      <CartContextProvider>

        <div className="App">
          <NavBar />        

          <Routes>            
            <Route path="/" element={ <ItemListContainer  greeting="Compra tus juegos de mesa favoritos" /> } /> 
            <Route path="/category/:tipo" element={ <ItemListContainer  greeting="Compra tus juegos de mesa favoritos" /> } />
            <Route path="/item/:id" element={ <ItemDetailContainer /> } />          
            <Route path="/cart" element={ <Cart /> } />
            <Route path="/compras" element={ <Compras /> } /> 
            <Route path="*" element={ <Error /> } />          
          </Routes>        
          
          <Footer />
        </div>

      </CartContextProvider>
      
    </Router>
  );
}

export default App;
