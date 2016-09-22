/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Radio from './';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('Radio', () => {
    describe('type is not set (radio)', () => {
        it('is a radio', () => {
            const radio = shallow(<Radio>radio</Radio>);

            expect(radio.is('.radio')).to.be.true;
        });

        it('has label', () => {
            const radio = mount(<Radio>radio</Radio>);

            const label = radio.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('radio')).to.be.true;
        });

        it('has input', () => {
            const radio = mount(<Radio>radio</Radio>);

            const input = radio.find('input');
            expect(input.length).to.equal(1);
            expect(input.hasClass('radio__control')).to.be.true;
            expect(input.node.getAttribute('type')).to.equal('radio');
        });

        it('has text', () => {
            const radio = mount(<Radio>radio</Radio>);

            const text = radio.find('span.radio__text');
            expect(text.length).to.equal(1);
            expect(text.node.textContent).to.equal('radio');
        });

        it('accepts type prop', () => {
            const radio = mount(<Radio type="foo"/>);

            expect(radio.find('label').hasClass('radio_type_foo')).to.be.true;
        });

        it('accepts name prop', () => {
            const radio = mount(<Radio name="foo">radio</Radio>);

            expect(radio.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const radio = mount(<Radio value="foo">radio</Radio>);

            expect(radio.find('input').node.value).to.equal('foo');
        });

        it('accepts theme prop', () => {
            const radio = mount(<Radio theme="foo">radio</Radio>);

            expect(radio.find('label').hasClass('radio_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const radio = mount(<Radio size="foo">radio</Radio>);

            expect(radio.find('label').hasClass('radio_size_foo')).to.be.true;
        });

        it('accepts id prop', () => {
            const radio = shallow(<Radio id="my-radio">checkbox</Radio>);

            expect(radio.find('input')).to.have.id('my-radio');
        });

        it('accepts className prop', () => {
            const radio = shallow(<Radio className="my-radio not-my-radio">radio</Radio>);

            expect(radio.hasClass('my-radio')).to.be.true;
            expect(radio.hasClass('not-my-radio')).to.be.true;
        });

        it('accepts disabled prop', () => {
            const radio = mount(<Radio disabled>radio</Radio>);

            expect(radio.find('label').hasClass('radio_disabled')).to.be.true;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.true;

            radio.setProps({ disabled: false });
            expect(radio.find('label').hasClass('radio_disabled')).to.be.false;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it('accepts checked prop', () => {
            const radio = mount(<Radio checked>radio</Radio>);

            expect(radio.find('label').hasClass('radio_checked')).to.be.true;
            expect(radio.find('input').node.checked).to.be.true;

            radio.setProps({ checked: false });
            expect(radio.find('label').hasClass('radio_checked')).to.be.false;
            expect(radio.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const radio = mount(<Radio focused>radio</Radio>);

            expect(radio.state('focused')).to.be.ok;
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;

            radio.setState({ focused: false });
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
        });

        it('accepts focus', () => {
            const radio = mount(<Radio>radio</Radio>);

            radio.simulate('focus');
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;

            radio.simulate('blur');
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
        });

        it('removes focused if receives disabled', () => {
            const radio = mount(<Radio focused>radio</Radio>);

            radio.setProps({ disabled: true });
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
        });

        it('is hovered on mouseenter/mouseleave', () => {
            const radio = mount(<Radio>radio</Radio>);

            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;

            radio.simulate('mouseenter');
            expect(radio.state('hovered')).to.be.true;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.true;

            radio.simulate('mouseleave');
            expect(radio.state('hovered')).to.be.false;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const radio = mount(<Radio disabled>radio</Radio>);

            radio.simulate('mouseenter');
            expect(radio.state('hovered')).to.not.be.ok;
            expect(radio.find('label').hasClass('radio_hovered')).to.not.be.ok;
        });

        it('calls onCheck on input change', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio checked={false} onCheck={spy} name="foo">radio</Radio>);

            radio.find('input').simulate('change');

            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall).to.have.been.calledWithMatch(true, { name: 'foo' });
        });

        it('does not call onCheck if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio onCheck={spy} disabled>radio</Radio>);

            radio.find('input').simulate('change');

            expect(spy).to.not.have.been.called;
        });
    });

    describe('type="button"', () => {
        it('is a radio', () => {
            const radio = shallow(<Radio type="button">radio</Radio>);

            expect(radio.is('.radio')).to.be.true;
        });

        it('is a button', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            const button = radio.find('button');
            expect(button.length).to.equal(1);
            expect(button.hasClass('button')).to.be.true;

            const text = button.find('span');
            expect(text.hasClass('button__text')).to.be.true;
            expect(text.node.textContent).to.equal('radio');
        });

        it('has label', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            const label = radio.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('radio')).to.be.true;
        });

        it('accepts type prop', () => {
            const radio = mount(<Radio type="button"/>);

            expect(radio.find('label').hasClass('radio_type_button')).to.be.true;
            expect(radio.find('button').hasClass('button_type_button')).to.be.true;
        });

        it('accepts theme prop', () => {
            const radio = mount(<Radio type="button" theme="foo">radio</Radio>);

            expect(radio.find('label').hasClass('radio_theme_foo')).to.be.true;
            expect(radio.find('button').hasClass('button_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const radio = mount(<Radio type="button" size="foo">radio</Radio>);

            expect(radio.find('label').hasClass('radio_size_foo')).to.be.true;
            expect(radio.find('button').hasClass('button_size_foo')).to.be.true;
        });

        it('accepts className prop', () => {
            const radio = shallow(<Radio type="button" className="my-radio not-my-radio">radio</Radio>);

            expect(radio.hasClass('my-radio')).to.be.true;
            expect(radio.hasClass('not-my-radio')).to.be.true;
        });

        it('accepts checked prop', () => {
            const radio = mount(<Radio type="button" checked>radio</Radio>);

            expect(radio.find('label').hasClass('radio_checked')).to.be.true;
            expect(radio.find('button').hasClass('button_checked')).to.be.true;
            expect(radio.find('input').length).to.equal(1);

            radio.setProps({ checked: false });
            expect(radio.find('label').hasClass('radio_checked')).to.be.false;
            expect(radio.find('button').hasClass('button_checked')).to.be.false;
            expect(radio.find('input').length).to.equal(0);
        });

        it('accepts value prop', () => {
            const radio = mount(<Radio type="button" checked value="foo">radio</Radio>);

            expect(radio.find('input').node.value).to.equal('foo');
        });

        it('accepts name prop', () => {
            const radio = mount(<Radio type="button" checked name="foo">radio</Radio>);

            expect(radio.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts disabled prop', () => {
            const radio = mount(<Radio type="button" checked disabled>radio</Radio>);

            expect(radio.find('label').hasClass('radio_disabled')).to.be.true;
            expect(radio.find('button').hasClass('button_disabled')).to.be.true;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.true;

            radio.setProps({ disabled: false });
            expect(radio.find('label').hasClass('radio_disabled')).to.be.false;
            expect(radio.find('button').hasClass('button_disabled')).to.be.false;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it('accepts focused prop', () => {
            const radio = mount(<Radio type="button" focused>radio</Radio>);

            expect(radio.state('focused')).to.be.ok;
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused')).to.be.true;

            // FIXME(narqo@): `Control#setState({ focused: false })`
            /*
            radio.setState({ focused: false });
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
            expect(radio.find('button').hasClass('button_focused')).to.be.false;
            */
        });

        it('reacts on DOM focus', () => {
            const radio = mount(<Radio type="button">radio</Radio>);
            const button = radio.find('button');

            button.simulate('focus');
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused-hard')).to.be.true;

            button.simulate('blur');
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
            expect(radio.find('button').hasClass('button_focused')).to.be.false;
            expect(radio.find('button').hasClass('button_focused-hard')).to.be.false;
        });

        it('removes focused if receives disabled', () => {
            const radio = mount(<Radio type="button" focused>radio</Radio>);

            radio.setProps({ disabled: true });
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
            expect(radio.find('button').hasClass('button_focused')).to.be.false;
        });

        it('is hovered on mouseenter/mouseleave', () => {
            const radio = mount(<Radio type="button">radio</Radio>);
            const button = radio.find('button');

            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;
            expect(radio.find('button').hasClass('button_hovered')).to.be.false;

            button.simulate('mouseenter');
            expect(radio.state('hovered')).to.be.true;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.true;
            expect(radio.find('button').hasClass('button_hovered')).to.be.true;

            button.simulate('mouseleave');
            expect(radio.state('hovered')).to.be.false;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;
            expect(radio.find('button').hasClass('button_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const radio = mount(<Radio type="button" disabled>radio</Radio>);
            const button = radio.find('button');

            button.simulate('mouseenter');
            expect(radio.state('hovered')).to.not.be.ok;
            expect(radio.find('label').hasClass('radio_hovered')).to.not.be.ok;
            expect(radio.find('button').hasClass('button_hovered')).to.not.be.ok;
        });

        it('calls onCheck handler on space press if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused onCheck={spy}>text</Radio>);
            const button = radio.find('button');

            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');
            expect(spy.calledOnce).to.be.true;
            expect(spy.lastCall).to.have.been.calledWith(true);

            radio.setProps({ checked: true });

            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');

            expect(spy).to.have.been.calledOnce;
        });

        it('calls onCheck handler on enter press if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused onCheck={spy}>text</Radio>);
            const button = radio.find('button');

            button.simulate('keydown', { key: 'Enter' });
            button.simulate('keyup');
            expect(spy.calledOnce).to.be.true;
            expect(spy.lastCall).to.have.been.calledWith(true);

            radio.setProps({ checked: true });

            button.simulate('keydown', { key: 'Enter' });
            button.simulate('keyup');

            expect(spy).to.have.been.calledOnce;
        });

        it('does not call onCheck on space / enter press if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused disabled onCheck={spy}>text</Radio>);
            const button = radio.find('button');

            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');
            expect(spy).to.not.have.been.called;

            button.simulate('keydown', { key: 'Enter' });
            button.simulate('keyup');
            expect(spy).to.not.have.been.called;
        });

        it('calls onClick on button click', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" onCheck={spy} name="foo">text</Radio>);
            const button = radio.find('button');

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall).to.have.been.calledWith(true);

            radio.setProps({ checked: true });

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');

            expect(spy).to.have.been.calledOnce;
        });

        it('does not call onCheck if onClick default prevented', () => {
            const spy = sinon.spy();
            const onClick = e => e.preventDefault();
            const radio = mount(<Radio type="button" onClick={onClick} onCheck={spy} name="foo">text</Radio>);
            const button = radio.find('button');

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');

            expect(spy).to.not.have.been.called;
        });

        it('passes props to onCheck as a second argument', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" onCheck={spy} name="foo" bar="42">text</Radio>);
            const button = radio.find('button');

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
        });

        it('does not call onCheck on button click if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" disabled onCheck={spy}>text</Radio>);
            const button = radio.find('button');

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');

            expect(spy).to.not.have.been.called;
        });
    });
});
