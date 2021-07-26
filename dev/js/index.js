import "@babel/polyfill";
// import "@babel/plugin-proposal-class-properties";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components';
import AboutMovies from './components/aboutMovie';
import SearchPage from './components/moveSearchPage';
import FeaturedPage from "./components/FeaturedPage";

import store from './store';
import createBrowserHistory from "history/createBrowserHistory";
const appHistory = createBrowserHistory();
// import test from './components/test';
require('../styles/bootstrap.min.css');
require('../styles/index.css');

ReactDOM.render(
  <BrowserRouter>
      <Router history={appHistory}>
        <Switch>
          <Provider store={store}>
               <Route exact path={'/'} component={App} />
               <Route path={'/about'} component={AboutMovies} />
               <Route path={'/search'} component={SearchPage} />
               <Route path={'/featured'} component={FeaturedPage} />
          </Provider>
        </Switch>
      </Router>
   </BrowserRouter>,
 document.getElementById('root')
);
