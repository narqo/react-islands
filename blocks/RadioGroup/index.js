import React from 'react';
import bem from 'b_';
import BemComponent, { BemControl } from '../BemComponent';

const b = bem.with('radio-group');

class RadioGroup extends BemComponent {
    constructor( props ) {
        super( props );

        Object.assign( this.state, {
            value: this.props.value
        } );

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
            return React.cloneElement( child, {
                checked: child.props.value === value,
                onCheck: onCheck
            } );
        } );

        return (
            <span className={ className }>
                { children }
            </span>
        );
    }

    onCheck( value ) {
        if ( value !== this.state.value ) {
            this.setState( { value } );
            this.props.onChange( value );
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

RadioGroup.defaultProps = {
    onChange: function() {}
};

RadioGroup.propTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any,
    onChange: React.PropTypes.func
};

RadioGroup.childContextTypes = {
    theme: React.PropTypes.string,
    size: React.PropTypes.string,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.any
};

module.exports = RadioGroup;

