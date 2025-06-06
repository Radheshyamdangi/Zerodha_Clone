import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import 'react-toastify/ReactToastify.css';
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/signup/Login.jsx";
import Home from "./landing_page/signup/Home.jsx";
import AboutPage from "./landing_page/about/AboutPage";
import SupportPage from "./landing_page/support/SupportPage";
import ProductPage from "./landing_page/product/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import NotFound from "./landing_page/NotFound";
// import Home from "../../dashboard/src/components/Home.js";
import Navbar from "./Navbar";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
  <div style={{background: "linear-gradient(to bottom, white,rgb(194, 152, 95),rgba(211, 216, 115, 0.71),rgba(184, 129, 123, 0.81))"
    }}>
  <Navbar/>
    <Routes>
    
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="about" element={<AboutPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard" element={<Home/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    
    </Routes>
    <Footer/>
    </div>
  </BrowserRouter>
);
