import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ResetStyle from './style/styledReset';
import rootReducer from './module/index';

const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <ResetStyle />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
