import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from './App';
import store from './redux/redux-store';

// После того, как мы подключили react-redux нам не нужно самостоятельно в redux подписываться на ререндер нашего приложения при изменении стейта, за нас теперь это будет делать react-redux в методе connect, при чем ререндерить он будет не все приложение, а конкретные компоненты, в которых увидит изменение стейта. То есть сам connect будет использовать subscribe, но только для того компонента, в котором он определен.
// const renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* Оборачиваем наше app компонентом BrowserRouter, что бы использовать роутинг внутри app */}
      <BrowserRouter>
        {/* Оборачиваем наше app компонентом Provider из react-redux, что бы прокинуть store в app */}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
// };

// Вызываем функцию для первой отрисовки при загрузке страницы.
// renderEntireTree()

// Подписываемся на ререндер при изменении стейта
// store.subscribe(() => renderEntireTree())

window.store = store

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();