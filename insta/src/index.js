import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(rootReducer, devTools);

import { Provider } from 'mobx-react'; 
import CounterStore from './stores/counter';
const counter = new CounterStore();

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
