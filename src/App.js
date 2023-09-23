import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import { Categories } from './pages/categories/categories';
import { All } from './components/categories-pages/all';
import { Hoodies } from './components/categories-pages/hoodies';
import { Tshirts } from './components/categories-pages/tshirts';
import { Pants } from './components/categories-pages/pants';
import { Shoes } from './components/categories-pages/shoes';
import { ProductPage } from './pages/shop/product-page';

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
            <Route path="/categories" element={<Categories searchProduct={searchProduct} />}>
              <Route path='all' element={<All />}></Route>
              <Route path='hoodies' element={<Hoodies />}></Route>
              <Route path='t-shirts' element={<Tshirts />}></Route>
              <Route path='pants' element={<Pants />}></Route>
              <Route path='shoes' element={<Shoes />}></Route>
            </Route>
            <Route path="categories/product/:id" element={<ProductPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
