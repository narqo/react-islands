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
        //  FIXME: А нужно ли вообще перевыставлять value в стейт?
        //  Ведь то, что в RadioGroup задается — это начальное значение,
        //  дальше оно меняется в собственном стейте.
        if (props.value !== this.props.value) {
            this.setState({
                ...this.state,
                value: props.value
            });
        }
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

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' radio-group_theme_' + theme;
        }
        if (this.props.size) {
            className += ' radio-group_size_' + this.props.size;
        }
        if (this.props.type) {
            className += ' radio-group_type_' + this.props.type;
        }

        return className;
    }

    onRadioCheck(checked, radioProps) {
        const value = radioProps.value;
        if (value !== this.state.value) {
            this.setState({ value });
            this.props.onChange(value, this.props);
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

RadioGroup.contextTypes = {
    theme: React.PropTypes.string
};

module.exports = RadioGroup;
