import React from 'react';
import { Product } from './product';
import "./shop.css";
import banner from "../../assets/banner.jpg"
import { useEffect, useState } from "react";

export const Shop = ({searchProduct}) => {

  const [asosData, setAsosData] = useState([]);

  const fetchData = async () => {
    const url =
      "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&q=Nike&currency=USD&sizeSchema=US&lang=en-US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3f11b33958msh11021bf70a609e3p177952jsn2b0db33ebef6",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setAsosData(result.products);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() =>{
    fetchData();
  }, []);

  return (
    <div className="shop">
        <div className="shop-banner">
          <img src={banner} alt='banner'></img>
        </div>
        <div className="products">
        {asosData.filter((val) => {
          if (searchProduct === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchProduct.toLowerCase())) {
            return val;
          } else {
            return null;
          }
        }).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}
