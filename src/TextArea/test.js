/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import TextArea from './';

describe('TextArea', () => {

    it('is a textarea', () => {
        const textarea = shallow(<TextArea/>);

        expect(textarea.is('textarea.textarea')).to.be.true;
    });

    it('accepts name prop', () => {
        const wrapper = mount(<TextArea name="foo"/>);
        const textarea = wrapper.find('textarea');

        expect(textarea.node.getAttribute('name')).to.equal('foo');
    });

    it('accepts placeholder prop', () => {
        const wrapper = mount(<TextArea placeholder="Something"/>);
        const textarea = wrapper.find('textarea');

        expect(textarea.node.getAttribute('placeholder')).to.equal('Something');
    });

    it('accepts theme prop', () => {
        const textarea = shallow(<TextArea theme="foo"/>);

        expect(textarea.hasClass('textarea_theme_foo')).to.be.true;
    });

    it('accepts size prop', () => {
        const textarea = shallow(<TextArea size="l"/>);

        expect(textarea.hasClass('textarea_size_l')).to.be.true;
    });

    it('accepts className prop', () => {
        const textarea = shallow(<TextArea className="my-textarea not-my-textarea"/>);

        expect(textarea.hasClass('my-textarea')).to.be.true;
        expect(textarea.hasClass('not-my-textarea')).to.be.true;
    });

    it('accepts disabled prop', () => {
        const textarea = shallow(<TextArea disabled/>);

        expect(textarea.hasClass('textarea_disabled')).to.be.true;

        textarea.setProps({ disabled: false });

        expect(textarea.hasClass('textarea_disabled')).to.be.false;
    });

    it('accepts focused prop', () => {
        const textarea = shallow(<TextArea focused/>);

        expect(textarea.hasClass('textarea_focused')).to.be.true;
    });

    it('accepts focus', () => {
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

    it.skip('accepts keypress', done => {
        const spy = sinon.spy();
        const wrapper = mount(<TextArea onChange={spy}/>);
        const textarea = wrapper.find('textarea');

        textarea.simulate('keydown', { key: 'q' });
        textarea.simulate('keyup');

        setTimeout(() => {
            expect(wrapper.state('value')).to.equal('q');
            expect(spy.callCount).to.equal(1);
            done();
        }, 50);
    });

    it('calls onChange if value changed', () => {
        const spy = sinon.spy();
        const textarea = shallow(<TextArea onChange={spy} name="foo"/>);

        textarea.setProps({ value: 'hello' });

        expect(textarea.state('value')).to.equal('hello');
        expect(spy.callCount).to.equal(1);
        expect(spy.getCall(0).args[0]).to.equal('hello');
        expect(spy.getCall(0).args[1].name).to.equal('foo');
    });

});
