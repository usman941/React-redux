import React, { useEffect, useState } from 'react';
// we need a hook to dispatach the action
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice'; // importing add function from cartSlice 
const Products = () => {
const[product,setproduct]=useState([]);
useEffect(()=>{
    const fetchProduct=async ()=>{
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json() // converting in json format
        console.log(data); 
        console.log(data.price); 
        setproduct(data);
    }
    fetchProduct()
},[]);
const dispatch=useDispatch(); // to use dispatch fuction

const handleAdd=(product)=>{
// store product to Redux Store
//1st --> how we store data
dispatch(add(product)) // calling add function and passing payload (product)
}
  return (
    <>
      <div className='productwrapper'>
    {
      product.map((productitem)=>
        <div className='card' key={productitem.id}>
          
          <img src={productitem.image} alt=""/>
          <h4>{productitem.title}</h4>
          <h5>Rs: {productitem.price}</h5>
          
          <button onClick={()=>handleAdd(productitem)} className='btn'>Add to cart</button>
        </div>
      )
    }
      </div>
    </>
  )
}

export default Products