import React from 'react';
import Component from '../Component';

class ProgressBar extends Component {
    render() {
        const value = `${this.props.value}%`;

        return (
            <div className={this.className()} role="progressbar" aria-valuenow={`${value}`}>
                <div className="progressbar__bar" style={{width: `${value}`}}></div>
            </div>
        );
    }

    className() {
        let className = 'progressbar';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' progressbar_theme_' + theme;
        }
        if (this.props.size) {
            className += ' progressbar_size_' + this.props.size;
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }
}

ProgressBar.contextTypes = {
    theme: React.PropTypes.string,
};

ProgressBar.propTypes = {
    className: React.PropTypes.string,
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    value: React.PropTypes.number,
};

ProgressBar.defaultProps = {
    value: 0,
};

export default ProgressBar;
