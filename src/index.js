import React from 'react';
import ReactDOM from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistedStore } from 'redux/store';

import { App } from 'components/App';

import 'react-datetime/css/react-datetime.css';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
