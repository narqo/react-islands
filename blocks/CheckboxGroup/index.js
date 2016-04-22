import React from 'react';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);

        var value = (props.value != null) ? [].concat(props.value) : [];
        this.state = { value };

        this.onCheck = this.onCheck.bind(this);
    }

    componentWillReceiveProps(props) {
        var value = (props.value != null) ? [].concat(props.value) : [];

        this.setState({
            ...this.state,
            value
        });
    }

    render() {
        var onCheck = this.onCheck;
        var value = this.state.value;
        var children = React.Children.map(this.props.children, child => {
            var checked = value.indexOf(child.props.value) !== -1;
            return React.cloneElement(child, { checked, onCheck });
        });

        return (
            <span className={this.className()}>
                {children}
            </span>
        );
    }

    className() {
        var className = 'checkbox-group control-group';

        if (this.props.theme) {
            className += ' checkbox-group_theme_' + this.props.theme;
        }
        if (this.props.size) {
            className += ' checkbox-group_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' checkbox-group_type_' + this.props.type;
        }

        if (this.props.className) {
            className += ' ' + this.props.className;
        }

        return className;
    }

    onCheck(value, checked) {
        if (checked && this.state.value.indexOf(value) === -1) {
            checked = this.state.value.concat(value);
            this.setState({ value: checked });
            this.props.onChange(checked);

        } else if (!checked) {
            checked = this.state.value.filter(item => (item !== value));
            this.setState({ value: checked });
            this.props.onChange(checked);
        }
    }

    getChildContext() {
        return {
            theme: this.props.theme,
            size: this.props.size,
            type: this.props.type,
            name: this.props.name,
            value: this.state.value
        };
    }
}

CheckboxGroup.defaultProps = {
    onChange() {}
};

CheckboxGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
};

CheckboxGroup.childContextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any
};

export default CheckboxGroup;

