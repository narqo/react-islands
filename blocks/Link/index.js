import React from 'react';
import Pressable from '../Pressable';

class Link extends Pressable {

    render() {
        if (this.props.url) {
            return (
                <a {...this.getProps()} href={this.props.url} target={this.props.target} title={this.props.title}>
                    {this.props.children}
                </a>
            );

        } else {
            const tabIndex = this.props.disabled ? -1 : 0;

            return (
                <span {...this.getProps()} tabIndex={tabIndex} title={this.props.title}>
                    {this.props.children}
                </span>
            );
        }
    }

    className() {
        var className = 'link link__control';

        if (this.props.theme) {
            className += ' link_theme_' + this.props.theme;
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

export default Link;
