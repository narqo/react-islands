import React from 'react';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);

        const value = props.value != null ? [...props.value] : [];
        this.state = { value };

        this.onChildCheck = this.onChildCheck.bind(this);
    }

    componentWillReceiveProps({ value }) {
        this.setState({ value: value != null ? [...value] : [] });
    }

    render() {
        const onChildCheck = this.onChildCheck;
        const { value } = this.state;
        const { theme, size, type, name, disabled } = this.props;

        const children = React.Children.map(this.props.children, child => {
            const checked = value.indexOf(child.props.value) !== -1;
            return React.cloneElement(child, {
                theme,
                size,
                type,
                name,
                value,
                disabled,
                ...child.props,
                checked,
                onCheck: onChildCheck
            });
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

    onChildCheck(checked, value) {
        let newValue;
        if (checked && this.state.value.indexOf(value) === -1) {
            newValue = this.state.value.concat(value);
            this.setState({ value: newValue });
            this.props.onChange(newValue);
        } else if (!checked) {
            newValue = this.state.value.filter(item => (item !== value));
            this.setState({ value: newValue });
            this.props.onChange(newValue);
        }
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

export default CheckboxGroup;
