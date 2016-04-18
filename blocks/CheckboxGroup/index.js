import React from 'react';
import bem from 'b_';

const b = bem.with('checkbox-group');

class CheckboxGroup extends React.Component {
    constructor( props ) {
        super( props );

        var value = [];
        if ( this.props.value ) {
            value = value.concat( this.props.value );
        }
        this.state = { value };

        this.onCheck = this.onCheck.bind( this );
    }

    render() {
        var { theme, size, type } = this.props;

        var className = b({ theme, size, type }) + ' control-group';

        var onCheck = this.onCheck;
        var value = this.state.value;
        var children = React.Children.map( this.props.children, function( child ) {
            var checked = value.indexOf( child.props.value ) !== -1;
            return React.cloneElement( child, { checked, onCheck } );
        } );

        return (
            <span className={ className }>
                { children }
            </span>
        );
    }

    onCheck( value, checked ) {
        if ( checked && this.state.value.indexOf( value ) === -1 ) {
            var checked = this.state.value.concat( value );
            this.setState( { value: checked } );
            this.props.onChange( checked );

        } else if ( !checked ) {
            var checked = this.state.value.filter( function( item ) {
                return item !== value;
            } );
            this.setState( { value: checked } );
            this.props.onChange( checked );
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
    onChange: function() {}
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

module.exports = CheckboxGroup;

