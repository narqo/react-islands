import React from 'react';
import App from '../App';
import ComboBox from './index.js';
import Item from '../Item';

class ComboBoxExample extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ['1902'],
        };
        this.years = Array.from({ length: 150 }, (_, i) => <Item key={`y${i}`} value={String(1900 + i)}>{1900 + i}</Item>);
    }

    render() {
        return (
            <ComboBox
                theme="islands"
                size="l"
                name="year"
                value={this.state.value}
                onChange={value => this.setState({ value })}
            >
                {this.years}
            </ComboBox>
        );
    }
}

function Example() {
    return (
        <App theme="islands">
            <div className="examples">
                <ComboBoxExample />
            </div>
        </App>
    );
}

export default Example;
