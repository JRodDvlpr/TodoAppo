import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

// UI Library Antd
import 'antd/dist/antd.css';

// Redux // 
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store.js';
import { PersistGate } from 'redux-persist/lib/integration/react';

import LoadingView from './utils/LoadingView.js';

const rootElement = document.getElementById('root');

ReactDOM.render(
    //setting up redux store & provider
    <Provider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
            <Router>
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    rootElement
);

