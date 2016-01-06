import React from 'react';
import classNames from 'classnames';
import Control from '../control';
import style from './style.css';

class Button extends Control {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            pressed: false,
        });
        this._isPointerPressInProgress = false;
    }

    /** @override */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);
        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
    }

    render() {
        const { size, view } = this.props;
        const className = classNames(
            style.button,
            style[`size-${size}`],
            style[view],
            {
                [style.disabled]: this.state.disabled,
                [style.hovered]: this.state.hovered,
                [style.pressed]: this.state.pressed,
                [style.focused]: this.state.focused,
            }
        );

        const listerners = {
            onMouseDown: e => this.handleMouseDown(e),
            onMouseUp: e => this.handleMouseUp(e),
            onKeyDown: e => this.handleKeyDown(e),
            onKeyUp: e => this.handleKeyUp(e),
        };

        return <button ref="control" className={className} name={this.props.name} disabled={this.state.disabled} {...listerners}>
            <span className={style.text}>{this.props.children}</span>
        </button>;
    }

    /** @override */
    handleMouseLeave() {
        this.handlePointerRelease();
        super.handleMouseLeave();
        this.setState({ pressed: false });
    }

    handleMouseDown() {
        if (!this.state.disabled) {
            this._isPointerPressInProgress = true;
            this.setState({ pressed: true });
        }
    }

    handleMouseUp() {
        this.handlePointerRelease();
        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.handleClick();
        }
    }

    handlePointerRelease() {
        this._isPointerPressInProgress = false;
    }

    handleClick() {
        this.props.onClick();
    }

    /** @override */
    handleFocus() {
        if (this._isPointerPressInProgress) {
            return;
        }
        super.handleFocus();
    }

    handleKeyDown(e) {
        if (this.state.disabled || !this.state.focused) {
            return;
        }
        if (e.key === ' ' || e.key === 'Enter') {
            this.setState({ pressed: true });
        }
    }

    handleKeyUp() {
        if (this.state.pressed && this.state.focused) {
            this.setState({ pressed: false });
            this.handleClick();
        }
    }
}

Button.defaultProps = {
    onClick() {},
};

export default Button;
