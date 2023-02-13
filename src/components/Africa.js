import React from 'react';
import './style.css';



const Africa = (props) => {
    console.log(props);
   
    
    return (
        <div className="africaDiv">
            <p>Traveling to Africa will cost {props.price}, you will stay {props.days} and you will travel by {props.travelBy}</p>
            {/* <Price /> */}
        </div>
    );
};



export default Africa;




// export const Summoning = () => 
// <p>Professor Snape is the potions teachers</p>;
