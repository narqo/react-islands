/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Component from './';

describe('Component', () => {
    describe('wrap()', () => {
        it('wraps every top-level child that is not a Component with a wrapper', () => {
            class TestComponent1 extends Component {
                render() {
                    return <span>123</span>;
                }
            }

            function TextComponent2({ children }) {
                const wrapped = Component.wrap(children, child => <b className="bar" key="wrappedText">{child}</b>);
                return (
                    <div>{wrapped}</div>
                );
            }

            const elem = shallow(<TextComponent2><TestComponent1 /><span>abc</span></TextComponent2>);
            expect(elem.childAt(0).type()).to.equal(TestComponent1);
            expect(elem.childAt(1).is('b.bar')).to.be.true;
            expect(elem.childAt(1).contains(<span>abc</span>)).to.be.true;
        });
    });

    describe('textValue()', () => {
        it('returns a string of the rendered text of the content from top-level children', () => {
            const elem = shallow(<div><b>$</b>123<span>abc</span> 99</div>);
            expect(Component.textValue(elem.get(0))).to.equal('123 99');
        });

        it('returns a string of the rendered text of the content from top-level children contain numbers', () => {
            function TestComponent() {
                return <div>{1999}</div>;
            }
            const elem = shallow(<TestComponent />);
            expect(Component.textValue(elem.get(0))).to.equal('1999');
        });
    });

    describe('is()', () => {
        it('returns true if an element is an instance of component class', () => {
            class TestComponent extends Component {
                render() {
                    return <span />;
                }
            }

            class TestReactComponent extends React.Component {
                render() {
                    return <span />;
                }
            }

            expect(Component.is('text', TestComponent)).to.be.false;

            const elem1 = shallow(<div><TestComponent /></div>);
            expect(Component.is(elem1.prop('children'), TestComponent)).to.be.true;

            const elem2 = shallow(<div><TestReactComponent /></div>);
            expect(Component.is(elem2.prop('children'), TestComponent)).to.be.false;

            const elem3 = shallow(<div />);
            expect(Component.is(elem3.get(0), TestComponent)).to.be.false;
        });
    });
});
