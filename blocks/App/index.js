import React from 'react';

import Component from '../Component';

class App extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

    getChildContext() {
        return {
            theme: this.props.theme,
        };
    }

}

App.propTypes = {
    theme: React.PropTypes.string,
};

App.childContextTypes = {
    theme: React.PropTypes.string,
};

export default App;
