import Component from '../Component';

class Control extends Component {

    constructor(props) {
        super(props);

        //  Прокидываем focused из props в state только в начале.
        //  А в componentWillReceiveProps это уже не нужно.
        this.state = {
            ...this.state,
            focused: !props.disabled && props.focused
        };

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    componentDidMount() {
        if (this.state.focused && this.refs.control) {
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
            onMouseLeave: this.onMouseLeave
        };
    }

    onMouseDown() {
        this._mousePressed = true;
    }

    onMouseUp() {
        this._mousePressed = false;
    }

    onFocus() {
        if (!this.props.disabled) {
            var focused;
            if (this.props.focused) {
                focused = true;

            } else {
                focused = (this._mousePressed) ? true : 'hard';
            }
            this.setState({ focused });

            //  FIXME: А нужно ли это? Кажется да, а то в чекбоксе есть button и label,
            //  они оба подписаны на focus. И в итоге последним отработает label,
            //  что вроде неправильно.
            //  e.stopPropagation();
            //  e.preventDefault();
        }
    }

    onBlur() {
        this._focusedByMouse = false;
        if (!this.props.disabled) {
            this.setState({ focused: false });

            //  e.stopPropagation();
            //  e.preventDefault();
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

}

export default Control;

