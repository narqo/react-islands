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
        const { mode, disabled, ...restProps } = this.props;
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
                    {...restProps}
                    onChange={this.onSelectChange}
                >
                    <Group title="Winter">
                        <Item value="12" checkedText="Dec">December</Item>
                        <Item value="1" checkedText="Jan">January</Item>
                        <Item value="2" checkedText="Feb" onClick={this.onItemClick}>February</Item>
                    </Group>
                    <Group title="Spring">
                        <Item value="3" checkedText="Mar">March</Item>
                        <Item value="4" checkedText="Apr" disabled onClick={this.onItemClick}>April</Item>
                        <Item value="5" checkedText="May">May</Item>
                    </Group>
                    <Group title="Summer">
                        <Item value="6" checkedText="Jun">June</Item>
                        <Item value="7" checkedText="Jul">July</Item>
                        <Item value="8" checkedText="Aug">August</Item>
                    </Group>
                    <Group title="Autumn">
                        <Item value="9" checkedText="Sep">September</Item>
                        <Item value="10" checkedText="Oct">October</Item>
                        <Item value="11" checkedText="Nov">November</Item>
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
                <SelectExample mode="radio" maxHeight={400} />
                <SelectExample mode="check" />
                <SelectExample mode="radio-check" />
            </div>
        </App>
    );
}

export default Example;
