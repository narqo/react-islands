/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import Checkbox from './';

chai.use(sinonChai);
chai.use(chaiEnzyme());

describe('Checkbox', () => {
    describe('no type (type=checkbox)', () => {
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

        it('accepts id prop', () => {
            const checkbox = shallow(<Checkbox id="my-checkbox">checkbox</Checkbox>);

            expect(checkbox.find('input')).to.have.id('my-checkbox');
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

            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.true;
            expect(checkbox.find('input').node.checked).to.be.true;

            checkbox.setProps({ checked: false });
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.false;
            expect(checkbox.find('input').node.checked).to.be.false;
        });

        it('accepts focused prop', () => {
            const checkbox = mount(<Checkbox focused>checkbox</Checkbox>);

            expect(checkbox.state('focused')).to.be.ok;
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

        it('calls onCheck on input change', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox checked={false} onCheck={spy} name="foo">checkbox</Checkbox>);

            checkbox.find('input').simulate('change');

            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall).to.have.been.calledWithMatch(true, { name: 'foo' });

            checkbox.setProps({ checked: true });
            checkbox.find('input').simulate('change');

            expect(spy).to.have.been.calledTwice;
            expect(spy.lastCall).to.have.been.calledWith(false);
        });

        it('does not call onCheck if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox onCheck={spy} disabled>checkbox</Checkbox>);

            checkbox.find('input').simulate('change');

            expect(spy).to.not.have.been.called;
        });
    });

    describe('type="button"', () => {
        it('is a checkbox', () => {
            const checkbox = shallow(<Checkbox type="button">checkbox</Checkbox>);

            expect(checkbox.is('.checkbox')).to.be.true;
        });

        it('is a button', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            const button = checkbox.find('button');
            expect(button.length).to.equal(1);
            expect(button.hasClass('button')).to.be.true;

            const text = button.find('span');
            expect(text.hasClass('button__text')).to.be.true;
            expect(text.node.textContent).to.equal('checkbox');
        });

        it('has label', () => {
            const checkbox = mount(<Checkbox type="button">checkbox</Checkbox>);

            const label = checkbox.find('label');
            expect(label.length).to.equal(1);
            expect(label.hasClass('checkbox')).to.be.true;
        });

        it('accepts type prop', () => {
            const checkbox = mount(<Checkbox type="button"/>);

            expect(checkbox.find('label').hasClass('checkbox_type_button')).to.be.true;
            expect(checkbox.find('button').hasClass('button_type_button')).to.be.true;
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

        it('accepts checked prop', () => {
            const checkbox = mount(<Checkbox type="button" checked>checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.true;
            expect(checkbox.find('button').hasClass('button_checked')).to.be.true;
            expect(checkbox.find('input').length).to.equal(1);

            checkbox.setProps({ checked: false });
            expect(checkbox.find('label').hasClass('checkbox_checked')).to.be.false;
            expect(checkbox.find('button').hasClass('button_checked')).to.be.false;
            expect(checkbox.find('input').length).to.equal(0);
        });

        it('accepts name prop', () => {
            const checkbox = mount(<Checkbox type="button" name="foo" checked>checkbox</Checkbox>);

            expect(checkbox.find('input').node.getAttribute('name')).to.equal('foo');
        });

        it('accepts value prop', () => {
            const checkbox = mount(<Checkbox type="button" value="foo" checked>checkbox</Checkbox>);

            expect(checkbox.find('input').node.value).to.equal('foo');
        });

        it('accepts disabled prop', () => {
            const checkbox = mount(<Checkbox type="button" checked disabled>checkbox</Checkbox>);

            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.true;
            expect(checkbox.find('button').hasClass('button_disabled')).to.be.true;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.true;

            checkbox.setProps({ disabled: false });
            expect(checkbox.find('label').hasClass('checkbox_disabled')).to.be.false;
            expect(checkbox.find('button').hasClass('button_disabled')).to.be.false;
            expect(checkbox.find('input').node.hasAttribute('disabled')).to.be.false;
        });

        it('accepts focused prop', () => {
            const checkbox = mount(<Checkbox type="button" focused>checkbox</Checkbox>);

            expect(checkbox.state('focused')).to.be.ok;
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

        it('calls onCheck handler on space / enter press if focused', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" focused onCheck={spy}>checkbox</Checkbox>);

            //  FIXME: А как-то тут не в button можно тыкать? В сам checkbox, например?
            //
            const button = checkbox.find('button');
            button.simulate('keydown', { key: 'q' });
            button.simulate('keyup');
            expect(spy.called).to.be.false;

            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');
            expect(spy.calledOnce).to.be.true;
            expect(spy.lastCall).to.have.been.calledWith(true);

            checkbox.setProps({ checked: true });

            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');
            expect(spy).to.have.been.calledTwice;
            expect(spy.lastCall).to.have.been.calledWith(false);

            checkbox.setProps({ checked: false });

            button.simulate('keydown', { key: 'Enter' });
            button.simulate('keyup');
            expect(spy).to.have.been.calledThrice;
            expect(spy.lastCall).to.have.been.calledWith(true);
        });

        it('does not call onCheck on space / enter press if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" focused disabled onCheck={spy}>checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('keydown', { key: ' ' });
            button.simulate('keyup');
            expect(spy).to.not.have.been.called;

            button.simulate('keydown', { key: 'Enter' });
            button.simulate('keyup');
            expect(spy).to.not.have.been.called;
        });

        it('calls onClick on button click', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" onClick={spy} name="foo">checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.have.been.called;
        });

        it('calls onCheck on button click', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" onCheck={spy} name="foo">checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.have.been.calledOnce;
            expect(spy.lastCall).to.have.been.calledWith(true);

            checkbox.setProps({ checked: true });

            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.have.been.calledTwice;
            expect(spy.lastCall).to.have.been.calledWith(false);
        });

        it('does not call onCheck if onClick default prevented', () => {
            const spy = sinon.spy();
            const onClick = e => e.preventDefault();
            const checkbox = mount(<Checkbox type="button" onClick={onClick} onCheck={spy} name="foo">checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.not.have.been.called;
        });

        it('passes props to onCheck as a second argument', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" onCheck={spy} name="foo" bar="42">checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');

            expect(spy.getCall(0).args[1].name).to.equal('foo');
            expect(spy.getCall(0).args[1].bar).to.equal('42');
        });

        it('does not call onCheck on button click if disabled', () => {
            const spy = sinon.spy();
            const checkbox = mount(<Checkbox type="button" disabled onCheck={spy}>checkbox</Checkbox>);

            const button = checkbox.find('button');
            button.simulate('mousedown', { button: 0 });
            button.simulate('mouseup');
            expect(spy).to.not.have.been.called;
        });
    });
});
