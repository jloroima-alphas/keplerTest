import App from './pages/App';
import store from "./store/store";
import React from 'react';
import document from 'global/document';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.body.appendChild(document.createElement('div')));
