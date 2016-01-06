import React from 'react';
import classNames from 'classnames';
import style from './style.css';

export default function(props) {
    var className = classNames(
        style.clear,
        {
            [style.visible]: props.visible
        }
    );
    return <i className={className} onClick={props.onClick}/>;
}
