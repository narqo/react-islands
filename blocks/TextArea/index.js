import React from 'react';

import Control from '../Control';

class TextArea extends Control {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            value: props.value
        };

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
        return (
            <textarea {...this.getControlHandlers()} ref="control" className={this.className()}
                name={this.props.name}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                value={this.state.value}
                onChange={this.onInputChange}
            >
            </textarea>
        );
    }

    className() {
        var className = 'textarea';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' textarea_theme_' + theme;
        }
        if (this.props.size) {
            className += ' textarea_size_' + this.props.size;
        }
        if (this.props.disabled) {
            className += ' textarea_disabled';
        }
        if (this.state.hovered) {
            className += ' textarea_hovered';
        }
        if (this.state.focused) {
            className += ' textarea_focused';
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
}

TextArea.defaultProps = {
    value: '',
    onChange() {}
};

TextArea.contextTypes = {
    theme: React.PropTypes.string
};

export default TextArea;
