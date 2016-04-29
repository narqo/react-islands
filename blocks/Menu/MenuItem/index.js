import React from 'react';

import Component from '../../Component';

class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        return (
            <div className={this.className()} data-index={this.props.index}
                onClick={this.onClick}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
            </div>
        );
    }

    className() {
        var className = 'menu-item';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' menu-item_theme_' + theme;
        }
        if (this.props.size) {
            className += ' menu-item_size_' + this.props.size;
        }
        if (this.props.disabled) {
            className += ' menu-item_disabled';
        }
        if (this.props.hovered) {
            className += ' menu-item_hovered';
        }
        if (this.props.checked) {
            className += ' menu-item_checked';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onClick(e) {
        if (this.props.disabled) {
            return;
        }

        this.props.onClick(e, this.props);
    }

    onMouseEnter() {
        if (this.props.disabled) {
            return;
        }

        this.props.onHover(this.props.index, true);
    }

    onMouseLeave() {
        if (this.props.disabled) {
            return;
        }

        this.props.onHover(this.props.index, false);
    }
}

MenuItem.contextTypes = {
    theme: React.PropTypes.string
};

MenuItem.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    disabled: React.PropTypes.bool,
};

export default MenuItem;
