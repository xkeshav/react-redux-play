import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App';
import { configureFakeBackend } from './_helpers';

import registerServiceWorker from './service-worker';

import 'bootstrap/dist/css/bootstrap.css';

registerServiceWorker();

// setup fake backend
configureFakeBackend();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root')
);
