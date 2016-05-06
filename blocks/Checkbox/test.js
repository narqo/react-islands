/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Checkbox from './';

describe('Checkbox', () => {

    it('is a checkbox', () => {
        const checkbox = shallow(<Checkbox>checkbox</Checkbox>);

        expect(checkbox.is('label.checkbox')).to.be.true;
    });

    it('accepts name prop', () => {
        const checkbox = mount(<Checkbox name="foo">checkbox</Checkbox>);

        expect(checkbox.find('input').node.getAttribute('name')).to.be.eql('foo');
    });

    it('accepts className prop', () => {
        const checkbox = shallow(<Checkbox className="my-checkbox not-my-checkbox">checkbox</Checkbox>);

        expect(checkbox.hasClass('my-checkbox')).to.be.true;
        expect(checkbox.hasClass('not-my-checkbox')).to.be.true;
    });

    describe('type="button"', () => {

        it('accepts type prop', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_type_button')).to.be.true;
            expect(checkbox.find('button').length).to.be.eql(1);
        });

        it('accepts theme prop', () => {
            const checkbox = mount(<Checkbox type="button" theme="foo">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_theme_foo')).to.be.true;
            expect(checkbox.find('button').hasClass('button_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const checkbox = mount(<Checkbox type="button" size="foo">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_size_foo')).to.be.true;
            expect(checkbox.find('button').hasClass('button_size_foo')).to.be.true;
        });

        it('accepts disabled prop', () => {
            const checkbox = mount(<Checkbox type="button" disabled>checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.true;
            expect(checkbox.find('button').hasClass('button_disabled')).to.be.true;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.true;

            checkbox.setProps({ disabled: false });
            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.false;
            expect(checkbox.find('button').hasClass('button_disabled')).to.be.false;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it('accepts checked prop', () => {
            const checkbox = mount(<Checkbox type="button" checked>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.true;
            expect(checkbox.find('button').hasClass('button_checked')).to.be.true;
            expect(checkbox.find('input').node.checked).to.be.true;

            checkbox.setProps({ checked: false });
            expect(checkbox.state('checked')).to.be.false;
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.false;
            expect(checkbox.find('button').hasClass('button_checked')).to.be.false;
            expect(checkbox.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const checkbox = mount(<Checkbox type="button" focused>checkbox</Checkbox>);

            expect(checkbox.state('focused')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.true;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.true;

            checkbox.setState({ focused: false });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.false;
        });

        //  TODO: Проверить focused-hard.

        it('removes focused if receives disabled', () => {
            const checkbox = mount(<Checkbox type="button" focused>checkbox</Checkbox>);

            checkbox.setProps({ disabled: true });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.false;
        });

        it('is hovered on mouseenter/mouseleave', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
            expect(checkbox.find('button').hasClass('button_hovered')).to.be.false;

            checkbox.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.true;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(checkbox.find('button').hasClass('button_hovered')).to.be.true;

            checkbox.simulate('mouseleave');
            expect(checkbox.state('hovered')).to.be.false;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(checkbox.find('button').hasClass('button_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const checkbox = mount(<Checkbox type="button" disabled>checkbox</Checkbox>);

            checkbox.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.not.be.ok;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.not.be.ok;
            //  FIXME: Ховер не доходит до кнопки.
            //  expect(checkbox.find('button').hasClass('button_hovered')).to.not.be.ok;
        });

        it('can be checked with space or enter if focused', () => {
            //  FIXME: Проверять, что приходит в onCheck.
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" focused onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            //  FIXME: А как-то тут не в button можно тыкать? В сам checkbox, например?
            //
            checkbox.find('button').simulate('keydown', { key: 'q' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('button').simulate('keydown', { key: ' ' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.be.true;
            checkbox.find('button').simulate('keydown', { key: ' ' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.be.false;

            checkbox.find('button').simulate('keydown', { key: 'Enter' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.be.true;
            checkbox.find('button').simulate('keydown', { key: 'Enter' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.be.false;

            expect(spy.callCount).to.be.eql(4);
            expect(spy.getCall(0).args[0]).to.be.true;
            expect(spy.getCall(1).args[0]).to.be.false;
            expect(spy.getCall(2).args[0]).to.be.true;
            expect(spy.getCall(3).args[0]).to.be.false;
        });

        it('can not be checked with space if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" disabled onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('button').simulate('keydown', { key: ' ' });
            checkbox.find('button').simulate('keyup');
            expect(checkbox.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

        it('can be checked with click', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.true;

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.false;

            expect(spy.callCount).to.be.eql(2);
            expect(spy.getCall(0).args[0]).to.be.true;
            expect(spy.getCall(1).args[0]).to.be.false;
        });

        it('can not be checked with click if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" disabled onCheck={spy}>checkbox</Checkbox>);

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');
            expect(checkbox.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

    });

});
