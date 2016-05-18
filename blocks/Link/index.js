import React from 'react';

import Control from '../Control';
import pressable from '../pressable';

class Link extends Control {
    render() {
        const { disabled, title } = this.props;

        if (this.props.url) {
            const url = disabled ? null : this.props.url;

            return (
                <a className={this.className()} {...this.getControlHandlers()} href={url} target={this.props.target} title={title}>
                    {this.props.children}
                </a>
            );
        } else {
            const tabIndex = disabled ? -1 : 0;

            return (
                <span className={this.className()} {...this.getControlHandlers()} tabIndex={tabIndex} title={title}>
                    {this.props.children}
                </span>
            );
        }
    }

    className() {
        var className = 'link link__control';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' link_theme_' + theme;
        }
        if (this.props.type) {
            className += ' link_type_' + this.props.type;
        }
        if (this.props.disabled) {
            className += ' link_disabled';
        }
        if (this.props.focused) {
            className += ' link_focused';
        }

        if (this.props.className) {
            className += ' ' + className;
        }

        return className;
    }

}

Link.contextTypes = {
    theme: React.PropTypes.string,
};

export default pressable(Link);
