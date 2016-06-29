/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import RadioGroup from './';
import Radio from '../Radio';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('RadioGroup', () => {
    describe('type="line"', () => {
        it('is a radio-group', () => {
            const group = shallow(
                <RadioGroup type="radio"/>
            );

            expect(group.is('.radio-group')).to.be.true;
        });

        it('has radioes', () => {
            const group = mount(
                <RadioGroup type="line">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );

            const radioes = group.find('.radio');
            expect(radioes.length).to.equal(3);
        });

        it('accepts className prop', () => {
            const group = shallow(
                <RadioGroup type="radio" className="my-radio-group not-my-radio-group"/>
            );

            expect(group.hasClass('my-radio-group')).to.be.true;
            expect(group.hasClass('not-my-radio-group')).to.be.true;
        });

        it('accepts type prop', () => {
            const wrapper = mount(
                <RadioGroup type="line">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_type_line')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_type_line')).to.be.true;
        });

        it('accepts theme prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" theme="foo">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_theme_foo')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" size="m">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_size_m')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_size_m')).to.be.true;
        });

        it('accepts name prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" name="foo">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const radio = wrapper.find('.radio-group').find(Radio);
            expect(radio).to.have.prop('name', 'foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" value="30">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const radios = wrapper.find('.radio-group').find(Radio);

            expect(radios.at(0)).to.not.have.prop('checked', true);
            expect(radios.at(1)).to.not.have.prop('checked', true);
            expect(radios.at(2)).to.have.prop('checked', true);
        });

        it('updates children on value change', () => {
            const wrapper = mount(
                <RadioGroup type="line" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );

            wrapper.setProps({ value: '20' });

            const radios = wrapper.find('.radio-group').find(Radio);
            expect(radios.at(0)).to.not.have.prop('checked', true);
            expect(radios.at(1)).to.have.prop('checked', true);
            expect(radios.at(2)).to.not.have.prop('checked', true);
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" disabled>
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const radio = wrapper.find('.radio-group').find(Radio);
            expect(radio).to.have.prop('disabled', true);

            wrapper.setProps({ disabled: false });

            expect(radio).to.not.have.prop('disabled', true);
        });

        it('calls onChange handler on Radio change', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <RadioGroup type="line" value="10" onChange={spy} foo="bar">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const radio2 = wrapper.find(Radio)
                .at(1)
                .find('input');

            radio2.simulate('change');

            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall.args[0]).to.equal('20');
            expect(spy.lastCall.args[1].foo).to.equal('bar');
        });
    });

    describe('type="button"', () => {
        it('is a radio-group', () => {
            const group = shallow(
                <RadioGroup type="radio"/>
            );

            expect(group.is('.radio-group')).to.be.true;
        });

        it('has radios', () => {
            const group = mount(
                <RadioGroup type="button">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );

            const radios = group.find('.radio');
            expect(radios.length).to.equal(3);
        });

        it('accepts className prop', () => {
            const group = shallow(
                <RadioGroup type="button" className="my-radio-group not-my-radio-group"/>
            );

            expect(group.hasClass('my-radio-group')).to.be.true;
            expect(group.hasClass('not-my-radio-group')).to.be.true;
        });

        it('accepts type prop', () => {
            const wrapper = mount(
                <RadioGroup type="button">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_type_button')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_type_button')).to.be.true;
        });

        it('accepts theme prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" theme="foo">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_theme_foo')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" size="m">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            expect(group.hasClass('radio-group_size_m')).to.be.true;

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_size_m')).to.be.true;
        });

        it('accepts name prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" name="foo">
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const radio = wrapper.find('.radio-group').find(Radio);
            expect(radio).to.have.prop('name', 'foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" value="30">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );

            const radios = wrapper.find('.radio-group').find(Radio);
            expect(radios.at(0)).to.not.have.prop('checked', true);
            expect(radios.at(1)).to.not.have.prop('checked', true);
            expect(radios.at(2)).to.have.prop('checked', true);
        });

        it('updates children on value change', () => {
            const wrapper = mount(
                <RadioGroup type="button" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );

            wrapper.setProps({ value: '20' });

            const radios = wrapper.find('.radio-group').find(Radio);
            expect(radios.at(0)).to.not.have.prop('checked', true);
            expect(radios.at(1)).to.have.prop('checked', true);
            expect(radios.at(2)).to.not.have.prop('checked', true);
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" disabled>
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const radio = wrapper.find('.radio-group').find(Radio);
            expect(radio).to.have.prop('disabled', true);

            wrapper.setProps({ disabled: false });
            expect(radio).to.not.have.prop('disabled', true);
        });

        it('change value if Radio clicked', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <RadioGroup type="button" value="10" onChange={spy} foo="bar">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const secondRadioButton = wrapper.find(Radio)
                .at(1)
                .find('button');

            secondRadioButton.simulate('mousedown', { button: 0 });
            secondRadioButton.simulate('mouseup');

            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall.args[0]).to.equal('20');
            expect(spy.lastCall.args[1].foo).to.equal('bar');
        });
    });
});
