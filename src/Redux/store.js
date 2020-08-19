import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLvl2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// REDUCERS //
import userReducer from './Reducers/reducer.js'

const middleware = [thunk];

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLvl2,
    blackList: ['User']
};

const userPersistConfig = {
    key: 'root',
    storage: storage,
    StateReconciler: autoMergeLvl2,
    blackList: ['error']
}

const initialState = {};

const rootReducer = combineReducers({
    User: persistReducer(userPersistConfig, userReducer)
});

const pReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(pReducer, initialState, enhancer);

export const persistor = persistStore(store);