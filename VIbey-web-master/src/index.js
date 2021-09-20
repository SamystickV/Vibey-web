import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path='/invite' component={() => { 
    var link = document.createElement('a');
    link.href = 'https://dsc.gg/maru';
    document.body.appendChild(link);
  
    link.click();
    return null;
  }} />
  <Route path='/docs' component={() => { 
    var link = document.createElement('a');
    link.href = 'https://docs.marubot.xyz';
    document.body.appendChild(link);
  
    link.click();
    return null;
  }} />
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
