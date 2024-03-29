import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


import './styles.scss';

import Home from './components/home/homepage.js'
import About from './components/about/about.js';
import BreakfastMenu from './components/menu/breakfast/breakfast-menu.js';
import KidsMenu from "./components/menu/kids/kids-menu.js";
import Main from "./components/menu/main/main-menu.js";
import DinnerMenu from "./components/menu/dinner/dinner-menu.js";

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <div className="container">
          <Switch >
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/breakfast-menu' component={BreakfastMenu} />
            <Route exact path='/kids-menu' component={KidsMenu} />
            <Route exact path='/main-menu' component={Main}/>
            <Route exact path='/dinner-menu' component={DinnerMenu}/>
          </Switch>  
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
