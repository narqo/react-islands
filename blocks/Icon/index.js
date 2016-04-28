import React from 'react';

function Icon(props) {
    if (props.url) {
        return (
            <span className={className(props)} style={{
                backgroundImage: `url(${props.url})`
            }}>
            </span>
        );
    } else {
        return (
            <span className={className(props)}>
                {props.children}
            </span>
        );
    }
}

function className(props) {
    var className = 'icon';

    if (props.className) {
        className += ' ' + props.className;
    }

    return className;
}

Icon.propTypes = {
    url: React.PropTypes.string
};

export default Icon;
