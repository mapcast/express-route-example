import React from 'react';
import Counter from './features/counter/Counter';
import { Provider } from 'react-redux';
import { store } from './app/store';

function CounterApp() {
    return (
        <Provider store={store}>
            <Counter/>
        </Provider>
    );
}

export default CounterApp;
