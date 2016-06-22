import React from 'react';

import Component from '../Component';

class CheckboxGroup extends Component {
    constructor(props) {
        super(props);

        this.onChildCheck = this.onChildCheck.bind(this);
    }

    render() {
        const { theme, size, type, name, disabled, value } = this.props;

        const children = React.Children.map(this.props.children, child => {
            const checked = value.indexOf(child.props.value) !== -1;
            return React.cloneElement(child, {
                theme,
                size,
                type,
                name,
                disabled,
                ...child.props,
                checked,
                onCheck: this.onChildCheck,
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
        const { value } = this.props;
        const childValue = childProps.value;
        if (checked && value.indexOf(childValue) === -1) {
            //  FIXME: Не нужно ли тут возвращать массив в том же порядке,
            //  как эти значение в RadioGroup расположены?
            //
            const newValue = value.concat(childValue);
            this.props.onChange(newValue, this.props);
        } else if (!checked) {
            const newValue = value.filter(item => (item !== childValue));
            this.props.onChange(newValue, this.props);
        }
    }
}

CheckboxGroup.contextTypes = {
    theme: React.PropTypes.string,
};

CheckboxGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.oneOf(['m', 'l', 'xl']),
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func,
};

CheckboxGroup.defaultProps = {
    value: [],
    onChange() {},
};

export default CheckboxGroup;
