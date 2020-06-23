import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Intro from "./components/Intro";
import Menu from './components/Menu';
import Description from './components/Description';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/intro" component={Intro}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/description" component={Description}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Default}/>
        </Switch>
      </React.Fragment>
    );
  }
}
 
export default App;
