import { Component as ReactComponent } from 'react';

export default class Component extends ReactComponent {
    constructor(props, ...args) {
        super(props, ...args);
        this.state = {
            focused: props.focused,
            disabled: props.disabled,
            hovered: false,
        };
    }

    componentWillReceiveProps(props) {
        if (props.disabled !== this.state.disabled) {
            this.setState({ disabled: props.disabled });
        }
        if (props.disabled === true) {
            this.setState({ focused: false });
        }
    }

    handleMouseEnter() {
        if (!this.state.disabled) {
            this.setState({ hovered: true });
        }
    }

    handleMouseLeave() {
        this.setState({ hovered: false });
    }

    handleFocus() {
        if (!this.state.disabled) {
            this.setState({ focused: true });
        }
    }

    handleBlur() {
        this.setState({ focused: false });
    }
}
