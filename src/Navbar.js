import React from 'react';
import './styles.css';
function Navbar(){
    return(
        <div className="navbar-container">
            <h2><a href="#services">Services</a></h2>
            <h2><a href="#gallery">Gallery</a></h2>
            <h2><a href="#about">About</a></h2>
        </div>
        
    )
}

export default Navbar;