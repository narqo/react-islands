import React from 'react';
import Control from '../Control';

const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

class Button extends Control {
    constructor(props) {
        super(props);

        this.state.pressed = false;

        this.isPointerPressInProgress = false;

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    /** @override */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
    }

    render() {
        if (this.props.type === 'link') {
            return (
                <a {...this.getProps()} role="link" href={this.props.url}>
                    <span className="button__text">{this.props.children}</span>
                </a>
            );

        } else {
            return (
                <button ref="control" {...this.getProps()} name={this.props.name} disabled={this.props.disabled}>
                    <span className="button__text">{this.props.children}</span>
                </button>
            );
        }
    }

    getProps() {
        return Object.assign(
            super.getProps(),
            {
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onKeyUp: this.onKeyUp,
                onKeyDown: this.onKeyDown
            }
        );
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

    /** @override */
    onMouseLeave() {
        this.onPointerRelease();
        super.onMouseLeave();
        this.setState({ pressed: false });
    }

    onMouseDown(e) {
        super.onMouseDown(e);

        if (!this.props.disabled) {
            this.isPointerPressInProgress = true;
            this.setState({ pressed: true });
        }
    }

    onMouseUp(e) {
        super.onMouseUp(e);

        this.onPointerRelease();
        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.onClick();
        }
    }

    onPointerRelease() {
        this.isPointerPressInProgress = false;
    }

    onClick() {
        //  FIXME: Нужно ли при нажатии на кнопку с type="link" переходить по ссылке?

        this.props.onClick();
    }

    /** @override */
    onFocus() {
        if (this.isPointerPressInProgress) {
            return;
        }
        super.onFocus();
    }

    onKeyDown(e) {
        if (this.props.disabled || !this.state.focused) {
            return;
        }
        if (e.key === KEY_SPACE || e.key === KEY_ENTER) {
            this.setState({ pressed: true });
        }
    }

    onKeyUp() {
        if (this.state.pressed && this.state.focused) {
            this.setState({ pressed: false });
            this.onClick();
        }
    }
}

Button.defaultProps = {
    onClick() {},
};

export default Button;
