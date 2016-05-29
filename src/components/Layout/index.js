import React from 'react';

function Layout({ children }) {
    return <div className="layout">{children}</div>;
}

function LayoutCell({ title, children }) {
    return (
        <div className="layout__cell">
            <header className="docs">{title}</header>
            {children}
        </div>
    );
}

export {
    Layout,
    LayoutCell,
};
