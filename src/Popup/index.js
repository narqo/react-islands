import React from 'react';
import ReactDOM from 'react-dom';

import Component from '../Component';
import Overlay from '../Overlay';

// FIXME(narqo@): this is only valid for theme islands
const MAIN_OFFSET = 5;
const VIEWPORT_OFFSET = 10;
const VIEWPORT_ACCURACY_FACTOR = 0.99;
const DEFAULT_DIRECTIONS = [
    'bottom-left', 'bottom-center', 'bottom-right',
    'top-left', 'top-center', 'top-right',
    'right-top', 'right-center', 'right-bottom',
    'left-top', 'left-center', 'left-bottom',
];

class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            direction: undefined,
            left: undefined,
            top: undefined,
            zIndex: 0,
        };

        this.shouldRenderToOverlay = false;

        this.onLayerOrderChange = this.onLayerOrderChange.bind(this);
        this.onLayerRequestHide = this.onLayerRequestHide.bind(this);
        this.onViewportResize = this.onViewportResize.bind(this);
        this.onViewportScroll = this.onViewportScroll.bind(this);
    }

    componentWillUpdate(nextProps) {
        if (!this.shouldRenderToOverlay && nextProps.visible) {
            this.shouldRenderToOverlay = true;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.shouldRenderToOverlay && this.props.visible !== prevProps.visible) {
            this.reposition();
            this.handleVisibleChange(this.props.visible);
        }
    }

    componentWillUnmount() {
        this.handleVisibleChange(false);
    }

    render() {
        if (this.shouldRenderToOverlay) {
            const style = {
                left: this.state.left,
                top: this.state.top,
                zIndex: this.state.zIndex,
            };

            return (
                <Overlay
                    visible={this.props.visible}
                    onRequestHide={this.onLayerRequestHide}
                    onOrderChange={this.onLayerOrderChange}
                >
                    <div ref="popup" className={this.className()} style={style}>{this.props.children}</div>
                </Overlay>
            );
        } else {
            return (
                <div className={this.className()}>{this.props.children}</div>
            );
        }
    }

    className() {
        let className = 'popup';

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

    handleVisibleChange(visible) {
        // NOTE(@narqo): subscribe to resize/scroll only if popup can be repositioned within `directions`
        if (visible && this.props.directions.length > 1) {
            window.addEventListener('resize', this.onViewportResize);
            window.addEventListener('scroll', this.onViewportScroll);
        } else {
            window.removeEventListener('resize', this.onViewportResize);
            window.removeEventListener('scroll', this.onViewportScroll);
        }
    }

    onLayerRequestHide(e, reason) {
        if (this.props.visible && this.props.onRequestHide) {
            if (reason === 'clickOutside') {
                const anchor = this.getAnchor();
                if (anchor instanceof Element && anchor.contains(e.target)) {
                    return;
                }
            }
            this.props.onRequestHide(e, reason, this.props);
        }
    }

    onLayerOrderChange(zIndex) {
        this.setState({ zIndex });
    }

    onViewportResize() {
        this.reposition();
    }

    onViewportScroll() {
        this.reposition();
    }

    reposition() {
        if (this.props.visible) {
            // TODO(@narqo): don't call DOMNode measurements in case nothing has changed
            const layout = this.calcBestLayoutParams();

            if (this.props.onLayout) {
                this.props.onLayout({ layout }, this.props);
            }

            const { direction, left, top } = layout;

            this.setState({ direction, left, top });
        }
    }

    getPopup() {
        return ReactDOM.findDOMNode(this.refs.popup);
    }

    getAnchor() {
        if (!this.props.anchor) {
            return null;
        }

        let anchor;
        if (typeof this.props.anchor === 'function') {
            anchor = this.props.anchor();
        } else {
            anchor = this.props.anchor;
        }

        if (anchor instanceof Component) {
            return ReactDOM.findDOMNode(anchor);
        } else {
            return anchor || null;
        }
    }

    calcBestLayoutParams() {
        const viewport = this.calcViewportDimensions();
        const popup = this.calcPopupDimensions();
        const anchor = this.calcAnchorDimensions();

        let i = 0,
            bestViewportFactor = 0,
            bestDirection,
            bestPos,
            direction;

        while (direction = this.props.directions[i++]) { // eslint-disable-line no-cond-assign
            const position = this.calcPopupPosition(direction, anchor, popup);
            const viewportFactor = this.calcViewportFactor(position, viewport, popup);

            if (i === 1 || viewportFactor > bestViewportFactor || (!bestViewportFactor && this.state.direction === direction)) {
                bestDirection = direction;
                bestViewportFactor = viewportFactor;
                bestPos = position;
            }
            if (bestViewportFactor > VIEWPORT_ACCURACY_FACTOR) break;
        }

        return {
            direction: bestDirection,
            ...bestPos,
        };
    }

    calcAnchorDimensions() {
        const anchor = this.getAnchor();
        let left, top, width, height;

        if (anchor instanceof Element) {
            const anchorRect = anchor.getBoundingClientRect();
            const viewportRect = document.documentElement.getBoundingClientRect();
            left = anchorRect.left - viewportRect.left;
            top = anchorRect.top - viewportRect.top;
            width = anchorRect.width;
            height = anchorRect.height;
        } else if (anchor === null) {
            left = top = height = width = 0;
        } else if (typeof anchor === 'object') {
            left = anchor.left;
            top = anchor.top;
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
        const top = window.pageYOffset;
        const left = window.pageXOffset;
        const height = window.innerHeight;
        const width = window.innerWidth;

        return {
            top,
            left,
            bottom: top + height,
            right: left + width,
        };
    }

    calcViewportFactor(pos, viewport, popup) {
        const { viewportOffset } = this.props;
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
        const popup = this.getPopup();
        let width = 0,
            height = 0;

        if (popup) {
            width = popup.offsetWidth;
            height = popup.offsetHeight;
        }

        return {
            width,
            height,
            area: width * height,
        };
    }

    calcPopupPosition(direction, anchor, popup) {
        const { mainOffset, secondaryOffset } = this.props;
        let top, left;

        if (checkMainDirection(direction, 'bottom')) {
            top = anchor.top + anchor.height + mainOffset;
        } else if (checkMainDirection(direction, 'top')) {
            top = anchor.top - popup.height - mainOffset;
        } else if (checkMainDirection(direction, 'left')) {
            left = anchor.left - popup.width - mainOffset;
        } else if (checkMainDirection(direction, 'right')) {
            left = anchor.left + anchor.width + mainOffset;
        }

        if (checkSecondaryDirection(direction, 'right')) {
            left = anchor.left + anchor.width - popup.width - secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'left')) {
            left = anchor.left + secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'bottom')) {
            top = anchor.top + anchor.height - popup.height - secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'top')) {
            top = anchor.top + secondaryOffset;
        } else if (checkSecondaryDirection(direction, 'center')) {
            if (checkMainDirection(direction, 'top', 'bottom')) {
                left = anchor.left + anchor.width / 2 - popup.width / 2;
            } else if (checkMainDirection(direction, 'left', 'right')) {
                top = anchor.top + anchor.height / 2 - popup.height / 2;
            }
        }

        const bottom = top + popup.height;
        const right = left + popup.width;

        return { top, left, bottom, right };
    }
}

function checkMainDirection(direction, mainDirection1, mainDirection2) {
    return !direction.indexOf(mainDirection1) || (mainDirection2 && !direction.indexOf(mainDirection2));
}

function checkSecondaryDirection(direction, secondaryDirection) {
    return ~direction.indexOf('-' + secondaryDirection);
}

Popup.propsTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    visible: React.PropTypes.bool.isRequired,
    anchor: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.shape({ left: React.PropTypes.number, top: React.PropTypes.number }),
        React.PropTypes.func,
    ]),
    directions: React.PropTypes.oneOf(DEFAULT_DIRECTIONS),
    mainOffset: React.PropTypes.number,
    secondaryOffset: React.PropTypes.number,
    onRequestHide: React.PropTypes.func,
    onLayout: React.PropTypes.func,
};

Popup.defaultProps = {
    directions: DEFAULT_DIRECTIONS,
    visible: false,
    mainOffset: MAIN_OFFSET,
    secondaryOffset: 0,
    viewportOffset: VIEWPORT_OFFSET,
    onRequestHide() {},
};

Popup.contextTypes = {
    theme: React.PropTypes.string,
};

export default Popup;
