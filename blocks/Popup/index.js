import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Overlay from '../Overlay';

const VIEWPORT_ACCURACY_FACTOR = 0.99;
const DEFAULT_DIRECTIONS = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'right-top', 'right-center', 'right-bottom',
    'left-top', 'left-center', 'left-bottom'
];

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: props.direction,
            left: undefined,
            top: undefined,
            zIndex: 0,
        };

        this.domNode = null;
        this.shouldRenderToOverlay = false;
        this.onLayerOrderChange = this.onLayerOrderChange.bind(this);
        this.onLayerVisibleChange = this.onLayerVisibleChange.bind(this);
        this.onLayerClickOutside = this.onLayerClickOutside.bind(this);
    }

    componentDidMount() {
        this.domNode = ReactDOM.findDOMNode(this);
    }

    componentWillUnmount() {
        this.domNode = null;
    }

    componentWillUpdate(nextProps) {
        if (!this.shouldRenderToOverlay && nextProps.visible) {
            this.shouldRenderToOverlay = true;
        }
    }

    render() {
        if (this.shouldRenderToOverlay) {
            const style = {
                left: this.state.left,
                top: this.state.top,
                zIndex: this.state.zIndex,
            };

            return (
                <Overlay visible={this.props.visible}
                    onVisibleChange={this.onLayerVisibleChange}
                    onClickOutside={this.onLayerClickOutside}
                    onOrderChange={this.onLayerOrderChange}
                >
                    <div className={this.className()} style={style}>{this.props.children}</div>
                </Overlay>
            );
        } else {
            return (
                <div className={this.className()}>{this.props.children}</div>
            );
        }
    }

    className() {
        var className = 'popup';

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' popup_theme_' + theme;
        }
        if (this.props.size) {
            className += ' popup_size_' + this.props.size;
        }
        if (this.state.direction) {
            className += ' popup_direction_' + this.state.direction;
        }
        if (this.props.visible) {
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

    onLayerClickOutside(e) {
        const target = this.getTarget();
        if (target instanceof Element && target.contains(e.target)) {
            return;
        }
        this.props.onClickOutside();
    }

    onLayerVisibleChange(visible) {
        if (visible) {
            // TODO(@narqo): don't call DOMNode measurements in case nothing has changed
            const { direction, left, top } = this.calcBestDrawingParams();
            this.setState({ direction, left, top });
        }
        this.props.onVisibleChange(visible);
    }

    onLayerOrderChange(zIndex) {
        this.setState({ zIndex });
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
    directions: DEFAULT_DIRECTIONS,
    visible: false,
    mainOffset: 0,
    secondaryOffset: 0,
    viewportOffset: 0,
    onClickOutside() {},
    onVisibleChange() {},
};

Popup.contextTypes = {
    theme: React.PropTypes.string
};

export default Popup;
