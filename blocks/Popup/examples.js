import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';
import Link from '../Link';
import Popup from '../Popup';
import Modal from '../Modal';

class Example extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            popup1Visible: false,
            popup2Visible: false,
            popup3Visible: false,
            modal1Visible: false,
        };
    }

    handlePopup1AnchorClick() {
        this.setState({ popup1Visible: !this.state.popup1Visible });
    }

    handlePopup1ClickOutside() {
        this.setState({ popup1Visible: false });
    }

    handlePopup1VisibilityChange(val) {
        this.setState({ popup1Visible: val });
    }

    handlePopup2AnchorClick() {
        this.setState({ popup2Visible: !this.state.popup2Visible });
    }

    handlePopup2ClickOutside() {
        this.setState({ popup2Visible: false });
    }

    handlePopup2VisibilityChange(val) {
        this.setState({ popup2Visible: val });
    }

    handlePopup3AnchorClick() {
        this.setState({ popup3Visible: !this.state.popup3Visible });
    }

    handlePopup3ClickOutside() {
        this.setState({ popup3Visible: false });
    }

    handlePopup3VisibilityChange(val) {
        this.setState({ popup3Visible: val });
    }

    handleModal1AnchorClick() {
        this.setState({ modal1Visible: true });
    }

    handleModal1ClickOutside() {
        this.setState({ modal1Visible: false });
    }

    handleModal1VisibilityChange(val) {
        this.setState({ modal1Visible: val });
    }

    render() {
        return (
            <div style={{paddingBottom: '10px'}}>
                <Button ref="popup1Anchor" theme="islands" size="s" onClick={() => this.handlePopup1AnchorClick()}>Toggle popup 1</Button>
                <Popup
                    theme="islands"
                    id="p1"
                    target={() => ReactDOM.findDOMNode(this.refs.popup1Anchor)}
                    visible={this.state.popup1Visible}
                    onVisibleChange={v => this.handlePopup1VisibilityChange(v)}
                    onClickOutside={() => this.handlePopup1ClickOutside()}
                >
                    <Link theme="islands" size="s">Yandex</Link>
                </Popup>
                <span>&nbsp;</span>
                <Button ref="popup2Anchor" theme="islands" size="s" onClick={() => this.handlePopup2AnchorClick()}>Toggle popup 2</Button>
                <Popup
                    theme="islands"
                    directions={['bottom-right', 'right-top']}
                    target={() => ReactDOM.findDOMNode(this.refs.popup2Anchor)}
                    visible={this.state.popup2Visible}
                    onVisibleChange={v => this.handlePopup2VisibilityChange(v)}
                    onClickOutside={() => this.handlePopup2ClickOutside()}
                >
                    <Link theme="islands" size="s" onClick={() => this.handlePopup3AnchorClick()}>Toggle popup 3</Link>
                    <p>Blah-blah-blah</p>
                    <Popup
                        theme="islands"
                        target={() => ({ left: 50, top: 50 })}
                        visible={this.state.popup3Visible}
                        onVisibleChange={v => this.handlePopup3VisibilityChange(v)}
                        onClickOutside={() => this.handlePopup3ClickOutside()}
                    >
                        <Link size="s">Yandex</Link>
                        <p>Blah-blah-blah</p>
                    </Popup>
                </Popup>
                <span>&nbsp;</span>
                <Button ref="modal1Anchor" theme="islands" size="s" onClick={() => this.handleModal1AnchorClick()}>Open modal</Button>
                <Modal
                    theme="islands"
                    visible={this.state.modal1Visible}
                    onVisible={v => this.handleModal1VisibilityChange(v)}
                    onClickOutside={() => this.handleModal1ClickOutside()}
                >
                    <p>Because we can!</p>
                </Modal>
            </div>
        );
    }
}

export default Example;
