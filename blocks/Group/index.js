import React from 'react';
import Component from '../Component';

class Group extends Component {}

Group.propTypes = {
    disabled: React.PropTypes.bool,
    title: React.PropTypes.any,
};

export default Group;
