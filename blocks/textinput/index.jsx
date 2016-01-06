import React from 'react';
import classNames from 'classnames';
import Component from '../component';
import style from './style.css';

class TextInput extends Component {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            value: props.value,
        });
    }

    render() {
        const { size } = this.props;
        const className = classNames(
            style.textinput,
            style[`size-${size}`],
            {
                [style.hovered]: this.state.hovered,
                [style.disabled]: this.state.disabled,
                [style.focused]: this.state.focused,
            }
        );

        const listeners = {
            onChange: e => this.handleChange(e),
            onMouseEnter: e => this.handleMouseEnter(e),
            onMouseLeave: e => this.handleMouseLeave(e),
            onFocus: e => this.handleFocus(e),
            onBlur: e => this.handleBlur(e),
        };

        const { placeholder, type = 'text' } = this.props;

        return (
            <span className={className}>
                <span className={style.box}>
                    <input
                        className={style.control}
                        value={this.state.value}
                        {...{type, placeholder}}
                        {...listeners}
                    />
                </span>
            </span>
        );
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        this.props.onChange.call(this, e);
    }
}

TextInput.defaultProps = {
    onChange() {},
};

export default TextInput;
