import React from 'react';
import ReactDOM from 'react-dom';

//Store and Reducers
import { Provider } from 'react-redux';
import  configureStore  from './helper/store';

import App from './App';

const store = configureStore({});
console.log('tttttttttttttttttttttttttttttttttttttttttttttttttttttttt')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));
