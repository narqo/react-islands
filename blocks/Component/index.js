import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    getNode() {
        return ReactDOM.findDOMNode(this);
    }

    getProps() {
        return {
            className: this.className()
        }
    }
}

export default Component;

