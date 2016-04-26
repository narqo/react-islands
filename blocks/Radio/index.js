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

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onControlChange = this.onControlChange.bind(this);
    }

    /** @override */
    componentWillReceiveProps(nextProps) {
        super.componentWillReceiveProps(nextProps);

        // NOTE(narqo@): `setState({ checked })` must be called only if new `checked` value was passed
        // or `Checkbox` will stay in the `checked` state regardless the DOM events.
        if (this.props.checked !== nextProps.checked) {
            this.setState({
                ...this.state,
                checked: nextProps.checked
            });
        }
    }

    render() {
        const { name, theme, size, type, disabled, value } = this.props;
        const { checked, focused } = this.state;

        if (type === 'button') {
            return (
                <label className={this.className()} {...this.getControlHandlers()}>
                    <Button theme={theme} size={size} type={type}
                        disabled={disabled}
                        checked={checked}
                        focused={focused}
                        onClick={this.onButtonClick}
                    >
                        {this.props.children}
                    </Button>
                    <input ref="control" className="radio__control" type="radio" autoComplete="off"
                        name={name}
                        disabled={disabled}
                        defaultValue={value}
                        defaultChecked={checked}
                    />
                </label>
            )
        } else {
            return (
                <label className={this.className()} {...this.getControlHandlers()}>
                    <span className="radio__box">
                        <input ref="control" className="radio__control" type="radio" autoComplete="off"
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
        var className = 'radio';

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

    onButtonClick() {
        //  FIXME: Может передавать туда name, value?
        this.props.onClick();

        if (!this.state.checked) {
            // FIXME(narqo@): `this.refs.control.checked = checked`
            this.refs.control.checked = true;
            this.setState({ checked: true });

            this.props.onCheck(true, this.props);
        }
    }

    onControlChange(e) {
        const { checked } = e.target;
        this.setState({ checked });
        if (checked) {
            this.props.onCheck(checked, this.props);
        }
    }
}

Radio.defaultProps = {
    onClick() {},
    onCheck() {}
};

Radio.contextTypes = {
    theme: React.PropTypes.string
};

export default Radio;
