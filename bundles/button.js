import React from 'react';
import { render, findDOMNode } from 'react-dom';
import Button from '../components/Button';

class Example extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            popup1Visible: false,
            popup2Visible: false,
            popup3Visible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click!');
    }

    render() {
        return (
            <div className="example">
                {this.renderButton()}
            </div>
        );
    }

    renderButton() {
        return (
            <div>
                <Button name="btn1" theme="islands" size="s" onClick={this.handleClick}>Click me!</Button>
                <span>&nbsp;</span>
                <Button name="btn2-disabled" theme="islands" size="s" disabled={true} onClick={this.handleClick}>Try click me!</Button>
            </div>
        );
    }
}

render(React.createElement(Example), document.getElementById('root'));
