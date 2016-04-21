import Control from '../Control';

const KEY_SPACE = ' ';
const KEY_ENTER = 'Enter';

class Pressable extends Control {
    constructor(props) {
        super(props);

        this.state.pressed = false;

        this._isPointerPressInProgress = false;

        this.onClick = this.onClick.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        if (props.disabled === true) {
            this.setState({ pressed: false });
        }
    }

    getProps() {
        return Object.assign(
            super.getProps(),
            {
                onClick: this.onClick,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onKeyUp: this.onKeyUp,
                onKeyDown: this.onKeyDown
            }
        );
    }

    onMouseLeave() {
        this._isPointerPressInProgress = false;
        super.onMouseLeave();
        this.setState({ pressed: false });
    }

    onMouseDown(e) {
        super.onMouseDown(e);

        if (!this.props.disabled) {
            this._isPointerPressInProgress = true;
            this.setState({ pressed: true });
        }
    }

    onClick(e) {
        this._isPointerPressInProgress = false;

        if (this.state.disabled) {
            e.preventDefault();

        } else {
            this.props.onClick();
        }
    }

    onMouseUp(e) {
        super.onMouseUp(e);

        this._isPointerPressInProgress = false;
        if (this.state.pressed) {
            this.setState({ pressed: false });

            //  this.onClick();
        }
    }

    onFocus() {
        if (!this._isPointerPressInProgress) {
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

Pressable.defaultProps = {
    onClick() {}
};

export default Pressable;
