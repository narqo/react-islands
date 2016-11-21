/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import TextArea from './';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('TextArea', () => {
    it('is a textarea', () => {
        const textarea = shallow(<TextArea/>);

        expect(textarea.is('textarea')).to.be.true;
        expect(textarea).to.have.className('textarea');
    });

    it('accepts name prop', () => {
        const wrapper = mount(<TextArea name="foo"/>);

        expect(wrapper.find('textarea')).to.have.attr('name', 'foo');
    });

    it('accepts placeholder prop', () => {
        const wrapper = mount(<TextArea placeholder="Something"/>);

        expect(wrapper.find('textarea')).to.have.prop('placeholder', 'Something');
    });

    it('accepts value prop', () => {
        const wrapper = mount(<TextArea value="hello"/>);

        expect(wrapper.find('textarea')).to.have.prop('value', 'hello');
    });

    it('accepts theme prop', () => {
        const textarea = shallow(<TextArea theme="foo"/>);

        expect(textarea.hasClass('textarea_theme_foo')).to.be.true;
    });

    it('accepts size prop', () => {
        const textarea = shallow(<TextArea size="l"/>);

        expect(textarea.hasClass('textarea_size_l')).to.be.true;
    });

    it('accepts id prop', () => {
        const textarea = shallow(<TextArea id="my-textarea"/>);

        expect(textarea).to.have.id('my-textarea');
    });

    it('accepts className prop', () => {
        const textarea = shallow(<TextArea className="my-textarea not-my-textarea"/>);

        expect(textarea.hasClass('my-textarea')).to.be.true;
        expect(textarea.hasClass('not-my-textarea')).to.be.true;
    });

    it('accepts disabled prop', () => {
        const textarea = shallow(<TextArea disabled/>);

        expect(textarea.hasClass('textarea_disabled')).to.be.true;
        expect(textarea.find('textarea')).to.have.attr('disabled');

        textarea.setProps({ disabled: false });

        expect(textarea.hasClass('textarea_disabled')).to.be.false;
        expect(textarea.find('textarea')).to.not.have.attr('disabled');
    });

    it('accepts minLength prop', () => {
        const textarea = shallow(<TextArea minLength={3}/>);

        expect(textarea.find('textarea')).to.have.attr('minlength', '3');
    });

    it('accepts maxLength prop', () => {
        const textarea = shallow(<TextArea maxLength={3}/>);

        expect(textarea.find('textarea')).to.have.attr('maxlength', '3');
    });

    it('accepts focused prop', () => {
        const textarea = shallow(<TextArea focused/>);

        expect(textarea.hasClass('textarea_focused')).to.be.true;
    });

    it('accepts DOM focus', () => {
        const textarea = shallow(<TextArea/>);

        expect(textarea.hasClass('textarea_focused')).to.be.false;

        textarea.find('textarea').simulate('focus');

        expect(textarea.hasClass('textarea_focused')).to.be.true;
    });

    it('removes focused if receives disabled', () => {
        const textarea = shallow(<TextArea focused/>);

        textarea.setProps({ disabled: true });

        expect(textarea.hasClass('textarea_focused')).to.be.false;
    });

    it('is hovered on mouseenter/mouseleave', () => {
        const textarea = shallow(<TextArea/>);

        textarea.find('textarea').simulate('mouseenter');
        expect(textarea.state('hovered')).to.be.true;
        expect(textarea.hasClass('textarea_hovered')).to.be.true;

        textarea.find('textarea').simulate('mouseleave');
        expect(textarea.state('hovered')).to.not.be.ok;
        expect(textarea.hasClass('textarea_hovered')).to.be.false;
    });

    it('can not be hovered if disabled', () => {
        const textarea = shallow(<TextArea disabled/>);

        textarea.find('textarea').simulate('mouseenter');
        expect(textarea.state('hovered')).to.not.be.ok;
    });

    it('calls onChange on textarea change', () => {
        const spy = sinon.spy();
        const textarea = mount(<TextArea name="foo" onChange={spy}/>);

        textarea.find('textarea').simulate('change', { target: { value: 'hello' } });

        expect(spy).to.have.been.called;
        expect(spy.lastCall).to.have.been.calledWithMatch('hello', { name: 'foo' });
    });

    it('does not call onChange on textarea change if disabled', () => {
        const spy = sinon.spy();
        const textarea = mount(<TextArea disabled onChange={spy}/>);
        const control = textarea.find('textarea');

        control.node.setAttribute('value', 'hello');
        control.simulate('change');

        expect(spy).to.not.have.been.called;
    });
});
