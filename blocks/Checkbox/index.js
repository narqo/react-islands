import React from 'react';

import Control from '../Control';
import Button from '../Button';

class Checkbox extends Control {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            checked: props.checked
        };

        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            checked: props.checked
        });
    }

    render() {
        var name = this.props.name || this.context.name;
        var theme = this.props.theme || this.context.theme;
        var size = this.props.size || this.context.size;
        var type = this.props.type || this.context.type;

        return (type === 'button') ?
            //  В первом input'е нужно одновременно defaultValue и defaultChecked
            //  (а не просто value/checked). Иначе замучает warning'ами.
            //  Или же нужен фейковый onChange.
            (
                <label className={this.className()} {...this.getControlHandlers()}>
                    <Button refs="button" theme={theme} size={size} type={type}
                        checked={this.state.checked}
                        disabled={this.props.disabled}
                        focused={this.state.focused}
                        onClick={this.onClick}
                    >
                        {this.props.children}
                    </Button>
                    <input ref="control" className="checkbox__control" type="checkbox" autoComplete="off" name={name}
                        defaultValue={this.props.value}
                        defaultChecked={this.state.checked}
                        disabled={this.props.disabled}
                    />
                </label>
            ) : (
                <label className={this.className()} {...this.getControlHandlers()}>
                    <span className="checkbox__box">
                        <input ref="control" className="checkbox__control" type="checkbox" autoComplete="off" name={name}
                            value={this.props.value}
                            disabled={this.props.disabled}
                            checked={this.state.checked}
                            onChange={this.onChange}
                        />
                    </span>
                    <span className="checkbox__text" role="presentation">
                        {this.props.children}
                    </span>
                </label>
            );
    }

    className() {
        var theme = this.props.theme || this.context.theme;
        var size = this.props.size || this.context.size;
        var type = this.props.type || this.context.type;

        var className = 'checkbox';

        if (theme) {
            className += ' checkbox_theme_' + theme;
        }
        if (size) {
            className += ' checkbox_size_' + size;
        }
        if (type) {
            className += ' checkbox_type_' + type;
        }
        if (this.props.disabled) {
            className += ' checkbox_disabled';
        }
        if (this.state.hovered) {
            className += ' checkbox_hovered';
        }
        if (this.state.focused) {
            className += ' checkbox_focused';
        }
        if (this.state.checked) {
            className += ' checkbox_checked';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onClick(e) {
        this.props.onClick(e);

        var checked = !this.state.checked;

        this.refs.control.checked = checked;
        this.setState({ checked });

        this.props.onCheck(this.props.value, checked);
    }

    onChange(e) {
        var checked = e.target.checked;
        this.setState({ checked });

        this.props.onCheck(this.props.value, checked);
    }
}

Checkbox.defaultProps = {
    onClick() {},
    onCheck() {}
};

Checkbox.contextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onCheck: React.PropTypes.func
};

export default Checkbox;

