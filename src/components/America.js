import React from 'react';

const America = (props) => {
    console.log(props);
   
    
    return (
        <div>
            <p>Visiting Niagara waterfall will cost {props.price}, you will stay {props.days} and you will travel by {props.travelBy}</p>
        </div>
    );
};


export default America;




// export const Summoning = () => 
// <p>Professor Snape is the potions teachers</p>;
