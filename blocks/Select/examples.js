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
            clicks: 0,
        };
        this.onSelectChange = this.onSelectChange.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
    }

    render() {
        const { mode, disabled } = this.props;
        const { value } = this.state;

        return (
            <div className="example">
                <b>mode={mode}</b>

                <div>Selected: <b>{value.join(', ')}</b></div>
                <div>{this.state.clicks} clicks</div>

                <Select
                    name="my-select"
                    size="l"
                    placeholder="Select days"
                    disabled={disabled}
                    value={value}
                    mode={mode}
                    onChange={this.onSelectChange}
                >
                    <Group title="Weekdays">
                        <Item value="1" checkedText="Mon">Monday</Item>
                        <Item value="2" checkedText="Tue" onClick={this.onItemClick}>Tuesday</Item>
                        <Item value="3" checkedText="Wed">Wednesday</Item>
                        <Item value="4" checkedText="Thu" disabled onClick={this.onItemClick}>Thursday</Item>
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

    onItemClick() {
        this.setState({ clicks: this.state.clicks + 1 });
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
