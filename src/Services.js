import React from 'react';

function Services(props){
    return(
        <div className="service">
            <h3>{props.serve}</h3>
            <br/>
            <p>{props.description}</p>
            <br></br>
            <p>{props.add}</p>
        </div>
    )
}

export default Services;