import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux'; // to get value fro store 
const Navbar = () => {
  // useselector hook automatically subscribe the hood
  const item=useSelector((state)=> // as parameter we pass that which item we want to subscribe from store
state.cart // whenever cart will change then we get a new value in item
  )  
  return (
    <div className='container'>
        <span className='logo'>REDUX STORE</span>
        <div >
            <NavLink style={({isActive})=>{return{
              color:isActive? 'yellowgreen' :''
            }
            }} className='NavLink' to='/'>Home</NavLink>
            <NavLink style={({isActive})=>{return{
              color:isActive? 'yellowgreen' :''
            }
            }} className='NavLink' to='/cart'>Cart</NavLink>
            <span className='cartCount'>cart item:{item.length}</span>

        </div>
    </div>
  )
}

export default Navbar