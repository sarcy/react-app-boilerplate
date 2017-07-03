import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// If the file extension is .jsx then we need to specify the file extension (e.g. ./components/component-a.jsx). 
// Otherwise we can use just the filename without an extension.
import ComponentA from './components/component-a';
import './sass/style.scss';

function App () {
  return (
    <div>
      Hello World!

      <ComponentA />
    </div>
  );
}

const targetDOM = document.querySelector('#app');

ReactDOM.render(
  <App />,
  targetDOM
);