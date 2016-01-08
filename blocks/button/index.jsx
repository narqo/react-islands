import React from 'react';
import classNames from 'classnames';
import BaseComponent, { Control } from '../control';
import style from './style.css';

class Button extends BaseComponent {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            pressed: false,
        });
        this.isPointerPressInProgress = false;
    }

    /** @override */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);
        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
    }

    render() {
        const { disabled, hovered, pressed, focused } = this.state;
        const { size, view } = this.props;

        const className = classNames(
            style.button,
            style[`size-${size}`],
            style[view],
            {
                [style.disabled]: disabled,
                [style.hovered]: hovered,
                [style.pressed]: pressed,
                [style.focused]: focused,
            }
        );

        const listerners = {
            onMouseDown: e => this.onMouseDown(e),
            onMouseUp: e => this.onMouseUp(e),
            onKeyDown: e => this.onKeyDown(e),
            onKeyUp: e => this.onKeyUp(e),
        };

        return (
            <Control {...this.state}>
                <button className={className} name={this.props.name} disabled={disabled} {...listerners}>
                    <span className={style.text}>{this.props.children}</span>
                </button>
            </Control>
        );
    }

    /** @override */
    onControlMouseLeave() {
        this.onPointerRelease();
        super.onControlMouseLeave();
        this.setState({ pressed: false });
    }

    onMouseDown() {
        if (!this.state.disabled) {
            this.isPointerPressInProgress = true;
            this.setState({ pressed: true });
        }
    }

    onMouseUp() {
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
        this.props.onClick();
    }

    /** @override */
    onControlFocus() {
        if (this.isPointerPressInProgress) {
            return;
        }
        super.onControlFocus();
    }

    onKeyDown(e) {
        if (this.state.disabled || !this.state.focused) {
            return;
        }
        if (e.key === ' ' || e.key === 'Enter') {
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
