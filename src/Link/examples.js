import React from 'react';

import App from '../App';
import Link from './index.js';

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
                        <Link size="l" url="#/Yandex" onClick={this.onLinkClick}>Yandex</Link>
                    </div>

                    <div className="example">
                        <Link size="l" onClick={this.onClick}>Click me!</Link>
                    </div>

                    <div className="example">
                        <Link size="l" onClick={this.onClick} disabled>Google (disabled)</Link>
                    </div>

                    <div className="example">
                        <h3>Views</h3>
                        <Link size="l" view="external" onClick={this.onClick}>external</Link>
                        <br/>
                        <Link size="l" view="minor" onClick={this.onClick}>minor</Link>
                    </div>

                    <p>Clicks: {this.state.clicks}</p>
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
