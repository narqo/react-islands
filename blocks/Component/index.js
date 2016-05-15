import React from 'react';

class Component extends React.Component {

}

Component.wrap = function(children, wrapper) {
    var wrapped = [];

    var chunk = null;
    React.Children.forEach(children, child => {
        if (Component.is(child, Component)) {
            if (chunk) {
                wrapped.push(wrapper(chunk));
                chunk = null;
            }
            wrapped.push(child);

        } else if (chunk) {
            chunk.push(child);

        } else {
            chunk = [child];
        }
    });
    if (chunk) {
        wrapped.push(wrapper(chunk));
    }

    return wrapped;
};

Component.textValue = function(component) {
    let text = '';
    React.Children.forEach(component.props.children, child => {
        if (typeof child === 'string') {
            text += child;
        }
    });
    return text;
};

Component.is = function(obj, ctor) {
    return (
        React.isValidElement(obj) && (
            obj.type === ctor ||
            obj.type.prototype instanceof ctor
        )
    );
};

export default Component;
