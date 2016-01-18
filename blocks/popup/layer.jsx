import React, { Component } from 'react';

const zIndexFactor = 1000;
const visibleLayersZIndexes = new Map();

class Layer extends Component {
    constructor(...args) {
        super(...args);
        this.zIndex = null;
    }

    componentWillMount() {
        if (this.props.visible) {
            this.captureZIndex();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.visible !== nextProps.visible)
            if (nextProps.visible) {
                this.captureZIndex();
            } else {
                this.releaseZIndex();
            }
    }

    componentWillUnmount() {
        this.releaseZIndex();
    }

    render() {
        return this.props.children;
    }

    captureZIndex() {
        const level = this.props.zIndexGroupLevel;

        var zIndexes;
        if (visibleLayersZIndexes.has(level)) {
            zIndexes = visibleLayersZIndexes.get(level);
        } else {
            zIndexes = [(level + 1) * zIndexFactor];
            visibleLayersZIndexes.set(level, zIndexes);
        }

        const prevZIndex = this.zIndex;
        this.zIndex = zIndexes[zIndexes.push(zIndexes[zIndexes.length - 1] + 1) - 1];
        if (this.zIndex !== prevZIndex) {
            this.props.onOrderChange(this.zIndex);
        }
    }

    releaseZIndex() {
        const zIndexes = visibleLayersZIndexes.get(this.props.zIndexGroupLevel);
        zIndexes.splice(zIndexes.indexOf(this.zIndex), 1);
    }
}

Layer.defaultProps = {
    visible: false,
    zIndexGroupLevel: 0,
    onOrderChange() {},
};

export default Layer;
