import React, {createContext, useEffect, useState} from 'react';
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
    const storedCart = localStorage.getItem("cartItems");
    const initialCart = storedCart ? JSON.parse(storedCart) : getDefaultCart();
    const [cartItems, setCartItems] = useState(initialCart);
    const [btnName, setBtnName] = useState("All");

    const handleBtnName = (e) => {
      setBtnName(e);
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };
    
    useEffect(() => {
        const json = localStorage.getItem("cartItems");
        
        if(json) {
            const savedCart = JSON.parse(json);
            setCartItems(savedCart);
        }
    }, []);
    
    useEffect(() => {
        const json = JSON.stringify(cartItems);
        localStorage.setItem("cartItems", json);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const itemCartId in cartItems) {
            if (cartItems[itemCartId] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(itemCartId));
                totalAmount = totalAmount + cartItems[itemCartId] * itemInfo.price;
            } 
        }

        console.log(totalAmount);
        return totalAmount;
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
