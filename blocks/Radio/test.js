/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Radio from './';

describe('Radio', () => {

    describe('type="button"', () => {

        it('is a radio', () => {
            const radio = shallow(<Radio type="button">radio</Radio>);

            expect(radio.is('.radio')).to.be.true;
        });

        it('has label', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            const label = radio.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('radio')).to.be.true;
        });

        it('has input', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            const input = radio.find('input');
            expect(input.length).to.equal(1);
            expect(input.hasClass('radio__control')).to.be.true;
            expect(input.node.getAttribute('type')).to.equal('radio');
        });

        it('has button', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            const button = radio.find('button');
            expect(button.length).to.equal(1);
            expect(button.hasClass('button')).to.be.true;

            const text = button.find('span');
            expect(text.hasClass('button__text')).to.be.true;
            expect(text.node.textContent).to.equal('radio');
        });

        it('accepts type prop', () => {
            const radio = mount(<Radio type="button"/>);

            expect(radio.find('label').hasClass('radio_type_button')).to.be.true;
            expect(radio.find('button').hasClass('button_type_button')).to.be.true;
        });

        it('accepts name prop', () => {
            const radio = mount(<Radio type="button" name="foo">radio</Radio>);

            expect(radio.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const radio = mount(<Radio type="button" value="foo">radio</Radio>);

            //  FIXME: Почему тут не работает node.getAttribute('value')?
            expect(radio.find('input').node.value).to.equal('foo');
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

        it('accepts disabled prop', () => {
            const radio = mount(<Radio type="button" disabled>radio</Radio>);

            expect(radio.find('label').hasClass('radio_disabled')).to.be.true;
            expect(radio.find('button').hasClass('button_disabled')).to.be.true;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.true;

            radio.setProps({ disabled: false });
            expect(radio.find('label').hasClass('radio_disabled')).to.be.false;
            expect(radio.find('button').hasClass('button_disabled')).to.be.false;
            expect(radio.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it.skip('accepts checked prop', () => {
            const radio = mount(<Radio type="button" checked>radio</Radio>);

            expect(radio.state('checked')).to.be.true;
            expect(radio.find('label').hasClass('radio_checked')).to.be.true;
            expect(radio.find('button').hasClass('button_checked')).to.be.true;
            //  FIXME: Почему-то не работает. В Checkbox все ок.
            expect(radio.find('input').node.checked).to.be.true;

            radio.setProps({ checked: false });
            expect(radio.state('checked')).to.be.false;
            expect(radio.find('label').hasClass('radio_checked')).to.be.false;
            expect(radio.find('button').hasClass('button_checked')).to.be.false;
            //  FIXME: И тут.
            expect(radio.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const radio = mount(<Radio type="button" focused>radio</Radio>);

            expect(radio.state('focused')).to.be.true;
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused')).to.be.true;

            radio.setState({ focused: false });
            expect(radio.find('label').hasClass('radio_focused')).to.be.false;
            expect(radio.find('button').hasClass('button_focused')).to.be.false;
        });

        it('accepts focus', () => {
            const radio = mount(<Radio type="button">radio</Radio>);

            radio.simulate('focus');
            expect(radio.find('label').hasClass('radio_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused')).to.be.true;
            expect(radio.find('button').hasClass('button_focused-hard')).to.be.true;

            radio.simulate('blur');
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

            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;
            expect(radio.find('button').hasClass('button_hovered')).to.be.false;

            radio.simulate('mouseenter');
            expect(radio.state('hovered')).to.be.true;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.true;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(radio.find('button').hasClass('button_hovered')).to.be.true;

            radio.simulate('mouseleave');
            expect(radio.state('hovered')).to.be.false;
            expect(radio.find('label').hasClass('radio_hovered')).to.be.false;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(radio.find('button').hasClass('button_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const radio = mount(<Radio type="button" disabled>radio</Radio>);

            radio.simulate('mouseenter');
            expect(radio.state('hovered')).to.not.be.ok;
            expect(radio.find('label').hasClass('radio_hovered')).to.not.be.ok;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(radio.find('button').hasClass('button_hovered')).to.not.be.ok;
        });

        it('can not be checked with q', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('button').simulate('keydown', { key: 'q' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.not.be.ok;
        });

        it('can be checked with space if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('button').simulate('keydown', { key: ' ' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.be.true;
            radio.find('button').simulate('keydown', { key: ' ' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it('can be checked with enter if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('button').simulate('keydown', { key: 'Enter' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.be.true;
            radio.find('button').simulate('keydown', { key: 'Enter' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it('can not be checked with space if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" disabled onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('button').simulate('keydown', { key: ' ' });
            radio.find('button').simulate('keyup');
            expect(radio.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

        it('can be checked with click', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" onCheck={spy} name="foo">radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('button').simulate('mousedown');
            radio.find('button').simulate('mouseup');
            expect(radio.state('checked')).to.be.true;

            radio.find('button').simulate('mousedown');
            radio.find('button').simulate('mouseup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it('onCheck receive props as a second argument', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" onCheck={spy} name="foo" bar="42">radio</Radio>);

            radio.find('button').simulate('mousedown');
            radio.find('button').simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
        });

        it('can not be checked with click if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio type="button" disabled onCheck={spy}>radio</Radio>);

            radio.find('button').simulate('mousedown');
            radio.find('button').simulate('mouseup');
            expect(radio.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

    });

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

        it('has no button', () => {
            const radio = mount(<Radio>radio</Radio>);

            const button = radio.find('button');
            expect(button.length).to.equal(0);
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

            //  FIXME: Почему тут не работает node.getAttribute('value')?
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

            expect(radio.state('checked')).to.be.true;
            expect(radio.find('label').hasClass('radio_checked')).to.be.true;
            expect(radio.find('input').node.checked).to.be.true;

            radio.setProps({ checked: false });
            expect(radio.state('checked')).to.be.false;
            expect(radio.find('label').hasClass('radio_checked')).to.be.false;
            expect(radio.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const radio = mount(<Radio focused>radio</Radio>);

            expect(radio.state('focused')).to.be.true;
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

        it.skip('can not be checked with q', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('input').simulate('keydown', { key: 'q' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.not.be.ok;
        });

        it.skip('can be checked with space if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('input').simulate('keydown', { key: ' ' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.be.true;
            radio.find('input').simulate('keydown', { key: ' ' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it.skip('can be checked with enter if focused', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio focused onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('input').simulate('keydown', { key: 'Enter' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.be.true;
            radio.find('input').simulate('keydown', { key: 'Enter' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it.skip('can not be checked with space if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio disabled onCheck={spy}>radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('input').simulate('keydown', { key: ' ' });
            radio.find('input').simulate('keyup');
            expect(radio.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

        it.skip('can be checked with click', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio onCheck={spy} name="foo">radio</Radio>);

            expect(radio.state('checked')).to.not.be.ok;

            radio.find('input').simulate('mousedown');
            radio.find('input').simulate('mouseup');
            expect(radio.state('checked')).to.be.true;

            radio.find('input').simulate('mousedown');
            radio.find('input').simulate('mouseup');
            expect(radio.state('checked')).to.be.true;

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[0]).to.be.true;
        });

        it.skip('onCheck receive props as a second argument', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio onCheck={spy} name="foo" bar="42">radio</Radio>);

            radio.find('input').simulate('mousedown');
            radio.find('input').simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
        });

        it.skip('can not be checked with click if disabled', () => {
            const spy = sinon.spy();
            const radio = mount(<Radio disabled onCheck={spy}>radio</Radio>);

            radio.find('input').simulate('mousedown');
            radio.find('input').simulate('mouseup');
            expect(radio.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

    });
});
