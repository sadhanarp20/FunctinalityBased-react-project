import axios from './axios';

import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState( 
      JSON.parse(localStorage.getItem("products"))|| null
    );


    //axios put karege
    // const getproducts = async () =>{
    //  try {
    //     const{data}= await axios("/products");
    //     setproducts(data);  
    //  } catch (error) {
    //     console.log(error);
    //  }

    // };  //esaki jagah hum khud ka data layege ab 


    // console.log(products)
    // //call karege data
    //  useEffect(()=>{
    //     getproducts();
    // },[]);



  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context
