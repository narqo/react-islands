const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

const pressable = BaseComponent => class extends BaseComponent {
    constructor(...args) {
        super(...args);

        this.state = {
            ...this.state,
            pressed: false,
        };

        this.shouldPrevenDefaultClick = false;

        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
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
            onClick: this.onClick,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            onKeyPress: this.props.onKeyPress,
        };
    }

    dispatchClick(e) {
        if (this.props.onClick) {
            this.shouldPrevenDefaultClick = false;

            const eventType = e.type;

            e.type = 'click';
            this.props.onClick(e, this.props);
            e.type = eventType;

            if (e.isDefaultPrevented()) {
                this.shouldPrevenDefaultClick = true;
            }
        }
    }

    /** @override */
    onMouseLeave() {
        if (super.onMouseLeave) {
            super.onMouseLeave();
        }
        this.setState({ pressed: false });
    }

    /** @override */
    onMouseDown(e) {
        if (super.onMouseDown) {
            super.onMouseDown(e);
        }
        if (!this.props.disabled && e.button === 0) {
            this.setState({ pressed: true });
        }
    }

    /** @override */
    onMouseUp(e) {
        if (super.onMouseUp) {
            super.onMouseUp(e);
        }
        if (this.state.pressed) {
            this.setState({ pressed: false });
            this.dispatchClick(e);
        }
    }

    /** @override */
    onFocus() {
        if (!this.state.pressed && super.onFocus) {
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
            this.dispatchClick(e);
        }
        if (this.props.onKeyUp) {
            this.props.onKeyUp(e, this.props);
        }
    }

    /** @override */
    onClick(e) {
        if (this.shouldPrevenDefaultClick) {
            e.preventDefault();
        }
        if (super.onClick) {
            super.onClick(e);
        }
    }
};

export default pressable;
