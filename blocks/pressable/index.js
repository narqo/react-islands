const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

const pressable = BaseComponent => class extends BaseComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            ...this.state,
            pressed: false,
        };

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    /** @override */
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
            onKeyDown: this.onKeyDown,
            onKeyPress: this.props.onKeyPress,
        };
    }

    dispatchClick() {
        if (this.props.onClick) {
            this.props.onClick(this.props);
        }
    }

    /** @override */
    onMouseLeave() {
        super.onMouseLeave();
        this.setState({ pressed: false });
    }

    /** @override */
    onMouseDown(e) {
        super.onMouseDown(e);
        if (!this.props.disabled) {
            this.setState({ pressed: true });
        }
    }

    /** @override */
    onMouseUp(e) {
        super.onMouseUp(e);
        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.dispatchClick();
        }
    }

    /** @override */
    onFocus() {
        if (!this.state.pressed) {
            super.onFocus();
        }
    }

    /** @override */
    onKeyDown(e) {
        if (this.props.disabled || !this.state.focused) {
            return;
        }
        if (e.key === KEY_SPACE || e.key === KEY_ENTER) {
            this.setState({ pressed: true });
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e, this.props);
        }
    }

    /** @override */
    onKeyUp(e) {
        if (!this.state.focused) {
            return
        }
        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.dispatchClick();

        }
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e, this.props);
        }
    }
};

export default pressable;
