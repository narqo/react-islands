# react-islands

[![NPM version](https://img.shields.io/npm/v/react-islands.svg?style=flat)](https://npmjs.org/package/react-islands)
[![Build Status](https://travis-ci.org/narqo/react-islands.svg)](https://travis-ci.org/narqo/react-islands)
[![Dependency Status](https://david-dm.org/narqo/react-islands.svg)](https://david-dm.org/narqo/react-islands)
[![devDependency Status](https://david-dm.org/narqo/react-islands/dev-status.svg)](https://david-dm.org/narqo/react-islands#info=devDependencies)

## Usage

react-islands can be installed as an [npm package](https://www.npmjs.com/package/react-islands):

~~~
› npm install --save react-islands
~~~

Require and use components:

~~~js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-islands/components/Button';

ReactDOM.render(
    React.createElement(Button, { theme: 'islands', size: 'm' }, 'Click me!'),
    document.getElementById('root'));
~~~

## Development

~~~
› npm install
~~~

### Examples

~~~
› npm start
~~~

Open `http://localhost:3000/build/`.

### Tests

~~~
› npm test
~~~

or

~~~
› mocha --watch --compilers js:babel-register -r jsdom-global/register blocks/**/test.js
~~~

## License

MIT
