/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TextInput from './';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('TextInput', () => {
    it('is a input', () => {
        const input = shallow(<TextInput/>);

        expect(input.is('.input')).to.be.true;
    });

    it('has input', () => {
        const input = shallow(<TextInput/>);

        expect(input.find('input').length).to.equal(1);
    });

    it('accepts name prop', () => {
        const wrapper = mount(<TextInput name="foo"/>);

        expect(wrapper.find('input')).to.have.attr('name', 'foo');
    });

    it('accepts type prop', () => {
        const wrapper = mount(<TextInput type="password"/>);

        expect(wrapper.find('input')).to.have.attr('type', 'password');
    });

    it('accepts placeholder prop', () => {
        const wrapper = mount(<TextInput placeholder="Something"/>);

        expect(wrapper.find('input')).to.have.prop('placeholder', 'Something');
    });

    it('accepts value prop', () => {
        const wrapper = mount(<TextInput value="hello"/>);

        expect(wrapper.find('input')).to.have.prop('value', 'hello');
    });

    it('accepts theme prop', () => {
        const input = shallow(<TextInput theme="foo"/>);

        expect(input.hasClass('input_theme_foo')).to.be.true;
    });

    it('accepts size prop', () => {
        const input = shallow(<TextInput size="l"/>);

        expect(input.hasClass('input_size_l')).to.be.true;
    });

    it('accepts className prop', () => {
        const input = shallow(<TextInput className="my-textinput not-my-textinput"/>);

        expect(input.hasClass('my-textinput')).to.be.true;
        expect(input.hasClass('not-my-textinput')).to.be.true;
    });

    it('accepts disabled prop', () => {
        const input = shallow(<TextInput disabled/>);

        expect(input.hasClass('input_disabled')).to.be.true;
        expect(input.find('input')).to.have.attr('disabled');

        input.setProps({ disabled: false });

        expect(input.hasClass('input_disabled')).to.be.false;
        expect(input.find('input')).to.not.have.attr('disabled');
    });

    it('accepts autocomplete prop', () => {
        const input = shallow(<TextInput autocomplete="off"/>);

        expect(input.find('input')).to.have.attr('autocomplete', 'off');
    });

    it('accepts focused prop', () => {
        const input = shallow(<TextInput focused/>);

        expect(input.hasClass('input_focused')).to.be.true;
    });

    it('accepts DOM focus', () => {
        const input = shallow(<TextInput/>);

        expect(input.hasClass('input_focused')).to.be.false;

        input.find('input').simulate('focus');

        expect(input.hasClass('input_focused')).to.be.true;
    });

    it('removes focused if receives disabled', () => {
        const input = shallow(<TextInput focused/>);

        input.setProps({ disabled: true });

        expect(input.hasClass('input_focused')).to.be.false;
    });

    it('is hovered on mouseenter/mouseleave', () => {
        const input = shallow(<TextInput/>);

        input.find('input').simulate('mouseenter');
        expect(input.state('hovered')).to.be.true;
        expect(input.hasClass('input_hovered')).to.be.true;

        input.find('input').simulate('mouseleave');
        expect(input.state('hovered')).to.not.be.ok;
        expect(input.hasClass('input_hovered')).to.be.false;
    });

    it('can not be hovered if disabled', () => {
        const input = shallow(<TextInput disabled/>);

        input.find('input').simulate('mouseenter');
        expect(input.state('hovered')).to.not.be.ok;
    });

    it('calls onChange on input change', () => {
        const spy = sinon.spy();
        const input = mount(<TextInput name="foo" onChange={spy}/>);

        input.find('input').simulate('change', { target: { value: 'hello' } });

        expect(spy).to.have.been.called;
        expect(spy.lastCall).to.have.been.calledWithMatch('hello', { name: 'foo' });
    });

    it('does not call onChange on input change if disabled', () => {
        const spy = sinon.spy();
        const input = mount(<TextInput disabled onChange={spy}/>);

        input.find('input').simulate('change', { target: { value: 'hello' } });

        expect(spy).to.not.have.been.called;
    });

    describe('hasClear', () => {
        it('accepts hasClear prop', () => {
            const wrapper = mount(<TextInput hasClear/>);

            expect(wrapper).to.have.className('input_has-clear');
            expect(wrapper.find('.input__clear').length).to.equal(1);
        });

        it('is visible if input has value', () => {
            const wrapper = mount(<TextInput hasClear/>);

            expect(wrapper.find('.input__clear')).to.not.have.className('input__clear_visible');

            wrapper.setProps({ value: 'hello' });

            expect(wrapper.find('.input__clear')).to.have.className('input__clear_visible');
        });

        it('calls onChange with empty value on clear click', () => {
            const spy = sinon.spy();
            const wrapper = mount(<TextInput name="foo" value="hello" hasClear onChange={spy}/>);

            wrapper.find('.input__clear').simulate('click');

            expect(spy).to.have.been.called;
            expect(spy.lastCall).to.have.been.calledWithMatch('', { name: 'foo' }, { source: 'clear' });
        });
    });
});
