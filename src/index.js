import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import store from './redux/state';


const renderEntireTree = state => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Вызываем функцию для первой отрисовки при загрузке страницы.
renderEntireTree(store.getState())

// Вызываем импортированный из state subscribe и передаем ей callback, что бы мы могли делать ререндер из state.js
store.subscribe(renderEntireTree)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();