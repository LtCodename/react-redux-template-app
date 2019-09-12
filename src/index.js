import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import reducers from './redux/reducers';
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const store = createStore(
  reducers.reducer,
  applyMiddleware(thunk)
);

const stateToProps = (state = {}) => {
  return {
    teams: state.teams,
    drivers: state.drivers
  }
};

const AppConnected = connect(stateToProps, null)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppConnected/>
  </Provider>,
   document.getElementById('root'));
   
serviceWorker.unregister();
