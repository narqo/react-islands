/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import TextInput from './';

describe('TextInput', () => {

    it('is a input', () => {
        const input = shallow(<TextInput/>);

        expect(input.is('.input')).to.be.true;
    });

    it('accepts name prop', () => {
        const wrapper = mount(<TextInput name="foo"/>);
        const input = wrapper.find('input');

        expect(input.node.getAttribute('name')).to.equal('foo');
    });

    it('accepts type prop', () => {
        const wrapper = mount(<TextInput type="password"/>);
        const input = wrapper.find('input');

        expect(input.node.getAttribute('type')).to.equal('password');
    });

    it('accepts placeholder prop', () => {
        const wrapper = mount(<TextInput placeholder="Something"/>);
        const input = wrapper.find('input');

        expect(input.node.getAttribute('placeholder')).to.equal('Something');
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
        const input = shallow(<TextInput className="my-input not-my-input"/>);

        expect(input.hasClass('my-input')).to.be.true;
        expect(input.hasClass('not-my-input')).to.be.true;
    });

    it('accepts disabled prop', () => {
        const input = shallow(<TextInput disabled/>);

        expect(input.hasClass('input_disabled')).to.be.true;

        input.setProps({ disabled: false });

        expect(input.hasClass('input_disabled')).to.be.false;
    });

    it('accepts focused prop', () => {
        const input = shallow(<TextInput focused/>);

        expect(input.hasClass('input_focused')).to.be.true;
    });

    it('accepts focus', () => {
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

    it('has input', () => {
        const wrapper = mount(<TextInput/>);
        const input = wrapper.find('input');

        expect(input.length).to.equal(1);
    });

    it('is hovered on mouseenter/mouseleave', () => {
        const input = shallow(<TextInput/>);

        input.find('input').simulate('mouseenter');
        expect(input.state('hovered')).to.be.true;
        expect(input.hasClass('input_hovered')).to.be.true;

        input.find('input').simulate('mouseleave');
        expect(input.state('hovered')).to.be.falsy;
        expect(input.hasClass('input_hovered')).to.be.false;
    });

    it('can not be hovered if disabled', () => {
        const input = shallow(<TextInput disabled/>);

        input.find('input').simulate('mouseenter');
        expect(input.state('hovered')).to.not.be.ok;
    });

    it.skip('accepts keypress', done => {
        const spy = sinon.spy();
        const wrapper = mount(<TextInput onChange={spy}/>);
        const input = wrapper.find('input');

        input.simulate('keydown', { key: 'q' });
        input.simulate('keyup');

        setTimeout(() => {
            expect(wrapper.state('value')).to.equal('q');
            expect(spy.callCount).to.equal(1);
            done();
        }, 50);
    });

    it('calls onChange if value changed', () => {
        const spy = sinon.spy();
        const input = shallow(<TextInput onChange={spy} name="foo"/>);

        input.setProps({ value: 'hello' });

        expect(input.state('value')).to.equal('hello');
        expect(spy.callCount).to.equal(1);
        expect(spy.getCall(0).args[0]).to.equal('hello');
        expect(spy.getCall(0).args[1].name).to.equal('foo');
    });

    describe('hasClear', () => {

        it('accepts hasClear prop', () => {
            const wrapper = mount(<TextInput hasClear/>);

            wrapper.hasClass('input_has-clear');

            const hasClear = wrapper.find('.input__clear');
            expect(hasClear.length).to.equal(1);
            expect(hasClear.hasClass('input__clear_visible')).to.be.false;
        });

        it('hasClear is visible if input has value', () => {
            const wrapper = mount(<TextInput value="hello" hasClear/>);
            const hasClear = wrapper.find('.input__clear');

            expect(hasClear.hasClass('input__clear_visible')).to.be.true;
        });

        it('click to hasClear clears value', () => {
            const spy = sinon.spy();
            const wrapper = mount(<TextInput value="hello" hasClear onChange={spy}/>);
            const hasClear = wrapper.find('.input__clear');

            expect(wrapper.state('value')).to.equal('hello');
            hasClear.simulate('click');
            expect(wrapper.state('value')).to.equal('');
            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[2]).to.be.eql({ source: 'clear' });
        });

        //  FIXME: При наведении на clear ховер не срабатывает.
        it.skip('is hovered on mouseenter/mouseleave over hasClear', () => {
            const input = mount(<TextInput hasClear/>);

            input.find('.input__clear').simulate('mouseenter');
            expect(input.state('hovered')).to.be.true;
            expect(input.hasClass('input_hovered')).to.be.true;

            input.find('.input__clear').simulate('mouseleave');
            expect(input.state('hovered')).to.be.falsy;
            expect(input.hasClass('input_hovered')).to.be.false;
        });

    });

});
