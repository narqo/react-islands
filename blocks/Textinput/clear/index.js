import React from 'react';
import bem from 'b_';
import style from './style.css';

export default function(props) {
    const className = bem('input', 'clear', { visible: props.visible });
    return <i className={className} onClick={props.onClick}/>;
}
