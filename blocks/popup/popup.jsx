import classNames from 'classnames';
import React, { Component } from 'react';
import Overlay from './overlay';
import Layer from './layer';
import style from './popup.css';

class Popup extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: props.visible,
            zIndex: 0,
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
        const { visible } = this.state;

        const className = classNames(
            style.popup,
            {
                [style.visible]: visible
            }
        );

        if (this.shouldRenderToOverlay) {
            let popupStyle = {
                zIndex: this.state.zIndex,
            };
            return (
                <Overlay>
                    <Layer visible={visible} onOrderChange={zIndex => this.onLayerOrderChange(zIndex)}>
                        {this.renderPopup(className, popupStyle)}
                    </Layer>
                </Overlay>
            );
        } else {
            return this.renderPopup(className);
        }
    }

    renderPopup(className, popupStyle = {}) {
        return <div className={className} style={popupStyle}>{this.props.children}</div>;
    }

    handleParentPopupHide() {
        const { isParentPopupVisible } = this.context;
        if (typeof isParentPopupVisible === 'function' && isParentPopupVisible() === false) {
            this.setState({ visible: false });
        }
    }

    onLayerOrderChange(zIndex) {
        this.setState({ zIndex });
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
