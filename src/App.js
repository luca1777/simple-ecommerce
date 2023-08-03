import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  const [searchProduct, setSearchProduct] = useState(""); 


  const handleSearchProduct = (event) => {
    setSearchProduct(event.target.value)
  }

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar handleSearchProduct={handleSearchProduct} />
          <Routes>
            <Route path="/" element={<Shop searchProduct={searchProduct} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
