import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class CustomComponent extends Component {
    render() {
        return (<h1>Hello World!</h1>);
    }
}

const root = document.getElementById('root');

ReactDOM.render(<CustomComponent/>, root);
