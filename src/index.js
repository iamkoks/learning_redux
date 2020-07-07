import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { compose, createStore } from 'redux';
import { reducer } from './store/reducers/reducer';
import { Provider } from 'react-redux'

const store = createStore(reducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
