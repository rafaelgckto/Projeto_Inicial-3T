import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import Equip from './pages/equip/Equip';

import reportWebVitals from './reportWebVitals';
import Equipamentos from './pages/equip/Equip';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/equip" component={Equipamentos}/>
      </Switch>
    </div>
  </Router>
  
)

ReactDOM.render(routing,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
