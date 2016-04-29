import React from 'react';

import App from '../App';
import Menu from './index.js';
import MenuItem from './MenuItem';

class Example extends React.Component {

    constructor(props) {
        super(props);

        //  FIXME: Сейчас в конструкторе Menu value обрабатывается.
        //  Например, для mode="radio" если value пустое, то берется first child,
        //  а если в value больше одного элемента, то опять же, берется первый элемент value.
        //  Но при выводе в div это начальное значение, получается расхождение между
        //  переданным value и реальным, в стейте меню.
        this.state = {
            'radio': ['30', '40'],
            'check': ['30', '40'],
            'radio-check': ['30', '40']
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <h3>no mode</h3>
                        <Menu size="l">
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio"</h3>
                        <Menu size="l" mode="radio" value={this.state.radio} onChange={this.onChange}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                        <div>Checked: {this.state.radio.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="check"</h3>
                        <Menu size="l" mode="check" value={this.state.check} onChange={this.onChange}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                        <div>Checked: {this.state.check.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="radio-check" value={this.state['radio-check']} onChange={this.onChange}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                        <div>Checked: {this.state['radio-check'].join(', ')}</div>
                    </div>

                </div>
            </App>
        );
    }

    onChange(value, menuProps) {
        this.setState({
            [menuProps.mode]: value
        });
    }
}

export default Example;
