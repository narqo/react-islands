import classNames from 'classnames';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './overlay';
import style from './style.css';

class Popup extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: props.visible,
        };
        this.shouldRenderToOverlay = false;
        this.isPopupVisible = this.isPopupVisible.bind(this);
    }

    getChildContext() {
        return {
            isParentPopupVisible: this.isPopupVisible,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible });
        this.handleParentPopupHide();
    }

    componentWillUpdate(nextProps, nextState) {
        if (!this.shouldRenderToOverlay && nextState.visible === true) {
            this.shouldRenderToOverlay = true;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.visible !== this.state.visible) {
            this.props.onVisibilityChange(this.state.visible);
        }
    }

    render() {
        const className = classNames(
            style.popup,
            {
                [style.visible]: this.state.visible
            }
        );

        const popup = this.renderPopup(className);
        return this.shouldRenderToOverlay ?
            <Overlay>
                {popup}
            </Overlay> :
            popup;
    }

    renderPopup(className) {
        return <div className={className}>{this.props.children}</div>;
    }

    handleParentPopupHide() {
        const { isParentPopupVisible } = this.context;
        if (typeof isParentPopupVisible === 'function' && isParentPopupVisible() === false) {
            this.setState({ visible: false });
        }
    }

    isPopupVisible() {
        return this.state.visible;
    }
}

Popup.defaultProps = {
    autoclosable: false,
    visible: false,
    onVisibilityChange() {},
};

Popup.childContextTypes = Popup.contextTypes = {
    isParentPopupVisible: React.PropTypes.func,
};

export default Popup;
