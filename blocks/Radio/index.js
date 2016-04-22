import React from 'react';
import Control from '../Control';
import Button from '../Button';

class Radio extends Control {
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
        //  FIXME: А как бы сделать так, чтобы это сделать один раз, положить куда-нибудь и везде брать оттуда?
        var name = this.props.name || this.context.name;
        var theme = this.props.theme || this.context.theme;
        var size = this.props.size || this.context.size;
        var type = this.props.type || this.context.type;

        return (type === 'button') ?
            (
                <label {...this.getProps()}>
                    <Button theme={theme} size={size} type={type} checked={this.state.checked} disabled={this.props.disabled} onClick={this.onClick}>
                        {this.props.children}
                    </Button>
                    <input ref="control" className="radio__control" type="radio" autoComplete="off" name={name}
                        value={this.props.value}
                        disabled={this.props.disabled}
                    />
                </label>
            ) : (
                <label {...this.getProps()}>
                    <span className="radio__box">
                        <input ref="control" className="radio__control" type="radio" autoComplete="off" name={name}
                            value={this.props.value}
                            disabled={this.props.disabled}
                            onChange={this.onChange}
                        />
                    </span>
                    <span className="radio__text" role="presentation">
                        {this.props.children}
                    </span>
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
        //  FIXME: Может передавать туда name, value?
        this.props.onClick(e);

        if (!this.state.checked) {
            this.refs.control.checked = true;

            this.setState({checked: true});

            this.props.onCheck(this.props.value);
        }
    }

    onChange(e) {
        var checked = e.target.checked;

        this.setState({checked});

        if (checked) {
            this.props.onCheck(this.props.value);
        }
    }
}

Radio.defaultProps = {
    onClick() {},
    onCheck() {}
};

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

export default Radio;

