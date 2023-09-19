import React, {createContext, useState} from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [btnName, setBtnName] = useState("All");

    const handleBtnName = (e) => {
      setBtnName(e);
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemCartId in cartItems) {
            if (cartItems[itemCartId] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(itemCartId));
                totalAmount = totalAmount + cartItems[itemCartId] * itemInfo.price;
            }
        }

        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, btnName, handleBtnName };

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
