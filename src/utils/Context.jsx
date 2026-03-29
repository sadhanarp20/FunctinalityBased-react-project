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
  },

  //
  {
    id: 7,
    title: " Perfume",
    image: "https://i.pinimg.com/736x/24/39/af/2439af3faffa0ed749610607b9113fd3.jpg",
    category: "Perfume",
    price: 1400,
    description: "Awww🥹🫶I can understand your point and maybe you like strong fragrances, these two have minimal fragrance."
  },
  {
    id: 8,
    title: "Lieka | Robe avec haut - Beige",
    image: "https://i.pinimg.com/1200x/44/22/9c/44229cd6f52b9a53fde7649588a50a02.jpg",
    category: "Women's Clothing",
    price: 3400,
    description: "Découvrez la combinaison parfaite de style et de confort avec Lieka! Vous cherchez des vêtements élégants et confortables qui mettent en valeur votre silhouette?"
  },
  {
    id: 9,
    title: " SHEIN Stylish Shoes",
    image: "https://i.pinimg.com/736x/83/35/20/833520c0956fa7e47e56c4beb38fd864.jpg",
    category: "Shoes",
    price: 2800,
    description: "Comfortable and trendy shoes"
  },
  {
    id: 10,
    title: "Fitbit Versa 4 Premium Fitness Smartwatch",
    image: "https://i.pinimg.com/1200x/1b/dd/aa/1bddaa19d6a629e01505000fbf5dc5c6.jpg",
    category: "Electronics",
    price: 300.90,
    description: "Meet Fitbit Versa 4™—a fitness smartwatch featuring Daily Readiness Score, Active Zone Minutes"
  },
  {
    id: 11,
    title: "Handbag",
    image: "https://i.pinimg.com/1200x/a8/f8/c5/a8f8c50aae4b3bd12b1c81e631d03774.jpg",
    category: "Accessories",
    price: 1500,
    description: "Bolso cuadrado ligero, informal de negocios con estampado de letras y encuadernación en contraste para adolescentes, niñas, mujeres, estudiantes universitarias, novatos y trabajadores de cuello blanco,"
  },
  {
    id: 12,
    title: "Mars Lipstick Set",
    image: "https://i.pinimg.com/736x/2b/8c/55/2b8c55e7a8a600b01ecaf6e465bc9ba6.jpg",
    category: "Makeup",
    price: 500.9,
    description: "looking for the best lip combo?? go for this budget friendly 💗lip gloss combo"
  }
];



   const [products, setproducts] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("products"));

  // agar saved data kam hai to default use karo
  if (!saved || saved.length < defaultProducts.length) {
    return defaultProducts;
  }

  return saved;
  });


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
