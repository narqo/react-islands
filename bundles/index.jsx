import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../blocks/button';
import Link from '../blocks/link';
import TextInput from '../blocks/textinput';
import Popup from '../blocks/popup';

class Example extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            popup1Visible: false,
            popup2Visible: false,
            popup3Visible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('click!');
    }

    handlePopup1AnchorClick() {
        this.setState({ popup1Visible: !this.state.popup1Visible });
    }

    handlePopup2AnchorClick() {
        this.setState({ popup2Visible: !this.state.popup2Visible });
    }

    handlePopup3AnchorClick() {
        this.setState({ popup3Visible: !this.state.popup3Visible });
    }

    handlePopup3VisibilityChange(val) {
        this.setState({ popup3Visible: val });
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                {this.renderLink()}
                {this.renderTextInput()}
                {this.renderPopup()}
            </div>
        );
    }

    renderButton() {
        return (
            <div>
                <Button name="btn1" size="s">Click me!</Button>
                <span>&nbsp;</span>
                <Button name="btn2-disabled" size="s" disabled="true" onClick={this.handleClick}>Try click me!</Button>
            </div>
        );
    }

    renderLink() {
        return (
            <div>
                <p>Link: <Link size="s" url="#/https://yandex.ru">Yandex</Link></p>
                <p>Pseudo link: <Link size="s" onClick={this.handleClick}>Yandex</Link></p>
            </div>
        )
    }

    renderTextInput() {
        return (
            <p>
                <TextInput size="s" value="islands" placeholder="Fill me!" hasClear="true"/>
            </p>
        );
    }

    renderPopup() {
        return (
            <div>
                <div>
                    <Button size="s" onClick={() => this.handlePopup1AnchorClick()}>Toggle popup 1</Button>
                    <Popup id="p1" visible={this.state.popup1Visible}>
                        <Link size="s">Yandex</Link>
                    </Popup>
                </div>
                <div>
                    <Button size="s" onClick={() => this.handlePopup2AnchorClick()}>Toggle popup 2</Button>
                    <Popup visible={this.state.popup2Visible}>
                        <Link size="s" onClick={() => this.handlePopup3AnchorClick()}>Toggle popup 3</Link>
                        <Popup
                            visible={this.state.popup3Visible}
                            onVisibilityChange={v => this.handlePopup3VisibilityChange(v)}
                        >
                            <Link size="s">Yandex</Link>
                        </Popup>
                    </Popup>
                </div>
            </div>
        )
    }
}

ReactDOM.render(React.createElement(Example), document.getElementById('root'));
