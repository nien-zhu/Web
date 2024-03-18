// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap-grid.css';
import "./App.css";
import "./utilities.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './page/home/home';
import News from './page/news/news';
import More from './page/more/more';
import Schedule from './page/schedule/schedule';

import NavbarBg from './component/navbarBackground/navbarBg';
import MyHeader from './component/navbar/myHeader';
import MyFooter from './component/myFooter/myFooter';

  function App() {
      fetch('/admin')
      .then(res => res.text())
      .then(text => console.log(text))

  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader/>
          <Switch>
            <Route path="/" exact>
              <Home />
              <News />
              <MyFooter/>
            </Route>
            <Route path="/最新消息">
              <NavbarBg />
              <News />
            </Route>
            <Route path="/賽程">
              <Schedule />
            </Route>
            <Route path="/更多">
              <More />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
