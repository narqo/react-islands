import React from 'react';
import classNames from 'classnames';
import Component from '../component';
import style from './style.css';

class Link extends Component {
    constructor(props) {
        super(props);
        this._isPointerPressInProgress = false;
    }

    render() {
        const { size } = this.props;
        const className = classNames(
            style.link,
            style[`size-${size}`],
            {
                [style.disabled]: this.state.disabled,
                [style.focused]: this.state.focused,
            }
        );

        const listeners = {
            onMouseDown: e => this.handleMouseDown(e),
            onClick: e => this.handleClick(e),
            onFocus: e => this.handleFocus(e),
            onBlur: e => this.handleBlur(e),
            onKeyDown: e => this.handleKeyDown(e),
            onKeyUp: e => this.handleKeyUp(e),
        };

        return this.props.url ?
            this.renderLink(className, listeners) :
            this.renderPseudoLink(className, listeners);
    }

    renderLink(className, listeners) {
        return <a
            className={className}
            href={this.props.url}
            target={this.props.target}
            title={this.props.title}
            {...listeners}
        >{this.props.children}</a>;
    }

    renderPseudoLink(className, listeners) {
        const tabIndex = this.state.disabled ? -1 : 0;
        return <span
            className={className}
            tabIndex={tabIndex}
            title={this.props.title}
            {...listeners}
        >{this.props.children}</span>;
    }

    handleMouseDown() {
        if (!this.state.disabled) {
            this._isPointerPressInProgress = true;
        }
    }

    handleClick(e) {
        this._isPointerPressInProgress = false;
        if (this.state.disabled) {
            e.preventDefault();
        } else {
            this.props.onClick();
        }
    }

    /** @override */
    handleFocus() {
        if (this._isPointerPressInProgress) {
            return;
        }
        super.handleFocus()
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

Link.defaultProps = {
    onClick() {},
};

export default Link;
