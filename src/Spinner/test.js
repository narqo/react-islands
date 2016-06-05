/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import Spinner from './';

chai.use(chaiEnzyme());

describe('Spinner', () => {
    it('is renders to proper html', () => {
        const spinner = shallow(<Spinner />);

        expect(spinner).to.match('span.spin');
    });

    it('accepts theme prop', () => {
        const spinner = shallow(<Spinner theme="islands" />);

        expect(spinner).to.match('span.spin_theme_islands');
    });

    it('accepts size prop', () => {
        const spinner = shallow(<Spinner theme="islands" size="s" />);

        expect(spinner).to.match('span.spin_size_s');
    });

    it('accepts className prop', () => {
        const spinner = shallow(<Spinner className="my-spinner" theme="islands" size="s" />);

        expect(spinner).to.match('span.spin_theme_islands.my-spinner');
    });
});
