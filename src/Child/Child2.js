import React, { Component } from 'react';
import App from '../App';

class Child2 extends Component {
    render() {
        return (
            <div>
                <p> Child2</p>
                { this.props.data }
            </div>
        );
    }
}
export default Child2;