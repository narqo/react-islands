import React from 'react';

import Component from '../Component';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);

        const value = props.value != null ? [...props.value] : [];
        this.state = { value };

        this.onChildCheck = this.onChildCheck.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({ value: nextProps.value != null ? [...nextProps.value] : []});
        }
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

        const theme = this.props.theme || this.context.theme;
        if (theme) {
            className += ' checkbox-group_theme_' + theme;
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

    onChildCheck(checked, childProps) {
        const value = childProps.value;
        if (checked && this.state.value.indexOf(value) === -1) {
            //  FIXME: Не нужно ли тут возвращать массив в том же порядке,
            //  как эти значение в RadioGroup расположены?
            //
            let newValue = this.state.value.concat(value);
            this.setState({ value: newValue });
            this.props.onChange(newValue, this.props);
        } else if (!checked) {
            let newValue = this.state.value.filter(item => (item !== value));
            this.setState({ value: newValue });
            this.props.onChange(newValue, this.props);
        }
    }
}

CheckboxGroup.contextTypes = {
    theme: React.PropTypes.string
};

CheckboxGroup.defaultProps = {
    onChange() {}
};

CheckboxGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['m', 'l']),
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
};

export default CheckboxGroup;
