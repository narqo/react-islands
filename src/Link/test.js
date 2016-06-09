/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Link from './';

chai.use(chaiEnzyme());

describe('Link', () => {
    it('is an anchor', () => {
        const link = shallow(<Link url="http://yandex.ru">link</Link>);

        expect(link).to.match('a.link');
    });

    it('has href prop', () => {
        const link = shallow(<Link url="http://yandex.ru">link</Link>);

        expect(link).to.have.prop('href', 'http://yandex.ru');
    });

    it('accepts title prop', () => {
        const link = shallow(<Link url="http://yandex.ru" title="my link">link</Link>);

        expect(link).to.have.prop('title', 'my link');
    });

    it('accepts type prop', () => {
        const link = shallow(<Link url="http://yandex.ru" type="pseudo">link</Link>);

        expect(link).to.have.className('link_type_pseudo');
    });

    it('accepts className prop', () => {
        const link = shallow(<Link className="my-link" url="http://yandex.ru">link</Link>);

        expect(link).to.have.className('my-link');
    });

    it('accepts disabled prop', () => {
        const link = shallow(<Link url="http://yandex.ru" disabled>link</Link>);

        expect(link).to.have.className('link_disabled');

        link.setProps({ disabled: false });

        expect(link).to.not.have.className('link_disabled');
    });

    it('does not have an href if initially disabled', () => {
        const link = shallow(<Link url="http://yandex.ru" disabled>link</Link>);

        expect(link).to.have.prop('href', null);
    });

    it('removes/restores href on being disabled/enabled', () => {
        const link = shallow(<Link url="http://yandex.ru">link</Link>);

        link.setProps({ disabled: true });
        expect(link).to.have.prop('href', null);

        link.setProps({ disabled: false });
        expect(link).to.have.prop('href', 'http://yandex.ru');
    });

    it('accepts focused prop', () => {
        const link = shallow(<Link url="http://yandex.ru" focused>link</Link>);

        expect(link).to.have.className('link_focused');
    });

    it('removes focused if receives disabled', () => {
        const link = shallow(<Link url="http://yandex.ru">link</Link>);

        link.setProps({ disabled: true });

        expect(link).to.not.have.className('link_focused');
    });

    describe('pseudo', () => {
        it('is a span', () => {
            const link = shallow(<Link>link</Link>);

            expect(link).to.match('span.link');
            expect(link).to.have.prop('role', 'button');
        });

        it('is focusable', () => {
            const link = shallow(<Link>link</Link>);

            expect(link).to.have.prop('tabIndex', 0);
        });

        it('is not focusable if disabled', () => {
            const link = shallow(<Link disabled>link</Link>);

            expect(link).to.have.prop('tabIndex', -1);

            link.setProps({ disabled: false });
            expect(link).to.have.prop('tabIndex', 0);
        });
    });

    describe('hoverable', () => {
        it('is hovered on mouseenter/mouseleave', () => {
            const link = shallow(<Link url="http://yandex.ru">link</Link>);

            link.simulate('mouseenter');
            expect(link).to.have.state('hovered', true);
            expect(link).to.have.className('link_hovered');

            link.simulate('mouseleave');
            expect(link).to.have.state('hovered', false);
            expect(link).to.not.have.className('link_hovered');
        });

        it('can not be hovered if disabled', () => {
            const link = shallow(<Link url="http://yandex.ru" disabled>link</Link>);

            link.simulate('mouseenter');
            expect(link.state('hovered')).to.not.be.ok;
        });
    });

    describe('pressable', () => {
        it('is pressed on mousedown/mouseup', () => {
            const link = shallow(<Link url="http://yandex.ru">link</Link>);

            simulateEvent(link, 'mousedown', { button: 0 });
            expect(link).to.have.state('pressed', true);

            simulateEvent(link, 'mouseup', { button: 0 });
            expect(link).to.have.state('pressed', false);
        });

        it('is pressed on keydown with enter if focused', () => {
            const link = shallow(<Link url="http://yandex.ru" focused>link</Link>);

            expect(link.state('pressed')).to.not.be.ok;

            simulateEvent(link, 'keydown', { key: 'q' });
            expect(link.state('pressed')).to.not.be.ok;
            simulateEvent(link, 'keyup');

            simulateEvent(link, 'keydown', { key: ' ' });
            expect(link.state('pressed')).to.be.true;
            simulateEvent(link, 'keyup');
            expect(link.state('pressed')).to.not.be.ok;

            simulateEvent(link, 'keydown', { key: 'Enter' });
            expect(link.state('pressed')).to.be.true;
            simulateEvent(link, 'keyup');
            expect(link.state('pressed')).to.not.be.ok;
        });

        it('can not be pressed if disabled', () => {
            const link = shallow(<Link url="http://yandex.ru" disabled>link</Link>);

            simulateEvent(link, 'mousedown', { button: 0 });
            expect(link.state('pressed')).to.not.be.ok;

            simulateEvent(link, 'keydown', { key: ' ' });
            expect(link.state('pressed')).to.not.be.ok;

            simulateEvent(link, 'keydown', { key: 'Enter' });
            expect(link.state('pressed')).to.not.be.ok;
        });

        it('reacts on keydown, keyup if focused', () => {
            const spy1 = sinon.spy();
            const spy2 = sinon.spy();
            const link = shallow(
                <Link focused onKeyDown={spy1} onKeyUp={spy2}>link</Link>
            );

            simulateEvent(link, 'keydown', { key: 'LeftArrow' });
            expect(spy1.calledOnce).to.be.true;
            expect(spy1.calledWithMatch({ key: 'LeftArrow' })).to.be.true;

            simulateEvent(link, 'keyup', { key: 'LeftArrow' });
            expect(spy2.calledOnce).to.be.true;
            expect(spy2.calledWithMatch({ key: 'LeftArrow' })).to.be.true;
        });

        it('does not reacts on keydown, keyup if disabled', () => {
            const spy1 = sinon.spy();
            const spy2 = sinon.spy();
            const link = shallow(
                <Link disabled onKeyDown={spy1} onKeyUp={spy2}>link</Link>
            );

            simulateEvent(link, 'keydown', { key: 'LeftArrow' });
            expect(spy1.called).to.be.false;

            simulateEvent(link, 'keyup', { key: 'LeftArrow' });
            expect(spy2.called).to.be.false;
        });

        it('reacts on keypress', () => {
            const spy = sinon.spy();
            const link = shallow(<Link onKeyPress={spy}>link</Link>);

            simulateEvent(link, 'keypress', { key: 'q' });
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
            const link = shallow(<Link onClick={onClickHandler}>button</Link>);

            simulateEvent(link, 'mousedown', { button: 0 });
            simulateEvent(link, 'mouseup');

            expect(spy.calledOnce).to.be.true;
        });

        it('does not reacts if clicked by button other than left', () => {
            const spy = sinon.spy();
            const link = shallow(<Link onClick={spy}>button</Link>);

            simulateEvent(link, 'mousedown', { button: 1 });
            simulateEvent(link, 'mouseup');

            expect(spy.called).to.not.be.true;
        });

        it('reacts on keypress by enter or space', () => {
            const spy = sinon.spy();
            const link = shallow(<Link onClick={spy} focused>button</Link>);

            simulateEvent(link, 'keydown', { key: 'Enter' });
            simulateEvent(link, 'keyup');

            expect(spy.calledOnce).to.be.true;

            simulateEvent(link, 'keydown', { key: ' ' });
            simulateEvent(link, 'keyup');

            expect(spy.calledTwice).to.be.true;
        });

        it('does not react on click if disabled', () => {
            const spy = sinon.spy();
            const link = shallow(<Link disabled onClick={spy}>button</Link>);

            simulateEvent(link, 'mousedown', { button: 0 });
            simulateEvent(link, 'mouseup');

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
