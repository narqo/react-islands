import React from 'react';

export function getControlContextTypes() {
    return {
        onControlMouseEnter: React.PropTypes.func.isRequired,
        onControlMouseLeave: React.PropTypes.func.isRequired,
        onControlFocus: React.PropTypes.func.isRequired,
        onControlBlur: React.PropTypes.func.isRequired,
    };
}
