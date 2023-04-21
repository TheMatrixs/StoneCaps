import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import Login from './login';
import MyCart from './myCart'
import Product from './product';
import Shop from './shop';
import './css/app.css';


const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(window.localStorage.getItem('token'));

  return (
    <div id="app">
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<MyCart/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      <Footer />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)