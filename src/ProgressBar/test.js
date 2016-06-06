/* eslint-env mocha */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';

import ProgressBar from './';

chai.use(chaiEnzyme());

describe('ProgressBar', () => {
    it('is renders to proper html', () => {
        const progressBar = shallow(<ProgressBar />);

        expect(progressBar).to.match('div.progressbar');
        expect(progressBar).to.have.prop('role', 'progressbar');
    });

    it('accepts theme prop', () => {
        const progressBar = shallow(<ProgressBar theme="islands" />);

        expect(progressBar).to.match('div.progressbar_theme_islands');
    });

    it('accepts className prop', () => {
        const progressBar = shallow(<ProgressBar className="my-progressBar" theme="islands" />);

        expect(progressBar).to.match('div.progressbar_theme_islands.my-progressBar');
    });

    it('accepts value prop', () => {
        const progressBar = shallow(<ProgressBar value={13} />);

        expect(progressBar).to.have.prop('aria-valuenow', '13%');
        expect(progressBar.find('.progressbar__bar')).to.have.style('width', '13%');
    });

    it('has value 0 by default', () => {
        const progressBar = shallow(<ProgressBar />);

        expect(progressBar.find('.progressbar__bar')).to.have.style('width', '0%');
    });
});
