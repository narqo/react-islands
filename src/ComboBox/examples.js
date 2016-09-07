import React from 'react';
import App from '../App';
import ComboBox from './index.js';
import Item from '../Item';

function getYears(max) {
    return Array.from({ length: max }, (_, i) => <Item key={`y${i}`} value={String(1900 + i)}>{1900 + i}</Item>);
}

class ComboBoxExample extends React.Component {
    constructor() {
        super();
        this.state = {
            maxYears: 150,
            value: [],
        };

        this.years = null;
    }

    componentWillMount() {
        this.years = getYears(this.state.maxYears);
    }

    componentWillUpdate(_, nextState) {
        this.years = getYears(nextState.maxYears);
    }

    render() {
        if (this.state.value[0]) {
            this.years.unshift(
                <Item key="x" className="menu-item_has-clear" value="" onClick={() => this.onClearClick()}>Any</Item>
            );
        }

        return (
            <ComboBox
                theme="islands"
                size="l"
                {...this.props}
                placeholder="Year"
                name="year"
                value={this.state.value}
                onChange={value => this.onChange(value)}
                onTextInputChange={value => this.onTextInputChange(value)}
            >
                {this.years}
            </ComboBox>
        );
    }

    onChange(value) {
        if (value[0] !== '') {
            this.setState({ value });
        }
    }

    onTextInputChange(value) {
        this.setState({ maxYears: 20 - 2 * value.length });
    }

    onClearClick() {
        this.setState({ value: [] });
    }
}

function Example() {
    return (
        <App theme="islands">
            <div className="examples" style={{paddingTop: 500}}>
                <ComboBoxExample mode="radio-check" />
            </div>
        </App>
    );
}

export default Example;
