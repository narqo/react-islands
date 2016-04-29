import React from 'react';

import Component from '../Component';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            hoveredIndex: null,
            value: this._validValue(props.value)
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onItemClick = this.onItemClick.bind(this);
        this.onItemHover = this.onItemHover.bind(this);
    }

    _validValue(value) {
        var newValue = (value != null) ? [...value] : [];

        if (this.props.mode === 'radio') {
            if (newValue.length === 0) {
                //  FIXME: А если нет children'ов?
                return [this.props.children[0].props.value];
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

        const checkable = Boolean(mode);
        const children = React.Children.map(this.props.children, (child, index) => {
            const checked = checkable && (value.indexOf(child.props.value) !== -1);
            const hovered = (index === hoveredIndex);
            return React.cloneElement(child, {
                theme,
                size,
                checkable,
                checked,
                hovered,
                disabled: disabled || child.props.disabled,
                index,
                onClick: this.onItemClick,
                onHover: this.onItemHover
            });
        });

        const tabIndex = disabled ? -1 : 0;

        return (
            <div className={this.className()} tabIndex={tabIndex}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
            >
                {children}
            </div>
        );
    }

    className() {
        var className = 'menu menu__control';

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

            const len = this.props.children.length;
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
                } while (this.props.children[nextIndex].props.disabled);
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

        //  FIXME: А если тут один child?
        const item = this.props.children[index];
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
