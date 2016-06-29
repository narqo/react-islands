import React from 'react';

import App from '../App';
import RadioGroup from './';
import Radio from '../Radio';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //  FIXME: Не нужно ли автоматически приводить value к строке?
            //  Скажем, здесь просто `a: 20` не сработает.
            a: '20',
            c: '30',
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <RadioGroup size="l" type="button" name="a" value={this.state.a} onChange={this.onChange}>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                        <div>Selected: {this.state.a}</div>
                    </div>

                    <div className="example">
                        <RadioGroup size="m" type="button" name="b" value={this.state.b} onChange={this.onChange}>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                        <div>Selected: {this.state.b}</div>
                    </div>

                    <div className="example">
                        <RadioGroup size="l" type="line" name="c" value={this.state.c} onChange={this.onChange}>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                        <div>Selected: {this.state.c}</div>
                    </div>

                    <div className="example">
                        <RadioGroup size="m" type="line" name="d" value={this.state.d} onChange={this.onChange}>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                        <div>Selected: {this.state.d}</div>
                    </div>

                    <div className="example">
                        <RadioGroup size="l" type="button" name="e" disabled>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                    </div>

                    <div className="example">
                        <RadioGroup size="l" type="line" name="f" disabled>
                            <Radio value="10">10</Radio>
                            <Radio value="20">20</Radio>
                            <Radio value="30">30</Radio>
                            <Radio value="40" disabled>40</Radio>
                            <Radio value="50">50</Radio>
                        </RadioGroup>
                    </div>

                </div>
            </App>
        );
    }

    onChange(value, groupProps) {
        this.setState({
            [groupProps.name]: value,
        });
    }

}

export default Example;
