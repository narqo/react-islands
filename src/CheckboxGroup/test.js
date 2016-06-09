/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import CheckboxGroup from './';
import Checkbox from '../Checkbox';

describe('CheckboxGroup', () => {

    describe('type="button"', () => {

        it('is a checkbox-group', () => {
            const group = shallow(
                <CheckboxGroup type="button"/>
            );

            expect(group.is('.checkbox-group')).to.be.true;
        });

        it('has checkboxes', () => {
            const group = mount(
                <CheckboxGroup type="button">
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.length).to.equal(3);
        });

        it('accepts className prop', () => {
            const group = shallow(
                <CheckboxGroup type="button" className="my-checkbox-group not-my-checkbox-group"/>
            );

            expect(group.hasClass('my-checkbox-group')).to.be.true;
            expect(group.hasClass('not-my-checkbox-group')).to.be.true;
        });

        it('accepts type prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_type_button')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_type_button')).to.be.true;
        });

        it('accepts theme prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" theme="foo">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_theme_foo')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" size="m">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_size_m')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_size_m')).to.be.true;
        });

        it('accepts name prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" name="foo">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkbox = group.find('.checkbox');
            //  Не получится тут тестить `checkbox.prop('name')`.
            //  Придется лезть в DOM руками.
            expect(checkbox.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" value={['10', '30']}>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.at(0).hasClass('checkbox_checked')).to.be.true;
            expect(checkboxes.at(1).hasClass('checkbox_checked')).to.be.false;
            expect(checkboxes.at(2).hasClass('checkbox_checked')).to.be.true;
        });

        it('can change value via setState', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" value={['10', '30']}>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            wrapper.setState({ value: ['20'] });

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.at(0).hasClass('checkbox_checked')).to.be.false;
            expect(checkboxes.at(1).hasClass('checkbox_checked')).to.be.true;
            expect(checkboxes.at(2).hasClass('checkbox_checked')).to.be.false;
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="button" disabled>
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_disabled')).to.be.true;

            wrapper.setProps({ disabled: false });
            expect(checkbox.hasClass('checkbox_disabled')).to.be.false;
        });

        it('change value if checkbox clicked', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <CheckboxGroup type="button" value={['10', '30']} onChange={spy} foo="bar">
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const secondCheckboxButton = group
                .find('.checkbox')
                .at(1)
                .find('button');
            secondCheckboxButton.simulate('mousedown', { button: 0 });
            secondCheckboxButton.simulate('mouseup');

            expect(wrapper.state('value')).to.be.eql(['10', '30', '20']);

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[1].foo).to.equal('bar');
        });

    });

    describe('type="line"', () => {

        it('is a checkbox-group', () => {
            const group = shallow(
                <CheckboxGroup type="line"/>
            );

            expect(group.is('.checkbox-group')).to.be.true;
        });

        it('has checkboxes', () => {
            const group = mount(
                <CheckboxGroup type="line">
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.length).to.equal(3);
        });

        it('accepts className prop', () => {
            const group = shallow(
                <CheckboxGroup type="line" className="my-checkbox-group not-my-checkbox-group"/>
            );

            expect(group.hasClass('my-checkbox-group')).to.be.true;
            expect(group.hasClass('not-my-checkbox-group')).to.be.true;
        });

        it('accepts type prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_type_line')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_type_line')).to.be.true;
        });

        it('accepts theme prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" theme="foo">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_theme_foo')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" size="m">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            expect(group.hasClass('checkbox-group_size_m')).to.be.true;

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_size_m')).to.be.true;
        });

        it('accepts name prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" name="foo">
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkbox = group.find('.checkbox');
            //  Не получится тут тестить `checkbox.prop('name')`.
            //  Придется лезть в DOM руками.
            expect(checkbox.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" value={['10', '30']}>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.at(0).hasClass('checkbox_checked')).to.be.true;
            expect(checkboxes.at(1).hasClass('checkbox_checked')).to.be.false;
            expect(checkboxes.at(2).hasClass('checkbox_checked')).to.be.true;
        });

        it('can change value via setState', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" value={['10', '30']}>
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            wrapper.setState({ value: ['20'] });

            const checkboxes = group.find('.checkbox');
            expect(checkboxes.at(0).hasClass('checkbox_checked')).to.be.false;
            expect(checkboxes.at(1).hasClass('checkbox_checked')).to.be.true;
            expect(checkboxes.at(2).hasClass('checkbox_checked')).to.be.false;
        });

        it('accepts disabled prop', () => {
            const wrapper = mount(
                <CheckboxGroup type="line" disabled>
                    <Checkbox value="10">10</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const checkbox = group.find('.checkbox');
            expect(checkbox.hasClass('checkbox_disabled')).to.be.true;

            wrapper.setProps({ disabled: false });
            expect(checkbox.hasClass('checkbox_disabled')).to.be.false;
        });

        //  FIXME: Не получается правильно сэмулировать клик в чекбокс.
        it.skip('change value if checkbox clicked', () => {
            const spy = sinon.spy();
            const wrapper = mount(
                <CheckboxGroup type="line" value={['10', '30']} onChange={spy} foo="bar">
                    <Checkbox value="10">10</Checkbox>
                    <Checkbox value="20">20</Checkbox>
                    <Checkbox value="30">30</Checkbox>
                </CheckboxGroup>
            );
            const group = wrapper.find('.checkbox-group');

            const secondCheckboxButton = group
                .find('.checkbox')
                .at(1)
                .find('button');
            secondCheckboxButton.simulate('mousedown', { button: 0 });
            secondCheckboxButton.simulate('mouseup');

            expect(wrapper.state('value')).to.be.eql(['10', '30', '20']);

            expect(spy.callCount).to.equal(1);
            expect(spy.getCall(0).args[1].foo).to.equal('bar');
        });

    });
});
