import React from 'react';
import bem from 'b_';
import BemComponent, { BemControl } from '../BemComponent';

const b = bem.with('link');

class Link extends BemComponent {
    constructor(props) {
        super(props);
        this.isPointerPressInProgress = false;
    }

    render() {
        const { disabled, focused } = this.state;
        const { theme, size, url } = this.props;

        const className = b({
            theme,
            size,
            disabled,
            focused,
        });

        const listeners = {
            onMouseDown: e => this.onMouseDown(e),
            onClick: e => this.onClick(e),
            onKeyDown: e => this.onKeyDown(e),
            onKeyUp: e => this.onKeyUp(e),
        };

        return url ?
            this.renderLink(className, listeners) :
            this.renderPseudoLink(className, listeners);
    }

    renderLink(className, listeners) {
        return (
            <BemControl>
                <a
                    className={className}
                    href={this.props.url}
                    target={this.props.target}
                    title={this.props.title}
                    {...listeners}
                >{this.props.children}</a>
            </BemControl>
        );
    }

    renderPseudoLink(className, listeners) {
        const tabIndex = this.state.disabled ? -1 : 0;
        return (
            <BemControl>
                <span
                    className={className}
                    tabIndex={tabIndex}
                    title={this.props.title}
                    {...listeners}
                >{this.props.children}</span>
            </BemControl>
        );
    }

    onMouseDown() {
        if (!this.state.disabled) {
            this.isPointerPressInProgress = true;
        }
    }

    onClick(e) {
        this.isPointerPressInProgress = false;
        if (this.state.disabled) {
            e.preventDefault();
        } else {
            this.props.onClick();
        }
    }

    /** @override */
    onControlFocus() {
        if (this.isPointerPressInProgress) {
            return;
        }
        super.onControlFocus()
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

Link.defaultProps = {
    onClick() {},
};

export default Link;
