import React from 'react';

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.onRadioCheck = this.onRadioCheck.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...this.state,
            value: props.value
        });
    }

    render() {
        const onRadioCheck = this.onRadioCheck;
        const { value } = this.state;
        const { theme, size, type, name, disabled } = this.props;

        const children = React.Children.map(this.props.children, child => {
            const checked = child.props.value === value;
            return React.cloneElement(child, {
                theme,
                size,
                type,
                name,
                value,
                disabled,
                ...child.props,
                checked,
                onCheck: onRadioCheck,
            });
        });

        return (
            <span className={this.className()}>
                {children}
            </span>
        );
    }

    className() {
        var className = 'radio-group control-group';

        if (this.props.theme) {
            className += ' radio-group_theme_' + this.props.theme;
        }
        if (this.props.size) {
            className += ' radio-group_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' radio-group_type_' + this.props.type;
        }

        return className;
    }

    onRadioCheck(checked, newValue) {
        if (newValue !== this.state.value) {
            this.setState({ value: newValue });
            this.props.onChange(newValue);
        }
    }
}

RadioGroup.defaultProps = {
    onChange() {}
};

RadioGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
};

module.exports = RadioGroup;
