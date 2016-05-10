import React from 'react';

import App from '../App';
import Select from './index.js';
import Group from '../Group';
import Item from '../Item';

class SelectExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ['1'],
        };
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    render() {
        const { mode, disabled } = this.props;
        const { value } = this.state;

        return (
            <div className="example">
                <b>Select mode={mode}</b>

                <p>Selected: <b>{value.join(', ')}</b></p>

                <Select
                    name="my-select"
                    size="l"
                    text="Select days"
                    disabled={disabled}
                    value={value}
                    mode={mode}
                    onChange={this.onSelectChange}
                >
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
        );
    }

    onSelectChange(value) {
        this.setState({ value });
    }
}

function Example() {
    return (
        <App theme="islands">
            <div className="examples">
                <SelectExample mode="radio" />
                <SelectExample mode="check" />
                <SelectExample mode="radio-check" />
            </div>
        </App>
    );
}

export default Example;
