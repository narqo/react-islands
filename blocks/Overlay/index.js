import React from 'react';
import Portal from './Portal';

const ZINDEX_FACTOR = 1000;
const visibleLayersZIndexes = {};

class Overlay extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: props.visible,
        };

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
        if (this.state.visible) {
            this.layerWillBecomeVisible();
            this.dispatchVisibleChange(this.state.visible);
        }
    }

    componentWillReceiveProps({ visible }) {
        if (this.props.visible !== visible) {
            this.setState({ visible });
        }
        this.handleParentLayerHide();
    }

    componentWillUpdate(nextProps, { visible }) {
        // NOTE(narqo@): do this only when visible is going to be changed
        if (this.state.visible !== visible) {
            if (visible) {
                this.layerWillBecomeVisible();
            } else {
                this.layerWillBecomeHidden();
            }
        }
    }

    componentDidUpdate(prevProps, { visible }) {
        if (this.state.visible !== visible) {
            // this must be handled after DOM changes, e.g. calc new dimensions
            this.dispatchVisibleChange(this.state.visible);
        }
    }

    componentWillUnmount() {
        // FIXME(narqo@): ugly hack to reset `state.visible` on unmounting
        this.state.visible = false;
        this.layerWillBecomeHidden();
    }

    layerWillBecomeVisible() {
        this.captureZIndex();
        // NOTE(narqo@): we have to use `nextTick` or nested layer will be closed immediately after being opened
        process.nextTick(() => {
            if (this.state.visible) {
                document.addEventListener('click', this.onDocumentClick);
            }
        });
    }

    layerWillBecomeHidden() {
        document.removeEventListener('click', this.onDocumentClick);
        this.releaseZIndex();
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
        return this.state.visible;
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
        if (typeof isParentLayerVisible === 'function' && isParentLayerVisible() === false) {
            this.setState({ visible: false });
        }
    }

    onLayerClick(e) {
        if (this.state.visible) {
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
