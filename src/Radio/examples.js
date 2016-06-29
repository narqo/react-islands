import React, { Component } from 'react';
import App from '../App';
import Radio from './';

class RadioExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: true,
        };
    }

    render() {
        return (
            <div className="example">
                <Radio theme="islands" size="m" name="c1"
                    {...this.props}
                    checked={this.state.checked}
                    onCheck={checked => this.onCheck(checked)}
                />
            </div>
        );
    }

    onCheck(checked) {
        this.setState({ checked });
    }
}

export default function Example() {
    return (
        <App theme="islands">
            <div className="examples">
                <RadioExample />
                <RadioExample type="button">Push me!</RadioExample>
            </div>
        </App>
    );
}
