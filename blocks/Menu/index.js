import React from 'react';

import Component from '../Component';
import Item from '../Item';
import Group from '../Group';
import MenuItem from './MenuItem';

class Menu extends Component {
    constructor(props) {
        super(props);

        const newValue = this._validValue(props.value);
        //  Бывают ситуации, когда значение в this.props.value как-то обрабатывается
        //  и в стейт кладется уже другое значение. Например, если в mode=radio передать
        //  несколько значений, то мы берем только первое (как вариант, можно было бы
        //  кидать ошибку). Поэтому сразу вверх говорим, что value уже другое.
        if (props.value !== newValue) {
            this.props.onChange(newValue, this.props);
        }
        this.state = {
            ...this.state,
            hoveredIndex: null,
            value: newValue
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onItemHover = this.onItemHover.bind(this);
    }

    _extractItems() {
        let items = [];
        React.Children.forEach(this.props.children, child => {
            if (Component.is(child, Item)) {
                items.push(child);

            } else if (Component.is(child, Group)) {
                //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
                items = items.concat(child.props.children);
            }
        });
        return items;
    }

    _validValue(value) {
        var children = React.Children.toArray(this.props.children);
        if (!children.length) {
            return [];
        }

        let newValue;
        if (value == null) {
            newValue = [];

        //  Тут вместо [...value] таки пишем явно, чтобы потом можно было понять,
        //  что value !== newValue.
        } else if (Array.isArray(value)) {
            newValue = value;

        } else {
            newValue = [value];
        }

        if (this.props.mode === 'radio') {
            if (newValue.length === 0) {
                return [children[0].props.value];
            }
            if (newValue.length > 1) {
                return [newValue[0]];
            }

        } else if (this.props.mode === 'radio-check' && newValue.length > 1) {
            return [newValue[0]];
        }

        return newValue;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: this._validValue(nextProps.value)
            });
        }
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
            const r = React.createElement(
                MenuItem,
                {
                    theme,
                    size,
                    checked: checkable && (value.indexOf(item.props.value) !== -1),
                    hovered: (index === hoveredIndex),
                    disabled: disabled || item.props.disabled,
                    index,
                    onClick: onItemClick,
                    onHover: onItemHover
                },
                item.props.children
            );
            index++;

            return r;
        }

        function mapGroup(group) {
            var items = React.Children.map(group.props.children, mapItem);

            return (
                <div className="menu__group">
                    {items}
                </div>
            );
        }

        const tabIndex = disabled ? -1 : 0;

        return (
            <div className={this.className()} tabIndex={tabIndex}
                onKeyDown={this.onKeyDown}
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

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onItemHover(index, hovered) {
        this.setState({
            hoveredIndex: hovered ? index : null
        });
    }

    onItemClick(e, itemProps) {
        this.onItemCheck(itemProps.index);

        this.props.onItemClick(e, itemProps);
    }

    onKeyDown(e) {
        if (this.props.disabled) {
            //  Кажется, тут нет нужды проверять focused, так как
            //  иначе этот обработчик и не сработает.
            return;
        }

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();

            const items = this._extractItems();
            const len = items.length;
            if (!len) {
                return;
            }

            const dir = (e.key === 'ArrowDown' ? 1 : -1);
            let nextIndex;
            if (this.state.hoveredIndex === null) {
                nextIndex = 0;

            } else {
                nextIndex = this.state.hoveredIndex;
                do {
                    nextIndex = (nextIndex + len + dir) % len;
                    if (nextIndex === this.state.hoveredIndex) {
                        return;
                    }
                } while (items[nextIndex].props.disabled);
            }

            this.setState({hoveredIndex: nextIndex});

        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();

            if (this.state.hoveredIndex !== null) {
                this.onItemCheck(this.state.hoveredIndex);
            }
        }
    }

    onItemCheck(index) {
        const { mode } = this.props;
        if (!mode) {
            return;
        }

        const items = this._extractItems();
        const item = items[index];
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
    theme: React.PropTypes.string
};

Menu.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    mode: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    onItemClick: React.PropTypes.func
};

Menu.defaultProps = {
    onChange() {},
    onItemClick() {}
};

export default Menu;
