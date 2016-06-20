import React, { Component } from 'react';
import App from '../App';
import Checkbox from './';

class CheckboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };
    }

    render() {
        return (
            <div className="example">
                <Checkbox theme="islands" size="m" name="c1"
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
                <CheckboxExample />
                <CheckboxExample type="button">Push me!</CheckboxExample>
            </div>
        </App>
    );
}
