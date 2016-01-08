import React from 'react';
import classNames from 'classnames';
import BaseComponent, { Control } from '../control';
import Clear from './clear';
import style from './style.css';

class TextInput extends BaseComponent {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            value: props.value,
        });
    }

    render() {
        const { disabled, focused, hovered } = this.state;
        const { size, hasClear } = this.props;

        const className = classNames(
            style.textinput,
            style[`size-${size}`],
            {
                [style.hovered]: hovered,
                [style.disabled]: disabled,
                [style.focused]: focused,
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
        const { type = 'text', placeholder} = this.props;
        const { value } = this.state;
        const listeners = {
            onChange: e => this.onInputChange(e),
        };
        return (
            <Control {...this.state}>
                <input className={style.control} {...{ type, value, placeholder }} {...listeners} />
            </Control>
        );
    }

    renderClear() {
        return <Clear visible={!!this.state.value} onClick={() => this.onClearClick()}/>;
    }

    onInputChange(e) {
        this.setState({ value: e.target.value });
        this.onChange();
    }

    onClearClick() {
        this.setState({ value: '', focused: true });
        this.onChange({ source: 'clear' });
    }

    onChange(data) {
        this.props.onChange.call(this, data);
    }
}

TextInput.defaultProps = {
    onChange() {},
};

export default TextInput;
