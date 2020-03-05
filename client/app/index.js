
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import MyRouter from './config/routes';
import {store} from './context';

import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import './../node_modules/font-awesome/css/font-awesome.css'

ReactDOM.render(
    <Provider store={store}>
        <MyRouter />
    </Provider>,
    document.getElementById('root')
);