import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import configure from './store/configure'
import { Provider } from 'react-redux'
import App from './App'

const store = configure();
const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

export default Root;