import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import axios from 'axios';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token') || '';
axios.defaults.headers.common['lang'] = sessionStorage.getItem('lang_code') || "es";


ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);