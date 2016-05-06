import React from 'react';

import App from '../App';
import Select from './index.js';
import Group from '../Group';
import Item from '../Item';

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
                            <Group title="Weekdays">
                                <Item value="1" checkedText="Mon">Monday</Item>
                                <Item value="2" checkedText="Tue">Tuesday</Item>
                                <Item value="3" checkedText="Wed">Wednesday</Item>
                                <Item value="4" checkedText="Thu" disabled>Thursday</Item>
                                <Item value="5" checkedText="Fri">Friday</Item>
                            </Group>
                            <Group title="Weekends">
                                <Item value="6" checkedText="Sat">Saturday</Item>
                                <Item value="7" checkedText="Sun">Sunday</Item>
                            </Group>
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
