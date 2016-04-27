import React from 'react';

class App extends React.Component {

    render() {
        return this.props.children;
    }

    getChildContext() {
        return {
            theme: this.props.theme
        };
    }

}

App.propTypes = {
    theme: React.PropTypes.string
};

App.childContextTypes = {
    theme: React.PropTypes.string
};

export default App;
