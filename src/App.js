import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchProduct, setSearchProduct] = useState(""); 


  const handleSearchInput = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearchButton = (event) => {
    event.preventDefault();
    setSearchProduct(searchInput);
  }

  const searchProps = {
    searchInput,
    handleSearchInput,
    handleSearchButton
  }


  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar searchProps={searchProps} />
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
