import React from 'react';
import bem from 'b_';
import BemComponent, { BemControl } from '../BemComponent';
import Clear from './Clear';

const b = bem.with('input');

class TextInput extends BemComponent {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            value: props.value,
        });
    }

    render() {
        const { disabled, focused, hovered } = this.state;
        const { theme, size, hasClear } = this.props;

        const className = b({
            'has-clear': hasClear,
            theme,
            size,
            hovered,
            disabled,
            focused,
        });

        return (
            <span className={className}>
                <span className={b('box')}>
                    {this.renderControl()}
                    {hasClear && this.renderClear()}
                </span>
            </span>
        );
    }

    renderControl() {
        const { type = 'text', placeholder} = this.props;
        const { value } = this.state;
        return (
            <BemControl>
                <input
                    className={b('control')}
                    onChange={e => this.onInputChange(e)}
                    {...{ type, value, placeholder }} />
            </BemControl>
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
