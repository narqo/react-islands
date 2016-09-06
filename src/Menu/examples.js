import React from 'react';

import App from '../App';
import Menu from './index.js';
import Item from '../Item';
import Group from '../Group';

class MenuExample extends React.Component {
    constructor(props) {
        super(props);

        //  FIXME: Сейчас в конструкторе Menu value обрабатывается.
        //  Например, для mode="radio" если value пустое, то берется first child,
        //  а если в value больше одного элемента, то опять же, берется первый элемент value.
        //  Но при выводе в div это начальное значение, получается расхождение между
        //  переданным value и реальным, в стейте меню.
        this.state = {
            value: ['30', '40'],
            clicks: 0,
        };

        this.onMenuChange = this.onMenuChange.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    render() {
        const { name, mode } = this.props;

        return (
            <div className="example">
                <h3>menu mode="{mode}"</h3>
                <Menu size="l" mode={mode} name={name} value={this.state.value} onChange={this.onMenuChange}>
                    <Item value="10">10</Item>
                    <Item value="20" disabled>20</Item>
                    <Item value="30" onClick={this.onItemClick}>30</Item>
                    <Item value="40">40</Item>
                    <Item value="50">50</Item>
                    <Group title="First">
                        <Item value="60">60</Item>
                        <Item value="70">70</Item>
                    </Group>
                    <Group title="Second">
                        <Item value="80">80</Item>
                        <Item value="90">90</Item>
                    </Group>
                </Menu>
                <div>Checked: {this.state.value.join(', ')}</div>
                <span>{this.state.clicks} clicks</span>
            </div>
        );
    }

    onMenuChange(value) {
        this.setState({ value });
    }

    onItemClick() {
        this.setState({ clicks: this.state.clicks + 1 });
    }
}

function Example() {
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

                <MenuExample name="a" mode="radio" />
                <MenuExample name="b" mode="check" />
                <MenuExample name="c" mode="radio-check" />

                <div className="example">
                    <h3>small menu</h3>
                    <Menu size="l" mode="radio-check">
                        <Item value="10">10</Item>
                    </Menu>
                </div>

                <div className="example">
                    <h3>menu with maxHeight and minWidth</h3>
                    <Menu size="l" mode="radio" value={['80']} maxHeight={200} minWidth={100}>
                        <Item value="10">10</Item>
                        <Item value="20">20</Item>
                        <Item value="30">30</Item>
                        <Item value="40">40</Item>
                        <Item value="50">50</Item>
                        <Item value="60">60</Item>
                        <Item value="70">70</Item>
                        <Item value="80">80</Item>
                        <Item value="90">90</Item>
                        <Item value="95">95</Item>
                    </Menu>
                </div>

                <div className="example">
                    <h3>disabled menu</h3>
                    <Menu size="l" mode="radio-check" disabled>
                        <Item value="10">10</Item>
                        <Item value="20">20</Item>
                    </Menu>
                </div>

            </div>
        </App>
    );
}

export default Example;
