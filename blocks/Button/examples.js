var React = require('react');
var ReactDOM = require('react-dom');

var Button = require('./index.js');

class Example extends React.Component {
    render() {
        return (
            <Button theme="islands" size="l">Hello World</Button>
        );
    }
}

ReactDOM.render(React.createElement(Example), document.getElementById('root'));
