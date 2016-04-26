import React from 'react';

import Control from '../Control';
import pressable from '../pressable';

class Button extends Control {
    render() {
        if (this.props.type === 'link') {
            const url = this.props.disabled ? null : this.props.url;

            return (
                <a className={this.className()} {...this.getControlHandlers()} ref="control" role="link" href={url}>
                    <span className="button__text">{this.props.children}</span>
                </a>
            );
        } else {
            return (
                <button className={this.className()} {...this.getControlHandlers()} ref="control" name={this.props.name} disabled={this.props.disabled}>
                    <span className="button__text">{this.props.children}</span>
                </button>
            );
        }
    }

    className() {
        var className = 'button';

        if (this.props.theme) {
            className += ' button_theme_' + this.props.theme;
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

    /*
    dispatchClick() {
        //  FIXME: Нужно ли при нажатии на кнопку с type="link" переходить по ссылке?
        this.props.onClick();
    }
    */

}

export default pressable(Button);
