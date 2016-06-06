import React from 'react';

import App from '../App';
import ProgressBar from './index.js';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
        };
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <ProgressBar value={13} />
                        <div>13% finished...</div>
                    </div>

                    <div className="example">
                        <ProgressBar value={75} />
                        <div>75% finished...</div>
                    </div>
                </div>
            </App>
        );
    }

}

export default Example;
