import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default (T) => {
    class Control extends Component {
        constructor(props) {
            super(props);
            this.state = {
                focused: props.focused,
                disabled: props.disabled,
                hovered: false,
            };
            this.controlNode = null;
            this.handleMouseEnter = this.handleMouseEnter.bind(this);
            this.handleMouseLeave = this.handleMouseLeave.bind(this);
            this.handleFocus = this.handleFocus.bind(this);
            this.handleBlur = this.handleBlur.bind(this);
        }

        componentDidMount() {
            // TODO: throw if `this.refs.control` is null
            const controllNode = this.controlNode = findDOMNode(this.refs.control);
            controllNode.addEventListener('mouseenter', this.handleMouseEnter);
            controllNode.addEventListener('mouseleave', this.handleMouseLeave);
            controllNode.addEventListener('focus', this.handleFocus);
            controllNode.addEventListener('blur', this.handleBlur);
        }

        componentWillUnmount() {
            if (this.controlNode) {
                let controlNode = this.controlNode;
                controlNode.removeEventListener('mouseenter', this.handleMouseEnter);
                controlNode.removeEventListener('mouseleave', this.handleMouseLeave);
                controlNode.removeEventListener('focus', this.handleFocus);
                controlNode.removeEventListener('blur', this.handleBlur);
            }
        }

        componentWillReceiveProps(props) {
            if (props.disabled !== this.state.disabled) {
                this.setState({ disabled: props.disabled });
            }
            if (props.disabled === true) {
                this.setState({ focused: false });
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.state.focused && prevState.focused !== this.state.focused) {
                this.controlNode.focus();
            }
        }

        render() {
            return <T {...this.props} {...this.state}/>;
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

    Control.displayName = T.name;

    return Control;
};
