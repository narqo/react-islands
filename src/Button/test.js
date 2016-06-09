/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './';

chai.use(chaiEnzyme());

describe('Button', () => {
    it('is a button', () => {
        const button = shallow(<Button>button</Button>);

        expect(button).to.match('button.button');
    });

    it('accepts name prop', () => {
        const button = shallow(<Button name="my-button">button</Button>);

        expect(button).to.have.prop('name', 'my-button');
    });

    it('accepts view prop', () => {
        const button = shallow(<Button view="action">button</Button>);

        expect(button).to.have.className('button_view_action');
    });

    it('accepts className prop', () => {
        const button = shallow(<Button className="my-button">button</Button>);

        expect(button).to.have.className('my-button');
    });

    it('accepts checked prop', () => {
        const button = shallow(<Button checked>button</Button>);

        expect(button).to.have.className('button_checked');

        button.setProps({ checked: false });

        expect(button).to.not.have.className('button_checked');
    });

    it('accepts disabled prop', () => {
        const button = shallow(<Button disabled>button</Button>);

        expect(button).to.have.prop('disabled');
        expect(button).to.have.className('button_disabled');

        button.setProps({ disabled: false });

        expect(button).to.not.have.className('button_disabled');
    });

    it('accepts focused prop', () => {
        const button = shallow(<Button focused>button</Button>);

        expect(button).to.have.className('button_focused');
    });

    it('removes focused if receives disabled', () => {
        const button = shallow(<Button focused>button</Button>);

        button.setProps({ disabled: true });

        expect(button).to.not.have.className('button_focused');
    });

    describe('type', () => {
        it('accepts type prop', () => {
            const button = shallow(<Button type="submit">button</Button>);

            expect(button).to.have.className('button_type_submit');
            expect(button).to.have.prop('type', 'submit');
        });

        describe('type="link"', () => {
            it('is a link', () => {
                const button = shallow(<Button type="link">button</Button>);

                expect(button).to.match('a.button');
                expect(button).to.match('a.button_type_link');
                expect(button).to.have.prop('role', 'link');
            });

            it('has an href if has url prop', () => {
                const button = shallow(
                    <Button type="link" url="http://yandex.com">button</Button>
                );

                expect(button).to.have.prop('href', 'http://yandex.com');
            });

            it('does not have an href if initially disabled', () => {
                const button = shallow(
                    <Button type="link" url="http://yandex.com" disabled>button</Button>
                );

                expect(button).to.have.prop('href', null);
            });

            it('removes/restores href on being disabled/enabled', () => {
                const button = shallow(
                    <Button type="link" url="http://yandex.com">button</Button>
                );

                button.setProps({ disabled: true });
                expect(button).to.have.prop('href', null);

                button.setProps({ disabled: false });
                expect(button).to.have.prop('href', 'http://yandex.com');
            });
        });
    });

    describe('hoverable', () => {
        it('is hovered on mouseenter/mouseleave', () => {
            const button = shallow(<Button>button</Button>);

            button.simulate('mouseenter');
            expect(button).to.have.state('hovered', true);
            expect(button).to.have.className('button_hovered');

            button.simulate('mouseleave');
            expect(button).to.have.state('hovered', false);
            expect(button).to.not.have.className('button_hovered');
        });

        it('can not be hovered if disabled', () => {
            const button = shallow(<Button disabled>button</Button>);

            button.simulate('mouseenter');
            expect(button.state('hovered')).to.not.be.ok;
        });
    });

    describe('pressable', () => {
        it('is pressed on mousedown/mouseup', () => {
            const button = shallow(<Button>button</Button>);

            simulateEvent(button, 'mousedown', { button: 0 });
            expect(button).to.have.state('pressed', true);
            expect(button).to.have.className('button_pressed');

            simulateEvent(button, 'mouseup', { button: 0 });
            expect(button).to.have.state('pressed', false);
            expect(button).to.not.have.className('button_pressed');
        });

        it('is pressed on keydown with space or enter if focused', () => {
            const button = shallow(<Button focused>button</Button>);

            expect(button.state('pressed')).to.not.be.ok;

            simulateEvent(button, 'keydown', { key: 'q' });
            expect(button.state('pressed')).to.not.be.ok;
            simulateEvent(button, 'keyup');

            simulateEvent(button, 'keydown', { key: ' ' });
            expect(button.state('pressed')).to.be.true;
            simulateEvent(button, 'keyup');
            expect(button.state('pressed')).to.not.be.ok;

            simulateEvent(button, 'keydown', { key: 'Enter' });
            expect(button.state('pressed')).to.be.true;
            simulateEvent(button, 'keyup');
            expect(button.state('pressed')).to.not.be.ok;
        });

        it('can not be pressed if disabled', () => {
            const button = shallow(<Button disabled>button</Button>);

            simulateEvent(button, 'mousedown');
            expect(button.state('pressed')).to.not.be.ok;

            simulateEvent(button, 'keydown', { key: ' ' });
            expect(button.state('pressed')).to.not.be.ok;

            simulateEvent(button, 'keydown', { key: 'Enter' });
            expect(button.state('pressed')).to.not.be.ok;
        });

        it('reacts on keydown, keyup if focused', () => {
            const spy1 = sinon.spy();
            const spy2 = sinon.spy();
            const button = shallow(
                <Button focused onKeyDown={spy1} onKeyUp={spy2}>button</Button>
            );

            simulateEvent(button, 'keydown', { key: 'LeftArrow' });
            expect(spy1.calledOnce).to.be.true;
            expect(spy1.calledWithMatch({ key: 'LeftArrow' })).to.be.true;

            simulateEvent(button, 'keyup', { key: 'LeftArrow' });
            expect(spy2.calledOnce).to.be.true;
            expect(spy2.calledWithMatch({ key: 'LeftArrow' })).to.be.true;
        });

        it('does not reacts on keydown, keyup if disabled', () => {
            const spy1 = sinon.spy();
            const spy2 = sinon.spy();
            const button = shallow(
                <Button disabled onKeyDown={spy1} onKeyUp={spy2}>button</Button>
            );

            simulateEvent(button, 'keydown', { key: 'LeftArrow' });
            expect(spy1.called).to.be.false;

            simulateEvent(button, 'keyup', { key: 'LeftArrow' });
            expect(spy2.called).to.be.false;
        });

        it('reacts on keypress', () => {
            const spy = sinon.spy();
            const button = shallow(
                <Button onKeyPress={spy}>button</Button>
            );

            simulateEvent(button, 'keypress', { key: 'q' });
            expect(spy.calledOnce).to.be.true;
            expect(spy.calledWithMatch({ key: 'q' })).to.be.true;
        });
    });

    describe('click', () => {
        it('reacts on left button click', () => {
            const spy = sinon.spy();
            const onClickHandler = event => {
                expect(event.type).to.equal('click');
                spy();
            };
            const button = shallow(
                <Button onClick={onClickHandler}>button</Button>
            );

            simulateEvent(button, 'mousedown', { button: 0 });
            simulateEvent(button, 'mouseup');

            expect(spy.calledOnce).to.be.true;
        });

        it('does not reacts if clicked by button other than left', () => {
            const spy = sinon.spy();
            const button = shallow(
                <Button onClick={spy}>button</Button>
            );

            simulateEvent(button, 'mousedown', { button: 1 });
            simulateEvent(button, 'mouseup');

            expect(spy.called).to.not.be.true;
        });

        it('reacts on keypress by enter or space', () => {
            const spy = sinon.spy();
            const button = shallow(
                <Button onClick={spy} focused>button</Button>
            );

            simulateEvent(button, 'keydown', { key: 'Enter' });
            simulateEvent(button, 'keyup');

            expect(spy.calledOnce).to.be.true;

            simulateEvent(button, 'keydown', { key: ' ' });
            simulateEvent(button, 'keyup');

            expect(spy.calledTwice).to.be.true;
        });

        it('does not react on click if disabled', () => {
            const spy = sinon.spy();
            const button = shallow(
                <Button disabled onClick={spy}>button</Button>
            );

            simulateEvent(button, 'mousedown', { button: 0 });
            simulateEvent(button, 'mouseup');

            expect(spy.called).to.be.false;
        });
    });
});

const simulateEvent = (target, type, args) => {
    const eventData = {
        type,
        isDefaultPrevented() {},
        preventDefault() {},
        ...args,
    };
    target.simulate(type, eventData);
};
