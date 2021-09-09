import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { MoviesHomePage } from './movies-home';
import { Movie } from './movie';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MoviesHomePage />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

