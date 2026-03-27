import axios from './axios';

import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
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
