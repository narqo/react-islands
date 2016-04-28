import React from 'react';

import Component from '../Component';

class Icon extends Component {
    render() {
        if (this.props.url) {
            return (
                <span className={this.className()} style={{
                    backgroundImage: `url(${this.props.url})`
                }}>
                </span>
            );
        } else {
            return (
                <span className={this.className()}>
                    {this.props.children}
                </span>
            );
        }
    }

    className() {
        var className = 'icon';

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }
}

Icon.propTypes = {
    url: React.PropTypes.string
};

export default Icon;
