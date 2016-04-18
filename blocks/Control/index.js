import Component from '../Component';

class Control extends Component {

    constructor(props) {
        super(props);

        this._propsToState(props);

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    _propsToState(props) {
        Object.assign(this.state, {
            focused: !props.disabled && props.focused
        });
    }

    componentWillReceiveProps(props) {
        this._propsToState(props);
    }

    componentDidUpdate(prevProps) {
        if (this.props.focused && !prevProps.focused) {
            //  FIXME: Тут нужно кому-то другому делать focus().
            //  Скажем, this.refs.control.focus().
            this.getNode.focus();
        }
    }

    getProps() {
        return Object.assign(
            super.getProps(),
            {
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
            }
        );
    }

    onFocus() {
    }

    onBlur() {
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

