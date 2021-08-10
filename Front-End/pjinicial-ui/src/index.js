import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { usuarioAutenticado, parseJwt } from './services/auth'

import './index.css';

import App from './pages/home/App';
import Salas from './pages/salas/Sala';
import NotFound from './pages/notFound/notFound';

import reportWebVitals from './reportWebVitals';

const PermissaoLogado = ({ component : Component }) => (
  <Route 
    render = { props =>
      usuarioAutenticado() && parseJwt() ?
      <Component {...props} /> :
      <Redirect to="/login" />
    }
  />
)

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <PermissaoLogado path="/salas" component={Salas} />
        
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
