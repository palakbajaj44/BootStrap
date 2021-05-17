import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Services from './Services';
import Contactus from './Contactus';

import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Registration from './Registration';


const routing = (
<Router>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/App" component={App} />
    <Route path="/Login" component={Login} />
    <Route path="/Registration" component={Registration} />
  </div>
</Router>
)
ReactDOM.render(routing,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
