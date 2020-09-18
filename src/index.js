import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
