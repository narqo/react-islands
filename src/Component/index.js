import React from 'react';

class Component extends React.Component {

}

Component.wrap = function(children, wrapper) {
    const wrapped = [];

    let chunk = null;
    React.Children.forEach(children, (child, i) => {
        if (Component.is(child, Component)) {
            if (chunk) {
                wrapped.push(wrapper(chunk));
                chunk = null;
            }
            if (child.key) {
                wrapped.push(child);
            } else {
                // FIXME(narqo@): had to add `key` in the runtime, after https://github.com/narqo/react-islands/pull/46
                wrapped.push(React.cloneElement(child, { key: `wrappedChild${i}` }));
            }
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
        } else if (typeof child === 'number') {
            text += String(child);
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
