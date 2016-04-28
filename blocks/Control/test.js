import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Control from './';

describe('Control', () => {
    class TestControl extends Control {
        render() {
            return <div><input ref="control"/></div>;
        }
    }

    it('sets DOM focus if mounted with focused prop', () => {
        const control = mount(<TestControl focused />);

        expect(control.state('focused')).to.be.true;
        expect(ReactDOM.findDOMNode(control.instance()).contains(document.activeElement)).to.be.true;
    });

    it('doesn\'t set DOM focus if mounted with focused and disabled props', () => {
        const control = mount(<TestControl disabled focused />);

        expect(control.state('focused')).to.be.false;
        expect(ReactDOM.findDOMNode(control.instance()).contains(document.activeElement)).to.be.false;
    });

    it.skip('sets focused state if receives focused', () => {
        const control = mount(<TestControl />);

        expect(control.state('focused')).to.not.be.ok;

        // TODO: control.setProps({ focused })
        control.setProps({ focused: true });
        expect(control.state('focused')).to.be.true;
    });

    it('sets DOM focus if receives focused state', () => {
        const control = mount(<TestControl />);

        expect(control.setState({ focused: true }));
        expect(ReactDOM.findDOMNode(control.instance()).contains(document.activeElement)).to.be.true;
    });

    it('removes focused state if receives disabled', () => {
        const control = mount(<TestControl focused />);

        control.setProps({ disabled: true });
        expect(control.state('focused')).to.not.be.ok;
    });
});
