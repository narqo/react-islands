import React, { Component } from 'react';
import Control from './control';
import { getControlContextTypes } from './util';

class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: props.focused,
            disabled: props.disabled,
            hovered: false,
        };
        this.onControlMouseEnter = this.onControlMouseEnter.bind(this);
        this.onControlMouseLeave = this.onControlMouseLeave.bind(this);
        this.onControlFocus = this.onControlFocus.bind(this);
        this.onControlBlur = this.onControlBlur.bind(this);
    }

    getChildContext() {
        return {
            onControlMouseEnter: this.onControlMouseEnter,
            onControlMouseLeave: this.onControlMouseLeave,
            onControlFocus: this.onControlFocus,
            onControlBlur: this.onControlBlur,
        };
    }

    componentWillReceiveProps({ disabled }) {
        if (disabled !== this.state.disabled) {
            this.setState({ disabled });
        }
        if (disabled === true) {
            this.setState({ focused: false });
        }
    }

    onControlMouseEnter() {
        if (!this.state.disabled) {
            this.setState({ hovered: true });
        }
    }

    onControlMouseLeave() {
        this.setState({ hovered: false });
    }

    onControlFocus() {
        if (!this.state.disabled) {
            this.setState({ focused: true });
        }
    }

    onControlBlur() {
        this.setState({ focused: false });
    }
}

BaseComponent.childContextTypes = getControlContextTypes();

export default BaseComponent;
export { Control };
