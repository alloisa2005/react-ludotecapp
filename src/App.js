import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Error from "./Pages/Error/Error";
import CartDetailContainer from "./Pages/CartDetailContainer/CartDetailContainer";

function App() {
  return (
    <Router>

      <div className="App">
        <NavBar />        

        <Routes>
          <Route path="/" element={ <ItemListContainer  greeting="Compra tus juegos de mesa favoritos" /> } />
          <Route path="/category/:tipo" element={ <ItemListContainer  greeting="Compra tus juegos de mesa favoritos" /> } />
          <Route path="/item/:id" element={ <ItemDetailContainer /> } />          
          <Route path="/cart" element={ <CartDetailContainer /> } />
          <Route path="*" element={ <Error /> } />          
        </Routes>        
        
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
