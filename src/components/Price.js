import React from 'react';



const Price = (props) => {
    console.log(props);
   
    
    return (
        <div>
            <p>Traveling around the world in this period has a good Discount {props.price}</p>
            <p>Making a Europe trip will cost {props.price}, you will have a nice experience during {props.days} and you will travel by {props.travelBy}</p>
        </div>
    );
};


export default Price;

