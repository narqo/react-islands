import React from 'react';
import bem from 'b_';
import BemComponent, { BemControl } from '../BemComponent';

const b = bem.with('checkbox-group');

class CheckboxGroup extends BemComponent {
    constructor( props ) {
        super( props );

        if ( this.props.value ) {
            var value = [].concat( this.props.value );
            Object.assign( this.state, { value } );
        }

        this.onCheck = this.onCheck.bind( this );
    }

    render() {
        var theme = this.props.theme;
        var size = this.props.size;
        var type = this.props.type;

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

