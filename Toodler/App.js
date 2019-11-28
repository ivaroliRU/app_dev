 
import React from 'react';
import AppContainer from './src/routes';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from  './src/reducers';
import { getCurrentBoards } from './src/actions/boardActions';

const ConnectedApp = connect(null, { getCurrentBoards })(AppContainer);

export default function App() {
    return (
        <Provider store={ createStore(reducers) }>
            <ConnectedApp />
        </Provider>
    );
}