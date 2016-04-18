import React from 'react';
import bem from 'b_';
import BemComponent, { BemControl } from '../BemComponent';

const b = bem.with('button');

const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

class Button extends BemComponent {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            checked: props.checked,
            pressed: false
        });
        this.isPointerPressInProgress = false;
    }

    /** @override */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);
        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
        this.setState( { checked: props.checked } );
    }

    render() {
        const { disabled, hovered, pressed, focused, checked } = this.state;
        const { theme, size, view, name } = this.props;

        const className = b({
            theme,
            size,
            view,
            disabled,
            checked,
            hovered,
            pressed,
            focused,
        });

        const listerners = {
            onMouseDown: e => this.onMouseDown(e),
            onMouseUp: e => this.onMouseUp(e),
            onKeyDown: e => this.onKeyDown(e),
            onKeyUp: e => this.onKeyUp(e),
        };

        return (
            <BemControl>
                <button className={className} name={name} disabled={disabled} {...listerners}>
                    <span className={b('text')}>{this.props.children}</span>
                </button>
            </BemControl>
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
