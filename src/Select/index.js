import React from 'react';

import Component from '../Component';
import Button from '../Button';
import Popup from '../Popup';
import Menu from '../Menu';
import Icon from '../Icon';
import Group from '../Group';
import Item from '../Item';

class Select extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popupVisible: false,
        };

        this._wasPopupVisible = false;
        this._shouldRestoreButtonFocus = false;
        this._preventTrapMenuFocus = false;
        this._cachedItems = null;

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonKeyDown = this.onButtonKeyDown.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onMenuFocusChange = this.onMenuFocusChange.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onMenuKeyDown = this.onMenuKeyDown.bind(this);
        this.onPopupRequestHide = this.onPopupRequestHide.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedItems = null;
        }
    }

    componentDidUpdate() {
        this._shouldRestoreButtonFocus = false;
        this._preventTrapMenuFocus = false;

        // FIXME(narqo@): an ugly trick to prevent DOM-focus from jumping to the bottom of the page on first open
        // @see https://github.com/narqo/react-islands/issues/41
        if (!this._wasPopupVisible && this.state.popupVisible) {
            this._wasPopupVisible = true;
            process.nextTick(() => this.trapMenuFocus());
        }
    }

    componentWillUnmount() {
        this._cachedItems = null;
    }

    render() {
        return (
            <div className={this.className()}>
                {this.renderInputs()}
                {this.renderButton()}
                <Popup theme={this.props.theme} size={this.props.size}
                    anchor={this.refs.button}
                    directions={['bottom-left', 'bottom-right', 'top-left', 'top-right']}
                    visible={this.state.popupVisible}
                    onRequestHide={this.onPopupRequestHide}
                >
                    {this.renderMenu()}
                </Popup>
            </div>
        );
    }

    renderButtonText() {
        const value = this.props.value;

        return this.getItems().reduce((res, item) => {
            if (value.indexOf(item.props.value) !== -1) {
                if (value.length === 1) {
                    res.push(Component.textValue(item));
                } else {
                    res.push(item.props.checkedText || Component.textValue(item));
                }
            }
            return res;
        }, [])
        .join(', ');
    }

    renderButton() {
        const { theme, size, disabled, mode, value } = this.props;
        const focused = (!disabled && this._shouldRestoreButtonFocus) ? true : undefined;
        const checked = (
            (mode === 'check' || mode === 'radio-check') &&
            Array.isArray(value) && value.length > 0
        );

        return (
            <Button ref="button" theme={theme} size={size} className="select__button"
                disabled={disabled}
                checked={checked}
                focused={focused}
                onClick={this.onButtonClick}
                onKeyDown={this.onButtonKeyDown}
            >
                {this.renderButtonText() || this.props.placeholder || '—'}
                <Icon className="select__tick"/>
            </Button>
        );
    }

    renderMenu() {
        const { theme, size, disabled, mode, value } = this.props;
        const focused = this._wasPopupVisible && this.state.popupVisible;
        const tabIndex = -1;

        return (
            <Menu ref="menu" theme={theme} size={size} className="select__menu"
                mode={mode}
                value={value}
                tabIndex={tabIndex}
                disabled={disabled}
                focused={focused}
                onItemClick={this.onMenuItemClick}
                onKeyDown={this.onMenuKeyDown}
                onChange={this.onMenuChange}
                onFocusChange={this.onMenuFocusChange}
            >
                {this.props.children}
            </Menu>
        );
    }

    renderInputs() {
        if (this.props.disabled) {
            return null;
        }

        const { name } = this.props;
        return this.props.value.map((value, i) =>
            React.createElement('input', { type: 'hidden', key: `input${i}`, name, value }));
    }

    className() {
        var className = 'select';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' select_theme_' + theme;
        }
        if (this.props.size) {
            className += ' select_size_' + this.props.size;
        }
        if (this.props.mode) {
            className += ' select_mode_' + this.props.mode;
        }
        if (this.props.disabled) {
            className += ' select_disabled';
        }
        if (this.state.popupVisible) {
            className += ' select_opened';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return className;
    }

    getItems() {
        if (!this._cachedItems) {
            let items = [];

            React.Children.forEach(this.props.children, child => {
                if (Component.is(child, Item)) {
                    items.push(child);
                } else if (Component.is(child, Group)) {
                    //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
                    items = items.concat(React.Children.toArray(child.props.children));
                }
            });

            this._cachedItems = items;
        }

        return this._cachedItems;
    }

    getMenu() {
        return this.refs.menu;
    }

    trapMenuFocus() {
        if (!this._preventTrapMenuFocus) {
            this.getMenu().componentWillGainFocus();
        }
    }

    onButtonClick() {
        this.setState({ popupVisible: !this.state.popupVisible });
    }

    onButtonKeyDown(e) {
        if (!this.state.popupVisible &&
            ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !e.shiftKey)) {
            this.setState({ popupVisible: true });
        }
    }

    onMenuItemClick() {
        if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
            this._shouldRestoreButtonFocus = true;
            // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
            this.setState({ popupVisible: false });
        }
    }

    onMenuKeyDown(e) {
        // NOTE(narqo@): allow to move focus to another focusable using <Tab>
        // @see https://www.w3.org/TR/wai-aria-practices-1.1/#menu
        if (this.state.popupVisible && e.key === 'Tab') {
            this._preventTrapMenuFocus = true;
            this._shouldRestoreButtonFocus = true;
            this.setState({ popupVisible: false });
        }
    }

    onMenuChange(value) {
        this.props.onChange(value, this.props);
    }

    onMenuFocusChange(focused) {
        if (!focused && this.state.popupVisible) {
            // NOTE(narqo@): restore DOM focus to the Menu if still opened
            this.trapMenuFocus();
        }
    }

    onPopupRequestHide(_, reason) {
        this._shouldRestoreButtonFocus = reason === 'escapeKeyPress';
        this.setState({ popupVisible: false });
    }
}

Select.contextTypes = {
    theme: React.PropTypes.string,
};

Select.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    mode: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func,
};

Select.defaultProps = {
    onChange() {},
};

export default Select;
