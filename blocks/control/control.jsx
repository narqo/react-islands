import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { getControlContextTypes } from './util';

class Control extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.focused && prevProps.focused !== this.props.focused) {
            findDOMNode(this).focus();
        }
    }

    render() {
        return React.cloneElement(React.Children.only(this.props.children), {
            onMouseEnter: e => this.onMouseEnter(e),
            onMouseLeave: e => this.onMouseLeave(e),
            onFocus: e => this.onFocus(e),
            onBlur: e => this.onBlur(e),
        });
    }

    onMouseEnter(e) {
        this.context.onControlMouseEnter(e);
    }

    onMouseLeave(e) {
        this.context.onControlMouseLeave(e);
    }

    onFocus(e) {
        this.context.onControlFocus(e);
    }

    onBlur(e) {
        this.context.onControlBlur(e);
    }
}

Control.contextTypes = getControlContextTypes();

export default Control;
