import axios from './axios';

import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {

     const defaultProducts = [
  {
    id: 1,
    title: "Luxury Perfume",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
    category: "Perfume",
    price: 1200,
    description: "Long lasting premium fragrance"
  },
  {
    id: 2,
    title: "Designer Kurti",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2",
    category: "Women's Clothing",
    price: 1500,
    description: "Stylish and comfortable kurti"
  },
  {
    id: 3,
    title: "Stylish Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Shoes",
    price: 2200,
    description: "Comfortable and trendy shoes"
  },
  {
    id: 4,
    title: "Smart Watch",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
    category: "Electronics",
    price: 3000,
    description: "Track your fitness and health"
  },
  {
    id: 5,
    title: "Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "Accessories",
    price: 1800,
    description: "Elegant handbag for daily use"
  },
  {
    id: 6,
    title: "Lipstick Set",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    category: "Makeup",
    price: 900,
    description: "Beautiful shades for every occasion"
  }
];


    const [products, setproducts] = useState( 
      JSON.parse(localStorage.getItem("products"))|| []
    );


    useEffect(() => {
      localStorage.setItem("products", JSON.stringify(products));
    }, [products]);



  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
