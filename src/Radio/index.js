import React from 'react';
import Control from '../Control';
import Button from '../Button';

class Radio extends Control {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonFocusChange = this.onButtonFocusChange.bind(this);
        this.onButtonHoverChange = this.onButtonHoverChange.bind(this);
        this.onControlChange = this.onControlChange.bind(this);
    }

    render() {
        const { id, name, theme, size, type, checked, disabled, value } = this.props;
        const { focused } = this.state;

        if (type === 'button') {
            return (
                <label className={this.className()}>
                    {checked && <input type="hidden" name={name} value={value} disabled={disabled} />}
                    <Button
                        theme={theme}
                        size={size}
                        type={type}
                        id={id}
                        disabled={disabled}
                        checked={checked}
                        focused={focused}
                        onFocusChange={this.onButtonFocusChange}
                        onHoverChange={this.onButtonHoverChange}
                        onClick={this.onButtonClick}
                    >
                        {this.props.children}
                    </Button>
                </label>
            )
        } else {
            return (
                <label className={this.className()} {...this.getControlHandlers()}>
                    <span className="radio__box">
                        <input ref="control" className="radio__control" type="radio" autoComplete="off"
                            id={id}
                            name={name}
                            disabled={disabled}
                            value={value}
                            checked={checked}
                            onChange={this.onControlChange}
                        />
                    </span>
                    <span className="radio__text" role="presentation">
                        {this.props.children}
                    </span>
                </label>
            );
        }
    }

    className() {
        // NOTE: see narqo/react-islands#98 for notes about `_js_inited`
        let className = 'radio radio_js_inited';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' radio_theme_' + theme;
        }
        if (this.props.size) {
            className += ' radio_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' radio_type_' + this.props.type;
        }
        if (this.props.disabled) {
            className += ' radio_disabled';
        }
        if (this.props.checked) {
            className += ' radio_checked';
        }
        if (this.state.hovered) {
            className += ' radio_hovered';
        }
        if (this.state.focused) {
            className += ' radio_focused';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onControlChange() {
        if (this.props.disabled || this.props.checked) {
            return;
        }
        this.props.onCheck(true, this.props);
    }

    onButtonFocusChange(focused) {
        this.setState({ focused });
    }

    onButtonHoverChange(hovered) {
        this.setState({ hovered });
    }

    onButtonClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e, this.props);
        }
        if (!e.isDefaultPrevented()) {
            this.onControlChange();
        }
    }
}

Radio.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    value: React.PropTypes.any,
    onClick: React.PropTypes.func,
    onCheck: React.PropTypes.func,
};

Radio.defaultProps = {
    onCheck() {},
};

Radio.contextTypes = {
    theme: React.PropTypes.string,
};

export default Radio;
