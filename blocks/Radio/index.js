import React from 'react';
import Control from '../Control';
import Button from '../Button';

class Radio extends Control {
    constructor(props) {
        super(props);

        this._propsToState(props);

        this.onClick = this.onClick.bind(this);
    }

    _propsToState(props) {
        this.state.checked = props.checked;
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        this._propsToState(props);
    }

    render() {
        //  FIXME: А как бы сделать так, чтобы это сделать один раз, положить куда-нибудь и везде брать оттуда?
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

    onClick(e) {
        if (this.props.onClick) {
            //  FIXME: Может передавать туда name, value?
            this.props.onClick(e);
        }

        if (!this.state.checked) {
            this.refs.control.checked = true;

            this.setState({checked: true});

            if (this.props.onCheck) {
                this.props.onCheck(this.props.value);
            }
        }
    }
}

Radio.contextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    disabled: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onCheck: React.PropTypes.func
};

module.exports = Radio;

