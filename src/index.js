import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import StoreThunk from './config/StoreConfig';

import * as serviceWorker from './serviceWorker';

import './styles/app.scss';

import App from './App';

import './bootstrap';

const { persistor, store } = StoreThunk();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={() => { return (<h1>Carregando</h1>) }} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// -> Caso o aplicativo necessita estar offline, alterar para register()
serviceWorker.unregister();
