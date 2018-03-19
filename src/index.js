import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './module/App';

import './style.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    target
);