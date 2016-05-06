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
            popupVisible: false
        };

        this._cachedItems = null;

        this.onButtonClick = this.onButtonClick.bind(this);
        this.onMenuChange = this.onMenuChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this._cachedItems = null;
        }

        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
    }

    //  TODO: Вынести из Select и Menu подобные методы в одно место.
    //  Хотя сейчас Menu.prototype._getItems() не совсем такой.
    //
    _getItems() {
        let items = this._cachedItems;

        if (!items) {
            items = this._cachedItems = [];

            React.Children.forEach(this.props.children, child => {
                if (Component.is(child, Item)) {
                    items.push(child);

                } else if (Component.is(child, Group)) {
                    //  Предполагаем, что ничего, кроме Item внутри Group уже нет.
                    items = items.concat(
                        React.Children.toArray(child.props.children)
                    );
                }
            });
        }

        return items;
    }

    render() {
        const selectValue = this.props.value;

        const hiddens = selectValue.map(value =>
            <input type="hidden" name={this.props.name} value={value}/>
        );

        const texts = [];
        this._getItems().forEach(item => {
            if (selectValue.indexOf(item.props.value) !== -1) {
                if (selectValue.length === 1) {
                    texts.push(Component.textValue(item));

                } else {
                    texts.push(item.props.checkedText || Component.textValue(item));
                }
            }
        });
        const text = texts.join(', ') || this.props.text || '—';

        const isButtonChecked = (
            (this.props.mode === 'check' || this.props.mode === 'radio-check') &&
            Array.isArray(selectValue) &&
            selectValue.length > 0
        );

        const visible = this.state.popupVisible;

        return (
            <div className={this.className()}>
                {hiddens}

                <Button ref="button" className="select__button"
                    size={this.props.size}
                    checked={isButtonChecked}
                    onClick={this.onButtonClick}
                >
                    {text}
                    <Icon className="select__tick"/>
                </Button>
                <Popup
                    visible={visible}
                    target={() => ReactDOM.findDOMNode(this.refs.button)}
                >
                    <Menu size={this.props.size} mode={this.props.mode} value={selectValue} focused={visible}
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

    onButtonClick() {
        this.setState({
            popupVisible: !this.state.popupVisible
        });
    }

    onMenuChange(value) {
        this.props.onChange(value, this.props);
    }

}

Select.defaultProps = {
    onChange() {}
};

Select.contextTypes = {
    theme: React.PropTypes.string
};

export default Select;
