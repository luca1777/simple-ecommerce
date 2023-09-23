import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import "./cart.css";
import { useNavigate } from 'react-router-dom';
import Newsletter from '../../components/newsletter';
import { Footer } from '../../components/footer';

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [checkoutNotify, setCheckoutNotify] = useState(false);

  const showNotify = () => {
    setCheckoutNotify(!checkoutNotify);
  }

  return (
    <>
      <div
        onAnimationEnd={() => setCheckoutNotify(false)}
        className={`notify ${checkoutNotify ? "slide-in" : ""}`}
      >
        <p>Sorry, this page is just for demo. You are not capable to buy.</p>
      </div>
      <div className="cart">
        <div className={totalAmount > 0 ? "" : "text-full-cart"}>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            } else {
              return null;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="checkout">
            <p>Subtotal: {totalAmount} RON</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={showNotify}>Checkout</button>
          </div>
        ) : (
          <div className='text-empty-cart'>
            <h1>Your Cart is Empty</h1>
          </div>
        )}
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
