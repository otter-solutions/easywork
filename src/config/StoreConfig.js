/**
 * @author: Otter Solutions <contato@otter.solutions>
 * @copyright Otter Solutions
 * @description: Ao utilizar a configuração, adicionar os créditos referente a Otter Solutions, muito obrigado!
 */
import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'

import {
    persistStore,
    persistCombineReducers
} from 'redux-persist'

// import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage'

import UserEntity from "../entities/UserEntity"

import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage
};

const reducers = persistCombineReducers(persistConfig, {
    UserEntity
});

export const configureStore = () => {
    const store = createStore(
        reducers,
        compose(
            applyMiddleware(thunk)
        )
    );

    const persistor = persistStore(store);

    window.store = store;
    window.persistor = persistor;

    return { persistor, store };
};

// const store = createStore(
//     persistReducer(persistConfig, reducer),
//     applyMiddleware(thunk)
// );

// window.store = configureStore;

export default configureStore;
