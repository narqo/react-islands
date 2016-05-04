import React from 'react';

import App from '../App';
import Menu from './index.js';
import Item from '../Item';
import Group from '../Group';

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
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio"</h3>
                        <Menu size="l" mode="radio" value={this.state.radio} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state.radio.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="check"</h3>
                        <Menu size="l" mode="check" value={this.state.check} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state.check.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="radio-check" value={this.state['radio-check']} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state['radio-check'].join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>small menu</h3>
                        <Menu size="l" mode="radio-check">
                            <Item value="10">10</Item>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="radio-check" value={this.state['radio-check']} onChange={this.onChange}>
                            <Group>
                                <Item value="10">10</Item>
                                <Item value="20" disabled>20</Item>
                                <Item value="30">30</Item>
                            </Group>
                            <Group>
                                <Item value="40">40</Item>
                                <Item value="50">50</Item>
                            </Group>
                            <Item value="60">60</Item>
                            <Item value="70">70</Item>
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
