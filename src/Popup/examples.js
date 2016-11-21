import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import Link from '../Link';
import Popup from '../Popup';

class PopupExampleSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        return (
            <div className="example">
                <Button
                    ref="popup1Anchor"
                    theme="islands"
                    size="s"
                    onClick={() => this.onPopupAnchorClick()}
                >
                    Toggle popup 1
                </Button>
                <Popup
                    theme="islands"
                    anchor={() => ReactDOM.findDOMNode(this.refs.popup1Anchor)}
                    visible={this.state.visible}
                    onRequestHide={() => this.onPopupRequestHide()}
                >
                    <Link theme="islands" size="s">Yandex</Link>
                </Popup>
            </div>
        );
    }

    onPopupAnchorClick() {
        this.setState({ visible: !this.state.visible });
    }

    onPopupRequestHide() {
        this.setState({ visible: false });
    }
}

class PopupExampleNested extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup1Visible: false,
            popup2Visible: false,
        };
    }

    render() {
        return (
            <div className="example">
                <Button
                    ref="popup1Anchor"
                    theme="islands"
                    size="s"
                    onClick={() => this.onPopup1AnchorClick()}
                >
                    Toggle popup 2
                </Button>
                <Popup
                    theme="islands"
                    anchor={this.refs.popup1Anchor}
                    visible={this.state.popup1Visible}
                    onRequestHide={() => this.onPopup1RequestHide()}
                >
                    <Link
                        theme="islands"
                        size="s"
                        onClick={() => this.onPopup2AnchorClick()}
                    >
                        Toggle popup 3
                    </Link>
                    <p>Blah-blah-blah</p>
                    <Popup
                        theme="islands"
                        anchor={{ left: 50, top: 50 }}
                        visible={this.state.popup2Visible}
                        onRequestHide={() => this.onPopup2RequestHide()}
                    >
                        <Button theme="islands" size="s">Yandex</Button>
                        <p>Blah-blah-blah</p>
                    </Popup>
                </Popup>
            </div>
        );
    }

    onPopup1AnchorClick() {
        this.setState({ popup1Visible: !this.state.popup1Visible });
    }

    onPopup1RequestHide() {
        this.setState({ popup1Visible: false });
    }

    onPopup2AnchorClick() {
        this.setState({ popup2Visible: !this.state.popup2Visible });
    }

    onPopup2RequestHide() {
        this.setState({ popup2Visible: false });
    }
}

class PopupExampleScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup1Visible: false,
            popup2Visible: false,
        };
    }

    getChildContext() {
        return {
            zIndexGroupLevel: this.props.zIndexGroupLevel,
        };
    }

    render() {
        return (
            <div className="example">
                <Button
                    ref="popup1Anchor"
                    theme="islands"
                    size="s"
                    onClick={() => this.onPopup1AnchorClick()}
                >
                    Toggle popup 3
                </Button>
                <Popup
                    theme="islands"
                    anchor={this.refs.popup1Anchor}
                    visible={this.state.popup1Visible}
                    onRequestHide={() => this.onPopup1RequestHide()}
                >
                    <div style={{ maxHeight: 200, width: 300, overflow: 'auto' }}>
                        <div style={{ height: 400 }}>
                            <p>Blah-blah-blah</p>
                            <Button
                                ref="popup2Anchor"
                                theme="islands"
                                size="s"
                                onClick={() => this.onPopup2AnchorClick()}
                            >
                                Toggle popup
                            </Button>
                            <Popup
                                theme="islands"
                                anchor={this.refs.popup2Anchor}
                                visible={this.state.popup2Visible}
                                onRequestHide={() => this.onPopup2RequestHide()}
                            >
                                <p>Blah-blah-blah</p>
                            </Popup>
                        </div>
                    </div>
                </Popup>
            </div>
        );
    }

    onPopup1AnchorClick() {
        this.setState({ popup1Visible: !this.state.popup1Visible });
    }

    onPopup1RequestHide() {
        this.setState({ popup1Visible: false });
    }

    onPopup2AnchorClick() {
        this.setState({ popup2Visible: !this.state.popup2Visible });
    }

    onPopup2RequestHide() {
        this.setState({ popup2Visible: false });
    }
}

PopupExampleScroll.childContextTypes = {
    zIndexGroupLevel: React.PropTypes.number,
};

class PopupExampleMountVisible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };
    }

    render() {
        return (
            <div className="example">
                <Button
                    ref="popup1Anchor"
                    theme="islands"
                    size="s"
                    onClick={() => this.onPopupAnchorClick()}
                >
                    Toggle popup 4
                </Button>
                <Popup
                    theme="islands"
                    anchor={() => ReactDOM.findDOMNode(this.refs.popup1Anchor)}
                    visible={this.state.visible}
                    onRequestHide={() => this.onPopupRequestHide()}
                >
                    <Link theme="islands" size="s">Yandex</Link>
                </Popup>
            </div>
        );
    }

    onPopupAnchorClick() {
        this.setState({ visible: !this.state.visible });
    }

    onPopupRequestHide() {
        this.setState({ visible: false });
    }
}

function Example() {
    return (
        <div className="examples">
            <PopupExampleSimple />

            <PopupExampleNested />

            <PopupExampleScroll zIndexGroupLevel={20} />

            <PopupExampleMountVisible />
        </div>
    );
}

export default Example;
