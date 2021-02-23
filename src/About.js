import React from 'react';
import './styles.css';
function About(){
    const direct ="https://wego.here.com/directions/mix//Apple-Haven-B-B,-Saint-Philip,-Barbados:e-eyJuYW1lIjoiQXBwbGUgSGF2ZW4gQiAmIEIiLCJhZGRyZXNzIjoiMjQ0IEFwcGxlIERyaXZlLCBCcmlkZ2V0b3duLCBCYXJiYWRvcyIsImxhdGl0dWRlIjoxMy4xMjEwNTk1NjY3ODgsImxvbmdpdHVkZSI6LTU5LjQ0NDUwMzA3Njg2NSwicHJvdmlkZXJOYW1lIjoiZmFjZWJvb2siLCJwcm92aWRlcklkIjoxNDg0OTUyMjk1MTA1NTI0fQ==?map=13.12106,-59.4445,15,normal&fb_locale=en_US";
    return(
        <div className="about-container">

            <div className="service">
                <p>Apple Haven B &amp; B is a two-bedroom facility in a family home, which offers affordable accommodation, located 15 minutes to beaches and attractions.</p>
                <br/>
                <h5>Category: Bed and Breakfast · Hospitality Service</h5>
            </div>

            <div className="service">
                <h3>FIND US</h3>
                <p>244 Apple Drive, Bridgetown, Barbados</p>
                <a href="https://www.facebook.com/applehavenbandb/">Facebook</a><br/>
                <a href="https://m.me/applehavenbandb">Messenger</a>
                <p>Call (246) 571-6239</p>
                <a href="mailto:applehaven244@yahoo.com">applehaven244@yahoo.com</a>
                <br/>
                <a href="https://www.airbnb.com/rooms/4430964?s=SU8b" target="_blank" rel="noreferrer">airbnb</a>
                <br/><br/>
               <a href={direct} target="_blank" rel="noreferrer"><button>Get Directions</button></a> 
            </div>
            <br></br>

            
        </div>
        )
}

export default About;