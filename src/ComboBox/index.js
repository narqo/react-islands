import React from 'react';
import Select from '../Select';
import Menu from '../Menu';
import TextInput from '../TextInput';

class ComboBox extends Select {
    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            textInputValue: '',
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    /** @override */
    componentWillUpdate(_, nextState) {
        if (nextState.popupVisible !== this.state.popupVisible && !nextState.popupVisible) {
            this._wasPopupVisible = false;
            this.setState({ textInputValue: '' });
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
        const { textInputValue } = this.state;
        const placeholder = this.props.value[0];

        return (
            <TextInput ref="control" theme={theme} size={size} className="select__textinput input_width_available"
                hasClear={true}
                focused={true}
                value={textInputValue}
                placeholder={placeholder}
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
        if (this.props.onTextInputChange) {
            this.props.onTextInputChange(value, this.props);
        }
        this.setState({ textInputValue: value });
        this.getMenu().hoverItemByText(value);
    }
}

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
    onTextInputChange: React.PropTypes.func,
};

ComboBox.defaultProps = {
    placeholder: '—',
    mode: 'radio',
    maxHeight: 0,
    onChange() {},
};

export default ComboBox;
