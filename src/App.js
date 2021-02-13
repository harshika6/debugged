import React,{Component} from 'react';
import 'tachyons';
import Nav1 from './home-container/Nav.js';
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './home-container/home.js';
import Work from './work-container/work.js';
import Contact from './contact-container/contact.js';

class App extends Component {
  constructor() {
    super();
}
  render(){
    return (
      <div className="app-container">
      <Router basename="/">
        <Nav1/>
        <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/work' component={Work}/>
           <Route exact path='/contact' component={Contact}/>
        </Switch>
        </Router>
     </div>
    );
  }
}

export default App;
