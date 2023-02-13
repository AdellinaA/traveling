import React from 'react';
import './style.css';

const America = (props) => {
    return (
        <div className='americaDiv'>
            <p>Visiting Niagara waterfall will cost {props.price}, you will stay {props.days} and you will travel by {props.travelBy}</p>
        </div>
    );
};


export default America;




// export const Summoning = () =>
// <p>Professor Snape is the potions teachers</p>;
