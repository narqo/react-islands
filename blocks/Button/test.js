import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Button from './';

describe('Button', () => {
    it('is a button', () => {
        const button = shallow(<Button>button</Button>);

        expect(button.is('button.button')).to.equal(true);
    });

    it('handles "name" prop', () => {
        const button = shallow(<Button name="my-button">button</Button>);

        expect(button.prop('name')).to.equal('my-button');
    });

    it('handles "disabled" prop', () => {
        const button = shallow(<Button disabled>button</Button>);

        expect(button.prop('disabled')).to.equal(true);
        expect(button.hasClass('button_disabled')).to.equal(true);

        button.setProps({ disabled: false });

        expect(button.prop('disabled')).to.equal(false);
        expect(button.hasClass('button_disabled')).to.equal(false);
    });

    it('handles "focused" prop', () => {
        const button = shallow(<Button focused>button</Button>);

        expect(button.hasClass('button_focused')).to.equal(true);
    });

    it('removes "focused" on "disabled"', () => {
        const button = shallow(<Button focused>button</Button>);

        button.setProps({ disabled: true });

        expect(button.hasClass('button_focused')).to.equal(false);
    });

    describe('type link', () => {
        it('is a link if `type` is "link"', () => {
            const button = shallow(<Button type="link">button</Button>);

            expect(button.is('a.button')).to.equal(true);
            expect(button.prop('role')).to.equal('link');
        });

        it('has an "href" if url is set', () => {
            const button = shallow(
                <Button type="link" url="http://yandex.com">button</Button>
            );

            expect(button.prop('href')).to.equal('http://yandex.com');
        });

        it('doesn\'t have an "href" if disabled', () => {
            const button = shallow(
                <Button type="link" url="http://yandex.com" disabled>button</Button>
            );

            expect(button.prop('href')).to.equal(null);

            button.setProps({ disabled: false });

            expect(button.prop('href')).to.equal('http://yandex.com');
        });
    });

    it('reacts on click event', () => {
        const spy = sinon.spy();
        const button = mount(
            <Button onClick={spy}>button</Button>
        );

        button.find('.button')
            .simulate('mousedown')
            .simulate('mouseup');

        expect(spy.calledOnce).to.equal(true);
    });

    it('doesn\'t reacts on click event if disabled', () => {
        const spy = sinon.spy();
        const button = mount(
            <Button disabled onClick={spy}>button</Button>
        );

        button.find('.button')
            .simulate('mousedown')
            .simulate('mouseup');

        expect(spy.called).to.equal(false);
    });
});
