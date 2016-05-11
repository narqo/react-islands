import React from 'react';

import Component from '../Component';
import Portal from './Portal';

const ZINDEX_FACTOR = 1000;
const visibleLayersZIndexes = {};

class Overlay extends Component {
    constructor(props, context) {
        super(props, context);

        this.zIndex = null;
        this.isClickOutsidePrevented = null;
        this.isVisible = this.isVisible.bind(this);
        this.preventClickOutside = this.preventClickOutside.bind(this);
        this.onLayerClick = this.onLayerClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
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
        this.layerWillBecomeHidden();
    }

    layerWillBecomeVisible() {
        this.captureZIndex();
        this.dispatchVisibleChange(true);
        // NOTE(narqo@): we have to use `nextTick` or nested layer will be closed immediately after being opened
        process.nextTick(() => {
            if (this.props.visible) {
                // FIXME(narqo@): `document.addEventListener(click)` doesn't work on iOS
                document.addEventListener('click', this.onDocumentClick);
            }
        });
    }

    layerWillBecomeHidden() {
        this.isClickOutsidePrevented = null;
        document.removeEventListener('click', this.onDocumentClick);
        this.releaseZIndex();
        this.dispatchVisibleChange(false);
    }

    render() {
        const children = React.cloneElement(React.Children.only(this.props.children), { onClick: this.onLayerClick });
        return (
            <Portal>
                {children}
            </Portal>
        );
    }

    isVisible() {
        return this.props.visible;
    }

    dispatchVisibleChange(visible) {
        this.props.onVisibleChange(visible);
    }

    dispatchClickOutside(e) {
        this.props.onClickOutside(e);
    }

    preventClickOutside() {
        this.isClickOutsidePrevented = true;
    }

    handleParentLayerHide() {
        const { isParentLayerVisible } = this.context;
        if (this.props.visible && typeof isParentLayerVisible === 'function' && isParentLayerVisible() === false) {
            this.dispatchVisibleChange(false);
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
            this.dispatchClickOutside(e);
        }
    }

    captureZIndex() {
        const level = this.props.zIndexGroupLevel;

        var zIndexes = visibleLayersZIndexes[level];
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
        zIndexes.splice(zIndexes.indexOf(this.zIndex), 1);
    }
}

Overlay.childContextTypes = Overlay.contextTypes = {
    isParentLayerVisible: React.PropTypes.func,
    preventParentLayerClickOutside: React.PropTypes.func,
};

Overlay.defaultProps = {
    visible: false,
    zIndexGroupLevel: 0,
    onClick() {},
    onClickOutside() {},
    onOrderChange() {},
    onVisibleChange() {},
};

export default Overlay;
