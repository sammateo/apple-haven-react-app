import React from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Footer from './Footer.js';
import NavBar from './Navbar.js';
import Gallery from './Gallery.js';
import './styles.css';

function App(){
    // const service1="Island tours";
    // const desc1="30 minutes • varied depending on your choices";
    const service = [{
        title:"Island tours",desc:"30 minutes • varied depending on your choices",add:"We arrange island tours for you."},
        {title:"Breakfast", desc:"30 minutes • Included",add:"Wake up to delicious breakfast "},
        {title:"Embassy drop",desc:"25 minutes • USD$15.00",add:"We take you to the US Embassy. "},
        {title:"Airport pick up and drop off", desc:"12 minutes • USD $10-15",add:"we can pick you up and drop you off at Grantley Adams Int. Airport. "}
    ];

    
    
    return(
        <div className="container">
            <div className="header-grid"><Header/></div>
            <div className="navbar-grid"><NavBar/></div>
            <div className="content">
                <div className="services-grid">
                    <h1 className="service-header" id="services">Services</h1>
                    <Services serve={service[0].title} description={service[0].desc} add={service[0].add}/>
                    <Services serve={service[1].title} description={service[1].desc} add={service[1].add}/>
                    <Services serve={service[2].title} description={service[2].desc} add={service[2].add}/>
                    <Services serve={service[3].title} description={service[3].desc} add={service[3].add}/>
                </div>
                <div className="gallery-grid">
                    <h1 className="service-header" id="gallery">Gallery</h1>
                    <Gallery/>
                </div>
                <div className="about-grid">
                    <h1 className="service-header" id="about">About</h1>
                    <About/>
                </div>
            </div>
            
            <div className="footer-grid"><Footer/></div>
            
        </div>
        
        )
}

export default App;