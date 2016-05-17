/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Checkbox from './';

describe('Checkbox', () => {

    describe('type="button"', () => {

        it('is a checkbox', () => {
            const checkbox = shallow(<Checkbox type="button">checkbox</Checkbox>);

            expect(checkbox.is('.checkbox')).to.be.true;
        });

        it('has label', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            const label = checkbox.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('checkbox')).to.be.true;
        });

        it('has input', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            const input = checkbox.find('input');
            expect(input.length).to.equal(1);
            expect(input.hasClass('checkbox__control')).to.be.true;
            expect(input.node.getAttribute('type')).to.equal('checkbox');
        });

        it('has button', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            const button = checkbox.find('button');
            expect(button.length).to.equal(1);
            expect(button.hasClass('button')).to.be.true;

            const text = button.find('span');
            expect(text.hasClass('button__text')).to.be.true;
            expect(text.node.textContent).to.equal('checkbox');
        });

        it('accepts type prop', () => {
            const checkbox = mount(<Checkbox type="button"/>);

            expect(checkbox.find('label').hasClass('checkbox_type_button')).to.be.true;
            expect(checkbox.find('button').hasClass('button_type_button')).to.be.true;
        });

        it('accepts name prop', () => {
            const checkbox = mount(<Checkbox type="button" name="foo">checkbox</Checkbox>);

            expect(checkbox.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const checkbox = mount(<Checkbox type="button" value="foo">checkbox</Checkbox>);

            //  FIXME: Почему тут не работает node.getAttribute('value')?
            expect(checkbox.find('input').node.value).to.equal('foo');
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

        it('accepts className prop', () => {
            const checkbox = shallow(<Checkbox type="button" className="my-checkbox not-my-checkbox">checkbox</Checkbox>);

            expect(checkbox.hasClass('my-checkbox')).to.be.true;
            expect(checkbox.hasClass('not-my-checkbox')).to.be.true;
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

            // FIXME(narqo@): `Control#setState({ focused: false })`
            /*
            checkbox.setState({ focused: false });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.false;
            */
        });

        it('reacts on DOM focus', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);
            const button = checkbox.find('button');

            button.simulate('focus');
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.true;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.true;
            expect(checkbox.find('button').hasClass('button_focused-hard')).to.be.true;

            button.simulate('blur');
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused-hard')).to.be.false;
        });

        it('removes focused if receives disabled', () => {
            const checkbox = mount(<Checkbox type="button" focused>checkbox</Checkbox>);

            checkbox.setProps({ disabled: true });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
            expect(checkbox.find('button').hasClass('button_focused')).to.be.false;
        });

        it('is hovered on mouseenter/mouseleave', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);
            const button = checkbox.find('button');

            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
            expect(checkbox.find('button').hasClass('button_hovered')).to.be.false;

            button.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.true;
            expect(checkbox.find('button').hasClass('button_hovered')).to.be.true;

            button.simulate('mouseleave');
            expect(checkbox.state('hovered')).to.be.false;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
            expect(checkbox.find('button').hasClass('button_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const checkbox = mount(<Checkbox type="button" disabled>checkbox</Checkbox>);
            const button = checkbox.find('button');

            button.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.not.be.ok;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
            expect(checkbox.find('button').hasClass('button_hovered')).to.be.false;
        });

        it('can be checked with space or enter if focused', () => {
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

            expect(spy.callCount).to.equal(4);
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
            const checkbox = mount(<Checkbox type="button" onCheck={spy} name="foo">checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.true;

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.false;

            expect(spy.callCount).to.equal(2);
            expect(spy.getCall(0).args[0]).to.be.true;
            expect(spy.getCall(1).args[0]).to.be.false;
        });

        it('onCheck receive props as a second argument', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" onCheck={spy} name="foo" bar="42">checkbox</Checkbox>);

            checkbox.find('button').simulate('mousedown');
            checkbox.find('button').simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
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

    describe('type is not set (checkbox)', () => {

        it('is a checkbox', () => {
            const checkbox = shallow(<Checkbox>checkbox</Checkbox>);

            expect(checkbox.is('.checkbox')).to.be.true;
        });

        it('has label', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            const label = checkbox.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('checkbox')).to.be.true;
        });

        it('has input', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            const input = checkbox.find('input');
            expect(input.length).to.equal(1);
            expect(input.hasClass('checkbox__control')).to.be.true;
            expect(input.node.getAttribute('type')).to.equal('checkbox');
        });

        it('has no button', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            const button = checkbox.find('button');
            expect(button.length).to.equal(0);
        });

        it('has text', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            const text = checkbox.find('span.checkbox__text');
            expect(text.length).to.equal(1);
            expect(text.node.textContent).to.equal('checkbox');
        });

        it('accepts type prop', () => {
            const checkbox = mount(<Checkbox type="foo"/>);

            expect(checkbox.find('label').hasClass('checkbox_type_foo')).to.be.true;
        });

        it('accepts name prop', () => {
            const checkbox = mount(<Checkbox name="foo">checkbox</Checkbox>);

            expect(checkbox.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const checkbox = mount(<Checkbox value="foo">checkbox</Checkbox>);

            //  FIXME: Почему тут не работает node.getAttribute('value')?
            expect(checkbox.find('input').node.value).to.equal('foo');
        });

        it('accepts theme prop', () => {
            const checkbox = mount(<Checkbox theme="foo">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_theme_foo')).to.be.true;
        });

        it('accepts size prop', () => {
            const checkbox = mount(<Checkbox size="foo">checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_size_foo')).to.be.true;
        });

        it('accepts className prop', () => {
            const checkbox = shallow(<Checkbox className="my-checkbox not-my-checkbox">checkbox</Checkbox>);

            expect(checkbox.hasClass('my-checkbox')).to.be.true;
            expect(checkbox.hasClass('not-my-checkbox')).to.be.true;
        });

        it('accepts disabled prop', () => {
            const checkbox = mount(<Checkbox disabled>checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.true;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.true;

            checkbox.setProps({ disabled: false });
            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.false;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it('accepts checked prop', () => {
            const checkbox = mount(<Checkbox checked>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.true;
            expect(checkbox.find('input').node.checked).to.be.true;

            checkbox.setProps({ checked: false });
            expect(checkbox.state('checked')).to.be.false;
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.false;
            expect(checkbox.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const checkbox = mount(<Checkbox focused>checkbox</Checkbox>);

            expect(checkbox.state('focused')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.true;

            checkbox.setState({ focused: false });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
        });

        it('accepts focus', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            checkbox.simulate('focus');
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.true;

            checkbox.simulate('blur');
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
        });

        it('removes focused if receives disabled', () => {
            const checkbox = mount(<Checkbox focused>checkbox</Checkbox>);

            checkbox.setProps({ disabled: true });
            expect(checkbox.find('label').hasClass('checkbox_focused')).to.be.false;
        });

        it('is hovered on mouseenter/mouseleave', () => {
            const checkbox = mount(<Checkbox>checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;

            checkbox.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.be.true;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.true;

            checkbox.simulate('mouseleave');
            expect(checkbox.state('hovered')).to.be.false;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.be.false;
        });

        it('can not be hovered if disabled', () => {
            const checkbox = mount(<Checkbox disabled>checkbox</Checkbox>);

            checkbox.simulate('mouseenter');
            expect(checkbox.state('hovered')).to.not.be.ok;
            expect(checkbox.find('label').hasClass('checkbox_hovered')).to.not.be.ok;
        });

        //  FIXME: Не работает чек с клавиатуры и мыши.
        //
        it.skip('can be checked with space or enter if focused', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox focused onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('input').simulate('keydown', { key: 'q' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.not.be.ok;
            checkbox.find('input').simulate('keydown', { key: ' ' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.be.true;
            checkbox.find('input').simulate('keydown', { key: ' ' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.be.false;

            checkbox.find('input').simulate('keydown', { key: 'Enter' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.be.true;
            checkbox.find('input').simulate('keydown', { key: 'Enter' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.be.false;

            expect(spy.callCount).to.equal(4);
            expect(spy.getCall(0).args[0]).to.be.true;
            expect(spy.getCall(1).args[0]).to.be.false;
            expect(spy.getCall(2).args[0]).to.be.true;
            expect(spy.getCall(3).args[0]).to.be.false;
        });

        it.skip('can not be checked with space if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox disabled onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('input').simulate('keydown', { key: ' ' });
            checkbox.find('input').simulate('keyup');
            expect(checkbox.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

        it.skip('can be checked with click', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox onCheck={spy}>checkbox</Checkbox>);

            expect(checkbox.state('checked')).to.not.be.ok;

            checkbox.find('input').simulate('mousedown');
            checkbox.find('input').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.true;

            checkbox.find('input').simulate('mousedown');
            checkbox.find('input').simulate('mouseup');
            expect(checkbox.state('checked')).to.be.false;

            expect(spy.callCount).to.equal(2);
            expect(spy.getCall(0).args[0]).to.be.true;
            expect(spy.getCall(1).args[0]).to.be.false;
        });

        it.skip('onCheck receive props as a second argument', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox onCheck={spy} name="foo" bar="42">checkbox</Checkbox>);

            checkbox.find('input').simulate('mousedown');
            checkbox.find('input').simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
        });

        //  FIXME: На самом деле это неправильный тест (хоть он и проходит),
        //  так как сейчас вообще никакие клики checked не меняют :(
        it.skip('can not be checked with click if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox disabled onCheck={spy}>checkbox</Checkbox>);

            checkbox.find('input').simulate('mousedown');
            checkbox.find('input').simulate('mouseup');
            expect(checkbox.state('checked')).to.not.be.ok;

            expect(spy.called).to.be.false;
        });

    });
});
