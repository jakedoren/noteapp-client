import React from 'react';
import './Cards.css';

const Card = (props) => {
    return (
        <div className="card" >
            <div className="card-content">
                <img src={props.img} alt={props.imgAlt} className="card-img"/> 
                <p>{props.desc}</p>
            </div>
        </div>
    )
};

export default Card;
