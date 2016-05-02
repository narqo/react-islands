import React from 'react';

import App from '../App';
import Select from './index.js';
import Option from './Option';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ['1', '2']
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <p>Selected: <b>{this.state.value.join(', ')}</b></p>

                        <Select name="foo" value={this.state.value} text="Select days" size="l" mode="check" onChange={this.onChange}>
                            <Option value="1" checkedText="Mon">Monday</Option>
                            <Option value="2" checkedText="Tue">Tuesday</Option>
                            <Option value="3" checkedText="Wed">Wednesday</Option>
                            <Option value="4" checkedText="Thu" disabled>Thursday</Option>
                            <Option value="5" checkedText="Fri">Friday</Option>
                            <Option value="6" checkedText="Sat">Saturday</Option>
                            <Option value="7" checkedText="Sun">Sunday</Option>
                        </Select>
                    </div>

                </div>
            </App>
        );
    }

    onChange(value) {
        this.setState({ value });
    }
}

export default Example;
