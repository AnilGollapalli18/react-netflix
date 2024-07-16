import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import 'boxicons/dist/boxicons'
import Store from './Components/LandingPage2/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {Store}>
    <App />
  </Provider>
);

