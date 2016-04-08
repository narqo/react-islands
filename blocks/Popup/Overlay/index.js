import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Overlay extends Component {
    constructor(props) {
        super(props);
        this.overlayNode = null;
        this.isAttachedToOverlay = false;
    }

    componentDidMount() {
        this.renderOverlay();
    }

    componentDidUpdate() {
        this.renderOverlay();
    }

    componentWillUnmount() {
        this.unrenderOverlay();
        this.unmountOverlay();
    }

    render() {
        return null;
    }

    renderOverlay() {
        const child = React.Children.only(this.props.children);
        if (child) {
            this.mountOverlay();
            // NOTE: `ReactDOM.unstable_renderSubtreeIntoContainer` to store intermediate contexts
            ReactDOM.unstable_renderSubtreeIntoContainer(this, child, this.overlayNode);
            this.isAttachedToOverlay = true;
        } else {
            this.unrenderOverlay();
            this.unmountOverlay();
        }
    }

    unrenderOverlay() {
        if (this.isAttachedToOverlay) {
            ReactDOM.unmountComponentAtNode(this.overlayNode);
            this.isAttachedToOverlay = false;
        }
    }

    mountOverlay() {
        if (!this.overlayNode) {
            this.overlayNode = document.createElement('div');
            this.getOverlayRootNode().appendChild(this.overlayNode);
        }
    }

    unmountOverlay() {
        if (this.overlayNode) {
            this.getOverlayRootNode().removeChild(this.overlayNode);
            this.overlayNode = null;
        }
    }

    getOverlayRootNode() {
        return document.body;
    }
}

export default Overlay;
