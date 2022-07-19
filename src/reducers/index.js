import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';
import reduxThunk from 'redux-thunk';

const initialState = {};
const reducers = combineReducers({
    // <-- mount kepler.gl reducer in your app
    keplerGl: keplerGlReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// using createStore
export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(
        reduxThunk
    ))
);