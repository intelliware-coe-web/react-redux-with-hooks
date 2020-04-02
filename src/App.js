import React from 'react';
import { WorldInfo } from './container/world-info/world-info';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <WorldInfo />
    </Provider>
  );
}

export default App;
