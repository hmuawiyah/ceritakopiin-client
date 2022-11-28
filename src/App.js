import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card} from 'react-bootstrap'
import Navbar1 from './components/Navbar1'
import Home from './components/Home'
import Produk2 from './components/Produk2'
import Tentang from './components/Tentang'
import Faq from './components/Faq'
import AdminView from './components/AdminView'
import './App.css';
import { Routes, Route} from "react-router-dom";

function App() {


  return (
    // <BrowserRouter>
    <div className="App">
        <div class="fixed-top"><Navbar1/></div>
        <div class="container-fluid"> 
          <div class="container">
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Produk" element={<Produk2 />} />
              <Route path="/Tentang" element={<Tentang />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/AdminView" element={<AdminView />} />
            </Routes>
            
          </div>
        </div>

        <div class="row justify-content-center align-items-center mnew mb-5">
            <div class="col-8 fbaru-0 "> <p class="fbaru-1 pnew text-center" > tetap dekat dalam social media kami  
            <span class="fw-semibold fst-italic"><a href="https://www.instagram.com/ceritakopi.in/" target="_blank" class="text-decoration-none"> @ceritakopi.in</a></span></p>
            </div>
        </div>

        <div class="row mnew"></div>

      </div>
      
  );
}


export default App;

