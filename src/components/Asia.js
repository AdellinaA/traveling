import React, {Component} from 'react';
import Price from './Price';

class Asia extends Component {
    constructor(props) {
        super(props);
        this.state = {magicalStatus:'500$' };
        

    }

changeMagicalStatus() {
    this.setState({
        magicalStatus:'300$'
    })
}
    render () {
        return (
            <div>
            <p>Welcome {this.state.magicalStatus}!</p>
            <button onClick={() => this.changeMagicalStatus() }>Magical Discount%</button>
            <Price price='500$' />
            </div>
        )
    }
}

export default Asia