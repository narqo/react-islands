import React from 'react';

import Component from '../Component';
import Control from '../Control';
import pressable from '../pressable';

class Button extends Control {
    constructor(...args) {
        super(...args);

        this._wrappedChildren = null;
    }

    /** @override */
    componentWillUpdate(nextProps, nextState) {
        if (super.componentWillUpdate) {
            super.componentWillUpdate(nextProps, nextState);
        }

        if (this.props.children !== nextProps.children) {
            this._wrappedChildren = null;
        }
    }

    render() {
        if (!this._wrappedChildren) {
            this._wrappedChildren = Component.wrap(this.props.children, child => (
                <span className="button__text">{child}</span>
            ));
        }

        if (this.props.type === 'link') {
            const url = this.props.disabled ? null : this.props.url;

            return (
                <a className={this.className()} {...this.getControlHandlers()} ref="control" role="link" href={url}>
                    {this._wrappedChildren}
                </a>
            );
        } else {
            return (
                <button className={this.className()} {...this.getControlHandlers()} ref="control" name={this.props.name} disabled={this.props.disabled}>
                    {this._wrappedChildren}
                </button>
            );
        }
    }

    className() {
        var className = 'button';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' button_theme_' + theme;
        }
        if (this.props.size) {
            className += ' button_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' button_type_' + this.props.type;
        }
        if (this.props.view) {
            className += ' button_view_' + this.props.view;
        }
        if (this.props.disabled) {
            className += ' button_disabled';
        }
        if (this.state.hovered) {
            className += ' button_hovered';
        }
        if (this.state.pressed) {
            className += ' button_pressed';
        }
        if (this.state.focused === 'hard') {
            className += ' button_focused button_focused-hard';
        } else if (this.state.focused) {
            className += ' button_focused';
        }
        if (this.props.checked) {
            className += ' button_checked';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }
}

Button.propTypes = {
    size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

Button.contextTypes = {
    theme: React.PropTypes.string
};

export default pressable(Button);
