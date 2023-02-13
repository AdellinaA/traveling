import React, {Component} from 'react';
import Price from './Price';
import './style.css';

class Europe extends Component {
    constructor(props) {
        super(props);
        this.state = {magicalStatus:'1000$' };

    }

changeMagicalStatus() {
    this.setState({
        magicalStatus:'559$'
    })
}
    render () {
        return (
            <div className='europeDiv'>
               <p>Making a Europe trip will cost {this.props.price}, you will have a nice experience during {this.props.days} and you will travel by {this.props.travelBy}</p>
            <p>Welcome to Europe {this.state.magicalStatus}!</p>
            <button onClick={() => this.changeMagicalStatus() }>Magical Discount %</button>
            <Price price ={this.props.price} days={this.props.days} travelBy={this.props.travelBy}/>
            </div>
        )
    }
}

export default Europe;