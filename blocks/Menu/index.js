import React from 'react';

import Component from '../Component';
import Item from '../Item';
import Group from '../Group';
import MenuItem from './MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            value: this._validValue(props.value),
            hoveredIndex: null,
        };

        this._cachedItems = null;
        this._savedIndex = null;

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onItemHover = this.onItemHover.bind(this);
    }

    componentWillMount() {
        //  Если мы как-то поменяли value (внутри _validValue),
        //  то нужно сообщить про это наверх.
        if (this.props.value !== this.state.value) {
            this.props.onChange(this.state.value, this.props);
        }
    }

    componentDidMount() {
        if (this.props.focused) {
            this.componentWillGainFocus();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedItems = null;
        }

        if (nextProps.value !== this.props.value) {
            this.setState({
                value: this._validValue(nextProps.value)
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.focused && !this.props.focused) {
            this.componentWillLostFocus();
        } else if (!prevProps.focused && this.props.focused) {
            this.componentWillGainFocus();
        }
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

    getItems(index) {
        if (!this._cachedItems) {
            const items = [];
            const values = [];
            this._cachedItems = { items, values };

            const doChild = function(child) {
                items.push(child);
                values.push(child.props.value);
            };

            React.Children.forEach(this.props.children, child => {
                if (Component.is(child, Item)) {
                    doChild(child);
                } else if (Component.is(child, Group)) {
                    //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
                    React.Children.forEach(child.props.children, doChild);
                }
            });
        }

        if (typeof index !== 'undefined') {
            return this._cachedItems.items[index];
        }
        return this._cachedItems;
    }

    _getFirstEnabledIndex() {
        const { items } = this.getItems();
        for (let i = 0; i < items.length; i++) {
            if (!items[i].disabled) {
                return i;
            }
        }
        return null;
    }

    _getFirstEnabledValue() {
        const index = this._getFirstEnabledIndex();
        return (index === null) ? null : this.getItems(index).props.value;
    }

    _validValue(value) {
        let newValue;
        if (value == null) {
            newValue = [];

        } else if (Array.isArray(value)) {
            newValue = value;

        } else {
            newValue = [value];
        }

        const values = this.getItems().values;
        const filteredValue = newValue.filter(aValue => (values.indexOf(aValue) !== -1));
        if (filteredValue.length !== newValue.length) {
            newValue = filteredValue;
        }

        if (this.props.mode === 'radio') {
            if (newValue.length === 0) {
                const firstValue = this._getFirstEnabledValue();
                newValue = (firstValue === null) ? [] : [firstValue];

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

    render() {
        const { theme, size, mode, disabled } = this.props;
        const { value, hoveredIndex } = this.state;

        const onItemClick = this.onItemClick;
        const onItemHover = this.onItemHover;
        const checkable = Boolean(mode);

        let index = 0;
        const children = React.Children.map(this.props.children, child => {
            if (Component.is(child, Group)) {
                return mapGroup(child);
            } else if (Component.is(child, Item)) {
                return mapItem(child);
            } else {
                //  FIXME: Или тут бросать ошибку?
                return child;
            }
        });

        function mapItem(item) {
            const menuItem = React.createElement(
                MenuItem,
                {
                    theme,
                    size,
                    key: `menuitem${item}`,
                    checked: checkable && (value.indexOf(item.props.value) !== -1),
                    hovered: (index === hoveredIndex),
                    disabled: disabled,
                    ...item.props,
                    index,
                    onClick: onItemClick,
                    onHover: onItemHover,
                },
                item.props.children
            );

            index++;

            return menuItem;
        }

        function mapGroup(group) {
            const items = React.Children.map(group.props.children, mapItem);

            let title;
            if (group.props.title) {
                title = (
                    <div className="menu__group-title">{group.props.title}</div>
                );
            }

            return (
                <div className="menu__group">
                    {title}
                    {items}
                </div>
            );
        }

        const tabIndex = disabled ? -1 : this.props.tabIndex;

        return (
            <div ref="control" className={this.className()}
                tabIndex={tabIndex}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
            >
                {children}
            </div>
        );
    }

    className() {
        var className = 'menu';

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
        this.props.onFocusChange(focused);
    }

    dispatchItemClick(e, itemProps) {
        const item = this.getItems(itemProps.index);
        if (typeof item.props.onClick === 'function') {
            item.props.onClick(e, item.props, this.props);
        }
        this.props.onItemClick(e, itemProps);
    }

    onItemHover(hovered, itemProps) {
        this.setState({
            hoveredIndex: hovered ? itemProps.index : null
        });
    }

    onItemClick(e, itemProps) {
        const { index } = itemProps;
        this._savedIndex = index;
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
        document.addEventListener('keydown', this.onKeyDown, true);

        if (!this._mousePressed) {
            let hoveredIndex = this._savedIndex;
            if (hoveredIndex === null) {
                hoveredIndex = this._getFirstEnabledIndex();
            }
            if (hoveredIndex !== this.state.hoveredIndex) {
                this._savedIndex = hoveredIndex;
            }
            this.setState({ hoveredIndex });
        }

        this.dispatchFocusChange(true);
    }

    onBlur() {
        document.removeEventListener('keydown', this.onKeyDown, true);

        this.setState({ hoveredIndex: null });

        this.dispatchFocusChange(false);
    }

    onKeyDown(e) {
        if (this.props.disabled) {
            //  Кажется, тут нет нужды проверять focused, так как
            //  иначе этот обработчик и не сработает.
            return;
        }

        if (e.code === 'ArrowDown' || e.code === 'ArrowUp') {
            e.preventDefault();

            const { items } = this.getItems();
            const len = items.length;
            if (!len) {
                return;
            }

            const dir = (e.code === 'ArrowDown' ? 1 : -1);
            let nextIndex;
            if (this.state.hoveredIndex === null) {
                nextIndex = this._getFirstEnabledIndex();
            } else {
                nextIndex = this.state.hoveredIndex;
                do {
                    nextIndex = (nextIndex + len + dir) % len;
                    if (nextIndex === this.state.hoveredIndex) {
                        return;
                    }
                } while (items[nextIndex].props.disabled);
            }

            if (nextIndex !== null) {
                this._savedIndex = nextIndex;
                this.setState({ hoveredIndex: nextIndex });
            }
        } else if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();

            if (this.state.hoveredIndex !== null) {
                this.onItemClick(e, { index: this.state.hoveredIndex });
            }
        }
    }

    onItemCheck(index) {
        const { mode } = this.props;
        if (!mode) {
            return;
        }

        const item = this.getItems(index);
        const itemValue = item.props.value;
        const menuValue = this.state.value;

        const checked = (menuValue.indexOf(itemValue) !== -1);
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
    onChange: React.PropTypes.func,
    onFocusChange: React.PropTypes.func,
};

Menu.defaultProps = {
    tabIndex: 0,
    onChange() {},
    onFocusChange() {},
    onItemClick() {},
};

export default Menu;
