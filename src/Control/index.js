import React from 'react';
import warning from 'warning';
import Component from '../Component';

var didWarnFocusChangedFocused = false;

class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: !props.disabled && props.focused,
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
        if (
            !didWarnFocusChangedFocused &&
            this.props.focused !== undefined &&
            this.props.onFocusChange === undefined
        ) {
            warning(
                false,
                'A Control has `focused` prop, but doesn\'t have `onFocusChange` listener. ' +
                'This may lead to unwanted behaviour, when component kept being focused after ' +
                're-rendering of the top component.'
            );
            didWarnFocusChangedFocused = true;
        }
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
            this.props.onFocusChange(focused, this.props);
        }
    }

    dispatchHoverChange(hovered) {
        if (typeof this.props.onHoverChange === 'function') {
            this.props.onHoverChange(hovered, this.props);
        }
    }

    onMouseEnter() {
        if (!this.props.disabled) {
            this.setState({ hovered: true });
            this.dispatchHoverChange(true);
        }
    }

    onMouseLeave() {
        this.setState({ hovered: false });
        this.dispatchHoverChange(false);
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
            this.dispatchFocusChange(focused);
        }
    }

    onBlur() {
        this.setState({ focused: false });
        this.dispatchFocusChange(false);
    }
}

Control.propTypes = {
    disabled: React.PropTypes.bool,
    focused: React.PropTypes.bool,
    onFocusChange: React.PropTypes.func,
    onHoverChange: React.PropTypes.func,
};

export default Control;
