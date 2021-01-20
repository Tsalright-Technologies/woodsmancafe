import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';


import './styles.scss';

import Home from './components/home/homepage.js'
import About from './components/about/about.js';
import LovinScoopful from './components/lovin-scoopful/scoopful.js';
import Menu from './components/menu/menu.js';

class App extends React.Component {

  render() {

    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/lovinscoopful' component={LovinScoopful}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/menu' component={Menu} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
