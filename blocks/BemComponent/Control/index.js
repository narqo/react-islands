import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class Control extends Component {
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
        this.context.handleControlMouseEnter(e);
    }

    onMouseLeave(e) {
        this.context.handleControlMouseLeave(e);
    }

    onFocus(e) {
        this.context.handleControlFocus(e);
    }

    onBlur(e) {
        this.context.handleControlBlur(e);
    }
}

Control.contextTypes = {
    handleControlMouseEnter: React.PropTypes.func.isRequired,
    handleControlMouseLeave: React.PropTypes.func.isRequired,
    handleControlFocus: React.PropTypes.func.isRequired,
    handleControlBlur: React.PropTypes.func.isRequired,
};
