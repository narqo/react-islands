import React from 'react';

import TextArea from './index.js';

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
                    <TextArea theme="islands" size="l" value={this.state.value} placeholder="Fill me!" onChange={this.onInputChange}/>
                </div>

                <div className="example">
                    <TextArea theme="islands" size="m" value={this.state.value.toUpperCase()}/>
                </div>

                <div className="example">
                    <TextArea theme="islands" size="s" value={this.state.value} disabled placeholder="Fill me!"/>
                </div>

            </div>
        );
    }

    onInputChange(value) {
        this.setState({ value });
    }
}

export default Example;
