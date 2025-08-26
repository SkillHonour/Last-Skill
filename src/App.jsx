import React from "react";
import Home from "./component/Home/Home";
import Service from "./component/Service/Service";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";
import Testimonials from "./component/Testimonials/Testimonials";
import Footer from "./component/Footer/foot";
import Navbar from "./component/Navbar/Navbar";
import Portfolio from "./component/Portfolio/portfolio";
import ScrollToTop from "./component/Scrolltop/scrolltotop";
import { HashRouter as Router,Route, Link, Routes } from "react-router-dom";

export default function App(){
  return(
     <Router>
     <Navbar/>
     <ScrollToTop/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>} />
       <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<About/>}/>
         <Route path="/content" element={<Contact/>}/>
       <Route path="/testimonial" element={<Testimonials/>}/>
        
     </Routes>
     <Footer/>
     </Router>
  );
}

