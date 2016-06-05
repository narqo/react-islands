import React from 'react';
import Component from '../Component';

class Spinner extends Component {
    render() {
        return <span className={this.className()} />;
    }

    className() {
        let className = 'spin spin_visible';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' spin_theme_' + theme;
        }
        if (this.props.size) {
            className += ' spin_size_' + this.props.size;
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }
}

Spinner.contextTypes = {
    theme: React.PropTypes.string,
};

Spinner.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
};

export default Spinner;
