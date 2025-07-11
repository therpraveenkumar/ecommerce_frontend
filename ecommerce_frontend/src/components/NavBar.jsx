import React, { useState } from 'react';
import '../assets/style.css';
function NavBar({params}) {
  const { cart, profile } = params || {};

  function activateSearchBar(event) {
    event.preventDefault();
    const searchBar = document.querySelector('.search-bar');
    const searchIcon = document.querySelector('.search-icon');
    if (searchBar && searchIcon) {
      searchBar.classList.toggle('active');
      searchIcon.classList.toggle('active');
      searchBar.focus();
    }
    
  }

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
                    <input type="text" className="search-bar" placeholder="Search products..."  />
                    <li><a href="/show-products" className="search-icon" onClick={activateSearchBar}><i className="fas fa-search"></i></a></li>
                    {cart ? <li><a href="#cart"><i className="fas fa-shopping-cart"></i></a></li> : null}
                    {profile ? <li><a href="#profile"><i className="fa-solid fa-user"></i></a></li> : null}
              </ul>
          </nav>
  );
}

export default NavBar;
