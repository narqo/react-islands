import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
import CheckboxGroup from './index.js';
import Checkbox from '../Checkbox';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: ['20'],
            b: [],
            c: ['30'],
            d: []
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <CheckboxGroup size="l" type="button" name="a" value={this.state.a} onChange={this.onChange}>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40" disabled>40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                        <div>Selected: {this.state.a.join(', ')}</div>
                    </div>

                    <div className="example">
                        <CheckboxGroup size="m" type="button" name="b" onChange={this.onChange}>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40" disabled>40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                        <div>Selected: {this.state.b.join(', ')}</div>
                    </div>

                    <div className="example">
                        <CheckboxGroup size="l" type="line" name="c" value={this.state.c} onChange={this.onChange}>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40" disabled>40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                        <div>Selected: {this.state.c.join(', ')}</div>
                    </div>

                    <div className="example">
                        <CheckboxGroup size="m" type="line" name="d" onChange={this.onChange}>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40" disabled>40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                        <div>Selected: {this.state.d.join(', ')}</div>
                    </div>

                    <div className="example">
                        <CheckboxGroup size="xl" type="button" name="e" disabled>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40">40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="example">
                        <CheckboxGroup size="m" type="line" name="f" disabled>
                            <Checkbox value="10">10</Checkbox>
                            <Checkbox value="20">20</Checkbox>
                            <Checkbox value="30">30</Checkbox>
                            <Checkbox value="40">40</Checkbox>
                            <Checkbox value="50">50</Checkbox>
                        </CheckboxGroup>
                    </div>

                </div>
            </App>
        );
    }

    onChange(value, groupProps) {
        this.setState({
            [groupProps.name]: value
        });
    }

}

ReactDOM.render(React.createElement(Example), document.getElementById('root'));
