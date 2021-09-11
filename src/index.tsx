import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { MoviesHomePage } from './movies-home';
import { Movie } from './movie';
import { Header } from './components/header';

import './index.css';

const App = styled.div({
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    alignContent: 'center'
});

const AppContainer = styled.div({
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContainer>
                <Header />
                <App>
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
                </App>
            </AppContainer>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
