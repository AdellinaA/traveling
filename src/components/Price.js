import React from 'react';
import './style.css';



const Price = (props) => {
    console.log(props);
   
    
    return (
        <div className='priceDiv'>
            <p>Traveling around the world in this period has a good Discount {props.price}</p>
            <p>Making a Europe trip will cost {props.price}, you will have a nice experience during {props.days} and you will travel by {props.travelBy}</p>
        </div>
    );
};


export default Price;

