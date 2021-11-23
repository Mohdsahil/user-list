import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import Routes from './Routes';
import store from "./Redux/store"


ReactDOM.render(
<Provider store={store}>
  <Routes />
</Provider>,
  document.getElementById('root')
);
