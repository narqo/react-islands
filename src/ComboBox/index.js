import React from 'react';
import Select from '../Select';
import Menu from '../Menu';
import TextInput from '../TextInput';

class ComboBox extends Select {
    constructor(props) {
        super(props);

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    /** @override */
    componentWillUpdate(_, nextState) {
        if (nextState.popupVisible !== this.state.popupVisible && !nextState.popupVisible) {
            this._wasPopupVisible = false;
            this.getMenu().onBlur();
        }
    }

    /** @override */
    componentDidUpdate(prevProps) {
        this._shouldRestoreControlFocus = false;

        if (!this._wasPopupVisible && this.state.popupVisible) {
            this._wasPopupVisible = true;
            this.updateMenuWidth();
            this.getMenu().onFocus();
        } else if (this.props.value !== prevProps.value) {
            this.updateMenuWidth();
        }
    }

    /** @override */
    renderControl() {
        return this.state.popupVisible ? this.renderTextInput() : this.renderButton()
    }

    renderTextInput() {
        const { theme, size } = this.props;
        const value = this.props.value[0];

        return (
            <TextInput ref="control" theme={theme} size={size} className="select__textinput input_width_available"
                focused={true}
                value={value}
                onChange={this.onTextInputChange}
                onFocusChange={null}
            />
        );
    }

    /** @override */
    renderMenu() {
        const { theme, size, disabled, mode, value } = this.props;
        const { menuHeight } = this.state;
        // NOTE: "nullify" the tabIndex of the Menu
        const tabIndex = null;

        return (
            <Menu ref="menu" theme={theme} size={size} className="select__menu"
                mode={mode}
                value={value}
                tabIndex={tabIndex}
                disabled={disabled}
                maxHeight={menuHeight}
                onItemClick={this.onMenuItemClick}
                onChange={this.onMenuChange}
            >
                {this.props.children}
            </Menu>
        );
    }

    /** @override */
    onKeyDown(e) {
        super.onKeyDown(e);

        if (this.state.popupVisible) {
            // NODE(narqo@): Proxy "some" keyDown events to the Menu
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
                this.getMenu().onKeyDown(e);
            } else if (e.key === 'Tab') {
                this._shouldRestoreControlFocus = true;
                this.setState({ popupVisible: false });
            }
        }
    }

    onTextInputChange(value) {
        this.props.onChange([value], this.props, { source: 'textinput' });

        if (this.props.onInputChange) {
            this.props.onInputChange(value, this.props);
        }
    }
}

/*
class ComboBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonFocused: false,
            menuHeight: null,
            textInputFocused: false,
            popupVisible: false,
        };

        this._wasPopupVisible = false;
        this._shouldRestoreControlFocus = false;
        this._cachedChildren = null;

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onButtonKeyDown = this.onButtonKeyDown.bind(this);
        this.onButtonFocusChange = this.onButtonFocusChange.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onPopupRequestHide = this.onPopupRequestHide.bind(this);
        this.onPopupLayout = this.onPopupLayout.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.onTextInputFocusChange = this.onTextInputFocusChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedChildren = null;
        }
    }

    componentWillUpdate(_, nextState) {
        if (nextState.popupVisible !== this.state.popupVisible && !nextState.popupVisible) {
            this._wasPopupVisible = false;
            this.setState({
                textInputFocused: false,
            });
        }
    }

    componentDidUpdate(prevProps) {
        this._shouldRestoreControlFocus = false;

        // FIXME(narqo@): an ugly trick to prevent DOM-focus from jumping to the bottom of the page on first open
        // @see https://github.com/narqo/react-islands/issues/41
        if (!this._wasPopupVisible && this.state.popupVisible) {
            this._wasPopupVisible = true;
            this.updateMenuWidth();
            process.nextTick(() => {
                this.setState({ textInputFocused: true });
            });
        } else if (this.props.value !== prevProps.value) {
            this.updateMenuWidth();
        }
    }

    componentWillUnmount() {
        this.setState({ popupVisible: false });
        this._cachedChildren = null;
    }

    render() {
        return (
            <div ref="root" className={this.className()} onKeyDown={this.onKeyDown}>
            {this.renderControl()}
                <Popup theme={this.props.theme} size={this.props.size}
                    anchor={this.refs.root}
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

    renderControl() {
        return this.state.popupVisible ? this.renderTextInput() : this.renderButton()
    }

    renderButton() {
        const { theme, size, disabled, mode, value } = this.props;
        const focused = (!disabled && this._shouldRestoreControlFocus) ? true : undefined;
        const checked = (
            (mode === 'check' || mode === 'radio-check') &&
            Array.isArray(value) && value.length > 0
        );

        return (
            <Button ref="control" theme={theme} size={size} className="select__button"
                type="button"
                disabled={disabled}
                checked={checked}
                focused={focused}
                onFocusChange={this.onButtonFocusChange}
                onClick={this.onButtonClick}
                onKeyDown={this.onButtonKeyDown}
            >
                {this.getDisplayedValue() || this.props.placeholder}
                <Icon className="select__tick"/>
            </Button>
        );
    }

    renderTextInput() {
        const { theme, size, name, value } = this.props;

        return (
            <TextInput ref="control" theme={theme} size={size} className="select__textinput input_width_available"
                name={name}
                focused={true}
                value={value}
                onFocusChange={this.onTextInputFocusChange}
                onChange={this.onTextInputChange}
            />
        );
    }

    renderMenu() {
        const { theme, size, disabled, mode, value } = this.props;
        const { menuHeight } = this.state;
        // NOTE: "nullify" the tabIndex of the Menu
        const tabIndex = null;

        return (
            <Menu ref="menu" theme={theme} size={size} className="select__menu"
                mode={mode}
                value={[value]}
                tabIndex={tabIndex}
                disabled={disabled}
                maxHeight={menuHeight}
                onItemClick={this.onMenuItemClick}
                onChange={this.onMenuChange}
            >
                {this.props.children}
            </Menu>
        );
    }

    className() {
        let className = 'select';

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
        if (this.state.textInputFocused || this.state.buttonFocused) {
            className += ' select_focused';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }
        return className;
    }

    getDisplayedValue() {
        const value = this.props.value;
        let res = '';

        this.getItems().some(item => {
            if (value === item.props.value) {
                res = Component.textValue(item);
                return true;
            }
            return false;
        });

        return res;
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
        return this.refs.control;
    }

    getMenu() {
        return this.refs.menu;
    }

    updateMenuWidth() {
        const controlWidth = ReactDOM.findDOMNode(this.getControl()).offsetWidth;
        ReactDOM.findDOMNode(this.getMenu()).style['min-width'] = `${controlWidth}px`;
    }

    onKeyDown(e) {
        if (this.state.popupVisible) {
            // NOTE(narqo@): allow to move focus to another focusable using <Tab>
            // @see https://www.w3.org/TR/wai-aria-practices-1.1/#menu
            if (e.key === 'Tab') {
                this._shouldRestoreControlFocus = true;
                this.setState({ popupVisible: false });
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
                this.getMenu().onKeyDown(e);
            }
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

    onButtonFocusChange(focused) {
        this.setState({ buttonFocused: focused })
    }

    onMenuItemClick() {
        if (this.props.mode === 'radio' || this.props.mode === 'radio-check') {
            this._shouldRestoreControlFocus = true;
            // NOTE(narqo@): select with mode radio* must be closed on click within <Menu>
            this.setState({ popupVisible: false });
        }
    }

    onMenuChange([value]) {
        this.props.onChange(value, this.props);
    }

    onTextInputFocusChange(focused) {
        this.setState({ textInputFocused: focused });
        focused && this.getMenu().onFocus();
    }

    onTextInputChange(value) {
        this.props.onChange(value, this.props, { source: 'textinput' });

        if (this.props.onInputChange) {
            this.props.onInputChange(value, this.props);
        }
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
        this._shouldRestoreControlFocus = reason === 'escapeKeyPress';
        this.setState({ popupVisible: false });
    }
}
*/

ComboBox.contextTypes = {
    theme: React.PropTypes.string,
};

ComboBox.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    placeholder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    maxHeight: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onInputChange: React.PropTypes.func,
};

ComboBox.defaultProps = {
    placeholder: '—',
    mode: 'radio',
    maxHeight: 0,
    onChange() {},
};

export default ComboBox;
