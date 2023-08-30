import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const {id, name, price, imageUrl} = props.data;
    const { addToCart, cartItems } =useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    console.log(props.data)

  return (
    <div className="product">
        <img src={`http://${imageUrl}`} alt="img" />
        <div className="description">
            <p><b>{name}</b></p>
            <p>${price.current.value}</p>
        </div>
        <button className="addToCartBtn" onClick={() => addToCart(id)} >
          Add To Cart {cartItemAmount > 0 && <>(${cartItemAmount})</>}
          </button>
    </div>
  )
}
