import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// UI Library Antd
import 'antd/dist/antd.css';

// Redux // 
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Redux/Reducers/reducer.js'

// Middleware
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
    //setting up redux store & provider
    <Provider store={store}>
            <Router>
                <App />
            </Router>
    </Provider>,
    rootElement
);

