import React from 'react';
import Control from '../Control';
import Button from '../Button';

class Radio extends Control {
    constructor(props) {
        super(props);

        Object.assign(this.state, {
            checked: props.checked
        });

        this.onClick = this.onClick.bind(this);
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        Object.assign(this.state, {
            checked: props.checked
        });
    }

    render() {
        var name = this.props.name || this.context.name;
        var theme = this.props.theme || this.context.theme;
        var size = this.props.size || this.context.size;
        var type = this.props.type || this.context.type;

        return (
            <label {...this.getProps()}>
                <Button theme={theme} size={size} type={type} checked={this.state.checked} disabled={this.props.disabled} onClick={this.onClick}>
                    {this.props.children}
                </Button>
                <input ref="control" className="radio__control" type="radio" autoComplete="off" name={name} value={this.props.value} disabled={this.props.disabled}/>
            </label>
        );
    }

    className() {
        var theme = this.props.theme || this.context.theme;
        var size = this.props.size || this.context.size;
        var type = this.props.type || this.context.type;

        var className = 'radio';

        if (theme) {
            className += ' radio_theme_' + theme;
        }
        if (size) {
            className += ' radio_size_' + size;
        }
        if (type) {
            className += ' radio_type_' + type;
        }
        if (this.props.disabled) {
            className += ' radio_disabled';
        }
        if (this.state.hovered) {
            className += ' radio_hovered';
        }
        if (this.state.focused) {
            className += ' radio_focused';
        }
        if (this.state.checked) {
            className += ' radio_checked';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onClick() {
        //  this.refs.control.checked = true;
        this.setState({checked: true});

        this.props.onCheck(this.props.value);
    }
}

Radio.defaultProps = {
    onCheck() {}
};

Radio.contextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any
};

module.exports = Radio;

