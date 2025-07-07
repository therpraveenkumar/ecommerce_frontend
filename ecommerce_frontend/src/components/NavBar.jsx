import React, { useState } from 'react';
import '../assets/style.css';
function NavBar() {

  return (
          <nav className="navbar">
              <ul>
                    <li><a href="/"><img src="/vite.svg" alt="Logo"/></a></li>
                    <li><a href="#home">Shirt</a></li>
                    <li><a href="#products">T-shirt</a></li>
                    <li><a href="#about">Saree</a></li>
                    <li><a href="#contact">Pant</a></li>
                    <li><a href="#cart">Phone</a></li>
                    <li><a href="#login">Laptop</a></li>
                    <li><a href="#signup">Watch</a></li>
                    <li><a href="#blog">Bag</a></li>
                    <li><a href="#faq">Shoes</a></li>
                    <li><a href="/authentication">Sign-in</a></li>
                    <li><a href="/show-products">Search</a></li>
              </ul>
          </nav>
  );
}

export default NavBar;
