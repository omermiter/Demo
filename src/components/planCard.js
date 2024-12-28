import React from 'react';
import "../styles/planCard.css"


function Card(props){
    return (
        <div className='card-cont'>
            <h1>{props.name}</h1>
            <p className='planDesc'>{props.desc}</p>
            <h2>Valid For: {props.valid}</h2>
            <h2>${props.price}</h2>
            <a className='cta'>Buy Now</a>
        </div>
    )
}


export default Card;