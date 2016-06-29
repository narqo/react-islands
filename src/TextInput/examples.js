import React from 'react';

import TextInput from './index.js';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'React!',
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className="examples">

                <div className="example">
                    <TextInput theme="islands" size="s" value={this.state.value} placeholder="Fill me!" hasClear onChange={this.onInputChange}/>
                </div>

                <div className="example">
                    <TextInput theme="islands" size="m" value={this.state.value.toUpperCase()} hasClear/>
                </div>

                <div className="example">
                    <TextInput theme="islands" size="l" type="password" placeholder="Fill me!"/>
                </div>

                <div className="example">
                    <TextInput theme="islands" size="m" value={this.state.value} disabled placeholder="Fill me!" hasClear/>
                </div>

            </div>
        );
    }

    onInputChange(value) {
        this.setState({ value });
    }
}

export default Example;
