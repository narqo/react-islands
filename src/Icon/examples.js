import React from 'react';

import App from '../App';
import Icon from './index.js';
import Button from '../Button';

const style = `
.social_twitter {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVQ4y2NgGDTg3fdf/LjE+47fLajbf6Nx3vmHCTAxDPX+K89shClABvqzDl9gmHLmP8O0C/8ZJp7877Dg6H75SfsezLvwOAlFof22x6dAChI2nJ8PM/3c8w8GDEse/2dY8w6BF97/z7/mxefzr744oRgw7/bnOrCCOTf+C3TvegcyKH/PzSkomqF4/ZMfFf///+dBMcBhzbWjcEUrX4ENYph55T82A4BABCOwzr/9Eca/4d1nbBqQscGej7exxgLISXWXv8wnZMi8O18acUblviefw/V3vL2Nz3agRRI4DQBK8p97+zMq4OjnQ9g0v//51x5nIgKFukDHtncMnXv/M8y/jaI5/vSXbSDNQAuYcdnMDMQa59//Tqi7+m0hDM+7/6Pz3pc/4SA5nJrRAxKI5ZGwBBCzMwxqAADz8kerOr7ibwAAAABJRU5ErkJggg==);
    width: 16px;
    height: 16ppxl,
}
`;

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 's',
        };

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return (
            <App theme="islands">
                <style>{style}</style>

                <div className="examples">

                    <div className="example">
                        <Button size="m">
                            <Icon>{svgIcon()}</Icon>
                            Download <b>File</b>
                        </Button>
                    </div>

                    <div className="example">
                        <Button size={this.state.size}>
                            Download <b>File</b>
                            <Icon>{svgIcon()}</Icon>
                        </Button>
                        &nbsp;
                        <Button size="m" onClick={this.onButtonClick}>Change size!</Button>
                    </div>

                    <div className="example">
                        <Icon className="social_twitter"/>
                    </div>
                </div>
            </App>
        );
    }

    onButtonClick() {
        var size = (this.state.size === 's') ? 'xl' : 's';
        this.setState({ size });
    }

}

function svgIcon() {
    return (
        <svg width="16" height="16">
            <path d="M1 13v2h14v-2h-14zm13-7h-3v-5h-6v5.031l-3-.031 6 6 6-6z"/>
        </svg>
    );
}

export default Example;
