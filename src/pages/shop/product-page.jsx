import React, {useContext, useState} from 'react'
import { useParams } from "react-router";
import { PRODUCTS } from '../../products';
import "..//../components/product-page.css";
import { ShopContext } from '..//../context/shop-context';
import Newsletter from '../../components/newsletter';
import { Footer } from '../../components/footer';

export const ProductPage = () => {
    const { id } = useParams();
    const item = PRODUCTS.filter((item) => item.id === parseInt(id));
    const { addToCart } = useContext(ShopContext);
    const [notify, setNotify] = useState(false);
    const [buyNotify, setBuyNotify] = useState(false);
    

    const showNotify = () => {
      setNotify(!notify);
    }

    const showBuyNotify = () => {
      setBuyNotify(!buyNotify); 
    }

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to the cart &nbsp; ✅</p>
      </div>
      <div
          onAnimationEnd={() => setBuyNotify(false)}
          className={`notify ${buyNotify ? "slide-in" : ""}`}
        >
          <p>Sorry, this page is just for demo. You are not capable to buy.</p>
        </div>
      <div className="product-page-div">
        <div className="product-div">
          <div className="product-left">
            <div className="product-img">
              <img src={item[0].productImage} alt="product" />
            </div>
          </div>
          <div className="product-right">
            <h3 className="product-big-name">{item[0].productName}</h3>
            <p className="product-spec">{item[0].description}</p>
            <p className="product-price">{item[0].price} RON</p>
            <div className="atc-buy">
              <button
                onClick={() => {
                  addToCart(item[0].id);
                  showNotify();
                }}
                className="atc-btn"
              >
                add to cart
              </button>
              <button className="buy-btn" onClick={() => showBuyNotify()}>buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );    
}
