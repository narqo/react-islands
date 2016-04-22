const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

const pressable = Class => class extends Class {
    constructor(...args) {
        super(...args);

        this.state = {
            ...this.state,
            pressed: false
        };

        this.onClick = this.onClick.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentWillReceiveProps(props) {
        if (super.componentWillReceiveProps) {
            super.componentWillReceiveProps(props);
        }

        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
    }

    getControlHandlers() {
        return {
            ...super.getControlHandlers(),
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown
        };
    }

    onMouseLeave() {
        super.onMouseLeave();
        this.setState({ pressed: false });
    }

    onMouseDown(e) {
        super.onMouseDown(e);

        if (!this.props.disabled) {
            this.setState({ pressed: true });
        }
    }

    onMouseUp(e) {
        super.onMouseUp(e);

        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.onClick();
        }
    }

    onClick() {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    onFocus() {
        if (!this.state.pressed) {
            super.onFocus();
        }
    }

    onKeyDown(e) {
        if (this.props.disabled || !this.state.focused) {
            return;
        }
        if (e.key === KEY_SPACE || e.key === KEY_ENTER) {
            this.setState({ pressed: true });
        }
    }

    onKeyUp() {
        if (this.state.pressed && this.state.focused) {
            this.setState({ pressed: false });
            this.onClick();
        }
    }
}

export default pressable;
