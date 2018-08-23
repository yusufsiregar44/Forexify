import ReactDOM from 'react-dom';
import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

import { Provider } from 'react-redux'
import { configureStore } from './store'

import './index.css';

const store = configureStore()

ReactDOM.render((
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
