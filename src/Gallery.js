import React from 'react';
import room1 from './Photos/room1.jpg';
import room2 from './Photos/room2.jpg';
import room3 from './Photos/room3.jpg';
import room4 from './Photos/room4.jpg';
import './styles.css'

function Gallery(){
    const sunset1="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/89831576_2546029685664441_2602127552852000768_o.jpg?_nc_cat=101&ccb=3&_nc_sid=110474&_nc_ohc=TpT7MxlY-OUAX-aPF9j&_nc_ht=scontent.fbgi2-1.fna&oh=3d210ebc6b912214744f5b1917252bf3&oe=605BC305";
    const sunset2="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/89947419_2546029678997775_8175964379628437504_o.jpg?_nc_cat=102&ccb=3&_nc_sid=110474&_nc_ohc=uXJlUssebH4AX9zHCYf&_nc_ht=scontent.fbgi2-1.fna&oh=1e606f8871a806e5ba410b50cba6ea76&oe=6059EDCD";
    const beach1="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/532919_1485002161767204_2674812992049004475_n.jpg?_nc_cat=104&ccb=3&_nc_sid=8024bb&_nc_ohc=inVzVcLIWe4AX-Ev_fF&_nc_oc=AQn_etwQZY8ir0XVSq3wS1A4gT7au8xUp5cWojxHGSO8Dn_OJAI5_uFeqSj9eJZfNnA&_nc_ht=scontent.fbgi2-1.fna&oh=d28c00286c1fc791c3baf91bc56f8c0a&oe=6058B7E6";
    const beach2="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/10305034_1485001225100631_2697245768726860255_n.jpg?_nc_cat=107&ccb=3&_nc_sid=8024bb&_nc_ohc=AE5eeRMDPm4AX_OhY8F&_nc_ht=scontent.fbgi2-1.fna&oh=fad3666b46b782de153be7c749c9666d&oe=6059609D";
    // const house1="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/89388366_2538903856377024_2955193973620080640_o.jpg?_nc_cat=111&ccb=3&_nc_sid=dd9801&_nc_ohc=1sBBffELyNUAX_T7zwG&_nc_ht=scontent.fbgi2-1.fna&oh=633e568f329a11c2720c4d4523b7b7c5&oe=605A87E3";
    // const house2="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/s960x960/89115414_2535566030044140_6209411305623781376_o.jpg?_nc_cat=109&ccb=3&_nc_sid=8024bb&_nc_ohc=Y-opF3ztXCsAX9L7jTu&_nc_ht=scontent.fbgi2-1.fna&tp=7&oh=62f88aa74929572e728502e36108a622&oe=605A8523";
    // const house3="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/89197375_2535557906711619_4987008727795105792_o.jpg?_nc_cat=110&ccb=3&_nc_sid=8024bb&_nc_ohc=veA-nAcUgbYAX_kTRA1&_nc_ht=scontent.fbgi2-1.fna&oh=09b416191ab9f3ebb34396d130270de3&oe=605CA0E5";
    // const house4="https://scontent.fbgi2-1.fna.fbcdn.net/v/t1.0-9/s960x960/89069134_2535565970044146_5367209368959844352_o.jpg?_nc_cat=100&ccb=3&_nc_sid=8024bb&_nc_ohc=JPvVSv6tNVwAX8q1kky&_nc_ht=scontent.fbgi2-1.fna&tp=7&oh=551174462fbf3dd064ecee7c4f948402&oe=6059E18D";
    // 
    return(
        <div className="image-grid">
            <img className="img" src={sunset1} alt="sunset1"/>
            <img className="img" src={sunset2} alt="sunset2"/>
            <img className="img" src={beach1} alt="beach1"/>
            {/* <img className="img" src={house1} alt="house1"/> */}
            {/* <img className="img" src={house2} alt="house2"/> */}
            {/* <img className="img" src={house3} alt="house3"/> */}
            <img className="img" src={beach2} alt="beach2"/>
            {/* <img className="img" src={house4} alt="house4"/> */}
            <img className="img" src={room1} alt="room1"/>
            <img className="img" src={room2} alt="room2"/>
            <img className="img" src={room3} alt="room3"/>
            <img className="img" src={room4} alt="room4"/>
        </div>
        
        )
}
export default Gallery;