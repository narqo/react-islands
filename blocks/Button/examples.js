import React from 'react';
import ReactDOM from 'react-dom';

import Button from './index.js';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div className="examples">

                <div className="example">
                    <Button theme="islands" size="s">Small</Button>
                    <Button theme="islands" size="m">Medium</Button>
                    <Button theme="islands" size="l">Large</Button>
                    <Button theme="islands" size="xl">Extra Large</Button>
                </div>

                <div className="example">
                    <Button theme="islands" size="l" view="plain">Plain</Button>
                    <Button theme="islands" size="l" view="action">Action</Button>
                    <Button theme="islands" size="l" view="pseudo">Pseudo</Button>
                </div>

                <div className="example">
                    <Button theme="islands" size="l" disabled>Disabled</Button>
                    <Button theme="islands" size="l" focused>Focused</Button>
                </div>

                <div className="example">
                    <Button theme="islands" size="l" type="link" url="https://yandex.ru">Link</Button>
                </div>

                <div className="example">
                    <Button theme="islands" size="l" onClick={this.onClick}>Click me!</Button>
                    <span> {this.state.clicks} clicks</span>
                </div>

            </div>
        );
    }

    onClick() {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }
}

ReactDOM.render(React.createElement(Example), document.getElementById('root'));
