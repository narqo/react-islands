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

        this._restoreButtonFocused = false;
        this._cachedItems = null;
        this._cachedChildren = null;

        this.getPopupTarget = this.getPopupTarget.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onMenuFocusChange = this.onMenuFocusChange.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onPopupClickOutside = this.onPopupClickOutside.bind(this);
        this.onPopupVisibleChange = this.onPopupVisibleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedChildren = null;
            this._cachedItems = null;
        }
    }

    componentDidUpdate() {
        if (this._restoreButtonFocused) {
            this._restoreButtonFocused = false;
        }
    }

    componentWillUnmount() {
        this._cachedItems = null;
        this._cachedChildren = null;
    }

    render() {
        const { theme, size, disabled, mode } = this.props;

        const menuValue = this.props.value;
        const buttonChecked = (
            (mode === 'check' || mode === 'radio-check') &&
            Array.isArray(menuValue) &&
            menuValue.length > 0
        );
        const buttonFocused = this._restoreButtonFocused ? true : undefined;
        const { popupVisible } = this.state;

        const text = this.renderButtonText();
        const hiddens = this.renderHiddens();
        const menu = this.renderMenu();

        return (
            <div className={this.className()}>
                {hiddens}

                <Button ref="button" theme={theme} size={size} disabled={disabled} className="select__button"
                    checked={buttonChecked}
                    focused={buttonFocused}
                    onClick={this.onButtonClick}
                >
                    {text}
                    <Icon className="select__tick"/>
                </Button>
                <Popup theme={theme} size={size}
                    visible={popupVisible}
                    target={this.getPopupTarget}
                    directions={['bottom-left', 'bottom-right', 'top-left', 'top-right']}
                    onClickOutside={this.onPopupClickOutside}
                    onVisibleChange={this.onPopupVisibleChange}
                >
                    {menu}
                </Popup>
            </div>
        );
    }

    renderButtonText() {
        const text = [];
        const { value } = this.props;
        this.getItems().forEach(item => {
            if (value.indexOf(item.props.value) !== -1) {
                if (value.length === 1) {
                    text.push(Component.textValue(item));
                } else {
                    text.push(item.props.checkedText || Component.textValue(item));
                }
            }
        });
        return text.join(', ') || this.props.placeholder || '—';
    }

    renderHiddens() {
        if (this.props.disabled) {
            return null;
        }

        const { name } = this.props;
        return this.props.value.map(value => React.createElement('input', { type: 'hidden', name, value }));
    }

    renderMenu() {
        const { theme, size, disabled, mode, value } = this.props;
        const focused = this.state.popupVisible;
        const tabIndex = -1;

        return (
            <Menu ref="menu" theme={theme} size={size} className="select__menu"
                mode={mode}
                value={value}
                tabIndex={tabIndex}
                disabled={disabled}
                focused={focused}
                onItemClick={this.onMenuItemClick}
                onChange={this.onMenuChange}
                onFocusChange={this.onMenuFocusChange}
            >
                {this.props.children}
            </Menu>
        );
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

    getPopupTarget() {
        return this.refs.button;
    }

    getMenu() {
        return this.refs.menu;
    }

    onButtonClick() {
        this.setState({ popupVisible: !this.state.popupVisible });
    }

    onMenuItemClick(e) {
        if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
            this._restoreButtonFocused = true;
            // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
            this.setState({ popupVisible: false });
        }
    }

    onMenuChange(value) {
        this.props.onChange(value, this.props);
    }

    onMenuFocusChange(focused) {
        if (!focused && this.state.popupVisible) {
            // NOTE(narqo@): restore DOM focus to the Menu if still opened
            this.getMenu().componentWillGainFocus();
        }
    }

    onPopupClickOutside() {
        this.setState({ popupVisible: false });
    }

    onPopupVisibleChange(visible) {
        this.setState({ popupVisible: visible });
    }
}

Select.contextTypes = {
    theme: React.PropTypes.string
};

Select.defaultProps = {
    onChange() {}
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

export default Select;
