import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Edit = () => {

  const[products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setproduct] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
  });

  const ChangeHandler = (e) =>{
    // console.log(e.target.name, e.target.value);
    setproduct({...product, [e.target.name]: e.target.value})
  };


  useEffect(() => {
     setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
   
  const AddProductHandler = (e) =>{
      e.preventDefault();
        
      if(
        product.title.trim().length <5 || 
        product. image.trim().length <5 ||
        product.category.trim().length <5 || 
        product. price.trim().length <1 || 
        product.description.trim().length <5
        ){
          alert("Each and every input must have atleast 4 characters");
          return;
         }
        

         
         const pi = products.findIndex((p) => p.id == id);

         const copyData = [...products];
         copyData[pi] = {...products[pi], ...product}


       setproducts(copyData);// yeha data base me save huaa
      localStorage.setItem("products", JSON.stringify(copyData)// localStorege jo hai 
         //wo string me data leta hai use hume string me convert karana padega JSON.Stringfy se
        );
      navigate(-1);

  };


  return (
    <div>
      <form onSubmit={AddProductHandler} className=' flex flex-col items-center p-[5%] w-screen h-creen'>
        <h1 className='text-3xl w-1/2 mb-5'>
            Edit Product
        </h1>
         <input
           type="url"
           placeholder='image link'
           className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
           name='image'
           onChange={ChangeHandler}
           value={product && product.image}
         /> 

         <input 
           type="text"
           placeholder='title'
           className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3'
           name='title'
           onChange={ChangeHandler}
           value={product && product.title}
         /> 


        <div className='w-1/2 flex justify-between'>
          <input
           type="text"
           placeholder='category'
           className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
           name='category'
           onChange={ChangeHandler}
           value={product && product.category}
          /> 

         <input 
          type="number"
          placeholder='price'
          className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3'
          name='price'
           onChange={ChangeHandler}
          value={product && product.price}
         /> 
        </div>

       
        <textarea
          name='description'
           onChange={ChangeHandler}
           placeholder='enter product description here...'
           value={product && product.description}
          className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' rows="10">

        </textarea>

        <div className='w-1/2'>
         <button
          className=' py-2 px-6 border rounded border-blue-200 text-blue-300'
          >
           Edit product
         </button>

        </div>
       



    </form>
    </div>
  )
}

export default Edit
