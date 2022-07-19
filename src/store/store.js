import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { MemoryRouter } from 'react-router';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import thunk from 'redux-thunk';
// eslint-disable-next-line no-unused-vars
import window from 'global/window';

import keplerReducer from '../reducers';

const reducers = combineReducers({
    demo: keplerReducer,
    routing: routerReducer
});

export const middlewares = enhanceReduxMiddleware([thunk, routerMiddleware(MemoryRouter)]);

export const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// eslint-disable-next-line prefer-const
let composeEnhancers = compose;

/**
 * comment out code below to enable Redux Devtools
 */

if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [
            '@@kepler.gl/MOUSE_MOVE',
            '@@kepler.gl/UPDATE_MAP',
            '@@kepler.gl/LAYER_HOVER'
        ]
    });
}

export default createStore(reducers, initialState, composeEnhancers(...enhancers));
