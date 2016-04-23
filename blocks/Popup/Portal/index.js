import React from 'react';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.portalNode = null;
        this.isAttachedToPortal = false;
    }

    componentDidMount() {
        this.renderPortal();
    }

    componentDidUpdate() {
        this.renderPortal();
    }

    componentWillUnmount() {
        this.unmountPortal();
    }

    render() {
        return null;
    }

    renderPortal() {
        const child = React.Children.only(this.props.children);
        if (child) {
            this.mountPortal();
            // NOTE: `ReactDOM.unstable_renderSubtreeIntoContainer` to store intermediate contexts
            ReactDOM.unstable_renderSubtreeIntoContainer(this, child, this.portalNode);
            this.isAttachedToPortal = true;
        } else {
            this.unmountPortal();
        }
    }

    mountPortal() {
        if (!this.portalNode) {
            this.portalNode = document.createElement('div');
            this.getPortalRootNode().appendChild(this.portalNode);
        }
    }

    unmountPortal() {
        if (this.isAttachedToPortal) {
            ReactDOM.unmountComponentAtNode(this.portalNode);
            this.isAttachedToPortal = false;
        }
        if (this.portalNode) {
            this.getPortalRootNode().removeChild(this.portalNode);
            this.portalNode = null;
        }
    }

    getPortalRootNode() {
        return document.body;
    }
}

export default Portal;
