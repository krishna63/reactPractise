import React from 'react';
import {render} from 'react-dom';
import store from './src/redux/store.js';
import App from './src/Components/App';
 
 console.log(store);

render(<App />, document.getElementById('container'));
