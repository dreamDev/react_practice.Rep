import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <section className="main">
          <div className="main__holder">
            <Navbar />
            <div className="main__content">
              <Route path='/messages' component={Dialogs} />
              <Route path='/profile' component={Profile} />
            </div>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
