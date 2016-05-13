import React from 'react';
import Component from '../Component';

// TODO(narqo@): invariant for the case when `onFocusChange` present but `focused` is absent

class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: !props.disabled && props.focused
        };

        this._mousePressed = false;

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        if (this.state.focused) {
            this.componentWillGainFocus();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.disabled === true) {
            this.setState({ focused: false });
        } else if (nextProps.focused !== this.state.focused && nextProps.focused === true) {
            this.setState({ focused: nextProps.focused });
        }
    }

    componentDidUpdate() {
        if (this.state.focused) {
            this.componentWillGainFocus();
        }
    }

    componentWillGainFocus() {
        if (this.refs.control) {
            this.refs.control.focus();
        }
    }

    getControlHandlers() {
        return {
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
        };
    }

    dispatchFocusChange(focused) {
        if (typeof this.props.onFocusChange === 'function') {
            this.props.onFocusChange(focused);
        }
    }

    onMouseEnter() {
        if (!this.props.disabled) {
            this.setState({ hovered: true });
        }
    }

    onMouseLeave() {
        this.setState({ hovered: false });
    }

    onMouseDown() {
        this._mousePressed = true;
    }

    onMouseUp() {
        this._mousePressed = false;
    }

    onFocus() {
        if (!this.props.disabled) {
            let focused;
            // if focus wasn't set by mouse set focused state to "hard"
            if (!this._mousePressed) {
                focused = 'hard';
            } else {
                focused = true;
            }
            this.setState({ focused });
            this.dispatchFocusChange(true);
        }
    }

    onBlur() {
        this.setState({ focused: false });
        this.dispatchFocusChange(false);
    }
}

Control.propTypes = {
    onFocusChange: React.PropTypes.func,
};

export default Control;
