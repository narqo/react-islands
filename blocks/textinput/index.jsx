import React from 'react';
import classNames from 'classnames';
import Control from '../control';
import Clear from './clear';
import style from './style.css';

class TextInput extends Control {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            value: props.value,
        });
    }

    render() {
        const { size, hasClear } = this.props;
        const className = classNames(
            style.textinput,
            style[`size-${size}`],
            {
                [style.hovered]: this.state.hovered,
                [style.disabled]: this.state.disabled,
                [style.focused]: this.state.focused,
                [style['has-clear']]: hasClear,
            }
        );

        return (
            <span className={className}>
                <span className={style.box}>
                    {this.renderControl()}
                    {hasClear && this.renderClear()}
                </span>
            </span>
        );
    }

    renderControl() {
        const { placeholder, type = 'text' } = this.props;
        const { value } = this.state;
        const listeners = {
            onChange: e => this.handleInputChange(e),
        };
        return (
            <input ref="control" className={style.control} {...{ type, value, placeholder }} {...listeners} />
        );
    }

    renderClear() {
        return <Clear visible={!!this.state.value} onClick={() => this.handleClearClick()}/>;
    }

    handleInputChange(e) {
        this.setState({ value: e.target.value });
        this.handleChange();
    }

    handleClearClick() {
        this.setState({ value: '', focused: true });
        this.handleChange({ source: 'clear' });
    }

    handleChange(data) {
        this.props.onChange.call(this, data);
    }
}

TextInput.defaultProps = {
    onChange() {},
};

export default TextInput;
