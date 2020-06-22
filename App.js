import React,{Component } from "react";
import "./App.css";
import {BrowserRouter as Router,Route ,Navlink,Switch,Link} from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Train from './Train';
import Booking from './Booking';
import PNR from './PNR';
//import Contact from './Contact';


import Login from'./Login';
import Register from'./Register';
import Sign from './Sign';

function App() {
  return(
    <Router>
      <Nav></Nav>
      <div>
        <Route path="/Home" component={Home}/>
        <Route path="/Train" component={Train}/>
        <Route path="/Booking" component={Booking}/>
        <Route path="/PNR" component={PNR}/>
        {/*<Route path="/Contact" component={Contact}/>*/}
        
        <Route path="/Sign Up" component={Sign}/>
        <Route path="/Register" component={Register}/>
        <Route path="/Login" component={Login}/>
        </div>

      </Router>
  );
}
export default App;
