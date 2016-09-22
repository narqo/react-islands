import React from 'react';
import ReactDOM from 'react-dom';

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
            buttonFocused: false,
            menuFocused: false,
            menuHeight: null,
            popupVisible: false,
        };

        this._cachedChildren = null;

        this.getControl = this.getControl.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonFocusChange = this.onButtonFocusChange.bind(this);
        this.onButtonKeyDown = this.onButtonKeyDown.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onMenuFocusChange = this.onMenuFocusChange.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onMenuKeyDown = this.onMenuKeyDown.bind(this);
        this.onPopupRequestHide = this.onPopupRequestHide.bind(this);
        this.onPopupLayout = this.onPopupLayout.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedChildren = null;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.popupVisible &&
            (this.state.popupVisible !== prevState.popupVisible || this.props.value !== prevProps.value)) {
            this.updateMenuWidth();
        }
    }

    componentWillUnmount() {
        this.setState({ popupVisible: false });
        this._cachedChildren = null;
    }

    render() {
        return (
            <div className={this.className()}>
                {this.renderInputs()}
                {this.renderButton()}
                <Popup
                    theme={this.props.theme}
                    size={this.props.size}
                    anchor={this.getControl}
                    directions={['bottom-left', 'bottom-right', 'top-left', 'top-right']}
                    visible={this.state.popupVisible}
                    onLayout={this.onPopupLayout}
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
        const { theme, size, disabled, mode, value, id } = this.props;
        const { buttonFocused } = this.state;
        const checked = (
            (mode === 'check' || mode === 'radio-check') &&
            Array.isArray(value) && value.length > 0
        );

        return (
            <Button
                ref="button"
                theme={theme}
                size={size}
                id={id}
                className="select__button"
                type="button"
                disabled={disabled}
                checked={checked}
                focused={buttonFocused}
                onClick={this.onButtonClick}
                onKeyDown={this.onButtonKeyDown}
                onFocusChange={this.onButtonFocusChange}
            >
                {this.renderButtonText() || this.props.placeholder}
                <Icon className="select__tick"/>
            </Button>
        );
    }

    renderMenu() {
        const { theme, size, disabled, mode, value } = this.props;
        const { menuHeight, menuFocused, popupVisible } = this.state;
        const focused = popupVisible && menuFocused;
        const tabIndex = -1;

        return (
            <Menu
                ref="menu"
                theme={theme}
                size={size}
                className="select__menu"
                mode={mode}
                value={value}
                focused={focused}
                disabled={disabled}
                tabIndex={tabIndex}
                maxHeight={menuHeight}
                onItemClick={this.onMenuItemClick}
                onFocusChange={this.onMenuFocusChange}
                onKeyDown={this.onMenuKeyDown}
                onChange={this.onMenuChange}
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
        // NOTE: see narqo/react-islands#98 for notes about `_js_inited`
        let className = 'select select_js_inited';

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
        if (!this._cachedChildren) {
            let items = [];

            React.Children.forEach(this.props.children, child => {
                if (Component.is(child, Item)) {
                    items.push(child);
                } else if (Component.is(child, Group)) {
                    //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
                    items = items.concat(React.Children.toArray(child.props.children));
                }
            });

            this._cachedChildren = items;
        }

        return this._cachedChildren;
    }

    getControl() {
        return this.refs.button;
    }

    getMenu() {
        return this.refs.menu;
    }

    updateMenuWidth() {
        const buttonWidth = ReactDOM.findDOMNode(this.getControl()).offsetWidth;
        ReactDOM.findDOMNode(this.getMenu()).style['min-width'] = `${buttonWidth}px`;
    }

    onButtonClick() {
        const popupVisible = !this.state.popupVisible;
        this.setState(
            { popupVisible },
            () => popupVisible && this.setState({ menuFocused: true })
        );
    }

    onButtonFocusChange(buttonFocused) {
        this.setState({ buttonFocused });
    }

    onButtonKeyDown(e) {
        if (!this.state.popupVisible &&
            ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !e.shiftKey)) {
            this.setState(
                { popupVisible: true },
                () => this.setState({ menuFocused: true })
            );
        }
    }

    onMenuItemClick() {
        if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
            // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
            this.setState(
                { popupVisible: false },
                () => this.setState({ buttonFocused: true })
            );
        }
    }

    onMenuKeyDown(e) {
        // NOTE(narqo@): allow to move focus to another focusable using <Tab>
        // @see https://www.w3.org/TR/wai-aria-practices-1.1/#menu
        if (this.state.popupVisible && e.key === 'Tab') {
            this.setState(
                { popupVisible: false },
                () => this.setState({ buttonFocused: true })
            );
        }
    }

    onMenuChange(value) {
        this.props.onChange(value, this.props);
    }

    onMenuFocusChange(menuFocused) {
        this.setState({ menuFocused });
    }

    onPopupLayout({ layout }, popupProps) {
        const { maxHeight } = this.props;
        const { viewportOffset } = popupProps;
        const { pageYOffset } = window;

        if (layout.direction.indexOf('top-') > -1) {
            let newTop = maxHeight ? layout.bottom - maxHeight : layout.top;
            layout.top = Math.max(newTop, pageYOffset + viewportOffset);
        } else {
            let newBottom = maxHeight ? layout.top + maxHeight : layout.bottom;
            layout.bottom = Math.min(newBottom, pageYOffset + window.innerHeight - viewportOffset);
        }

        const menuHeight = layout.bottom - layout.top;
        this.setState({ menuHeight });
    }

    onPopupRequestHide(_, reason) {
        this.setState(
            { popupVisible: false },
            () => reason === 'escapeKeyPress' && this.setState({ buttonFocused: true })
        );
    }
}

Select.contextTypes = {
    theme: React.PropTypes.string,
};

Select.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    id: React.PropTypes.string,
    className: React.PropTypes.string,
    mode: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    maxHeight: React.PropTypes.number,
    onChange: React.PropTypes.func,
};

Select.defaultProps = {
    placeholder: '—',
    maxHeight: 0,
    onChange() {},
};

export default Select;
