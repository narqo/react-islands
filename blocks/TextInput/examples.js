import React from 'react';

import App from '../App';
import TextInput from './index.js';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'React!'
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <TextInput theme="islands" size="s" value={this.state.value} placeholder="Fill me!" hasClear onChange={this.onInputChange}/>
                    </div>

                    <div className="example">
                        <TextInput theme="islands" size="s" value={this.state.value.toUpperCase()} hasClear/>
                    </div>

                    <div className="example">
                        <TextInput theme="islands" size="s" value={this.state.value} disabled placeholder="Fill me!" hasClear/>
                    </div>

                    <div className="example">
                        <TextInput theme="islands" size="s" type="password" placeholder="Fill me!"/>
                    </div>

                </div>
            </App>
        );
    }

    onInputChange(value) {
        this.setState({ value });
    }
}

export default Example;
