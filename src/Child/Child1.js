import React, { Component } from 'react';
import App from '../App';

class Child1 extends Component {
    // func = (event) => {
    //     this.props.handler(event.target.value);
    // }
    render() {
        return (
            <div>
                <p> Child1 </p>
                {/* <input type="text" onChange={this.func} /> */}
                { this.props.handler("test1") }
            </div>
        );
    }
}
export default Child1;