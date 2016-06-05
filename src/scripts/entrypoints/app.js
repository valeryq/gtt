import React from  'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from '../redux/store';
import render from '../utils/render';
import LoginPage from '../components/pages/LoginPage';
import WelcomePage from '../components/pages/WelcomePage';

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginPage} />
      <Route path="/welcome" component={WelcomePage} />
    </Router>
  </Provider>
);
