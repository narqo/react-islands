import React from 'react';

import Control from '../Control';

class TextInput extends Control {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            value: props.value
        };

        this.onClearClick = this.onClearClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    /** @override */
    componentWillReceiveProps(nextProps) {
        super.componentWillReceiveProps(nextProps);
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value });

            //  Изменение стейта и ререндер не приводят к событию onChange.
            //  Так что дергаем колбэк руками.
            //
            this.props.onChange(nextProps.value, this.props);
        }
    }

    render() {
        var hasClear;
        if (this.props.hasClear) {
            let clearClassName = 'input__clear';
            if (this.state.value) {
                clearClassName += ' input__clear_visible';
            }

            hasClear = (
                <i className={clearClassName} onClick={this.onClearClick}/>
            );
        }

        return (
            <span className={this.className()}>
                <span className="input__box">
                    <input {...this.getControlHandlers()} ref="control" className="input__control"
                        name={this.props.name}
                        type={this.props.type}
                        disabled={this.props.disabled}
                        placeholder={this.props.placeholder}
                        value={this.state.value}
                        onChange={this.onInputChange}
                    />
                    {hasClear}
                </span>
            </span>
        );
    }

    className() {
        var className = 'input';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' input_theme_' + theme;
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
        const { value } = e.target;
        this.setState({ value });
        this.props.onChange(value, this.props);
    }

    onClearClick() {
        const newValue = '';
        this.setState({ value: newValue, focused: true });
        this.props.onChange(newValue, this.props, { source: 'clear' });
    }
}

TextInput.defaultProps = {
    value: '',
    type: 'text',
    onChange() {}
};

TextInput.contextTypes = {
    theme: React.PropTypes.string
};

export default TextInput;
