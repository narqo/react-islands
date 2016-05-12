import React from 'react';
import Component from '../Component';

class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: !props.disabled && props.focused
        };

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    componentDidMount() {
        if (this.state.focused) {
            this.handleFocused();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.disabled === true) {
            this.setState({ focused: false });
        } else if (nextProps.focused !== this.state.focused && nextProps.focused === true) {
            //  FIXME: Нужно ли уметь менять focused через задание props'ов?
            this.setState({ focused: nextProps.focused });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // TODO(narqo@): sync DOM focus and `focused` on props reconciliation
        if (nextState.focused) {
            this.handleFocused();
        }
    }

    handleFocused() {
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
            if (this.props.focused || !this._mousePressed) {
                focused = 'hard';
            } else {
                focused = true;
            }
            this.setState({ focused });
            this.dispatchFocusChange(true);

            //  FIXME: А нужно ли это? Кажется да, а то в чекбоксе есть button и label,
            //  они оба подписаны на focus. И в итоге последним отработает label,
            //  что вроде неправильно.
            //  e.stopPropagation();
            //  e.preventDefault();
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
