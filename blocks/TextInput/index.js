import React from 'react';
import Control from '../Control';

class TextInput extends Control {
    constructor(props) {
        super(props);

        this.state.value = props.value;

        this.onClearClick = this.onClearClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        var type = this.props.type || 'text';

        var hasClear;
        if (this.props.hasClear) {
            var hasClearClassName = 'input__clear';
            if (this.state.value) {
                hasClearClassName += ' input__clear_visible';
            }

            hasClear = (
                <i className={hasClearClassName} onClick={this.onClearClick}/>
            );
        }

        return (
            <span className={this.className()} {...this.getControlHandlers()}>
                <span className="input__box">
                    <input ref="control" className="input__control" type={type} placeholder={this.props.placeholder} value={this.state.value}
                        onChange={this.onInputChange}
                    />
                    {hasClear}
                </span>
            </span>
        );
    }

    className() {
        var className = 'input';

        if (this.props.theme) {
            className += ' input_theme_' + this.props.theme;
        }
        if (this.props.size) {
            className += ' input_size_' + this.props.size;
        }
        if (this.props.disabled) {
            className += ' input_disabled';
        }
        if (this.state.hovered) {
            className += ' input_hovered';
        }
        if (this.state.focused) {
            className += ' input_focused';
        }
        if (this.props.hasClear) {
            className += ' input_has-clear';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onInputChange(e) {
        this.setState({ value: e.target.value });
        this.props.onChange();
    }

    onClearClick() {
        this.setState({ value: '', focused: true });
        //  FIXME: А неплохо бы на focused тут реагировать, а не явно ставить фокус?
        this.refs.control.focus();
        this.props.onChange({ source: 'clear' });
    }

}

TextInput.defaultProps = {
    onChange() {}
};

export default TextInput;
