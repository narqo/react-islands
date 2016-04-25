import React from 'react';
import { render, findDOMNode } from 'react-dom';
import Button from '../blocks/Button';
import Link from '../blocks/Link';
import Popup from '../blocks/Popup';
import Modal from '../blocks/Modal';
import TextInput from '../blocks/TextInput';
import Radio from '../blocks/Radio';
import RadioGroup from '../blocks/RadioGroup';
import Checkbox from '../blocks/Checkbox';
import CheckboxGroup from '../blocks/CheckboxGroup';

class ButtonExample extends React.Component {
    constructor(props) {
        super(props);

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render() {
        return (
            <div>
                <Button name="btn1" theme="islands" size="s" onClick={this.onButtonClick}>Click me!</Button>
                <span>&nbsp;</span>
                <Button name="btn2-disabled" theme="islands" size="s" disabled onClick={this.onButtonClick}>Try click me!</Button>
                <span>&nbsp;</span>
                <Button theme="islands" size="s" type="link" url="#/https://yandex.ru" onClick={this.onButtonClick}>Yandex</Button>
                <span>&nbsp;</span>
                <Button theme="islands" size="s" type="link" url="#/https://yandex.ru" disabled onClick={this.onButtonClick}>Yandex</Button>
                <span>&nbsp;</span>
                <Button theme="islands" size="s" view="action">Do it!</Button>
            </div>
        );
    }

    onButtonClick() {
        console.log('button click!');
    }
}

class LinkExample extends React.Component {
    constructor(props) {
        super(props);

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    render() {
        return (
            <div>
                <p><Link theme="islands" size="s" url="#/https://yandex.ru">Yandex</Link></p>
                <p>Pseudo <Link theme="islands" size="s" onClick={this.onLinkClick}>Yandex</Link></p>
                <p>Disabled <Link theme="islands" size="s" url="#/https://yandex.ru" disabled onClick={this.onLinkClick}>Yandex</Link></p>
            </div>
        );
    }

    onLinkClick() {
        console.log('link click!');
    }
}

class RadioGroupExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '30'
        };

        this.onChange = this.onChange.bind(this);
        this.onRadioCheck = this.onRadioCheck.bind(this);
        this.onRadioClick = this.onRadioClick.bind(this);
        this.onResetLinkClick = this.onResetLinkClick.bind(this);
    }

    render() {
        return (
            <div>
                <RadioGroup name="phones" value={this.state.value} theme="islands" size="l" type="button" onChange={this.onChange}>
                    <Radio value="10">10</Radio>
                    <Radio value="20" disabled onClick={this.onRadioClick}>20</Radio>
                    <Radio value="30" onClick={this.onRadioClick}>30</Radio>
                    <Radio value="40">40</Radio>
                    <Radio value="50">50</Radio>
                </RadioGroup>
                &mdash;
                <Link theme="islands" size="s" onClick={this.onResetLinkClick}>reset group</Link>
                <div>Вы выбрали: <b>{ this.state.value }</b></div>
                <p>
                    <Radio theme="islands" type="button" size="l" name="foo" value="70" onCheck={this.onRadioCheck}>70</Radio>
                </p>
            </div>
        );
    }

    onChange(value) {
        this.setState({ value });
    }

    onRadioCheck(checked, value) {
        console.log(`checked: ${checked}`);
        //this.setState({ value });
    }

    onRadioClick() {
        console.log('radio click!');
    }

    onResetLinkClick() {
        this.setState({ value: '' });
    }
}

class TextInputExample extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            value: 'islands'
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(value) {
        console.log('textinput changed!');
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <p>
                    <TextInput theme="islands" size="s" value={this.state.value} placeholder="Fill me!" hasClear onChange={this.onInputChange}/>
                </p>
                <p>
                    <TextInput theme="islands" size="s" value={this.state.value.toUpperCase()} hasClear/>
                </p>
                <p>
                    <TextInput theme="islands" size="s" value={this.state.value} disabled placeholder="Fill me!" hasClear/>
                </p>
                <p>
                    <TextInput theme="islands" size="s" type="password" placeholder="Fill me!"/>
                </p>
            </div>
        )
    }
}

class CheckboxGroupExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ['30', '40']
        };

        this.onChange = this.onChange.bind(this);
        this.onCheckboxCheck = this.onCheckboxCheck.bind(this);
        this.onCheckboxClick = this.onCheckboxClick.bind(this);
        this.onResetLinkClick = this.onResetLinkClick.bind(this);
    }

    render() {
        return (
            <div>
                <CheckboxGroup name="phones" value={this.state.value} theme="islands" type="button" size="l" onChange={this.onChange}>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20" disabled onClick={this.onCheckboxClick}>20</Checkbox>
                    <Checkbox value="30" onClick={this.onCheckboxClick}>30</Checkbox>
                    <Checkbox value="40">40</Checkbox>
                    <Checkbox value="50">50</Checkbox>
                </CheckboxGroup>
                &mdash;
                <Link theme="islands" size="s" onClick={this.onResetLinkClick}>reset group</Link>
                <div>Вы выбрали: <b>{this.state.value.join(', ')}</b></div>
                <p>
                    <Checkbox theme="islands" type="button" size="l" name="foo" value="40" onCheck={this.onCheckboxCheck}>Forty</Checkbox>
                </p>
            </div>
        );
    }

    onChange(value) {
        this.setState({ value });
    }

    onCheckboxCheck(checked, value) {
        console.log(`checked: ${checked}`);
        this.setState({ value: [value] });
    }

    onCheckboxClick() {
        console.log('checkbox click!');
    }

    onResetLinkClick() {
        this.setState({ value: [] });
    }
}

class PopupExample extends React.Component {
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
                    target={() => findDOMNode(this.refs.popup1Anchor)}
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
                    directions={['right-top', 'bottom-left']}
                    target={() => findDOMNode(this.refs.popup2Anchor)}
                    visible={this.state.popup2Visible}
                    onVisibleChange={v => this.handlePopup2VisibilityChange(v)}
                    onClickOutside={() => this.handlePopup2ClickOutside()}
                >
                    <Link theme="islands" size="s" onClick={() => this.handlePopup3AnchorClick()}>Toggle popup 3</Link>
                    <p>Blah-blah-blah</p>
                    <Popup
                        theme="islands"
                        target={() => ({ left: 150, top: 550 })}
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

class Example extends React.Component {
    render() {
        return (
            <div className="example">
                {this.renderButton()}
                {this.renderLink()}
                {this.renderTextInput()}
                {this.renderPopup()}
                {this.renderRadioGroup()}
                {this.renderCheckboxGroup()}
            </div>
        );
    }

    renderButton() {
        return (
            <div className="example">
                <h1>Button Example</h1>
                <ButtonExample />
            </div>
        );
    }

    renderLink() {
        return (
            <div className="example">
                <h1>Link Example</h1>
                <LinkExample />
            </div>
        )
    }

    renderTextInput() {
        return (
            <div className="example">
                <h1>TextInput Example</h1>
                <TextInputExample />
            </div>
        );
    }

    renderPopup() {
        return (
            <div className="example">
                <h1>Popup Example</h1>
                <PopupExample />
            </div>
        )
    }

    renderRadioGroup() {
        return (
            <div className="example">
                <h1>RadioGroup Example</h1>
                <RadioGroupExample/>
            </div>
        );
    }

    renderCheckboxGroup() {
        return (
            <div className="example">
                <h1>CheckboxGroup Example</h1>
                <CheckboxGroupExample/>
            </div>
        );
    }
}

render(React.createElement(Example), document.getElementById('root'));
