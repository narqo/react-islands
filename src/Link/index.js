import React from 'react';

import Control from '../Control';
import pressable from '../pressable';

class Link extends Control {
    render() {
        const { id, disabled, title } = this.props;

        if (this.props.url) {
            const url = disabled ? null : this.props.url;

            return (
                <a id={id} className={this.className()} {...this.getControlHandlers()} href={url} target={this.props.target} title={title}>
                    {this.props.children}
                </a>
            );
        } else {
            const tabIndex = disabled ? -1 : 0;

            return (
                <span id={id} className={this.className()} {...this.getControlHandlers()} role="button" tabIndex={tabIndex} title={title}>
                    {this.props.children}
                </span>
            );
        }
    }

    className() {
        // NOTE: see narqo/react-islands#98 for notes about `_js_inited`
        var className = 'link link_js_inited';

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
        if (this.props.view) {
            className += ' link_view_' + this.props.view;
        }
        if (this.state.hovered) {
            className += ' link_hovered';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }
}

Link.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    view: React.PropTypes.oneOf(['minor', 'external']),
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    focused: React.PropTypes.bool,
    target: React.PropTypes.string,
    title: React.PropTypes.string,
    url: React.PropTypes.string,
    onClick: React.PropTypes.func,
};

Link.contextTypes = {
    theme: React.PropTypes.string,
};

export default pressable(Link);
