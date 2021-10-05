import React from 'react';
import ReactDOM from 'react-dom';

const h1Elt = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(h1Elt, document.getElementById('root'));
