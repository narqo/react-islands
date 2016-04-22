import React from 'react';
import { render } from 'react-dom';
import Button from '../blocks/Button';
import Link from '../blocks/Link';
import Popup from '../blocks/Popup';
import TextInput from '../blocks/TextInput';
import Radio from '../blocks/Radio';
import RadioGroup from '../blocks/RadioGroup';
import Checkbox from '../blocks/Checkbox';
import CheckboxGroup from '../blocks/CheckboxGroup';

class RadioGroupExample extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            value: '30'
        };

        this.onChange = this.onChange.bind( this );
    }

    render() {
        return (
            <div>
                <RadioGroup name="phones" value={ this.state.value } theme="islands" size="l" type="button" onChange={ this.onChange }>
                    <Radio value="10">10</Radio>
                    <Radio value="20" disabled>20</Radio>
                    <Radio value="30" onClick={ (e) => console.log('CLICK') }>30</Radio>
                    <Radio value="40">40</Radio>
                    <Radio value="50">50</Radio>
                </RadioGroup>
                <div>Вы выбрали: <b>{ this.state.value }</b></div>
            </div>
        );
    }

    onChange( value ) {
        this.setState( { value } );
    }

}

class CheckboxGroupExample extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            value: [ '30', '40' ]
        };

        this.onChange = this.onChange.bind( this );
    }

    render() {
        return (
            <div>
                <CheckboxGroup name="phones" value={ this.state.value } theme="islands" type="button" size="l" onChange={ this.onChange }>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20" disabled>20</Checkbox>
                    <Checkbox value="30" focused>30</Checkbox>
                    <Checkbox value="40">40</Checkbox>
                    <Checkbox value="50">50</Checkbox>
                </CheckboxGroup>
                <div>Вы выбрали: <b>{ this.state.value.join( ', ' ) }</b></div>
            </div>
        );
    }

    onChange( value ) {
        this.setState( { value } );
    }

}

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
                <Button name="btn1" theme="islands" size="s" onClick={this.handleClick}>Click me!</Button>
                <span>&nbsp;</span>
                <Button name="btn2-disabled" theme="islands" size="s" disabled={true} onClick={this.handleClick}>Try click me!</Button>
                <span>&nbsp;</span>
                <Button theme="islands" size="s" type="link" url="#/https://yandex.ru">Yandex</Button>
            </div>
        );
    }

    renderLink() {
        return (
            <div className="example">
                <p>Link: <Link theme="islands" size="s" url="#/https://yandex.ru">Yandex</Link></p>
                <p>Pseudo link: <Link theme="islands" size="s" onClick={this.handleClick}>Yandex</Link></p>
            </div>
        )
    }

    renderTextInput() {
        return (
            <p className="example">
                <TextInput theme="islands" size="s" value="islands" placeholder="Fill me!" hasClear/>
            </p>
        );
    }

    renderPopup() {
        return (
            <div className="example">
                <div>
                    <Button theme="islands" size="s" onClick={() => this.handlePopup1AnchorClick()}>Toggle popup 1</Button>
                    <Popup theme="islands" id="p1" visible={this.state.popup1Visible}>
                        <Link theme="islands" size="s">Yandex</Link>
                    </Popup>
                </div>
                <div>
                    <Button theme="islands" size="s" onClick={() => this.handlePopup2AnchorClick()}>Toggle popup 2</Button>
                    <Popup theme="islands" visible={this.state.popup2Visible}>
                        <Link theme="islands" size="s" onClick={() => this.handlePopup3AnchorClick()}>Toggle popup 3</Link>
                        <Popup
                            theme="islands"
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

    renderRadioGroup() {
        return (
            <div>
                <div className="example">
                    <RadioGroupExample/>
                </div>
                <div className="example">
                    <Radio theme="islands" type="button" size="l" name="foo" value="70">70</Radio>
                </div>
            </div>
        );
    }

    renderCheckboxGroup() {
        return (
            <div>
                <div className="example">
                    <CheckboxGroupExample/>
                </div>
                <div className="example">
                    <Checkbox theme="islands" type="button" size="l" name="foo" value="70">70</Checkbox>
                </div>
            </div>
        );
    }
}

render(React.createElement(Example), document.getElementById('root'));
