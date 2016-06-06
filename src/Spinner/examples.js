import React from 'react';

import App from '../App';
import Spinner from './index.js';
import Button from '../Button';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: false,
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        Loading...<br/>
                        <Spinner size="m" />
                    </div>

                    <div className="example">
                        <Button size="m" onClick={this.onButtonClick}>
                            {this.state.progress ? <Spinner size="xs" /> : null}
                            Click to <b>toggle</b>
                        </Button>
                    </div>
                </div>
            </App>
        );
    }

    onButtonClick() {
        this.setState({ progress: !this.state.progress });
    }

}

export default Example;
