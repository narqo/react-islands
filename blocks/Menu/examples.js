import React from 'react';

import App from '../App';
import Menu from './index.js';
import MenuItem from './MenuItem';

class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ['30', '40']
        };
    }

    render() {
        return (
            <App theme="islands">
                <div className="examples">

                    <div className="example">
                        <h3>no mode</h3>
                        <Menu size="l" value={this.state.value}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio"</h3>
                        <Menu size="l" mode="radio">
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="check"</h3>
                        <Menu size="l" mode="check" value={this.state.value}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                    </div>

                    <div className="example">
                        <h3>mode="radio-check"</h3>
                        <Menu size="l" mode="radio-check" value={this.state.value}>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="20" disabled>20</MenuItem>
                            <MenuItem value="30">30</MenuItem>
                            <MenuItem value="40">40</MenuItem>
                            <MenuItem value="50">50</MenuItem>
                        </Menu>
                    </div>

                </div>
            </App>
        );
    }

}

export default Example;
