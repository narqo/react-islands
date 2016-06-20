import React from 'react';
import Control from '../Control';
import Button from '../Button';

class Checkbox extends Control {
    constructor(props) {
        super(props);

        this.onControlChange = this.onControlChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonFocusChange = this.onButtonFocusChange.bind(this);
        this.onButtonHoverChange = this.onButtonHoverChange.bind(this);
    }

    render() {
        const { name, theme, size, type, checked, disabled, value } = this.props;
        const { focused } = this.state;

        if (type === 'button') {
            return (
                <label className={this.className()}>
                    {checked && <input type="hidden" name={name} value={value} disabled={disabled} />}
                    <Button theme={theme} size={size} type={type}
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
                    <span className="checkbox__box">
                        <input ref="control" className="checkbox__control" type="checkbox" autoComplete="off"
                            name={name}
                            disabled={disabled}
                            value={value}
                            checked={checked}
                            onChange={this.onControlChange}
                        />
                    </span>
                    <span className="checkbox__text" role="presentation">
                        {this.props.children}
                    </span>
                </label>
            )
        }
    }

    className() {
        let className = 'checkbox';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' checkbox_theme_' + theme;
        }
        if (this.props.size) {
            className += ' checkbox_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' checkbox_type_' + this.props.type;
        }
        if (this.props.disabled) {
            className += ' checkbox_disabled';
        }
        if (this.props.checked) {
            className += ' checkbox_checked';
        }
        if (this.state.hovered) {
            className += ' checkbox_hovered';
        }
        if (this.state.focused) {
            className += ' checkbox_focused';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onControlChange() {
        if (this.props.disabled) {
            return;
        }
        const checked = !this.props.checked;
        this.props.onCheck(checked, this.props);
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

Checkbox.contextTypes = {
    theme: React.PropTypes.string,
};

Checkbox.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checked: React.PropTypes.bool,
    value: React.PropTypes.any,
    onClick: React.PropTypes.func,
    onCheck: React.PropTypes.func,
};

Checkbox.defaultProps = {
    onCheck() {},
};

export default Checkbox;
