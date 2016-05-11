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
            popupVisible: false
        };

        this._preventPopupVisibleToggle = false;
        this._cachedItems = null;

        this.getPopupTarget = this.getPopupTarget.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonFocusChange = this.onButtonFocusChange.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onPopupClickOutside = this.onPopupClickOutside.bind(this);
        this.onPopupVisibleChange = this.onPopupVisibleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedItems = null;
        }
    }

    componentWillUnmount() {
        this._cachedItems = null;
    }

    render() {
        const { theme, size, disabled, name, mode } = this.props;
        const menuValue = this.props.value;

        const hiddens = menuValue.map(value =>
            <input type="hidden" name={name} value={value}/>
        );

        const texts = [];
        this.getItems().forEach(item => {
            if (menuValue.indexOf(item.props.value) !== -1) {
                if (menuValue.length === 1) {
                    texts.push(Component.textValue(item));
                } else {
                    texts.push(item.props.checkedText || Component.textValue(item));
                }
            }
        });

        const text = texts.join(', ') || this.props.text || '—';

        const buttonChecked = (
            (mode === 'check' || mode === 'radio-check') &&
            Array.isArray(menuValue) &&
            menuValue.length > 0
        );

        const popupVisible = this.state.popupVisible;

        return (
            <div className={this.className()}>
                {hiddens}

                <Button ref="button" theme={theme} size={size} disabled={disabled} className="select__button"
                    checked={buttonChecked}
                    onClick={this.onButtonClick}
                    onFocusChange={this.onButtonFocusChange}
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
                    <Menu theme={theme} size={size} disabled={disabled} className="select__menu"
                        tabIndex={null}
                        mode={mode}
                        value={menuValue}
                        focused={popupVisible}
                        onItemClick={this.onMenuItemClick}
                        onChange={this.onMenuChange}
                    >
                        {this.props.children}
                    </Menu>
                </Popup>
            </div>
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

    //  TODO: Вынести из Select и Menu подобные методы в одно место.
    //  Хотя сейчас Menu.prototype._getItems() не совсем такой.
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

    onButtonClick() {
        if (this._preventPopupVisibleToggle) {
            this._preventPopupVisibleToggle = false;
        } else {
            this.setState({ popupVisible: !this.state.popupVisible });
        }
    }

    onButtonFocusChange(focused) {
        if (!focused) {
            // FIXME(narqo@): close popup on button's blur if "relatedTarget" is within <Menu>
            //this.setState({ popupVisible: false });
        }
    }

    onMenuItemClick(e) {
        if (e.type !== 'click') {
            // TODO(narqo@): pass eventSource=[mouse, keyboard] to on*Click events
            this._preventPopupVisibleToggle = true;
        }
        if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
            // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
            this.setState({ popupVisible: false });
        }
    }

    onMenuChange(value) {
        this.props.onChange(value, this.props);
    }

    onPopupClickOutside() {
        this.setState({ popupVisible: false });
    }

    onPopupVisibleChange(visible) {
        this.setState({ popupVisible: visible });
    }
}

Select.defaultProps = {
    onChange() {}
};

Select.contextTypes = {
    theme: React.PropTypes.string
};

export default Select;
