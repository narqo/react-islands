import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portal from './Portal';
import Layer from './Layer';

const VIEWPORT_ACCURACY_FACTOR = 0.99;
const DEFAULT_DIRECTIONS = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'right-top', 'right-center', 'right-bottom',
    'left-top', 'left-center', 'left-bottom'
];

class Popup extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: props.visible,
            direction: props.direction,
            left: undefined,
            top: undefined,
            zIndex: 0,
        };

        this.domNode = null;
        this.shouldRenderToOverlay = false;
        this.isClickOutsidePrevented = null;
        this.preventClickOutside = this.preventClickOutside.bind(this);
        this.isPopupVisible = this.isPopupVisible.bind(this);
        this.onPopupClick = this.onPopupClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onLayerOrderChange = this.onLayerOrderChange.bind(this);
    }

    getChildContext() {
        return {
            preventParentPopupClickOutside: this.preventClickOutside,
            isParentPopupVisible: this.isPopupVisible,
        };
    }

    componentDidMount() {
        this.domNode = ReactDOM.findDOMNode(this);
    }

    componentWillUnmount() {
        this.popupWillBecomeHidden();
        this.domNode = null;
    }

    componentWillReceiveProps({ visible }) {
        if (visible !== this.props.visible) {
            this.setState({ visible });
            this.handleParentPopupHide();
        }
    }

    componentWillUpdate(nextProps, { visible }) {
        if (this.state.visible !== visible) {
            // NOTE(narqo@): do this only when visible is going to be changed
            if (visible) {
                this.popupWillBecomeVisible();
            } else {
                this.popupWillBecomeHidden();
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.visible !== this.state.visible) {
            this.props.onVisible(this.state.visible);

            if (this.state.visible) {
                // TODO(@narqo): don't call DOMNode measurements in case nothing has changed
                const { direction, left, top } = this.calcBestDrawingParams();
                this.setState({ direction, left, top });
            }
        }
    }

    render() {
        const { visible } = this.state;

        if (this.shouldRenderToOverlay) {
            const { left, top, zIndex } = this.state;
            const popupAttrs = {
                style: { left, top, zIndex }
            };

            if (visible) {
                popupAttrs.onClick = this.onPopupClick;
            }

            return (
                <Portal>
                    <Layer visible={visible} onOrderChange={this.onLayerOrderChange}>
                        <div className={this.className()} {...popupAttrs}>{this.props.children}</div>
                    </Layer>
                </Portal>
            );
        } else {
            return (
                <div className={this.className()}>{this.props.children}</div>
            );
        }
    }

    className() {
        var className = 'popup';

        if (this.props.theme) {
            className += ' popup_theme_' + this.props.theme;
        }
        if (this.props.size) {
            className += ' popup_size_' + this.props.size;
        }
        if (this.state.direction) {
            className += ' popup_direction_' + this.state.direction;
        }
        if (this.state.visible) {
            className += ' popup_visible';
        }
        if (this.shouldRenderToOverlay) {
            // FIXME(@narqo): `popup_js_inited` must be set for CSS of bem-components
            className += ' popup_js_inited';
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    handleParentPopupHide() {
        const { isParentPopupVisible } = this.context;
        if (typeof isParentPopupVisible === 'function' && isParentPopupVisible() === false) {
            this.setState({ visible: false });
        }
    }

    handleClickOutside() {
        this.props.onClickOutside();
    }

    onLayerOrderChange(zIndex) {
        this.setState({ zIndex });
    }

    onPopupClick() {
        this.preventClickOutside();
        if (typeof this.context.preventParentPopupClickOutside === 'function') {
            this.context.preventParentPopupClickOutside();
        }
    }

    onDocumentClick(e) {
        const target = this.getTarget();
        if (target instanceof Element && target.contains(e.target)) {
            return;
        }
        if (this.isClickOutsidePrevented) {
            this.isClickOutsidePrevented = null;
        } else {
            this.handleClickOutside();
        }
    }

    popupWillBecomeVisible() {
        if (!this.shouldRenderToOverlay) {
            this.shouldRenderToOverlay = true;
        }
        // NOTE(narqo@): we have to use `nextTick` or nested popup will be closed immediately after being opened
        process.nextTick(() => {
            if (this.domNode && this.state.visible) {
                document.addEventListener('click', this.onDocumentClick);
            }
        });
    }

    popupWillBecomeHidden() {
        document.removeEventListener('click', this.onDocumentClick);
    }

    preventClickOutside() {
        this.isClickOutsidePrevented = true;
    }

    isPopupVisible() {
        return this.state.visible;
    }

    calcBestDrawingParams() {
        const popup = this.calcPopupDimensions();
        const target = this.calcTargetDimensions();
        const viewport = this.calcViewportDimensions();

        let i = 0,
            direction,
            position,
            viewportFactor,
            bestDirection,
            bestPos,
            bestViewportFactor;

        while (direction = this.props.directions[i++]) { // eslint-disable-line no-cond-assign
            position = this.calcPopupPosition(direction, target, popup);
            viewportFactor = this.calcViewportFactor(position, viewport, popup);

            if (i === 1 || viewportFactor > bestViewportFactor || (!bestViewportFactor && this.state.direction === direction)) {
                bestDirection = direction;
                bestViewportFactor = viewportFactor;
                bestPos = position;
            }
            if (bestViewportFactor > VIEWPORT_ACCURACY_FACTOR) break;
        }

        return {
            direction: bestDirection,
            left: bestPos.left,
            top: bestPos.top
        };
    }

    getTarget() {
        if (!this.props.target) {
            return null;
        }
        const target = this.props.target();
        if (target instanceof Component) {
            return ReactDOM.findDOMNode(target);
        } else {
            return target || null;
        }
    }

    calcTargetDimensions() {
        let target = this.getTarget(),
            left, top, width, height;

        if (target instanceof Element) {
            const targetRect = target.getBoundingClientRect();
            const viewportRect = document.body.getBoundingClientRect();

            left = targetRect.left - viewportRect.left;
            top = targetRect.top - viewportRect.top;
            width = targetRect.width;
            height = targetRect.height;
        } else if (target === null) {
            left = top = height = width = 0;
        } else if (typeof target === 'object') {
            left = target.left;
            top = target.top;
            width = height = 0;
        }

        return {
            left,
            top,
            width,
            height,
        };
    }

    calcViewportDimensions() {
        const winTop = window.pageYOffset;
        const winLeft = window.pageXOffset;
        const winHeight = window.innerHeight;
        const winWidth = window.innerWidth;

        return {
            top : winTop,
            left : winLeft,
            bottom : winTop + winHeight,
            right : winLeft + winWidth,
        };
    }

    calcViewportFactor(pos, viewport, popup) {
        const viewportOffset = this.props.viewportOffset;
        const intersectionLeft = Math.max(pos.left, viewport.left + viewportOffset);
        const intersectionRight = Math.min(pos.left + popup.width, viewport.right - viewportOffset);
        const intersectionTop = Math.max(pos.top, viewport.top + viewportOffset);
        const intersectionBottom = Math.min(pos.top + popup.height, viewport.bottom - viewportOffset);

        if (intersectionLeft < intersectionRight && intersectionTop < intersectionBottom) {
            // has intersection
            return (intersectionRight - intersectionLeft) * (intersectionBottom - intersectionTop) / popup.area;
        } else {
            return 0;
        }
    }

    calcPopupDimensions() {
        const popupWidth = this.domNode.offsetWidth;
        const popupHeight = this.domNode.offsetHeight;

        return {
            width : popupWidth,
            height : popupHeight,
            area : popupWidth * popupHeight
        };
    }

    calcPopupPosition(direction, target, popup) {
        const { mainOffset, secondaryOffset } = this.props;
        let top, left;

        if (checkMainDirection(direction, 'bottom')) {
            top = target.top + target.height + mainOffset;
        } else if (checkMainDirection(direction, 'top')) {
            top = target.top - popup.height - mainOffset;
        } else if (checkMainDirection(direction, 'left')) {
            left = target.left - popup.width - mainOffset;
        } else if (checkMainDirection(direction, 'right')) {
            left = target.left + target.width + mainOffset;
        }

        if (checkSecondaryDirection(direction, 'right')) {
            left = target.left + target.width - popup.width - secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'left')) {
            left = target.left + secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'bottom')) {
            top = target.top + target.height - popup.height - secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'top')) {
            top = target.top + secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'center')) {
            if (checkMainDirection(direction, 'top', 'bottom')) {
                left = target.left + target.width / 2 - popup.width / 2;
            } else if (checkMainDirection(direction, 'left', 'right')) {
                top = target.top + target.height / 2 - popup.height / 2;
            }
        }

        return { top, left };
    }
}

function checkMainDirection(direction, mainDirection1, mainDirection2) {
    return !direction.indexOf(mainDirection1) || (mainDirection2 && !direction.indexOf(mainDirection2));
}

function checkSecondaryDirection(direction, secondaryDirection) {
    return ~direction.indexOf('-' + secondaryDirection);
}

Popup.defaultProps = {
    visible: false,
    directions: DEFAULT_DIRECTIONS,
    mainOffset: 0,
    secondaryOffset: 0,
    viewportOffset: 0,
    onClickOutside() {},
    onVisible() {},
};

Popup.childContextTypes = Popup.contextTypes = {
    isParentPopupVisible: React.PropTypes.func,
    preventParentPopupClickOutside: React.PropTypes.func,
};

export default Popup;
