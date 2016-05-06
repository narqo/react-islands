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
            a: ['30', '40'],
            b: ['30', '40'],
            c: ['30', '40'],
            d: ['30', '40']
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
                            <Item value="10" disabled>10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio"</h3>
                        <Menu size="l" mode="radio" name="a" value={this.state.a} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state.a.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="check"</h3>
                        <Menu size="l" mode="check" name="b" value={this.state.b} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state.b.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="radio-check" name="c" value={this.state.c} onChange={this.onChange}>
                            <Item value="10">10</Item>
                            <Item value="20" disabled>20</Item>
                            <Item value="30">30</Item>
                            <Item value="40">40</Item>
                            <Item value="50">50</Item>
                        </Menu>
                        <div>Checked: {this.state.c.join(', ')}</div>
                    </div>

                    <div className="example">
                        <h3>small menu</h3>
                        <Menu size="l" mode="radio-check">
                            <Item value="10">10</Item>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="check" name="d" value={this.state.d} onChange={this.onChange}>
                            <Group title="First">
                                <Item value="10">10</Item>
                                <Item value="20" disabled>20</Item>
                                <Item value="30">30</Item>
                            </Group>
                            <Group>
                                <Item value="40">40</Item>
                                <Item value="50">50</Item>
                            </Group>
                            <Group title="Third">
                                <Item value="60">60</Item>
                                <Item value="70">70</Item>
                            </Group>
                        </Menu>
                        <div>Checked: {this.state.d.join(', ')}</div>
                    </div>

                </div>
            </App>
        );
    }

    onChange(value, menuProps) {
        this.setState({
            [menuProps.name]: value
        });
    }
}

export default Example;
