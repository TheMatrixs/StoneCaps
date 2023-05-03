//Shows the customer's shopping cart & order total
import React, { useState, useEffect } from "react";
import axios from "axios";
import './css/cart.css';

const MyCart = () => {
  const [ cartItems, setCartItems ] = useState([]);


  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await axios.get('/api/cart/',
        {
          headers: {
          'Authorization': `Bearer ${window.localStorage.getItem('stoken')}`
          }  
        });
        setCartItems(response.data);
        console.log(response);
      }catch (error) {
        console.log(error);
      }
    }
    getCart();
  }, [])
  
  return(
    <div id='cartbox'>
    <h1 id="carthead" >Cart</h1>
      {
        console.log(cartItems)
        // cartItems != null ?
        // cartItems.map((cartitem, index) => {
        //   return(
        //     <div className='item' key={index}>
        //       {/* <img src={} className="cartpic"/> */}
        //       <div className="middiv">
        //         <h3 className="name"></h3>
        //         <h3 className="price">$</h3>
        //       </div>
        //       <div className="buttdiv">
        //         <button className="butts">Remove</button>
        //       </div>
        //     </div>
        //   )
        // }) :
        // <h1 id="carthead">Loading Cart...</h1>
      }
    </div>
  )
}

export default MyCart;