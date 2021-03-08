import { all } from "@redux-saga/core/effects"
import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga';
import searchReducer from '../search/state';
import searchSaga from '../search/state/saga';
import userReducer from '../user/state';
import userSaga from '../user/state/saga';

// state prefix
const reducer = combineReducers({
    search: searchReducer,
    user: userReducer
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
    yield all([searchSaga(), userSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;