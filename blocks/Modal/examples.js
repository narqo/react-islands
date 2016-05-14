import React from 'react';

import Button from '../Button';
import Modal from '../Modal';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        return (
            <div className="examples">
                <Button theme="islands" size="s" onClick={() => this.onModalAnchorClick()}>Open modal</Button>
                <Modal
                    theme="islands"
                    visible={this.state.visible}
                    onRequestHide={() => this.onModalRequestHide()}
                >
                    <p>I can do this all day.</p>
                    <p>Because we can!</p>
                </Modal>
            </div>
        );
    }

    onModalAnchorClick() {
        this.setState({ visible: true });
    }

    onModalRequestHide() {
        this.setState({ visible: false });
    }
}

export default Example;
