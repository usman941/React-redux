import React from 'react'
// getting data from store
// whenever we need to change the store then we need to dispatch the store 
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice'
const Cart = () => {
const products=useSelector((state)=>state.cart) // it will give us a whole state of application
 
const dispatch=useDispatch();
const handleRemove=(productId)=>dispatch(remove(productId))

return (
   <>
   <h3>Cart</h3>
   <div className='cartWrapper'>
    {
        products.map((product)=>
        
        <div className='card'>
          
          <img src={product.image} alt=""/>
          <h4>{product.title}</h4>
          <h5>Rs: {product.price}</h5>
          
          <button onClick={()=>handleRemove(product.id)} className='btn'>Remove</button>
      </div>
      )
    }
   </div>
   </>
  )
}

export default Cart