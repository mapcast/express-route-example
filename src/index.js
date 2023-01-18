import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import { hydrateRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Counter from './features/counter/Counter';

import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

const container = document.getElementById('root');
const root = hydrateRoot(container, <App />);
/*
ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<App/>}/>
          <Route exact path ="/counter" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
*/

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<App/>}/>
          <Route exact path ="/counter" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
