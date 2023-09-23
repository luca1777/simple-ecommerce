import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } =useContext(ShopContext);

    const cartItemAmount = cartItems[id];


  return (
    <>
      <div className="product">
        <Link to={`/categories/product/${id}`}>
          <img src={productImage} alt="img" />
          <div className="description">
            <p className='title-product'>
              {productName}
            </p>
            <p className="price">{price} RON</p>
          </div>
        </Link>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>(${cartItemAmount})</>}
        </button>
      </div>
    </>
  );
}

export default Product;