import React from 'react';

import Component from '../Component';
import Portal from './Portal';

const ZINDEX_FACTOR = 1000;

const visibleLayersZIndexes = {};
const visibleLayersStack = [];

const KEY_ESCAPE = 27;

const REASON_CLICK_OUTSIDE = 'clickOutside';
const REASON_ESC_KEY_PRESS = 'escapeKeyPress';

class Overlay extends Component {
    constructor(props, context) {
        super(props, context);

        this.zIndex = null;
        this.isClickOutsidePrevented = null;
        this.isVisible = this.isVisible.bind(this);
        this.preventClickOutside = this.preventClickOutside.bind(this);
        this.onLayerClick = this.onLayerClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
    }

    getChildContext() {
        return {
            isParentLayerVisible: this.isVisible,
            preventParentLayerClickOutside: this.preventClickOutside,
        };
    }

    componentWillMount() {
        if (this.props.visible) {
            this.layerWillBecomeVisible();
        }
    }

    componentWillUpdate(nextProps) {
        this.handleParentLayerHide();
        // NOTE(narqo@): do this only when visible is going to be changed
        if (this.props.visible !== nextProps.visible) {
            if (nextProps.visible) {
                this.layerWillBecomeVisible();
            } else {
                this.layerWillBecomeHidden();
            }
        }
    }

    componentWillUnmount() {
        this.requestHide(null, false);
        this.layerWillBecomeHidden();
    }

    layerWillBecomeVisible() {
        visibleLayersStack.unshift(this);

        this.captureZIndex();

        document.addEventListener('keydown', this.onDocumentKeyPress);
        // NOTE(narqo@): we have to use `nextTick` or nested layer will be closed immediately after being opened
        process.nextTick(() => {
            if (this.props.visible) {
                // FIXME(narqo@): `document.addEventListener(click)` doesn't work on iOS
                document.addEventListener('click', this.onDocumentClick);
            }
        });
    }

    layerWillBecomeHidden() {
        const idx = visibleLayersStack.indexOf(this);
        if (idx > -1) {
            visibleLayersStack.splice(idx, 1);
        }

        this.isClickOutsidePrevented = null;

        document.removeEventListener('keydown', this.onDocumentKeyPress);
        document.removeEventListener('click', this.onDocumentClick);

        this.releaseZIndex();
    }

    render() {
        const children = React.cloneElement(
            React.Children.only(this.props.children),
            { onClick: this.onLayerClick }
        );

        return (
            <Portal>
                {children}
            </Portal>
        );
    }

    isVisible() {
        return this.props.visible;
    }

    requestHide(e, reason) {
        if (this.props.visible) {
            this.props.onRequestHide(e, reason);
        }
    }

    handleClickOutside(e) {
        this.requestHide(e, REASON_CLICK_OUTSIDE);
    }

    preventClickOutside() {
        this.isClickOutsidePrevented = true;
    }

    handleParentLayerHide() {
        const { isParentLayerVisible } = this.context;
        if (this.props.visible && typeof isParentLayerVisible === 'function' && isParentLayerVisible() === false) {
            this.requestHide(null, false);
        }
    }

    onLayerClick(e) {
        if (this.props.visible) {
            this.preventClickOutside();

            const { preventParentLayerClickOutside } = this.context;
            if (typeof preventParentLayerClickOutside === 'function') {
                preventParentLayerClickOutside();
            }
        }
        this.props.onClick(e);
    }

    onDocumentClick(e) {
        if (this.isClickOutsidePrevented) {
            this.isClickOutsidePrevented = null;
        } else {
            this.handleClickOutside(e);
        }
    }

    onDocumentKeyPress(e) {
        if (e.keyCode === KEY_ESCAPE && visibleLayersStack[0] === this) {
            // NOTE(narqo@): we call `preventDefault()` to prevent desktop Safari from exiting the full screen mode
            e.preventDefault();
            this.requestHide(e, REASON_ESC_KEY_PRESS);
        }
    }

    captureZIndex() {
        const level = this.props.zIndexGroupLevel;

        let zIndexes = visibleLayersZIndexes[level];
        if (!zIndexes) {
            zIndexes = [(level + 1) * ZINDEX_FACTOR];
            visibleLayersZIndexes[level] = zIndexes;
        }

        const prevZIndex = this.zIndex;
        this.zIndex = zIndexes[zIndexes.push(zIndexes[zIndexes.length - 1] + 1) - 1];
        if (this.zIndex !== prevZIndex) {
            this.props.onOrderChange(this.zIndex);
        }
    }

    releaseZIndex() {
        const zIndexes = visibleLayersZIndexes[this.props.zIndexGroupLevel];
        const idx = zIndexes.indexOf(this.zIndex);
        if (idx > -1) {
            zIndexes.splice(idx, 1);
        }
    }
}

Overlay.childContextTypes = Overlay.contextTypes = {
    isParentLayerVisible: React.PropTypes.func,
    preventParentLayerClickOutside: React.PropTypes.func,
};

Overlay.propsTypes = {
    visible: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func,
    onRequestHide: React.PropTypes.func,
    onOrderChange: React.PropTypes.func,
};

Overlay.defaultProps = {
    visible: false,
    zIndexGroupLevel: 0,
    onClick() {},
    onRequestHide() {},
    onOrderChange() {},
};

export default Overlay;
