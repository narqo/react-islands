import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import Select from '../Select';
import Item from '../Item';

class ModalExampleControlled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        return (
            <div className="example">
                <Button theme="islands" size="s" onClick={() => this.onModalAnchorClick()}>Open controlled modal</Button>
                <Modal theme="islands" visible={this.state.visible} zIndexGroupLevel={40}>
                    <p>I can do this all day.</p>
                    <Select theme="islands" size="l" placeholder="Select days" value={[12]}>
                        <Item value="12" checkedText="Dec">December</Item>
                        <Item value="1" checkedText="Jan">January</Item>
                        <Item value="2" checkedText="Feb">February</Item>
                    </Select>
                    <p>Because we can!</p>
                    <Button theme="islands" size="l" onClick={() => this.onModalCloseClick()}>Close modal</Button>
                </Modal>
            </div>
        );
    }

    onModalAnchorClick() {
        this.setState({ visible: true });
    }

    onModalCloseClick() {
        this.setState({ visible: false });
    }
}

class ModalExampleAutoclosable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    render() {
        return (
            <div className="example">
                <Button theme="islands" size="s" onClick={() => this.onModalAnchorClick()}>Open "autoclosable" modal</Button>
                <Modal
                    theme="islands"
                    visible={this.state.visible}
                    onRequestHide={() => this.onModalRequestHide()}
                >
                    <p>I can do this all day.</p>
                    <p>Press "Esc" or click to the outside of the modal to close.</p>
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

function Example() {
    return (
        <div className="examples">
            <ModalExampleControlled />
            <ModalExampleAutoclosable />
        </div>
    );
}

export default Example;
