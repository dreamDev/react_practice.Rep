import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const App = ({ state, dispatch }) => {
  return (
    <div className="container">
      <Header />
      <section className="main">
        <div className="main__holder">
          <Navbar />
          <div className="main__content">
            {/* Route это независимый компонент, который следит за адресной строкой браузера и как только, конкретный компонент Route увидит, что его path совпадает с адресной строкой браузера, он автоматически запускает render/component и отрисовывает на месте своего нахождения разметку. Как только Route увидит, что путь изменяется или вообще изчезает, то он делает ререндер, либо просто уничтожает то, что было им отрендерено и дальше ждет, слушает, когда опять в браузерной строке появится его адрес. */}
            <Route path='/messages'
              render={() => <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />} />
            <Route path='/profile'
              render={() => <Profile state={state} dispatch={dispatch} />} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
