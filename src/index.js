import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CadastroVideo from './pages/cadastro/Video/CadastroVideo';
import Error404 from './pages/error/Error404';
import Home from './pages/home/Home';
import CadastroCategoria from './pages/cadastro/Categoria/CadastroCategoria';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} exact />
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact />
      <Route component={Error404} exact />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
