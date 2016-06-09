import React from 'react';

import App from '../App';
import Button from './index.js';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <Button size="s">Small</Button>
                        <Button size="m">Medium</Button>
                        <Button size="l">Large</Button>
                        <Button size="xl">Extra Large</Button>
                    </div>

                    <div className="example">
                        <Button size="l" view="plain">Plain</Button>
                        <Button size="l" view="action">Action</Button>
                        <Button size="l" view="pseudo">Pseudo</Button>
                    </div>

                    <div className="example">
                        <Button size="l" disabled>Disabled</Button>
                        <Button size="l" focused>Focused</Button>
                    </div>

                    <div className="example">
                        <Button size="l" type="link" url="https://yandex.ru" onClick={this.onLinkClick}>Link</Button>
                    </div>

                    <div className="example">
                        <Button size="l" onClick={this.onClick}>Click me!</Button>
                        <span> {this.state.clicks} clicks</span>
                    </div>

                </div>
            </App>
        );
    }

    onClick() {
        this.setState({
            clicks: this.state.clicks + 1,
        });
    }

    onLinkClick(e) {
        e.preventDefault();
    }
}

export default Example;
