import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
//import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import createRootReducer from 'reducers';
import Layout from 'containers/layout';
//import Phones from 'containers/phones';

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(createRootReducer(history), composeWithDevTools(
	applyMiddleware(...middlewares)
));


ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Layout />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);