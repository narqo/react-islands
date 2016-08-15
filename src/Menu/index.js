import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../Component';
import Item from '../Item';
import Group from '../Group';
import MenuItem from './MenuItem';

const TIMEOUT_KEYBOARD_SEARCH = 1500;
const KEY_CODE_SPACE = 32;

function appendItemToCache(item, cache) {
    if (Component.is(item, Item)) {
        cache.push(item);
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);

        const value = this._validateValue(this.props.value);

        this.state = {
            ...this.state,
            value,
            hoveredIndex: null,
            focusedIndex: null,
        };

        this._cachedChildren = null;
        this._hoveredItemIndex = null;
        this._shouldScrollToItem = false;
        this._lastTyping = {
            char: '',
            text: '',
            index: 0,
            time: 0,
        };

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onItemHover = this.onItemHover.bind(this);
    }

    componentWillMount() {
        //  Если мы как-то поменяли value (внутри _validValue),
        //  то нужно сообщить про это наверх.
        if (this.props.value !== this.state.value) {
            this.props.onChange(this.state.value, this.props);
        }

        const selectedIdx = this._getFirstSelectedChildIndex();
        if (selectedIdx) {
            this.setState({ focusedIndex: selectedIdx });
        }
    }

    componentDidMount() {
        if (this.props.focused) {
            this.componentWillGainFocus();
        }
        this._scrollToMenuItem();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedChildren = null;
        }

        if (nextProps.value !== this.props.value) {
            this.setState({ value: this._validateValue(nextProps.value) });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.focused && !this.props.focused) {
            this.componentWillLostFocus();
        } else if (!prevProps.focused && this.props.focused) {
            this.componentWillGainFocus();
        }

        if (this._shouldScrollToItem) {
            this._shouldScrollToItem = false;
            this._scrollToMenuItem();
        }
    }

    componentWillUnmount() {
        this._cachedChildren = null;
    }

    componentWillGainFocus() {
        if (this.refs.control) {
            this.refs.control.focus();
        }
    }

    componentWillLostFocus() {
        if (this.refs.control) {
            this.refs.control.blur();
        }
    }

    _getChildren() {
        if (!this._cachedChildren) {
            this._cachedChildren = [];

            React.Children.forEach(this.props.children, child => {
                if (Component.is(child, Group)) {
                    React.Children.forEach(child.props.children, item => appendItemToCache(item, this._cachedChildren));
                } else {
                    appendItemToCache(child, this._cachedChildren);
                }
            });
        }

        return this._cachedChildren;
    }

    _getFirstEnabledChild() {
        if (this.props.disabled) return null;

        const children = this._getChildren();

        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            if (!item.props.disabled) {
                return item;
            }
        }

        return null;
    }

    _getFirstSelectedChildIndex() {
        const { value } = this.state;
        const children = this._getChildren();

        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            if (!item.props.disabled && value.indexOf(item.props.value) !== -1) {
                return i;
            }
        }

        return this._getFirstEnabledChildIndex();
    }

    _getFirstEnabledChildIndex() {
        return this._getChildren().indexOf(this._getFirstEnabledChild());
    }

    _validateValue(value) {
        let newValue;

        if (value == null) {
            newValue = [];
        } else if (Array.isArray(value)) {
            newValue = value;
        } else {
            newValue = [value];
        }

        const filteredValue = this._getChildren().reduce((res, item) => {
            const itemValue = item.props.value;

            if (newValue.indexOf(itemValue) !== -1) {
                res.push(itemValue);
            }

            return res;
        }, []);

        if (filteredValue.length !== newValue.length) {
            newValue = filteredValue;
        }

        if (this.props.mode === 'radio') {
            if (newValue.length === 0) {
                const firstChild = this._getFirstEnabledChild();

                newValue = firstChild === null ? [] : [firstChild.props.value];
            } else if (newValue.length > 1) {
                newValue = [newValue[0]];
            }
        } else if (this.props.mode === 'radio-check' && newValue.length > 1) {
            newValue = [newValue[0]];
        }

        //  Раз уж начал упарываться, то остановиться уже сложно.
        //  Теперь в newValue:
        //
        //    * Массив;
        //    * В котором значения из переданного value (массива или просто значения);
        //    * И которые при этом есть в values самого меню.
        //    * При этом, если в value был массив, в котором были только валидные значения,
        //      подходящие к данному mode, то вернется именно этот массив.
        //      Что позволит сравнить исходное value с вот этим новым.
        //
        //  Но, увы, это сравнение все равно даст неверный результат,
        //  если в value передать не массив или ничего не передать :(
        //  Но так уже заморачиваться не хочется. Проще эксепшен кинуть на невалидный value.
        //
        return newValue;
    }

    _scrollToMenuItem() {
        if (this.refs.control && this.refs.focusedMenuItem) {
            const menuDOMNode = ReactDOM.findDOMNode(this.refs.control);
            const focusedItemDOMNode = ReactDOM.findDOMNode(this.refs.focusedMenuItem);
            const menuRect = menuDOMNode.getBoundingClientRect();
            const focusedRect = focusedItemDOMNode.getBoundingClientRect();

            if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
                menuDOMNode.scrollTop = focusedItemDOMNode.offsetTop + focusedItemDOMNode.clientHeight -
                    menuDOMNode.offsetTop - menuDOMNode.offsetHeight;
            }
        }
    }

    render() {
        const { disabled, maxHeight } = this.props;
        const tabIndex = disabled ? -1 : this.props.tabIndex;
        const menu = this._renderMenu();

        let style;
        if (maxHeight) {
            style = {
                maxHeight,
            }
        }

        return (
            <div ref="control"
                className={this.className()}
                style={style}
                tabIndex={tabIndex}
                onKeyDown={this.onKeyDown}
                onKeyPress={this.onKeyPress}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            >
                {menu}
            </div>
        );
    }

    _renderMenu() {
        let index = 0;

        return React.Children.map(this.props.children, child => {
            if (Component.is(child, Item)) {
                return this._renderMenuItem(child.props, index++);
            } else if (Component.is(child, Group)) {
                const groupedItems = React.Children.map(
                    child.props.children,
                    groupChild => this._renderMenuItem(groupChild.props, index++)
                );

                return this._renderMenuGroup(child.props, groupedItems);
            } else {
                //  FIXME: Или тут бросать ошибку?
                return child;
            }
        });
    }

    _renderMenuItem(props, index) {
        const { theme, size, disabled, mode } = this.props;
        const { value, hoveredIndex, focusedIndex } = this.state;
        const checkable = Boolean(mode);
        const hovered = index === hoveredIndex;
        const focused = index === focusedIndex;
        const key = `menuitem${props.id || index}`;

        return React.createElement(
            MenuItem,
            {
                theme,
                size,
                disabled,
                hovered,
                checked: checkable && (value.indexOf(props.value) !== -1),
                ref: (hovered || focused) ? 'focusedMenuItem' : null,
                key,
                index,
                ...props,
                onClick: this.onItemClick,
                onHover: this.onItemHover,
            }
        );
    }

    _renderMenuGroup(props, children) {
        let title;
        if (props.title) {
            title = <div className="menu__group-title">{props.title}</div>;
        }

        return (
            <div className="menu__group">
                {title}
                {children}
            </div>
        );
    }

    className() {
        // NOTE: see narqo/react-islands#98 for notes about `_js_inited`
        let className = 'menu menu_js_inited';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' menu_theme_' + theme;
        }
        if (this.props.size) {
            className += ' menu_size_' + this.props.size;
        }
        if (this.props.mode) {
            className += ' menu_mode_' + this.props.mode;
        }
        if (this.props.disabled) {
            className += ' menu_disabled';
        }
        if (this.props.focused) {
            className += ' menu_focused';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    dispatchFocusChange(focused) {
        return this.props.onFocusChange(focused);
    }

    dispatchItemClick(e, itemProps) {
        const item = this._getChildren()[itemProps.index];
        if (typeof item.props.onClick === 'function') {
            item.props.onClick(e, item.props, this.props);
        }
        this.props.onItemClick(e, itemProps);
    }

    searchIndexByKeyboardEvent(e) {
        const timeNow = Date.now();
        const lastTyping = this._lastTyping;

        if (e.charCode <= KEY_CODE_SPACE || e.ctrlKey || e.altKey || e.metaKey) {
            lastTyping.time = timeNow;
            return null;
        }

        const char = String.fromCharCode(e.charCode).toLowerCase();
        const isSameChar = char === lastTyping.char && lastTyping.text.length === 1;
        const children = this._getChildren();

        if (timeNow - lastTyping.time > TIMEOUT_KEYBOARD_SEARCH || isSameChar) {
            lastTyping.text = char;
        } else {
            lastTyping.text += char;
        }

        lastTyping.char = char;
        lastTyping.time = timeNow;

        let nextIndex = lastTyping.index;

        // If key is pressed again, then continue to search to next menu item
        if (isSameChar && Component.textValue(children[nextIndex]).search(lastTyping.char) === 0) {
            nextIndex = nextIndex >= children.length - 1 ? 0 : nextIndex + 1;
        }

        // 2 passes: from index to children.length and from 0 to index.
        let i = nextIndex;
        let len = children.length;
        while (i < len) {
            if (!children[i].props.disabled &&
                Component.textValue(children[i])
                    .toLowerCase()
                    .search(lastTyping.text) === 0) {
                lastTyping.index = i;
                return i;
            }

            i++;

            if (i === children.length) {
                i = 0;
                len = nextIndex;
            }
        }

        return null;
    }

    selectNextItem(dir) {
        const children = this._getChildren();
        const len = children.length;
        if (!len) {
            return;
        }

        let nextIndex = this.state.hoveredIndex;
        do {
            nextIndex = (nextIndex + len + dir) % len;
            if (nextIndex === this.state.hoveredIndex) {
                return;
            }
        } while (children[nextIndex].props.disabled);

        if (nextIndex !== null) {
            this.selectItemByIndex(nextIndex);
        }
    }

    selectItemByIndex(index) {
        this._hoveredItemIndex = index;
        this._shouldScrollToItem = true;
        this.setState({ hoveredIndex: index });
    }

    onItemHover(hovered, itemProps) {
        this.setState({
            hoveredIndex: hovered ? itemProps.index : null,
        });
    }

    onItemClick(e, itemProps) {
        const { index } = itemProps;
        this._hoveredItemIndex = index;
        this.dispatchItemClick(e, itemProps);
        this.onItemCheck(index);
    }

    onMouseDown() {
        this._mousePressed = true;
    }

    onMouseUp() {
        this._mousePressed = false;
    }

    onFocus() {
        if (this.props.disabled) {
            return;
        }

        this.setState({ focused: true });

        if (!this._mousePressed) {
            let hoveredIndex = this._hoveredItemIndex;
            if (hoveredIndex === null) {
                hoveredIndex = this._getFirstSelectedChildIndex();
            }
            if (hoveredIndex !== this.state.hoveredIndex) {
                this._hoveredItemIndex = hoveredIndex;
                this.setState({ hoveredIndex });
            }
        }

        this.dispatchFocusChange(true);
    }

    onBlur() {
        this.setState({
            focused: false,
            hoveredIndex: null,
        });
        this._hoveredItemIndex = null;
        this.dispatchFocusChange();
    }

    onKeyDown(e) {
        if (this.props.disabled) {
            return;
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();

            this.selectNextItem(e.key === 'ArrowDown' ? 1 : -1);
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();

            if (this.state.hoveredIndex !== null) {
                this.onItemClick(e, { index: this.state.hoveredIndex });
            }
        }

        if (this.props.onKeyDown) {
            this.props.onKeyDown(e, this.props);
        }
    }

    onKeyPress(e) {
        if (this.props.disabled || !this.state.focused) {
            return;
        }

        const hoveredIndex = this.searchIndexByKeyboardEvent(e);

        if (hoveredIndex !== null) {
            this.selectItemByIndex(hoveredIndex);
        }
    }

    onItemCheck(index) {
        const { mode } = this.props;
        if (!mode) {
            return;
        }

        const item = this._getChildren()[index];
        const itemValue = item.props.value;
        const menuValue = this.state.value;
        const checked = menuValue.indexOf(itemValue) !== -1;

        let newMenuValue;
        if (mode === 'radio') {
            if (checked) {
                return;
            }

            newMenuValue = [itemValue];
        } else if (mode === 'radio-check') {
            newMenuValue = (checked) ? [] : [itemValue];
        } else {
            newMenuValue = (checked) ? menuValue.filter(value => (value !== itemValue)) : menuValue.concat(itemValue);
        }

        if (newMenuValue) {
            this.setState({ value: newMenuValue });
            this.props.onChange(newMenuValue, this.props);
        }
    }
}

Menu.contextTypes = {
    theme: React.PropTypes.string,
};

Menu.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    mode: React.PropTypes.string,
    focused: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    maxHeight: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onFocusChange: React.PropTypes.func,
};

Menu.defaultProps = {
    maxHeight: null,
    tabIndex: 0,
    onChange() {},
    onFocusChange() {},
    onItemClick() {},
};

export default Menu;
