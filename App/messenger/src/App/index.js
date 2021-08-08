import { Provider } from "react-redux";
import { store } from '../store'
import './index.css';
import { useState } from 'react';
import Router from '../Router'

function App() {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
