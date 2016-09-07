import React from 'react';
import Component from '../Component';
import Select from '../Select';
import Popup from '../Popup';
import TextInput from '../TextInput'

class ComboBox extends Select {
    constructor(props) {
        super(props);

        this.state = Object.assign(this.state, {
            textInputFocused: true,
            textInputValue: '',
        });

        this.onTextInputKeyDown = this.onTextInputKeyDown.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
        this.onTextInputFocusChange = this.onTextInputFocusChange.bind(this);
    }

    componentWillUpdate(_, nextState) {
        if (this.state.popupVisible === false && nextState.popupVisible) {
            this.setState({
                menuHeight: null,
                textInputValue: this.props.value[0] ? this.renderButtonText() : '',
            });
        }
    }

    /** @override */
    render() {
        return (
            <div ref="root" className={this.className()}>
                {this.renderInputs()}
                {this.renderControl()}
                <Popup
                    anchor={this.refs.root}
                    theme={this.props.theme}
                    size={this.props.size}
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
        return this.state.popupVisible ? this.renderTextInput() : this.renderButton();
    }

    renderTextInput() {
        const { theme, size } = this.props;
        const { popupVisible, textInputFocused, textInputValue } = this.state;
        // NOTE: костыль для того, чтобы фокус оставался в инпуте по клику внутри попапа и по крестику
        const focused = textInputFocused || popupVisible;

        return (
            <TextInput
                ref="control"
                theme={theme}
                size={size}
                className="select__text-input input_width_available"
                hasClear={true}
                focused={focused}
                value={textInputValue}
                onKeyDown={this.onTextInputKeyDown}
                onChange={this.onTextInputChange}
                onFocusChange={this.onTextInputFocusChange}
            />
        );
    }

    /** @override */
    onButtonClick() {
        this.setState({ popupVisible: true });
    }

    /** @override */
    onButtonKeyDown(e) {
        if (!this.state.popupVisible &&
            ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !e.shiftKey)) {
            this.setState({ popupVisible: true });
        }
    }

    onTextInputKeyDown(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') {
            e.preventDefault();
            this.getMenu().onKeyDown(e);
        } else if (e.key === 'Tab') {
            this.setState({ popupVisible: false });
        }
    }

    onTextInputChange(value) {
        if (this.props.onTextInputChange) {
            this.props.onTextInputChange(value, this.props);
        }
        this.setState({ textInputValue: value }, () => {
            this.hoverItemByText(value);
        });
    }

    onTextInputFocusChange(textInputFocused) {
        this.setState({ textInputFocused });
    }

    hoverItemByText(text) {
        const items = this.getItems();
        let i = 0;
        while (i < items.length) {
            const item = items[i];
            if (!item.props.disabled &&
                Component
                    .textValue(item)
                    .toLowerCase()
                    .search(text) === 0) {
                return this.getMenu().hoverItemByIndex(i);
            }
            i++;
        }
        return this.getMenu().hoverItemByIndex(i);
    }
}

module.exports = ComboBox;
