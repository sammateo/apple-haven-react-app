import React from 'react';
import './styles.css';
function Header(){
    const imsrc = "https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/535921_1484957621771658_2912224734281683430_n.jpg?_nc_cat=110&ccb=3&_nc_sid=85a577&_nc_ohc=NIPt0vQir50AX9YtCLt&_nc_ht=scontent.fbgi2-1.fna&oh=af574a2be61199d89394b36192a49a89&oe=60589BD5";
    return(
        <div className="head-container">
            <img className="logo"src={imsrc} alt="logo"/>
            <div className="banner">
            
            <h1 >Apple Haven B &amp; B</h1>
        </div>
        
        
        </div>
        
        
        )
}

export default Header;