import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Intro from "./components/Intro";
import Menu from './components/Menu';
import Cart from './components/Cart';
import Error from './components/Error';
// import Footer from './components/Footer';


//https://www.youtube.com/watch?v=LXJOvkVYQqA 1:22
//https://www.youtube.com/watch?v=-edmQKcOW8s 0:59
class App extends Component{
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/intro" component={Intro}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/cart" component={Cart}/>
          <Route component={Error}/>
        </Switch>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}
 
export default App;
