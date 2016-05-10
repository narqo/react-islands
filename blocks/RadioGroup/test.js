/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import RadioGroup from './';
import Radio from '../Radio';

describe('RadioGroup', () => {

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
            const group = wrapper.find('.radio-group');

            const radio = group.find('.radio');
            //  Не получится тут тестить `radio.prop('name')`.
            //  Придется лезть в DOM руками.
            expect(radio.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const radioes = group.find('.radio');
            expect(radioes.at(0).hasClass('radio_checked')).to.be.true;
            expect(radioes.at(1).hasClass('radio_checked')).to.be.false;
            expect(radioes.at(2).hasClass('radio_checked')).to.be.false;
        });

        it('can change value via setState', () => {
            const wrapper = mount(
                <RadioGroup type="button" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            wrapper.setState({ value: '20' });

            const radioes = group.find('.radio');
            expect(radioes.at(0).hasClass('radio_checked')).to.be.false;
            expect(radioes.at(1).hasClass('radio_checked')).to.be.true;
            expect(radioes.at(2).hasClass('radio_checked')).to.be.false;
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <RadioGroup type="button" disabled>
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_disabled')).to.be.true;

            wrapper.setProps({ disabled: false });
            expect(radio.hasClass('radio_disabled')).to.be.false;
        });

        it('change value if radio clicked', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <RadioGroup type="button" value="10" onChange={spy} foo="bar">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const secondRadioButton = group
                .find('.radio')
                .at(1)
                .find('button');
            secondRadioButton.simulate('mousedown');
            secondRadioButton.simulate('mouseup');

            expect(wrapper.state('value')).to.equal('20');

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[1].foo).to.equal('bar');
        });

    });

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
            const group = wrapper.find('.radio-group');

            const radio = group.find('.radio');
            //  Не получится тут тестить `radio.prop('name')`.
            //  Придется лезть в DOM руками.
            expect(radio.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const radioes = group.find('.radio');
            expect(radioes.at(0).hasClass('radio_checked')).to.be.true;
            expect(radioes.at(1).hasClass('radio_checked')).to.be.false;
            expect(radioes.at(2).hasClass('radio_checked')).to.be.false;
        });

        it('can change value via setState', () => {
            const wrapper = mount(
                <RadioGroup type="line" value="10">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            wrapper.setState({ value: '20' });

            const radioes = group.find('.radio');
            expect(radioes.at(0).hasClass('radio_checked')).to.be.false;
            expect(radioes.at(1).hasClass('radio_checked')).to.be.true;
            expect(radioes.at(2).hasClass('radio_checked')).to.be.false;
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <RadioGroup type="line" disabled>
                    <Radio value="10">10</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const radio = group.find('.radio');
            expect(radio.hasClass('radio_disabled')).to.be.true;

            wrapper.setProps({ disabled: false });
            expect(radio.hasClass('radio_disabled')).to.be.false;
        });

        //  FIXME: Не получается правильно сэмулировать клик в чекбокс.
        it.skip('change value if radio clicked', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <RadioGroup type="line" value="10" onChange={spy} foo="bar">
                    <Radio value="10">10</Radio>
                    <Radio value="20">20</Radio>
                    <Radio value="30">30</Radio>
                </RadioGroup>
            );
            const group = wrapper.find('.radio-group');

            const secondRadioButton = group
                .find('.radio')
                .at(1)
                .find('button');
            secondRadioButton.simulate('mousedown');
            secondRadioButton.simulate('mouseup');

            expect(wrapper.state('value')).to.equal('20');

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[1].foo).to.equal('bar');
        });

    });
});
