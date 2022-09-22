import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';


import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers'

import './index.css'; 

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
);


serviceWorker.register();
