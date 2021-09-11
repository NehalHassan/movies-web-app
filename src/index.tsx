import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MoviesHomePage } from './movies-home';
import { Movie } from './movie';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MoviesHomePage />
                </Route>

                <Route path="/movies/:listType">
                    <MoviesHomePage />
                </Route>

                <Route exact path="/movie/:id">
                    <Movie />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
